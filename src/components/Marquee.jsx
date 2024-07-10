import React from "react";

const Marquee = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap flex bg-gray-500 ">
      <div className="flex gap-8 animate-marquee bg-gray-550 font-bold text-white">
        <span className="text-[3rem] md:text-[8rem] italic text-stroke cursor-pointer hover:text-cyan-400 transition 10s ease-out text-fill-transparent ">
          Salendra
        </span>
        <span className="text-[3rem] md:text-[8rem] italic text-stroke cursor-pointer hover:text-cyan-400 transition 10s ease-out text-fill-transparent">
          Web Developer
        </span>
        <span className="text-[3rem] md:text-[8rem] italic text-stroke cursor-pointer hover:text-cyan-400 transition 10s ease-out text-fill-transparent">
          Frontend Developer
        </span>
        <span className="text-[3rem] md:text-[8rem] italic text-stroke cursor-pointer hover:text-cyan-400 transition 10s ease-out text-fill-transparent">
          React Developer
        </span>
        <span className="text-[3rem] md:text-[8rem] italic text-stroke cursor-pointer hover:text-cyan-400 transition 10s ease-out text-fill-transparent">
          Web Developer
        </span>
        <span className="text-[3rem] md:text-[8rem] italic text-stroke cursor-pointer hover:text-cyan-400 transition 10s ease-out text-fill-transparent">
          Frontend Developer
        </span>
        <span className="text-[3rem] md:text-[8rem] italic text-stroke cursor-pointer hover:text-cyan-400 transition 10s ease-out text-fill-transparent">
          React Developer
        </span>
      </div>
    </div>
  );
};

export default Marquee;
