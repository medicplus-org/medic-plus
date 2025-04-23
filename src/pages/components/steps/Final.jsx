import React, { useContext } from "react";
import { StepperContext } from "../../../contexts/StepperContext";
import { apiDocSignup } from "../../../services/auth";
import { useNavigate } from "react-router";

const Final = () => {
  const { userData } = useContext(StepperContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    for (const key in userData) {
      // If it's a file (e.g., image), make sure it's the File object
      if (key === "image" && userData[key] instanceof File) {
        formData.append(key, userData[key]);
      } else {
        formData.append(key, userData[key]);
      }
    }

    try {
      const response = await apiDocSignup(formData);
      const { doctor } = response.data;
      localStorage.setItem("user", JSON.stringify(doctor.role));

      alert("Doctor signup successfull!");

      // Navigate user based on role
      navigate("/doclogin");
    } catch (error) {
      console.error("Signup error:", error);
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

export default Final;
