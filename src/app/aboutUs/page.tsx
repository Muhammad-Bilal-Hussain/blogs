import React from "react";
import Image from "next/image";
import { IoCloudDownloadOutline } from "react-icons/io5";
import profilePic from "../../../public/hero.png";

function About() {
  return (
    <section className="flex justify-between w-full h-auto" id="About">
      <div className="container group relative">
        <Image
          src={profilePic}
          alt="aboutImg"
          height={900}
          width={800}
          className="lg:block hidden mt-[20%]" 
        />
      </div>

      {/* right */}
      <div className="font-[system-ui] mt-10 lg:mt-28 mr-4 lg:mr-[100px] ml-4 lg:ml-[20px] py-10">
        <h1 className="text-5xl lg:text-4xl text-center text-white font-sans font-black mb-6 hover:text-red-700 transition-all duration-1000">
          About Me
        </h1>
        <p className="text-lg mb-6 text-white">
          As a passionate and detail-oriented software engineering graduate with
          a solid foundation in programming, software development, and
          problem-solving, I am seeking an entry-level position where I can
          apply my technical skills and contribute to innovative projects. Eager
          to join a dynamic team to enhance my knowledge, learn from experienced
          professionals, and grow within the company while delivering
          high-quality software solutions.
        </p>
        <div className="block w-full">
          <div className=" text-white text-sm md:text-3xl top-1/2 space-y-2">
            <ul>
              <li className="mb-7">
                <span className="font-semibold mr-6 text-red-700">
                  Name:
                </span>
                Muhammad Bilal Hussain
              </li>
              <li className="mb-7">
                <span className="font-semibold mr-6 text-red-700">
                  Father Name:
                </span>{" "}
                Dilshad Hussain
              </li>
              <li className="mb-7">
                <span className="font-semibold mr-6 text-red-700">
                  Date of Birth:
                </span>
                January 18, 1999
              </li>
              <li className="mb-7">
                <span className="font-semibold mr-6 text-red-700">
                  Marital Status:
                </span>{" "}
                Single
              </li>
              <li className="mb-7">
                <span className="font-semibold mr-6 text-red-700">
                  Nationality:
                </span>{" "}
                Pakistan
              </li>
              <li className="mb-7">
                <span className="font-semibold mr-6 text-red-700">
                  Religion:
                </span>{" "}
                Islam
              </li>
              <li className="mb-7">
                <span className="font-semibold mr-6 text-red-700">
                  Phone No.:
                </span>{" "}
                +92-315-4929-050
              </li>
            </ul>
            <div className="btnDiv rounded text-center text-[20px] px-14 py-3 text-black bg-[red] hover:bg-[#9e201d] duration-500 hover:text-white">
          <button id="downloadBtn" value="download">
            <a className="flex gap-2" href="/cv/Cv-bilal.pdf" download="Cv-bilal.pdf">
              Download CV
              <p className="mt-2 text-white font-black"><IoCloudDownloadOutline /></p>
            </a>
          </button>
        </div>
          </div>
        </div>

        

      </div>
    </section>
  );
}

export default About;