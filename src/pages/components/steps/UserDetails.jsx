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
      <div>
        <label>Phone Number</label>
        <input
          type="text"
          name="phone"
          value={userData.phone || ""}
          onChange={handleChange}
          placeholder="Enter your phone number"
        />
      </div>

      <div>
        <label>Profile Image</label>
        <input
          type="file"
          name="image"
          onChange={handleImageChange} // Use this for file input
        />
      </div>
    </form>
  );
};

export default UserDetails;
