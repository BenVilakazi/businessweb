import React from "react";
import {
  BsTwitter,
  BsYoutube,
  BsGithub,
  BsFillPhoneFill,
  BsInstagram,
  BsFacebook,
  BsLinkedin
} from "react-icons/bs";
import { ImFacebook } from "react-icons/im";
import { FaHome } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8 py-10 border-t border-t-borderColor">
      <div className="flex flex-col gap-4">
        <h2 className="font-titleFont text-2xl font-normal tracking-wider">
          Code Domain
        </h2>
        <p className="text-base text-darkText tracking-wide">
          We're experts in web development and digital marketing. From sleek websites campaigns, we make your digital vision a reality
        </p>
        <p className="flex items-center text-lg gap-5">
          <BsTwitter className="text-white hover:text-secondaryColor duration-500 cursor-pointer" />
          <ImFacebook className="text-white hover:text-secondaryColor duration-500 cursor-pointer" />
          <a href="www.instagram.com/code_domain_za/"><BsInstagram className="text-white hover:text-secondaryColor duration-500 cursor-pointer" /></a>
          <a href="www.linkedin.com/"><BsLinkedin className="text-white hover:text-secondaryColor duration-500 cursor-pointer" /></a>
        </p>
      </div>
      <div>
        <h3 className="font-titleFont text-xl font-semibold mb-4">
          Contact Info
        </h3>
        <div className="flex flex-col gap-6">
          <p className="font-base text-darkText flex items-start gap-6 justify-start hover:text-white duration-500 cursor-pointer">
            <span className="text-white text-xl">
              <FaHome />
            </span>
            Suite 721 Newcastle, KZN 2045
          </p>
          <p className="font-base text-darkText flex items-start gap-6 justify-start hover:text-white duration-500 cursor-pointer">
            <span className="text-white text-xl">
              <MdEmail />
            </span>
            info@codedomain.co.za
          </p>
          <p className="font-base text-darkText flex items-start gap-6 justify-start hover:text-white duration-500 cursor-pointer">
            <span className="text-white text-xl">
              <BsFillPhoneFill />
            </span>
            +27 63 977 5983
          </p>
        </div>
      </div>
      <div>
        <h3 className="font-titleFont text-xl font-semibold mb-4">
          Blog Contains
        </h3>
        <div className="flex flex-col gap-6">
          <p className="font-base text-darkText flex items-start gap-6 justify-start hover:text-white duration-500 cursor-pointer">
            <span className="text-white text-xl">
              <FaHome />
            </span>
            Suite 721 Newcastle, KZN 2045
          </p>
          <p className="font-base text-darkText flex items-start gap-6 justify-start hover:text-white duration-500 cursor-pointer">
            <span className="text-white text-xl">
              <MdEmail />
            </span>
            benvilakazi5@gmail.com
          </p>
          <p className="font-base text-darkText flex items-start gap-6 justify-start hover:text-white duration-500 cursor-pointer">
            <span className="text-white text-xl">
              <BsFillPhoneFill />
            </span>
            +27 63 977 5983
          </p>
        </div>
      </div>
      <div>
        <h3 className="font-titleFont text-xl font-semibold mb-4">
          Support & Downloads
        </h3>
        <p className="text-base text-darkText">
          Your Vision, Our Code
        </p>
      </div>
    </div>
  );
};

export default Footer;
