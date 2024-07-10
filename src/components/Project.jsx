import React from 'react'
import foodapp from '../projectimg/food-app.png'
import youtube from '../projectimg/youtube.png'
import netflix from '../projectimg/netflix.png'
import ecomzy from '../projectimg/ecomzy.png'
import myntra from '../projectimg/Myntra.png.png'
import razorpay from '../projectimg/razorpay.png'
import courses from '../projectimg/courses.png'
import discord from '../projectimg/discord.png'
import tours from '../projectimg/tours.png'


const Project = () => {
  return (
    <div id='project' className=' w-full bg-black  py-5 italic text-white'>
       <div className='relative'>  
    <p className=' text-[10vw] sm:text-[4rem] lg:text-[5rem] italic text-center font-bold relative z-10'>Personal Projects</p>
    <div className='absolute text-transparent w-full -top-1 -left-1 text-stroke z-0'>  
        <p className=' text-[10vw] sm:text-[4rem] lg:text-[5rem] italic text-center font-bold'>Personal Projects</p>
    </div>    
</div>



        <div className=' flex justify-evenly gap-5 px-5 sm:px-20 mx-auto  flex-wrap '>
            <div className='  w-[200px] relative h-[200px] cursor-pointer   md:w-[300px]  md:h-[300px] rounded-2xl '>
                <img className='w-full h-full object-cover rounded-2xl' src={youtube} alt="" />
                <div className='w-full h-full  absolute bg-cyan-400 top-0 opacity-0 hover:opacity-100 transition-opacity duration-1000 font-bold text-black ease-in-out object-cover rounded-2xl flex  justify-center items-center text-center flex-col'>
                I am developing a Video Streaming App using React. My app includes functionalities such as search, live chat, and more.
                <span>Technologies: React-Vite Tailwind and Redux/Toolkit</span>
                <a href="https://my-youtube143.netlify.app/" target="_blank">Link Here 👣 </a>

                    </div>
            </div>
            <div className='w-[200px] h-[200px] cursor-pointer  md:w-[300px] relative  md:h-[300px] rounded-2xl '>
                <img className='w-full h-full object-cover rounded-2xl' src={foodapp} alt="" />
                <div className='w-full h-full absolute bg-cyan-400 top-0 opacity-0 hover:opacity-100 transition-opacity duration-1000 font-bold text-black ease-in-out object-cover rounded-2xl flex justify-center items-center text-center flex-col'>
                I am developing a food-ordering App using react. My app includes functionalities such as search, add to cart  and rendering a live data of swiggy api, and more.
                <span>Technologies: React-Vite Tailwind and Redux/Toolkit</span> <a href="https://delicious-food-143.netlify.app/" target="_blank" className='text-yellow-500'>Link Here 👣 </a></div>

             </div>
            
            <div className='  w-[200px] h-[200px] cursor-pointer relative  md:w-[300px]  md:h-[300px] rounded-2xl '>
                <img className='w-full h-full object-cover rounded-2xl' src={netflix} alt="" />
                <div className='w-full h-full absolute bg-cyan-400 top-0 opacity-0 hover:opacity-100 transition-opacity duration-1000 font-bold text-black ease-in-out object-cover rounded-2xl flex justify-center items-center text-center flex-col'>
                Here is my Netflix clone App using React. My app includes firebase authantication where user can sign up and sign out. and to rendering data i use TMDB movies API.and more
                <span>Technologies: React-Vite Tailwind and Redux/Toolkit</span>
                <a href="https://gregarious-khapse-5445d0.netlify.app/" target="_blank">Link Here 👣</a>
                </div>
            </div>
            <div className='w-[200px] h-[200px] cursor-pointer relative  md:w-[300px]  md:h-[300px] rounded-2xl '>
                <img className='w-full h-full object-cover rounded-2xl' src={razorpay} alt="" />
                <div className='w-full h-full absolute bg-cyan-400 top-0 opacity-0 hover:opacity-100 transition-opacity duration-1000 font-bold text-black ease-in-out object-cover rounded-2xl flex justify-center items-center text-center flex-col'>
                Here is my Razorpay UI/UX Cloning.
                 <span>Technologies: HTML,Tailwind</span>
                 <a href="https://razorpay-clone123.netlify.app/" target="_blank">Link Here 👣</a>  
                </div>
            </div>
            <div className='w-[200px] h-[200px] cursor-pointer  md:w-[300px]  md:h-[300px] relative rounded-2xl '>
                <img className='w-full h-full object-cover rounded-2xl' src={ecomzy} alt="" />
                <div className='w-full h-full absolute bg-cyan-400 top-0 opacity-0 hover:opacity-100 transition-opacity duration-1000 font-bold text-black ease-in-out object-cover rounded-2xl flex justify-center items-center text-center flex-col'>
                  Ecomzy App just trying to  learn add to cart and remove item by specific ID functionalities using React App
                <span>Technologies: React-Vite Tailwind and Redux/Toolkit</span>
                <a href="https://ecomzy-143.netlify.app/" target="_blank">Link Here 👣</a>
                </div>
            </div>
             <div className='  w-[200px] h-[200px] cursor-pointer  md:w-[300px] relative  md:h-[300px] rounded-2xl '>
                <img className='w-full h-full object-cover rounded-2xl' src={myntra} alt="" />
                <div className='w-full h-full absolute bg-cyan-400 top-0 opacity-0 hover:opacity-100 transition-opacity duration-1000 font-bold text-black ease-in-out object-cover rounded-2xl flex justify-center items-center text-center flex-col'>
                Here is my Myntra UI/UX Cloning.
                <span>Technologies: HTML, CSS</span>
                <a href="https://salendra143.github.io/Myntra_Clone/" target="_blank">Link Here 👣</a>
                </div>
            </div>
            <div className='w-[200px] h-[200px] cursor-pointer  md:w-[300px] relative  md:h-[300px] rounded-2xl '>
                <img className='w-full h-full object-cover rounded-2xl' src={courses} alt="" />
                <div className='w-full h-full absolute bg-cyan-400 top-0 opacity-0 hover:opacity-100 transition-opacity duration-1000 font-bold text-black ease-in-out object-cover rounded-2xl flex justify-center items-center text-center flex-col'>
                 It is a  react application for learing a some functionalities.
                <span>Technologies: React-Vite Tailwind</span>
                <a href="https://top-courses143.netlify.app/" target="_blank">Link Here 👣</a></div>
            </div>
            <div className='w-[200px] h-[200px] cursor-pointer  md:w-[300px] relative  md:h-[300px] rounded-2xl '>
                <img className='w-full h-full object-cover rounded-2xl' src={discord} alt="" />
                <div className='w-full h-full absolute bg-cyan-400 top-0 opacity-0 hover:opacity-100 transition-opacity duration-1000 font-bold text-black ease-in-out object-cover rounded-2xl flex justify-center items-center text-center flex-col'>
                Here is my Discord UI/UX Cloning
                 <span>Technologies: HTML,CSS</span>
                 <a href="https://discord-talk.netlify.app/" target="_blank">Link Here 👣</a>  
                </div>
            </div>
             <div className='  w-[200px] h-[200px] cursor-pointer relative  md:w-[300px]  md:h-[300px] rounded-2xl '>
                <img className='w-full h-full object-cover rounded-2xl' src={tours} alt="" />
                <div className='w-full h-full absolute bg-cyan-400 top-0 opacity-0 hover:opacity-100 transition-opacity duration-1000 font-bold text-black ease-in-out object-cover rounded-2xl flex justify-center items-center text-center flex-col'>
                It is a  react application for learing a some functionalities.
                <span>Technologies: React-Vite Tailwind</span>
                <a href="https://booking-tour143.netlify.app/" target="_blank">Link Here 👣</a>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Project