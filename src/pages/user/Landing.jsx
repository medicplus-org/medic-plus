import React from "react";
import hero from "../../assets/images/herov2.mp4";
import about from "../../assets/images/aboutpic.jpg";
import { Link } from "react-router";
import doc1 from "../../assets/images/doc1.png";
import Banner from "../components/Banner";
import TopDoctors from "../components/TopDoctors";
import { motion } from "framer-motion";
import SpecialityMenu from "../components/SpecialityMenu";
import BlogSection from "../components/BlogSection";
import herothumb from "../../assets/images/herothumb.png";

const Landing = () => {
  return (
    <div>
      <div className="h-screen">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
          poster={herothumb}
        >
          <source src={hero} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-0"></div>

        <div className="relative z-20 flex items-center justify-center h-full w-full px-4">
          <div className="bg-black/20 backdrop-blur-md text-white p-8 rounded-xl shadow-lg w-full max-w-2xl text-center space-y-6">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full mb-4 inline-block font-medium"
            >
              Trusted by Professionals
            </motion.span>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold tracking-wide"
            >
              Quality Healthcare, Anytime You Need It
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-200 mt-4 leading-relaxed"
            >
              Connect with licensed doctors near you, book appointments
              instantly, and get the care you deserve — all in one place.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold">
                Book an Appointment
              </button>
              <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
                Join as a Doctor
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* specialty menu  */}
      <SpecialityMenu />

      <section
        className="relative flex items-center justify-center min-h-[80vh] bg-cover bg-fixed
        bg-[url(assets/images/aboutpic.jpg)]
        "
        // style={{ backgroundImage: "url(/path/to/your/background-image.jpg)" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Overlay to darken the background */}
        <div className="relative z-10 flex flex-col justify-center items-center text-center gap-y-5 p-8 text-white">
          <h3 className="text-2xl text-blue-300 font-bold">About</h3>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            We Are the Best Health Care in Town
          </h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            consequatur ullam quaerat fuga itaque! Molestias architecto illum
            amet consequuntur odit, aliquam voluptas recusandae alias hic
            molestiae? Sequi fugiat dolore ipsa!
          </p>
          <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition duration-300 text-white mt-6">
            Read More
          </button>
        </div>
      </section>

      {/* Doctors section */}
      <section className="h-full flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
        <div className="flex flex-col justify-center items-center gap-y-4">
          <h3 className="text-2xl font-bold">Doctors</h3>
          <h1 className="text-4xl font-extrabold">Our Qualified Doctors</h1>
          <p className="text-[16px]">
            Separated they live in. A small river named Duden flows by their
            place and supplies it with the necessary regelialia. It is a
            paradisematic country
          </p>
        </div>
        <div className="p-4 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 pt-5 items-center justify-items-center">
          <div className="bg-white w-[260px] flex flex-col justify-center items-center rounded-lg border border-blue-200 cursor-pointer hover:translate-y-[-10px] transition-all duration-500">
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
          <div className="bg-white w-[260px] flex flex-col justify-center items-center rounded-lg border border-blue-200 cursor-pointer hover:translate-y-[-10px] transition-all duration-500">
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
          <div className="bg-white w-[260px] flex flex-col justify-center items-center rounded-lg border border-blue-200 cursor-pointer hover:translate-y-[-10px] transition-all duration-500">
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
          <div className="bg-white w-[260px] flex flex-col justify-center items-center rounded-lg border border-blue-200 cursor-pointer hover:translate-y-[-10px] transition-all duration-500">
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
          {/* <div className="bg-white w-[260px] flex flex-col justify-center items-center rounded-lg border border-blue-200 cursor-pointer hover:translate-y-[-10px] transition-all duration-500">
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
          </div> */}
        </div>
      </section>

      <Banner />

      {/* Blog section */}
      <BlogSection />
    </div>
  );
};

export default Landing;
