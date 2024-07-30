import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoMdCloseCircle } from "react-icons/io";
import { Link } from "react-scroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Header = () => {
  const [show, setShow] = useState(false);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.to(".header", {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      marginTop: "-12px",
      marginBottom: "-12",
      duration: 0.2,
      scrollTrigger: {
        trigger: ".header",
        start: "top -15%",
        scrub: 3,
      },
    });

    gsap.to(" .nav,#name, #menu", {
      color: "white",
      duration: 0.8,
      scrollTrigger: {
        trigger: ".header",
        start: "top -10%",
        scrub: true,
      },
    });

    gsap.from("#name", {
      x: "-200",
      duration: 2,
    });
    gsap.from(".nav", {
      x: "200",
      duration: 2,
    });
  }, []);

  const btnClicked = () => {
    setShow(!show);
  };

  return (
    <div>
      <div className=" header italic py-3 h-[90px] w-full  px-5 md:px-20 mx-auto flex justify-between items-center  fixed z-50">
        <p id="name" className="text-[2.5rem] font-bold">
          <span className="text-[3rem] text-bold text-cyan-300">S</span>alendra
        </p>
        <div className="nav hidden md:flex font-bold gap-5 text-[2vw]">
          <Link
            to="project"
            smooth={true}
            duration={1000}
            className="hover:text-cyan-400 hover:transition duration-1000 ease-in-out cursor-pointer"
          >
            Project
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={1000}
            className="hover:text-cyan-400 hover:transition duration-1000 ease-in-out cursor-pointer"
          >
            Skills
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={1000}
            className="hover:text-cyan-400 hover:transition duration-1000 ease-in-out cursor-pointer"
          >
            Contact Us
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={1000}
            className="hover:text-cyan-400 hover:transition duration-1000 ease-in-out cursor-pointer"
          >
            About
          </Link>
        </div>
        <CiMenuFries
          onClick={btnClicked}
          id="menu"
          className="text-[2rem] font-bold md:hidden block md:text-[2vw] cursor-pointer"
        />
      </div>

      {show && (
        <div className="flex flex-col z-50 justify-center items-center bg-black opacity-95 fixed top-0 right-0 w-full md:w-[50%] h-[100vh] gap-5 text-[2vw] text-white">
          <IoMdCloseCircle
            onClick={btnClicked}
            className="absolute top-8 right-5 cursor-pointer text-[2rem]"
          />
          <Link
            to="about"
            smooth={true}
            duration={700}
            className="text-[2rem] italic hover:text-cyan-400 hover:transition duration-700 ease-in-out cursor-pointer"
          >
            About
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={700}
            onClick={btnClicked}
            className="text-[2rem] italic hover:text-cyan-400 hover:transition duration-700 ease-in-out cursor-pointer"
          >
            Skills
          </Link>
          <Link
            to="project"
            smooth={true}
            duration={700}
            onClick={btnClicked}
            className="text-[2rem] italic hover:text-cyan-400 hover:transition duration-700 ease-in-out cursor-pointer"
          >
            Project
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={700}
            onClick={btnClicked}
            className="text-[2rem] italic hover:text-cyan-400 hover:transition duration-700 ease-in-out cursor-pointer"
          >
            Contact Us
          </Link>
        </div>
      )}

     
    </div>
  );
};

export default Header;
