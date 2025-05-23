import React from "react";
import hero from "../../assets/images/herov1.mp4";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import { apiUserLogin } from "../../services/auth";
import loginthumb from "../../assets/images/loginthumb.png";
import { useState } from "react";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log("Form submitted");

    setLoading(true);

    const formData = new FormData(event.target);

    try {
      const response = await apiUserLogin(formData);
      const { User } = response.data;
      localStorage.setItem("token", response.data.accessTokenLogin); //fetch token from backend
      localStorage.setItem(
        "user",
        JSON.stringify({
          role: User.role,
          email: User.email,
          UserId: User._id || User.UserId,
        })
      );

      alert("User login successfull!");

      // nagigate user to their role
      if (User.role === "user") {
        navigate("/doctors");
      } else {
        navigate("/selectlogin");
      }
      // console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
        poster={loginthumb}
      >
        <source src={hero} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      <div className="relative flex flex-col items-center justify-center h-full text-white ">
        <div className="bg-black/50 backdrop-blur-md p-8 rounded-lg shadow-md w-full max-w-md items-center relative ">
          <Link
            to="/"
            className="text-[18px] font-semibold flex justify-center items-center text-center mb-3 "
          >
            Medic<span className="text-blue-500">Plus</span>
          </Link>
          <h1 className="text-2xl font-semibold text-center mb-6">
            Patient Log In
          </h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <p className="text-sm text-blue-500 hover:underline mt-2">
                <Link to="/forgotpassword">Forgot Password?</Link>
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition flex items-center justify-center gap-2"
              disabled={loading}
            >
              {loading && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 animate-spin text-white"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"
                    fill="currentColor"
                  />
                </svg>
              )}
              <span>{loading ? "Logging In..." : "Log In"}</span>
            </button>

            <p className="text-sm text-center text-white">
              No account yet?{" "}
              <Link
                to="/selectsignup"
                className="text-blue-500 hover:underline "
              >
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
