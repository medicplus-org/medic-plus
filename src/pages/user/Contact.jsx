import React from "react";
import contact from "../../assets/images/contact_image.png";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-20 text-gray-500">
        <p>
          CONTACT <span className="text-gray-700 font-semibold">US</span>
        </p>
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        <img className="w-full md:max-w-[360px]" src={contact} alt="" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-gray-600">Our OFFICE</p>
          <p className="text-gray-500">
            54709 Willms Station <br />
            Suite 350, Accra, Ghana
          </p>
          <p className="text-gray-500">
            Tel: (233) 555‑0132 <br />
            Email: medicplus@gmail.com
          </p>
          <p className="font-semibold text-lg text-gray-600">
            Careers at MedicPlus
          </p>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <button className="border border-gray-300 px-8 py-4 text-sm hover:bg-blue-500 hover:text-white transition-all duration-500">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
