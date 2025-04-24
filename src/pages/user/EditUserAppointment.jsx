import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import {
  apiGetDocAppointment,
  apiUpdateUserAppointmentById,
} from "../../services/doctors";

const EditUserAppointment = () => {
  const { appointmentId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    notes: "",
  });

  // Fetch current appointment details
  useEffect(() => {
    const fetchAppointment = async () => {
      try {
        const res = await apiGetDocAppointment();
        const user = JSON.parse(localStorage.getItem("user"));
        const target = res.data.find(
          (item) =>
            item._id === appointmentId && item.patientId._id === user.UserId
        );
        if (target) {
          setFormData({
            date: target.date?.split("T")[0], // Ensure proper format
            time: target.time,
            notes: target.notes,
          });
        } else {
          alert("Appointment not found or unauthorized access");
          navigate("/userdashboard");
        }
      } catch (err) {
        console.error("Error fetching appointment", err);
      }
    };
    fetchAppointment();
  }, [appointmentId, navigate]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await apiUpdateUserAppointmentById(appointmentId, formData);
      alert("Appointment updated successfully!");
      navigate("/userdashboard");
    } catch (err) {
      console.error("Failed to update appointment:", err);
      alert("Failed to update appointment. Try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-xl font-semibold mb-4">Edit Appointment</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
          className="border p-2 rounded"
        />
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Notes (optional)"
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Update Appointment
        </button>
      </form>
    </div>
  );
};

export default EditUserAppointment;
