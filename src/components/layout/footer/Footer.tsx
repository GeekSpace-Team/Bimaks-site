import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <section>
      <div className="w-full justify-between flex pl-[10%] pr-[10%] pt-[3%] ">
        <div>
          <img
            src="./logo/biMaksLogo.svg"
            className="bg-white p-2 w-48"
            alt="logo"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-white text-2xl">Links</h1>
          <a href="#home" className="text-white hover:underline">
            Home
          </a>
          <a href="#about" className="text-white hover:underline">
            About
          </a>
          <a href="#services" className="text-white hover:underline">
            Services
          </a>
          <a href="#contact" className="text-white hover:underline">
            Contact
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-white text-2xl">Contact</h1>
          <p className="text-white">Phone: +123456789</p>
          <p className="text-white">Email: email@example.com</p>
          <p className="text-white">Fax: +987654321</p>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-white text-2xl">Location</h1>
          <p className="text-white">123 Main Street</p>
          <p className="text-white">City, State, ZIP</p>
          <p className="text-white">Country</p>
        </div>
      </div>
      <div className="flex justify-center items-center gap-6 mt-10">
        <a
          href="https://facebook.com"
          className="text-gray-300 hover:text-white hover:bg-blue-900 rounded-full p-2 transition-colors duration-300"
          title="Facebook"
        >
          <FaFacebookF size={24} />
        </a>
        <a
          href="https://twitter.com"
          className="text-gray-300 hover:text-white hover:bg-blue-600 rounded-full p-2 transition-colors duration-300"
          title="Twitter"
        >
          <FaTwitter size={24} />
        </a>
        <a
          href="https://instagram.com"
          className="text-gray-300 hover:text-white hover:bg-pink-500 rounded-full p-2 transition-colors duration-300"
          title="Instagram"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://linkedin.com"
          className="text-gray-300 hover:text-white hover:bg-blue-800 rounded-full p-2 transition-colors duration-300"
          title="LinkedIn"
        >
          <FaLinkedinIn size={24} />
        </a>
      </div>

      <div className="air air1">
        <div className="flex flex-col-reverse gap-3  items-center absolute bottom-3 w-full justify-end right-0 ">
          <h1 className="text-xl ">Powered By GeekSpace</h1>
          <img src="./logo/GeekSpaceLogo.svg" alt="GeekSpaceLogo" />
        </div>
      </div>
      <div className="air air2"></div>
      <div className="air air3"></div>
      <div className="air air4"></div>
    </section>
  );
};

export default Footer;
