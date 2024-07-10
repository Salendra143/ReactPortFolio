import React from "react";
import { IoIosMailOpen } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="w-full  bg-black text-white pb-10">
      <p className="text-[5vw] italic text-center pt-5">Get in touch</p>
      <div className="w-full lg:w-3/4 mx-auto   sm:flex justify-between ">
        <div className="flex gap-5 flex-col   pt-5 px-8  sm:w-2/4 ">
          <div className="bg-gray-950 flex italic p-3  border-2 border-cyan-400 rounded-lg justify-center items-center flex-col">
            <IoIosMailOpen className="text-[2rem]" />
            <p className="text-[2vw]">Gmail</p>
            <p className="text-[1.1rem]">Salendra2114@gmail.com</p>
          </div>

          <div className="bg-gray-950 flex italic p-3  border-2 border-cyan-400 rounded-lg justify-center items-center flex-col">
            <FaPhoneVolume className="text-[2rem]" />
            <p className="text-[2vw]">Call Now</p>
            <p className="text-[1.1rem]">9999-000-10-9</p>
          </div>

          <div className=" bg-gray-950 flex italic p-3 border-2 border-cyan-400 rounded-lg  justify-center items-center flex-col">
            <FaLinkedin className="text-[2rem]" />
            <p className="text-[2vw]">Linkdin</p>
            <p className="text-[1.1rem]">salendra-singh143/</p>
          </div>
        </div>

        <form className="  flex   flex-col  sm:w-2/4 px-8">
          <input
            className=" p-3 bg-gray-950 rounded-lg mt-5 border-2 border-cyan-400 placeholder:text-white placeholder:text-[1.2rem]"
            type="email"
            placeholder="UserName"
          />
          <input
            className=" p-3  bg-gray-950 rounded-lg mt-5 border-2 border-cyan-400 placeholder:text-white placeholder:text-[1.2rem]"
            type="password"
            placeholder="Password"
          />
          <textarea
            className=" p-3  bg-gray-950 rounded-lg my-5 border-2 border-cyan-400 placeholder:text-white placeholder:text-[1.2rem]"
            name=""
            rows={6}
            cols={10}
            placeholder="Message"
            id=""
          ></textarea>
          <button className="p-3 hover:bg-cyan-400 bg-gray-950 border-2 italic border-cyan-400 text-[1.5rem] ">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
