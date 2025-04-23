import React, { useContext } from "react";
import { StepperContext } from "../../../contexts/StepperContext";
import { apiDocSignup } from "../../../services/auth";
import { useNavigate } from "react-router";

const Details = () => {
  const { userData, setUserData } = useContext(StepperContext);
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default submit behavior

    // Collect form data
    const formData = new FormData(event.target);

    // Adding other form data from context
    Object.keys(userData).forEach((key) => {
      formData.append(key, userData[key]);
    });

    // Post data to backend
    try {
      const response = await apiDocSignup(formData);
      const { user } = response.data;
      localStorage.setItem("user", JSON.stringify(user.role));
      navigate("/dashboard"); // Redirect to dashboard or wherever needed
    } catch (error) {
      console.log(error);
    }
  };

  // Handle input changes and update context
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (e.target.type === "file") {
      setUserData({ ...userData, [name]: files[0] }); // Save the File object
    } else {
      setUserData({ ...userData, [name]: value });
    }
  };

  return (
    <div className="flex flex-col">
      <form>
        <div className="w-full mx-2 flex-1">
          <label
            htmlFor="specialization"
            className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase"
          >
            Specialization
          </label>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input
              type="text"
              name="specialization"
              value={userData.specialization || ""}
              onChange={handleChange}
              placeholder="Enter your specialization"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
          </div>
        </div>

        <div className="w-full mx-2 flex-1">
          <label
            htmlFor="licenseNumber"
            className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase"
          >
            License Number
          </label>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input
              type="number"
              name="licenseNumber"
              value={userData.licenseNumber || ""}
              onChange={handleChange}
              placeholder="Enter your license number"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
          </div>
        </div>

        <div className="w-full mx-2 flex-1">
          <label
            htmlFor="qualifications"
            className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase"
          >
            Qualifications
          </label>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input
              type="text"
              name="qualifications"
              value={userData.qualifications || ""}
              onChange={handleChange}
              placeholder="Enter your qualifications"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
          </div>
        </div>

        <div className="w-full mx-2 flex-1">
          <label
            htmlFor="image"
            className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase"
          >
            Image
          </label>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input
              type="file"
              name="image"
              onChange={handleChange} // handleChange will work for file input as well
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
          </div>
        </div>

        <div className="w-full mx-2 flex-1">
          <label
            htmlFor="experience"
            className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase"
          >
            Experience
          </label>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input
              type="text"
              name="experience"
              value={userData.experience || ""}
              onChange={handleChange}
              placeholder="Enter your experience"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
          </div>
        </div>

        <div className="w-full mx-2 flex-1">
          <label
            htmlFor="consultationFee"
            className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase"
          >
            Consultation Fee
          </label>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input
              type="text"
              name="consultationFee"
              value={userData.consultationFee || ""}
              onChange={handleChange}
              placeholder="Enter your consultation fee"
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
          </div>
        </div>

        {/* <button
          type="submit"
          className="mt-4 p-2 bg-blue-500 text-white rounded"
        >
          Submit
        </button> */}
      </form>
    </div>
  );
};

export default Details;
