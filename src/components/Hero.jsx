import React, { useState } from "react";
import Header from "./Header";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import FrontendDEV from "../projectimg/FrontendDEV.pdf";
import { IoMdCloseCircle } from "react-icons/io";
import Coder from "../image/Coder.gif";
import ai from "../assets/ai.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {

  const [about,setabout] = useState(false)

  useGSAP(() => {
    gsap.from('img', {
      x: '-20%',
      duration:3, 
     
    });
    gsap.from('.hero p, button', {
      x: '-100%',
      opacity: 0,
      duration: 2, 
      delay: 1, 
     stagger: 2,
      yoyo: true,
    });
    gsap.from('#btn a', {
      y: '50px',
      opacity: 0,
      duration: 1,
      stagger: 0.8, // Adjust the stagger delay to control the delay between each element's animation start
      ease: 'bounce.in',
      repeat: 2,
      yoyo: true,
    });
    
   

  }, []);


  const aboutClicked =  () =>{
      setabout(!about)
      
  }


  return (
    <div className="relative w-full h-[100vh]">
      <Header />
      <img
        className="absolute z-10 w-full h-full object-cover"
        src={ai}
        alt="Ai"
      />

      <div className="hero absolute z-10 flex w-full h-full flex-col text-[6vw] md:text-[2rem]  italic font-bold gap-5 justify-center items-center">
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
          <button onClick={aboutClicked} className="px-4 py-1 mr-5 italic border-2 rounded-lg border-cyan-400 hover:bg-cyan-400 active:bg-cyan-300">
            About Me
          </button>
          <a href={FrontendDEV} download rel="noopener noreferrer">
            <button className="px-4 py-1 mr-5 italic border-2 rounded-lg border-cyan-400 hover:bg-cyan-400 active:bg-cyan-300">
              Resume
            </button>
          </a>
        </div>
        <div id="btn" className=" flex gap-5">
          <a href="https://github.com/Salendra143" target="blank">
            <FaGithub className="hover:border-2 border-cyan-400 rounded-lg " />
          </a>
          <a
            href="https://www.linkedin.com/in/salendra-singh143/"
            target="blank"
          >
            <FaLinkedin className="hover:border-2 border-cyan-400 rounded-lg " />
          </a>
          <a href="mailto:salendra2114@gmail.com">
            <MdMarkEmailUnread className="hover:border-2 border-cyan-400 rounded-lg " />
          </a>
          <a href="https://wa.me/your-phonenumber">
            <FaWhatsappSquare className="hover:border-2 border-cyan-400 rounded-lg " />
          </a>
          <a href="https://www.instagram.com/your-instagram">
            <FaInstagramSquare className="hover:border-2 border-cyan-400 rounded-lg " />
          </a>
        </div>
      </div>

      { about && <div className="about absolute z-10 w-full h-full bg-white opacity-90 flex justify-center items-center ">
        <div className=" relative w-full  m-5 md:w-2/3 bg-gray-300   h-[80%] mt-16 font-semibold rounded-lg md:flex">
        <IoMdCloseCircle onClick={aboutClicked} className=" cursor-pointer absolute z-40  right-0 text-[2rem] "/>        
             
         <div className="  md:w-1/2  ">
            <p className=" text-[2.3vw] sm:text-[2vw]  md:text-[1.3vw] italic p-5">
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
              solutions from concept to deployment.....
            </p>
          </div>

              <div className="w-full h-[60%] md:h-full md:w-1/2">
                  <div className="w-full h-full p-5">
                    <img className="w-full h-full rounded-lg object-cover" src={Coder} alt="" />
                  </div>
              </div>

  
        </div>
          
      </div>}
    </div>
  );
};

export default Hero;
