import React from "react";
import doc1 from "../../assets/images/doc1.png";
import { apiGetAllDoctors } from "../../services/doctors";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const DoctorsList = () => {
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  const fetchDoctors = async () => {
    try {
      const response = await apiGetAllDoctors();
      setDoctors(response.data); // Adjust if the data is nested
    } catch (error) {
      console.error("Failed to fetch doctors:", error);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="h-[50vh] relative bg-[url('assets/images/docbg.png')] bg-no-repeat bg-center bg-cover -mt-16">
        <div className="absolute top-0 left-0 w-full bg-black opacity-65 h-full"></div>
        <div className="relative z-20 flex items-center justify-center h-full w-full px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white text-shadow-md">
            Qualified Doctors
          </h1>
        </div>
      </div>

      {/* Filters and Doctor Cards */}
      <section>
        <div className="p-4 flex flex-col sm:flex-row items-start gap-5 mt-5">
          {/* Filters (static for now) */}
          <div className="flex flex-col gap-4 text-sm text-gray-600">
            {[
              "General physician",
              "Gynecologist",
              "Dermatologist",
              "Pediatricians",
              "Neurologist",
              "Gastroenterologist",
            ].map((item, index) => (
              <p
                key={index}
                className="w-[94vw] sm:w-auto p-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer"
              >
                {item}
              </p>
            ))}
          </div>

          {/* Doctor Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {doctors.map((doctor) => (
              <div
                key={doctor._id}
                doctor={doctor}
                className="bg-white w-[260px] flex flex-col justify-center items-center rounded-lg border border-stone-300"
              >
                <div>
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-[200px] object-cover rounded-t-lg shadow-md"
                  />
                </div>
                <div className="w-[250px] p-4 flex flex-col gap-y-2 items-center">
                  <h2 className="text-[22px] text-gray-800 font-extrabold">
                    Dr. {doctor.name}
                  </h2>
                  <h3 className="text-[14px] text-gray-500 font-semibold uppercase tracking-wide">
                    {doctor.specialization}
                  </h3>
                  <p className="text-[13px] text-gray-500 text-center">
                    {doctor.qualifications?.join(", ") || "Experienced Doctor"}
                  </p>
                  {/* <button onClick={() => setSelectedDoctor(doc._id)}>
                    Book
                  </button> */}
                  {/* {selectedDoctor && (
                    <BookAppointmentForm doctorId={selectedDoctor} />
                  )} */}
                  <button
                    onClick={() => navigate(`/book/${doctor._id}`)}
                    className="mt-2 bg-green-600 text-white px-4 py-2 rounded"
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DoctorsList;
