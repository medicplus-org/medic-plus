import React, { useEffect, useState } from "react";
import { ChevronDown, User, Calendar, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router";
import {
  apiGetDocAppointment,
  apiDeleteUserAppointmentbyId,
} from "../../services/doctors";
import toast from "react-hot-toast";

const UserDashboard = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [user, setUser] = useState(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const fetchAppointments = async () => {
    const patientId = user?.UserId || user?._id;

    try {
      const response = await apiGetDocAppointment();
      const userAppointments = response.data.filter((appt) => {
        const apptPatientId = appt.patientId?._id || appt.patientId;
        return apptPatientId === patientId;
      });

      setAppointments(userAppointments);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  const handleDeleteAppointment = async (id) => {
    if (!window.confirm("Are you sure you want to cancel this appointment?"))
      return;

    try {
      await apiDeleteUserAppointmentbyId(id);
      toast.success("Appointment canceled successfully");
      fetchAppointments();
    } catch (error) {
      console.error("Failed to cancel appointment:", error);
      toast.error("Failed to cancel appointment. Please try again.");
    }
  };

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  useEffect(() => {
    if (user) {
      fetchAppointments();
    }
  }, [user]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 shadow-sm bg-white">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-indigo-700">
            Medic<span className="text-blue-400">Plus</span>
          </Link>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center space-x-2 focus:outline-none"
            >
              <div className="h-8 w-8 rounded-full bg-gray-200 overflow-hidden">
                <img
                  src={
                    appointments[0]?.patientId?.image ||
                    "/placeholder.svg?height=32&width=32"
                  }
                  alt="User avatar"
                  className="h-full w-full object-cover"
                />
              </div>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
                <Link
                  to="/profile"
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                >
                  <User className="h-4 w-4 mr-2" />
                  My Profile
                </Link>
                <Link
                  to="/userdashboard"
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  My Appointments
                </Link>
                <Link
                  to="/logout"
                  className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-indigo-700">
          Patient Dashboard
        </h1>
        <div className="border-b px-4 mb-6 pb-4 border-stone-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg font-semibold">
                Good morning,{" "}
                {appointments[0]?.patientId?.firstname
                  ? `${appointments[0]?.patientId?.firstname} ${appointments[0]?.patientId?.lastname}`
                  : "Patient"}
                !
              </p>
              <span className="text-sm text-stone-500">
                Friday, April 25th 2025
              </span>
            </div>
            <button className="flex text-sm items-center gap-2 bg-indigo-100 text-indigo-700 transition-colors hover:bg-indigo-200 px-3 py-1.5 rounded">
              <Calendar />
              <span>Prev 6 Months</span>
            </button>
          </div>
        </div>

        <h2 className="text-xl font-medium mb-6 text-center text-gray-800">
          My Appointments
        </h2>

        {appointments.length === 0 ? (
          <p className="text-gray-500 text-center">No appointments found.</p>
        ) : (
          <div className="space-y-4">
            {appointments.map((appointment) => (
              <div
                key={appointment._id}
                className="border border-gray-200 rounded-xl p-4 flex justify-between items-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex">
                  <div className="h-24 w-24 bg-gray-100 rounded-lg overflow-hidden mr-6 border border-gray-300">
                    <img
                      src={
                        appointment.doctorId?.image ||
                        "/placeholder.svg?height=96&width=96"
                      }
                      alt={appointment.doctorId?.name || "Doctor"}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg text-indigo-700">
                      {appointment.doctorId?.name}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {appointment.doctorId?.specialization}
                    </p>
                    <div className="mt-2">
                      <p className="text-sm text-gray-700 font-medium">
                        Date & Time:
                      </p>
                      <p className="text-sm text-gray-600">
                        {appointment.date} | {appointment.time}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end space-y-2">
                  {appointment.status === "unpaid" && (
                    <button className="bg-indigo-500 text-white px-6 py-2 rounded-md hover:bg-indigo-600 transition-colors w-32">
                      Pay here
                    </button>
                  )}
                  {appointment.status === "paid" && (
                    <button className="bg-green-500 text-white px-6 py-2 rounded-md w-32 cursor-default">
                      Paid
                    </button>
                  )}
                  {appointment.status === "upcoming" && (
                    <button className="bg-yellow-500 text-white px-6 py-2 rounded-md w-32 cursor-default">
                      Upcoming
                    </button>
                  )}
                  <button
                    onClick={() => handleDeleteAppointment(appointment._id)}
                    className="border border-gray-300 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors w-32"
                  >
                    Cancel
                  </button>
                  <Link
                    to={`/edit-appointment/${appointment._id}`}
                    className="border border-gray-300 text-center text-gray-600 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors w-32"
                  >
                    Update
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default UserDashboard;
