import React from "react";
import { HeartPulse, Stethoscope, PhoneCall } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-300 py-12 px-6">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 items-start text-left">
        {/* Logo & About */}
        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold text-blue-400 mb-4">
            Medic<span className="text-white">Plus</span>
          </h2>
          <p className="text-sm leading-relaxed">
            MedicPlus connects patients with trusted medical professionals.
            Secure, fast, and user-friendly healthcare solutions for communities
            that matter.
          </p>
          <p className="font-semibold mt-4 mb-1">Address:</p>
          <p className="text-sm">Suite 301, Wellness Tower, Accra</p>
          <p className="text-sm">Greater Accra, Ghana</p>

          {/* Contact Icons */}
          <div className="flex gap-4 mt-4 text-blue-400">
            <a href="#" aria-label="Support">
              <PhoneCall className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Emergency">
              <HeartPulse className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Consultation">
              <Stethoscope className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Column One */}
        <div>
          <h3 className="font-semibold text-white mb-2">For Patients</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#">Book Appointment</a>
            </li>
            <li>
              <a href="#">Find a Doctor</a>
            </li>
            <li>
              <a href="#">Health Tips</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
          </ul>
        </div>

        {/* Column Two */}
        <div>
          <h3 className="font-semibold text-white mb-2">For Doctors</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#">Join MedicPlus</a>
            </li>
            <li>
              <a href="#">Dashboard</a>
            </li>
            <li>
              <a href="#">Manage Appointments</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </div>

        {/* Column Three */}
        <div>
          <h3 className="font-semibold text-white mb-2">About</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#">Our Story</a>
            </li>
            <li>
              <a href="#">Vision & Mission</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-sm flex flex-col md:flex-row justify-between items-center max-w-screen-xl mx-auto">
        <p>&copy; 2025 MedicPlus. All rights reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
