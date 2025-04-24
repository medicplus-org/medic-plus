import React, { useEffect, useState } from "react";
import { ChevronDown, User, Calendar, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { apiGetDocAppointment } from "../../services/doctors";

const UserDashboard = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [appointments, setAppointments] = useState([]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const fetchAppointments = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const patientId = user?.UserId || user?._id;

    console.log("Logged-in patient ID:", patientId);
    console.log("User from localStorage:", user);

    try {
      const response = await apiGetDocAppointment(); // no patientId passed
      console.log("Raw API response:", response.data);

      const userAppointments = response.data.filter((appt, index) => {
        if (!appt.patientId) {
          console.warn(`Appointment ${index} has no patientId`, appt);
          return false;
        }

        const apptPatientId = appt.patientId._id || appt.patientId;
        return apptPatientId === patientId;
      });

      console.log("Filtered user appointments:", userAppointments);
      setAppointments(userAppointments);
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold">
              Medic<span className="text-blue-400">Plus</span>
            </Link>
          </div>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center space-x-2 focus:outline-none"
            >
              <div className="h-8 w-8 rounded-full bg-gray-200 overflow-hidden">
                <img
                  src="/placeholder.svg?height=32&width=32"
                  alt="User avatar"
                  className="h-full w-full object-cover"
                />
              </div>
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 border border-gray-200">
                <a
                  href="#"
                  className=" px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                >
                  <User className="h-4 w-4 mr-2" />
                  My Profile
                </a>
                <a
                  href="#"
                  className=" px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  My Appointments
                </a>
                <a
                  href="#"
                  className=" px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </a>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Patient Dashboard</h1>
        <div className="border-b px-4 mb-4 mt-2 pb-4 border-stone-200">
          <div className="flex items-center justify-between p-0.5">
            <div>
              <Link
                to={"/dashboard/vendor-profile"}
                className="text-sm font-bold block"
              >
                Good morning, Patient!
                {/* {vendor.name}! */}
              </Link>
              <span className="text-xs block text-stone-500">
                Friday, April 25th 2025
              </span>
            </div>
            <button className="flex text-sm items-center gap-2 bg-stone-100 transition-colors hover:bg-violet-100 hover:text-violet-700 px-3 py-1.5 rounded">
              <Calendar />
              <span>Prev 6 Months</span>
            </button>
          </div>
        </div>
        <h2 className="text-xl font-medium mb-6 text-center">
          My Appointments
        </h2>

        {appointments.length === 0 ? (
          <p className="text-gray-500">No appointments found.</p>
        ) : (
          <div className="space-y-4">
            {appointments.map((appointment) => (
              <div
                key={appointment._id}
                className="border border-gray-200 rounded-lg p-4 flex justify-between items-center"
              >
                <div className="flex">
                  <div className="h-24 w-24 bg-gray-100 rounded-lg overflow-hidden mr-6">
                    <img
                      src="/placeholder.svg?height=96&width=96"
                      alt={appointment.doctorId?.name || "Doctor"}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">
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
                    <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors w-32">
                      Paid
                    </button>
                  )}
                  {appointment.status === "upcoming" && (
                    <button className="bg-yellow-500 text-white px-6 py-2 rounded-md hover:bg-yellow-600 transition-colors w-32">
                      Upcoming
                    </button>
                  )}
                  <button className="border border-gray-300 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors w-32">
                    Update appointment
                  </button>
                  <button className="border border-gray-300 text-gray-600 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors w-32">
                    Cancel appointment
                  </button>
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
