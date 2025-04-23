import React from "react";
import { UserRound, Stethoscope } from "lucide-react";
import { Link } from "react-router";

const SelectSignup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Welcome to{" "}
            <Link to="/">
              Medic<span className="text-blue-400">Plus</span>
            </Link>
          </h2>
          <p className="mt-2 text-gray-600">Choose how you want to Signup</p>
        </div>

        <div className="grid grid-cols-1 gap-6 mt-8">
          <Link
            to="/docsignup"
            className="flex items-center justify-center p-6 space-x-4 text-left border-2 border-indigo-100 rounded-xl hover:border-indigo-500 hover:bg-indigo-50 transition-all group"
            onClick={() => console.log("Doctor login selected")}
          >
            <div className="p-3 bg-indigo-100 rounded-full group-hover:bg-indigo-200 transition-colors">
              <Stethoscope className="w-8 h-8 text-indigo-600" />
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-900">
                Signup as a Doctor
              </h3>
              <p className="text-gray-600">
                Access your patient appointments and medical records
              </p>
            </div>
          </Link>

          <Link
            to="/usersignup"
            className="flex items-center justify-center p-6 space-x-4 text-left border-2 border-indigo-100 rounded-xl hover:border-indigo-500 hover:bg-indigo-50 transition-all group"
            onClick={() => console.log("Patient login selected")}
          >
            <div className="p-3 bg-indigo-100 rounded-full group-hover:bg-indigo-200 transition-colors">
              <UserRound className="w-8 h-8 text-indigo-600" />
            </div>
            <div>
              <h3 className="text-xl font-medium text-gray-900">
                Signup as a Patient
              </h3>
              <p className="text-gray-600">
                Book appointments and view your medical history
              </p>
            </div>
          </Link>
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>
            Don't have an account?{" "}
            <Link
              to="/selectlogin"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SelectSignup;
