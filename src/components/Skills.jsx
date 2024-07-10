import React from "react";
import html from "../image/html.webp";
import angular from "../image/angular.png";
import css from "../image/css.svg";
import c from "../image/c.jfif";
import ex from "../image/ex.webp";
import gsap from "../image/gsap.png";
import java from "../image/java.png";
import js from "../image/js.png";
import mongodb from "../image/mongodb.png";
import next from "../image/next.png";
import nosql from "../image/nosql.jfif";
import react from "../image/react.png";
import SQL from "../image/SQL.png";
import tailwind from "../image/tailwind.png";
import three from "../image/three.png";
import vue from "../image/vue.jpg";

const Skills = () => {
  return (
    <div id="skills" className="w-full bg-black px-5 sm:px-20 mx-auto">
      <p className="text-[5vw] italic text-center text-white">
        {" "}
        My Tech Skills
      </p>

      <div className="w-full ">
        <div className=" flex justify-center ">
          <p className="text-white italic lg:text-[1.5rem]">
            I'm skilled in the MERN stack, which includes MongoDB, Express.js,
            React.js, and Node.js. I can design and manage databases with
            MongoDB, build strong backends with Express.js, and create dynamic
            front-ends with React.js. With React, I specialize in building
            responsive, user-friendly interfaces and have experience with state
            management libraries like Redux. Using Node.js, I develop fast and
            scalable server-side applications. My expertise allows me to
            seamlessly integrate these technologies to deliver full-stack web
            applications.
          </p>
        </div>

        <div className="overflow-hidden whitespace-nowrap flex bg-gray-950 mt-5">
          <div className="flex gap-8 animate-marquee bg-black font-bold text-white">
            <div className="w-[200px] bg-white h-[200px] rounded-lg">
              <img
                className="w-full h-full  object-cover rounded-lg"
                src={html}
                alt=""
              />
            </div>
            <div className="w-[200px] h-[200px] bg-cyan-50 rounded-lg">
              <img
                className="w-full h-full  object-cover rounded-lg"
                src={css}
                alt=""
              />
            </div>
            <div className="w-[200px] h-[200px] rounded-lg">
              <img
                className="w-full h-full  object-cover rounded-lg"
                src={js}
                alt=""
              />
            </div>
            <div className="w-[200px] h-[200px] rounded-lg">
              <img
                className="w-full h-full  object-cover rounded-lg"
                src={tailwind}
                alt=""
              />
            </div>
            <div className="w-[200px] h-[200px] rounded-lg">
              <img
                className="w-full h-full  object-cover rounded-lg"
                src={c}
                alt=""
              />
            </div>
            <div className="w-[200px] h-[200px] rounded-lg">
              <img
                className="w-full h-full  object-cover rounded-lg"
                src={gsap}
                alt=""
              />
            </div>
            <div className="w-[200px] h-[200px] rounded-lg">
              <img
                className="w-full h-full  object-cover rounded-lg"
                src={react}
                alt=""
              />
            </div>
            <div className="w-[200px] h-[200px] rounded-lg">
              <img
                className="w-full h-full  object-cover rounded-lg"
                src={three}
                alt=""
              />
            </div>
            <div className="w-[200px] h-[200px] rounded-lg">
              <img
                className="w-full h-full  object-cover rounded-lg"
                src={nosql}
                alt=""
              />
            </div>
            <div className="w-[200px] h-[200px] bg-slate-400 rounded-lg">
              <img
                className="w-full h-full  object-cover rounded-lg"
                src={SQL}
                alt=""
              />
            </div>
            <div className="w-[200px] h-[200px] rounded-lg">
              <img
                className="w-full h-full  object-cover rounded-lg"
                src={vue}
                alt=""
              />
            </div>
            <div className="w-[200px] h-[200px] rounded-lg">
              <img
                className="w-full h-full  object-cover rounded-lg"
                src={angular}
                alt=""
              />
            </div>

            <div className="w-[200px] h-[200px] bg-yellow-100 rounded-lg">
              <img
                className="w-full h-full  object-cover rounded-lg"
                src={java}
                alt=""
              />
            </div>
            <div className="w-[200px] h-[200px] rounded-lg">
              <img
                className="w-full h-full bg-red-300  object-cover rounded-lg"
                src={ex}
                alt=""
              />
            </div>
            <div className="w-[200px] bg-red-300 h-[200px] rounded-lg">
              <img
                className="w-full h-full  object-cover rounded-lg"
                src={next}
                alt=""
              />
            </div>
            <div className="w-[200px] h-[200px] rounded-lg">
              <img
                className="w-full h-full  object-cover rounded-lg"
                src={mongodb}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
