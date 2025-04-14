import React from "react";
import doc1 from "../../assets/images/doc1.png";

const DoctorsList = () => {
  return (
    <div>
      <div className="h-[50vh] bg-[url('assets/images/docbg.png')] bg-no-repeat bg-center bg-cover">
        <div className="absolute top-0 left-0 w-full  bg-black opacity-65 h-[50vh]"></div>
        <div className="relative z-20 flex items-center justify-center h-full w-full px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white text-shadow-md">
            Qualified Doctors
          </h1>
        </div>
      </div>

      {/* Doctors List */}
      <section>
        <div className=" p-4 flex flex-col sm:flex-row items-start gap-5 mt-5">
          <div className=" flex flex-col gap-4 text-sm text-gray-600">
            <p
              className={`w-[94vw] sm:w-auto p1-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}
            >
              General physician
            </p>
            <p
              className={`w-[94vw] sm:w-auto p1-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}
            >
              Gynecologist
            </p>
            <p
              className={`w-[94vw] sm:w-auto p1-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}
            >
              Dermatologist
            </p>
            <p
              className={`w-[94vw] sm:w-auto p1-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}
            >
              Pediatricians
            </p>
            <p
              className={`w-[94vw] sm:w-auto p1-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}
            >
              Neurologist
            </p>
            <p
              className={`w-[94vw] sm:w-auto p1-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer`}
            >
              Gastroenterologist
            </p>
          </div>

          <div className="bg-white w-[260px] flex flex-col justify-center items-center rounded-lg border border-stone-300">
            <div>
              <img
                src={doc1}
                alt=""
                className="w-full h-[200px] object-cover rounded-t-lg shadow-md"
              />
            </div>
            <div className="w-[250px] p-4 flex flex-col gap-y-2 items-center">
              <h2 className="text-[22px] text-gray-800 font-extrabold">
                Dr. Lloyd Wilson
              </h2>
              <h3 className="text-[14px] text-gray-500 font-semibold uppercase tracking-wide">
                Neurologist
              </h3>
              <p className="text-[13px]  text-gray-500 text-center">
                I am an ambitious workaholic, but apart from that, pretty simple
                person.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DoctorsList;
