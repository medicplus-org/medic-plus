// UserFinal.jsx
import React, { useContext } from "react";
import { StepperContext } from "../../../contexts/StepperContext";
import { useNavigate } from "react-router";
import { apiUserSignup } from "../../../services/auth";

const UserFinal = () => {
  const { userData } = useContext(StepperContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert userData into FormData for file handling
    const formData = new FormData();
    for (const key in userData) {
      formData.append(key, userData[key]);
    }

    try {
      const response = await apiUserSignup(formData);
      const { User } = response.data;
      localStorage.setItem("user", JSON.stringify(User)); // Save user data in localStorage

      alert("User signup successfull!");

      navigate("/login"); // Redirect to the dashboard or appropriate page
    } catch (error) {
      console.error("Error signing up user", error);
    }
  };

  return (
    <div className="text-center">
      <h2 className="text-xl font-semibold mb-4">Review & Submit</h2>
      <pre className="bg-gray-100 p-4 rounded mb-4 text-left text-sm">
        {JSON.stringify(userData, null, 2)}
      </pre>
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </div>
  );
};

export default UserFinal;
