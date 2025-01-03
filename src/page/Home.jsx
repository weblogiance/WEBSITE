import React from 'react'
import software from "../assets/image/softwarehome.png"
import Ai from "../assets/image/aihome.webp"
import Servicesofcompany from '../components/Servicesofcompany'
import cloud from '../assets/image/cloud-computing2.jpg'
import { IoIosArrowRoundForward } from "react-icons/io";
import Review from '../components/Review';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Btnbutton from '../costomComponets/Btnbutton';
import { Autoplay } from 'swiper/modules'
import Success from '../components/Success'
import Productcycle from '../components/Productcycle'
import wecome from "../assets/image/wecome1.jpg"

const Home = () => {
  return (
    <div>
      <div>
        <div className='relative mt-[4rem] max-sm:-top-4'>
          <Swiper 
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }} 
            loop={true}
            speed={15}
            modules={[Autoplay]}
            // className="mySwiper" 
          >
            <SwiperSlide>
              <div className='relative'>
                <img src={wecome} alt="Cloud Computing" className='w-full h-[90vh] max-sm:h-[70vh] object-cover ' />
                <div className='absolute flex flex-col gap-y-5 bg-black/40 py-8 text-white top-[25%] max-sm:-top-10 w-full left-[50%] -translate-x-[50%] translate-y-[50%]'>
                  <h1 className='mx-auto text-4xl font-bold text-stone-200 tracking-wide max-sm:text-2xl'>Welcome to Weblogiance</h1>
                  <h1 className='text-lg text-green-300 w-fit mx-auto font-medium px-5 py-2 rounded-md tracking-wide max-sm:text-center'>"Welcome to weblogiance, where technology meets innovation to drive your success. We're excited to partner with you on creating cutting-edge software solutions that transform ideas into reality."</h1>
                  {/* <Btnbutton text="Book Appointment" icons={<IoIosArrowRoundForward size={35} />} link="/Contactus" />  */}
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='relative'>
                <img src={cloud} alt="Cloud Computing" className='w-full h-[90vh] max-sm:h-[70vh] object-cover' />
                <div className='absolute flex flex-col gap-y-5 bg-black/40 py-8 text-white top-[25%] max-sm:-top-10 w-full left-[50%] -translate-x-[50%] translate-y-[50%]'>
                  <h1 className='mx-auto text-4xl font-bold text-stone-200 tracking-wide max-sm:text-2xl'>Cloud Computing Services</h1>
                  <h1 className='text-lg text-green-300 w-fit mx-auto font-medium px-5 py-2 rounded-md tracking-wide max-sm:text-center'>Optimize, Scale, and Automate with Weblogiance Technologies Cloud Computing Expertise</h1>
                  <Btnbutton text="Book Appointment" icons={<IoIosArrowRoundForward size={35} />} link="/Contactus" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='relative'>
                <img src={Ai} alt="AI & Machine Learning" className='w-full h-[90vh] max-sm:h-[70vh] object-cover' />
                <div className='absolute flex flex-col gap-y-5 bg-black/40 py-8 text-white top-[25%] max-sm:-top-10 w-full left-[50%] -translate-x-[50%] translate-y-[50%]'>
                  <h1 className='mx-auto text-4xl font-bold text-stone-200 tracking-wide max-sm:text-2xl'>AI & Machine Learning</h1>
                  <h1 className='text-lg text-green-300 w-fit mx-auto font-medium px-5 py-2 rounded-md tracking-wide max-sm:text-center'>Optimize, Scale, and Automate with Weblogiance Technologies</h1>
                  <Btnbutton text="Book Appointment" icons={<IoIosArrowRoundForward size={35} />} link="/Contactus" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='relative'>
                <img src={software} alt="Custom Software Development" className='w-full h-[90vh] max-sm:h-[70vh] object-cover' />
                <div className='absolute flex flex-col gap-y-5 bg-black/40 py-8 text-white top-[25%] w-full left-[50%] max-sm:-top-10 -translate-x-[50%] translate-y-[50%]'>
                  <h1 className='mx-auto text-4xl font-bold text-stone-200 tracking-wide max-sm:text-xl'>Custom Software Development</h1>
                  <h1 className='text-lg text-green-300 w-fit mx-auto font-medium px-5 py-2 rounded-md tracking-wide max-sm:text-center'>Empower Your Teams and Transform Operations with Our Custom Software Development</h1>
                  <Btnbutton text="Book Appointment" icons={<IoIosArrowRoundForward size={35} />} link="/Contactus" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div>
             <Success />
        </div>
        <Productcycle />
        <Servicesofcompany />
        <Review />
      </div>
    </div>
  )
}

export default Home;
