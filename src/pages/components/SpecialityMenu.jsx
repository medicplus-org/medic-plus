import React from "react";
import { Link } from "react-router"; // Ensure you're using the correct router import
import derma from "../../assets/images/Dermatologist.svg";

const SpecialityMenu = () => {
  return (
    <div className="flex flex-col items-center gap-4 py-16 text-gray-800">
      <h1 className="text-3xl font-medium">Find by Specialty</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of trusted doctors, schedule
        your appointment hassle-free.
      </p>
      <div className="flex sm:justify-center gap-6 pt-5 w-full overflow-hidden">
        {/* Card 1: Cardiology */}
        <Link
          className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500"
          to="/doctors/cardiology"
        >
          <img className="w-16 sm:w-24 mb-2" src={derma} alt="Cardiology" />
          <p>Cardiology</p>
        </Link>

        {/* Card 2: Dermatology */}
        <Link
          className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500"
          to="/doctors/dermatology"
        >
          <img className="w-16 sm:w-24 mb-2" src={derma} alt="Dermatology" />
          <p>Dermatology</p>
        </Link>

        {/* Card 3: Pediatrics */}
        <Link
          className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500"
          to="/doctors/pediatrics"
        >
          <img className="w-16 sm:w-24 mb-2" src={derma} alt="Pediatrics" />
          <p>Pediatrics</p>
        </Link>

        {/* Card 4: Orthopedics */}
        <Link
          className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500"
          to="/doctors/orthopedics"
        >
          <img className="w-16 sm:w-24 mb-2" src={derma} alt="Orthopedics" />
          <p>Orthopedics</p>
        </Link>

        {/* Card 5: Gynecology */}
        <Link
          className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500"
          to="/doctors/gynecology"
        >
          <img className="w-16 sm:w-24 mb-2" src={derma} alt="Gynecology" />
          <p>Gynecology</p>
        </Link>

        {/* Card 6: Neurology */}
        <Link
          className="flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500"
          to="/doctors/neurology"
        >
          <img className="w-16 sm:w-24 mb-2" src={derma} alt="Neurology" />
          <p>Neurology</p>
        </Link>
      </div>
    </div>
  );
};

export default SpecialityMenu;
