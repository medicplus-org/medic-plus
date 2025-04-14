import React from "react";
import hero from "../../assets/images/herov1.mp4";
import about from "../../assets/images/aboutpic.jpg";
import { Link } from "react-router";
import doc1 from "../../assets/images/doc1.png";
import Banner from "../components/Banner";
import TopDoctors from "../components/TopDoctors";

const Landing = () => {
  return (
    <div>
      <div className="h-screen">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
          src=""
        >
          <source src={hero} type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
        <div className="relative z-20 flex items-center justify-center h-full w-full px-4">
          <div className="bg-black/20 backdrop-blur-md text-white p-8 rounded-xl shadow-lg w-full max-w-2xl text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              We Care for Your Health Every Moment
            </h1>
            <p className="text-base md:text-lg text-gray-200">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <section className="flex flex-row justify-center items-center h-[100vh]">
        <div className="flex flex-col justify-center items-center gap-y-5 p-5">
          <h3 className="text-2xl text-blue-300 font-bold">About</h3>
          <h1 className="text-4xl text-stone-800 font-bold">
            We Are the Best Health Care in Town{" "}
          </h1>
          <p className="text-[18px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            consequatur ullam quaerat fuga itaque! Molestias architecto illum
            amet consequuntur odit, aliquam voluptas recusandae alias hic
            molestiae? Sequi fugiat dolore ipsa!
          </p>
          <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition duration-300 text-white">
            Read More
          </button>
        </div>
        <div className="p-5">
          <img src={about} alt="" className="w-full rounded-md shadow-2xl " />
        </div>
      </section>

      {/* Services Section */}

      <section className="w-full space-y-6">
        {/* Top Section */}
        <div className="w-full flex items-center justify-between">
          <h1 className="text-2xl text-neutral-700 font-semibold">
            Our Services
          </h1>
          <Link className="text-base text-blue-600 hover:text-blue-50 font-normal flex items-center gap-x-2 ease-in-out duration-300">
            View All
          </Link>
        </div>

        {/* service card */}
        <div className="grid md:grid-cols-5 grid-cols-2 md:gap-12 gap-3"></div>
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
        <div className=" p-4 w-full grid grid-5-cols gap-4 pt-5 gap-y-6 px-3 sm:px-0 items-center">
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
        </div>
      </section>

      <Banner />

      {/* Blog section */}
      <section>
        <div className="flex flex-col justify-center items-center gap-y-4">
          <h3 className="text-2xl font-bold">Blog</h3>
          <h1 className="text-4xl font-extrabold">Recent Blog</h1>
          <p className="text-[16px] text-center">
            Separated they live in. A small river named Duden flows by their
            place and supplies it with the necessary regelialia. It is a
            paradisematic country
          </p>
        </div>
        <div className=" p-4">
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

export default Landing;
