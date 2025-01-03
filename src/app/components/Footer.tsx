"use client"
import React from "react";
// import Typewriter from "typewriter-effect";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { PiCopyright } from "react-icons/pi";

function Footer() {
  return (
    
    <div className="w-full h-80 opacity-80 shadow-2xl">
      <div className="w-full h-48 flex items-center justify-center">
        <div className="flex justify-center flex-col items-center text-center text-5xl gap-10 font-bold text-white">
          <h2 className="font-black">Muhammad Bilal Hussain</h2>
          <h3 className="text-red-700">
            {/* <Typewriter
            options={{
              strings: [
                "I'm Available For Freelancing", "Canva Designer",
                "Front End Developer",
              ],
              
              autoStart: true,
              loop: true,
            }}
          /> */}
          </h3>

          <div className="flex justify-center gap-4 ">
            <a
              target="_blank"
             className="text-4xl text-white hover:text-red-700 transition-all duration-300 transform hover:scale-150"
              href="tel:"
            >
              <BsTelephone />
            </a>
            <a
              target="_blank"
              className="text-4xl text-white hover:text-red-700 transition-all duration-300 transform hover:scale-150"
              href="mailto:bh1977955@gmail.com"
            >
              <CgMail />
            </a>
            <a
              target="_blank"
              className="text-4xl text-white hover:text-red-700 transition-all duration-300 transform hover:scale-150"
              href="https://www.linkedin.com/in/bilal-hussain-20799b251//"
            >
              <CiLinkedin />
            </a>
            <a
              target="_blank"
            className="text-4xl text-white hover:text-red-700 transition-all duration-300 transform hover:scale-150"
              href="https://github.com/Muhammad-Bilal-Hussain"
            >
              <FiGithub />
            </a>
            <a
              target="_blank"
               className="text-4xl text-white hover:text-red-700 transition-all duration-300 transform hover:scale-150"
              href="https://www.facebook.com/profile.php?id=100007970115998"
            >
              <AiOutlineFacebook />
            </a>
            <a
              target="_blank"
              className="text-4xl text-white hover:text-red-700 transition-all duration-300 transform hover:scale-150"
              href="https://www.instagram.com/bilalhussain108/"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-20 gap-1 py-5 px-10 font-extrabold bg-red-700">
        <PiCopyright />
        <p>All Right Reserved | Designed By </p>
        <p className="text-xl hover:scale-105 ml-5 text-white"> MUHAMMAD BILAL HUSSAIN</p>
      </div>
    </div>
  );
}

export default Footer;