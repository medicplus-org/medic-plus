import React, { useEffect, useState } from "react";
import {
  CalendarDays,
  User,
  LogOut,
  Stethoscope,
  Trash2,
  Edit2,
  Edit,
} from "lucide-react";
import { Link } from "react-router";
import { Calendar } from "lucide-react";
import { apiGetUserAppointment } from "../../services/doctors";
import { apiDeleteUserAppointmentbyId } from "../../services/doctors";

const DocDashboard = () => {
  const [appointments, setAppointments] = useState([]);

  const getAppointments = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const doctorId = user?._id;
    console.log("Doctor ID from localStorage:", doctorId); // should now log a real ID

    try {
      const res = await apiGetUserAppointment(); // using same endpoint as user
      console.log("API response:", res.data);

      const doctorAppointments = res.data.filter(
        (appt) => appt.doctorId?._id === doctorId
      );

      setAppointments(doctorAppointments);
    } catch (error) {
      console.error("Failed to fetch appointments:", error);
    }
  };

  useEffect(() => {
    getAppointments();
  }, []);

  const handleDelete = async (id) => {
    try {
      console.log("Deleting ID:", id); // ✅ Debug
      await apiDeleteUserAppointmentbyId(id);
      setAppointments((prev) => prev.filter((a) => a._id !== id));
      console.log("Deleted successfully");
    } catch (error) {
      console.error("Failed to delete:", error.response?.data || error.message);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6 space-y-6">
        <div className="flex items-center space-x-2">
          <Link to="/" className="text-2xl font-bold">
            Medic<span className="text-blue-400">Plus</span>
          </Link>
        </div>
        <nav className="space-y-4">
          <a
            href="#"
            className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600"
          >
            <User className="w-4 h-4" />
            <span>Users</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-2 text-gray-700 hover:text-indigo-600"
          >
            <CalendarDays className="w-4 h-4" />
            <span>Appointments</span>
          </a>
        </nav>
        <button className="flex items-center space-x-2 text-red-500 hover:text-red-600">
          <LogOut className="w-4 h-4" />
          <span>Logout</span>
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Appointments Overview
        </h2>
        <div className="border-b px-4 mb-4 mt-2 pb-4 border-stone-200">
          <div className="flex items-center justify-between p-0.5">
            <div>
              <Link
                to={"/dashboard/vendor-profile"}
                className="text-sm font-bold block"
              >
                Good morning, Doctor
                {/* {vendor.name}! */}
              </Link>
              <span className="text-xs block text-stone-500">
                Friday, April 25th 2025
              </span>
            </div>
            <button className="flex text-sm items-center gap-2 bg-stone-100 transition-colors hover:bg-violet-100 hover:text-violet-700 px-3 py-1.5 rounded">
              <Calendar />
              <span>Prev 1 Months</span>
            </button>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow overflow-x-auto">
          {appointments.length === 0 ? (
            <p className="text-gray-500">No appointments found.</p>
          ) : (
            <table className="w-full table-auto">
              <thead>
                <tr className="text-left text-sm text-gray-500">
                  <th className="pb-4">Patient</th>
                  <th className="pb-4">Date</th>
                  <th className="pb-4">Time</th>
                  <th className="pb-4">Status</th>
                  <th className="pb-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment) => (
                  <tr
                    key={appointment._id}
                    className="text-sm text-gray-700 border-t border-gray-200"
                  >
                    <td className="py-4">
                      {appointment.patientId
                        ? `${appointment.patientId.firstname} ${appointment.patientId.lastname}`
                        : "N/A"}
                    </td>
                    <td className="py-4">{appointment.date}</td>
                    <td className="py-4">{appointment.time}</td>
                    <td className="py-4 capitalize">
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                        {appointment.status}
                      </span>
                    </td>
                    <td className="py-4">
                      <button>
                        <Edit className="text-green-500 hover:text-green-700 w-5 h-5 " />
                      </button>
                    </td>
                    <td className="py-4">
                      <button
                        onClick={() => handleDelete(appointment._id)}
                        className=""
                      >
                        <Trash2 className="w-5 h-5 text-red-500 hover:text-red-700" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </main>
    </div>
  );
};

export default DocDashboard;
