import React, { useState } from "react";
import { apiDocAppointment } from "../../services/doctors"; // Your POST request function
import { useNavigate, useParams } from "react-router";

const BookAppointmentForm = () => {
  const navigate = useNavigate();
  const { doctorId } = useParams(); // If you’re routing like /book/:doctorId

  const [formData, setFormData] = useState({
    date: "",
    time: "",
    notes: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));
    const patientId = user?.UserId;

    const appointment = {
      doctorId,
      patientId,
      date: formData.date,
      time: formData.time,
      status: "scheduled", // You could let the backend handle default status
      notes: formData.notes,
    };

    try {
      await apiDocAppointment(appointment);
      alert("Appointment booked successfully!");
      navigate("/userdashboard"); // Redirect if you want
    } catch (err) {
      console.error("Failed to book appointment:", err);
      alert("Failed to book appointment. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h2 className="text-xl font-semibold mb-4">Book an Appointment</h2>
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
          Book Appointment
        </button>
      </form>
    </div>
  );
};

export default BookAppointmentForm;
