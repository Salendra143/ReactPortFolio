import React from "react";
import foodapp from "../projectimg/food-app.png";
import youtube from "../projectimg/youtube.png";
import netflix from "../projectimg/netflix.png";
import ecomzy from "../projectimg/ecomzy.png";
import myntra from "../projectimg/Myntra.png.png";
import razorpay from "../projectimg/razorpay.png";
import courses from "../projectimg/courses.png";
import discord from "../projectimg/discord.png";
import tours from "../projectimg/tours.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Project = () => {

  useGSAP(()=>{
    gsap.from(".images > *",{
      opacity: 0,
      z: -100,
      duration: 1,
      ease: 'power1.out',
      stagger: 0.1,
      scrollTrigger: {
            trigger: '.main',
            scroller: 'body',
            start: 'top 50%',
            end: 'bottom 10%',
            scrub: true,
          }
    })


  },[])

  return (
    <div id="project" className="main w-full bg-black  py-5 italic text-white">
      <div  className="images relative">
        <p className=" text-[10vw] cursor-pointer hover:text-cyan-400 sm:text-[4rem] lg:text-[5rem] italic text-center font-bold relative z-10">
          Personal Projects
        </p>
        <div className="absolute  text-transparent w-full -top-1 -left-1 text-stroke z-0">
          <p className=" text-[10vw] sm:text-[4rem] lg:text-[5rem] italic text-center font-bold">
            Personal Projects
          </p>
        </div>
      </div>

      <div className="images flex justify-evenly gap-5 px-5 sm:px-20 mx-auto  flex-wrap ">

        <div className="w-[200px] h-[200px] translate-z-6 transform skew-y-6  cursor-pointer relative md:w-[300px] md:h-[300px] rounded-2xl">
          <img
            className="w-full h-full translate-z-6 transform skew-y-6 object-cover rounded-2xl"
            src={youtube}
            alt=""
          />
          <div className="absolute hover:translate-z-6 hover:transform hover:skew-y-6 inset-0 bg-cyan-400 opacity-0 hover:opacity-100 transition-opacity duration-1000 font-bold text-black ease-in-out rounded-2xl flex sm:justify-center sm:items-center sm:text-center flex-col p-2  md:p-8 ">
            <p className="text-xs md:text-lg">
              Here is my Video Streaming clone App using React. My app includes functionalities like auto suggestion search like youTube and live chat
              and many more.
            </p>
            <p className="text-xs md:text-sm mt-2">
              Technologies: React-Vite, YouTube API Tailwind CSS, and Redux/Toolkit
            </p>
            < a className="mt-4 text-xs md:text-sm hover:text-red-500 text-center" 
              href="https://gregarious-khapse-5445d0.netlify.app/"
              target="_blank"
              
            >
              Link Here 👣
            </a>
          </div>
        </div>


        <div className="w-[200px] h-[200px] cursor-pointer  md:w-[300px] relative  md:h-[300px] rounded-2xl ">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src={foodapp}
            alt=""
          />
          <div className="w-full h-full absolute inset-0 bg-cyan-400 opacity-0 hover:opacity-100 transition-opacity duration-1000 font-bold text-black ease-in-out rounded-2xl flex sm:justify-center sm:items-center sm:text-center flex-col p-2  md:p-8">
          <p className="text-xs md:text-lg">I am developing a food-ordering App using react. My app includes
            functionalities such as search, add to cart and rendering a live
            data of swiggy api, and more. </p>

            <p className="text-xs md:text-lg">
              Technologies: React-Vite Tailwind and Redux/Toolkit
            </p>
            < a className="mt-4 text-xs md:text-sm hover:text-red-500 text-center"
              href="https://delicious-food-143.netlify.app/"
              target="_blank"
             
            >
              Link Here 👣{" "}
            </a>
          </div>
        </div>

        <div className="  w-[200px] h-[200px] cursor-pointer relative  md:w-[300px]  md:h-[300px] rounded-2xl ">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src={netflix}
            alt=""
          />
          <div className="w-full h-full absolute inset-0 bg-cyan-400 opacity-0 hover:opacity-100 transition-opacity duration-1000 font-bold text-black ease-in-out rounded-2xl flex sm:justify-center sm:items-center sm:text-center flex-col p-2  md:p-8 ">
          <p className="text-xs md:text-lg">Here is my Netflix clone App using React. My app includes firebase
            authantication where user can sign up and sign out. and to rendering
            data i use TMDB movies API.and more</p>
            <p className="text-xs md:text-lg">Technologies: React-Vite Tailwind and Redux/Toolkit</p>
            < a className="mt-4 text-xs md:text-sm hover:text-red-500 text-center"
              href="https://gregarious-khapse-5445d0.netlify.app/"
              target="_blank"
            >
              Link Here 👣
            </a>
          </div>
        </div>
        <div className="w-[200px] h-[200px] cursor-pointer relative  md:w-[300px]  md:h-[300px] rounded-2xl ">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src={razorpay}
            alt=""
          />
          <div className="w-full h-full absolute inset-0 bg-cyan-400 opacity-0 hover:opacity-100 transition-opacity duration-1000 font-bold text-black ease-in-out rounded-2xl flex sm:justify-center sm:items-center sm:text-center flex-col p-2  md:p-8">
          <p className="text-xs md:text-lg">Here is my Razorpay UI/UX Cloning.</p>
          <p className="text-xs md:text-lg">Technologies: HTML,Tailwind</p>
            < a className="mt-4 text-xs md:text-sm hover:text-red-500 text-center" href="https://razorpay-clone123.netlify.app/" target="_blank">
              Link Here 👣
            </a>
          </div>
        </div>
        <div className="w-[200px] h-[200px] cursor-pointer  md:w-[300px]  md:h-[300px] relative rounded-2xl ">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src={ecomzy}
            alt=""
          />
          <div className="w-full h-full absolute inset-0 bg-cyan-400 opacity-0 hover:opacity-100 transition-opacity duration-1000 font-bold text-black ease-in-out rounded-2xl flex sm:justify-center sm:items-center sm:text-center flex-col p-2  md:p-8">
          <p className="text-xs md:text-lg">Ecomzy App just trying to learn add to cart and remove item by
            specific ID functionalities using React App</p>
            <p className="text-xs md:text-lg">Technologies: React-Vite Tailwind and Redux/Toolkit</p>
            < a className="mt-4 text-xs md:text-sm hover:text-red-500 text-center" href="https://ecomzy-143.netlify.app/" target="_blank">
              Link Here 👣
            </a>
          </div>
        </div>
        <div className="  w-[200px] h-[200px] cursor-pointer  md:w-[300px] relative  md:h-[300px] rounded-2xl ">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src={myntra}
            alt=""
          />
          <div className="w-full h-full absolute inset-0 bg-cyan-400 opacity-0 hover:opacity-100 transition-opacity duration-1000 font-bold text-black ease-in-out rounded-2xl flex sm:justify-center sm:items-center sm:text-center flex-col p-2  md:p-8">
          <p className="text-xs md:text-lg">Here is my Myntra UI/UX Cloning.</p>
            <p className="text-xs md:text-lg">Technologies: HTML, CSS</p>
            < a className="mt-4 text-xs md:text-sm hover:text-red-500 text-center"
              href="https://salendra143.github.io/Myntra_Clone/"
              target="_blank"
            >
              Link Here 👣
            </a>
          </div>
        </div>
        <div className="w-[200px] h-[200px] cursor-pointer  md:w-[300px] relative  md:h-[300px] rounded-2xl ">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src={courses}
            alt=""
          />
          <div className="w-full h-full absolute inset-0 bg-cyan-400 opacity-0 hover:opacity-100 transition-opacity duration-1000 font-bold text-black ease-in-out rounded-2xl flex sm:justify-center sm:items-center sm:text-center flex-col p-2  md:p-8">
          <p className="text-xs md:text-lg">It is a react application for learing a some functionalities.</p> 
          <p className="text-xs md:text-lg">Technologies: React-Vite Tailwind</p>
            < a className="mt-4 text-xs md:text-sm hover:text-red-500 text-center" href="https://top-courses143.netlify.app/" target="_blank">
              Link Here 👣
            </a>
          </div>
        </div>
        <div className="w-[200px] h-[200px] cursor-pointer  md:w-[300px] relative  md:h-[300px] rounded-2xl ">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src={discord}
            alt=""
          />
          <div className="w-full h-full absolute inset-0 bg-cyan-400 opacity-0 hover:opacity-100 transition-opacity duration-1000 font-bold text-black ease-in-out rounded-2xl flex sm:justify-center sm:items-center sm:text-center flex-col p-2  md:p-8">
          <p className="text-xs md:text-lg"> Here is my Discord UI/UX Cloning</p>
          <p className="text-xs md:text-lg">Technologies: HTML,CSS</p>
            < a className="mt-4 text-xs md:text-sm hover:text-red-500 text-center" href="https://discord-talk.netlify.app/" target="_blank">
              Link Here 👣
            </a>
          </div>
        </div>
        <div className="  w-[200px] h-[200px] cursor-pointer relative  md:w-[300px]  md:h-[300px] rounded-2xl ">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src={tours}
            alt=""
          />
          <div className="w-full h-full absolute inset-0 bg-cyan-400 opacity-0 hover:opacity-100 transition-opacity duration-1000 font-bold text-black ease-in-out rounded-2xl flex sm:justify-center sm:items-center sm:text-center flex-col p-2  md:p-8">
          <p className="text-xs md:text-lg">It is a react application for learing a some functionalities.</p>
          <p className="text-xs md:text-lg">Technologies: React-Vite Tailwind</p>
            < a className="mt-4 text-xs md:text-sm hover:text-red-500 text-center" href="https://booking-tour143.netlify.app/" target="_blank">
              Link Here 👣
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
