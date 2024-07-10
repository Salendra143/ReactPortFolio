import React from "react";
import Header from "./Header";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

import ai from "../assets/ai.jpg";

const Hero = () => {
  return (
    <div className="relative w-full h-[100vh]">
      <Header />
      <img
        className="absolute z-10 w-full h-full object-cover"
        src={ai}
        alt="Iron Man"
      />

      <div className="absolute z-10 flex w-full h-full flex-col text-[6vw] md:text-[2rem]  italic font-bold gap-5 justify-center items-center">
        <p>
          Welcome to My <span className="text-cyan-400">Portfolio</span>
        </p>
        <p>
          Hi, I am <span className="text-cyan-400">Salendra</span>
        </p>
        <p>
          I am a <span className="text-cyan-400">Full Stack Developer</span>
        </p>
        <div className=" text-[4vw] md:text-[1.7rem]">
          <button className="px-4 py-1 mr-5 italic border-2 rounded-lg border-cyan-400 hover:bg-cyan-400 active:bg-cyan-300">
            About Me
          </button>
          <button className="px-4 py-1 mr-5 italic border-2 rounded-lg border-cyan-400 hover:bg-cyan-400 active:bg-cyan-300">
            Download
          </button>
        </div>
        <div className=" flex gap-5">
          <a href="https://github.com/Salendra143" target="blank">
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/salendra-singh143/"
            target="blank"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:salendra2114@gmail.com">
            <MdMarkEmailUnread />
          </a>
          <a href="https://wa.me/your-phonenumber">
            <FaWhatsappSquare />
          </a>
          <a href="https://www.instagram.com/your-instagram">
            <FaInstagramSquare />
          </a>
        </div>
      </div>

      <div className="about absolute z-10  w-full h-full hidden    justify-center items-center ">
        <div className="w-2/3 bg-blue-400 h-[80%] mt-16 flex">
          <div className="w-1/2 bg-blue-300 ">
            <p className="text-[1.1rem] italic">
              I am proficient in MERN technology, which encompasses MongoDB,
              Express.js, React, and Node.js. My expertise includes developing
              robust backend systems with Node.js and Express.js, designing and
              managing databases with MongoDB, and creating dynamic, responsive
              front-end applications using React. I excel in UI creation,
              leveraging React to build intuitive and visually appealing user
              interfaces that enhance user experience. I have hands-on
              experience in building full-stack applications that are scalable,
              efficient, and user-friendly. My skill set allows me to integrate
              these technologies seamlessly to deliver comprehensive web
              solutions from concept to deployment.
            </p>
          </div>
          <div className="w-1/2  bg-green-300 ">right</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
