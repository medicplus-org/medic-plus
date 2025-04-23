import React, { useContext } from "react";
import { StepperContext } from "../../../contexts/StepperContext";

const Account = () => {
  const { userData, setUserData } = useContext(StepperContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="flex flex-col">
      <form>
        <div className="w-full mx-2 flex-1">
          <label className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Username
          </label>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="username"
              value={userData["name"] || ""}
              onChange={handleChange}
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
              placeholder="Enter your email"
              value={userData["email"] || ""}
              onChange={handleChange}
              required
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
              placeholder="password"
              value={userData["password"] || ""}
              onChange={handleChange}
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
          </div>
        </div>

        <div className="w-full mx-2 flex-1">
          <label className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Phone
          </label>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input
              type="number"
              name="phone"
              id="phone"
              placeholder="Phone"
              value={userData["phone"] || ""}
              onChange={handleChange}
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
          </div>
        </div>

        <div className="w-full mx-2 flex-1">
          <label className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Gender
          </label>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <select
              name="gender"
              value={userData["gender"] || ""}
              onChange={handleChange}
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            >
              <option value="" disabled>
                Select your gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>

        <div className="w-full mx-2 flex-1">
          <label className="font-bold h-6 mt-3 text-gray-500 text-xs leading-8 uppercase">
            Age
          </label>
          <div className="bg-white my-2 p-1 flex border border-gray-200 rounded">
            <input
              type="number"
              name="age"
              id="age"
              placeholder="Enter your age"
              value={userData["age"] || ""}
              onChange={handleChange}
              className="p-1 px-2 appearance-none outline-none w-full text-gray-800"
            />
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
    </div>
  );
};

export default Account;
