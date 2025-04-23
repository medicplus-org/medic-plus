// UserAccount.jsx
import React, { useContext } from "react";
import { StepperContext } from "../../../contexts/StepperContext";

const UserAccount = () => {
  const { userData, setUserData } = useContext(StepperContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form>
      <div className="w-full mx-2 flex-1">
        <label className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          First Name
        </label>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            type="text"
            name="firstname"
            id="firstname"
            value={userData.firstname || ""}
            onChange={handleChange}
            placeholder="Enter your first name"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>

      <div className="w-full mx-2 flex-1">
        <label className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Last Name
        </label>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            type="text"
            name="lastname"
            id="lastname"
            value={userData.lastname || ""}
            onChange={handleChange}
            placeholder="Enter your last name"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>

      <div className="w-full mx-2 flex-1">
        <label className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Email
        </label>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            type="email"
            name="email"
            value={userData.email || ""}
            onChange={handleChange}
            placeholder="Enter your email"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>

      <div className="w-full mx-2 flex-1">
        <label className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Password
        </label>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            type="password"
            name="password"
            value={userData.password || ""}
            onChange={handleChange}
            placeholder="Enter your password"
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
        <small className="text-sm text-gray-500">
          Use at least 8 characters, 1 uppercase letter, and 1 number.
        </small>
      </div>

      <div className="w-full mx-2 flex-1">
        <label className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Gender
        </label>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <select
            name="gender"
            value={userData.gender || ""}
            onChange={handleChange}
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          >
            <option value="">Select your gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      <div className="w-full mx-2 flex-1">
        <label className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
          Role
        </label>
        <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
          <input
            type="text"
            name="role"
            id="role"
            placeholder="Enter your role"
            value={userData["role"] || ""}
            onChange={handleChange}
            className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
    </form>
  );
};

export default UserAccount;
