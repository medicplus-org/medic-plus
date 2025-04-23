// UserDetails.jsx
import React, { useContext } from "react";
import { StepperContext } from "../../../contexts/StepperContext";

const UserDetails = () => {
  const { userData, setUserData } = useContext(StepperContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setUserData((prevData) => ({
      ...prevData,
      image: file,
    }));
  };

  return (
    <form>
      <div className="w-full mx-2 flex-1">
        <label className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Phone Number
        </label>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            type="text"
            name="phone"
            value={userData.phone || ""}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>

      <div className="w-full mx-2 flex-1">
        <label className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Profile Image
        </label>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            type="file"
            name="image"
            onChange={handleImageChange} // Use this for file input
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
    </form>
  );
};

export default UserDetails;
