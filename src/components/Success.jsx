import React, { useState } from 'react'
import { successOfweblogiance } from '../assets/homeinfo'
import about from "../assets/image/about.png"
import way from '../assets/image/success.jpg'
import square from "../assets/image/square.webp"
import mutisquare from "../assets/image/mutiplesquare.webp"
import square1 from "../assets/image/square1.webp"
import CountUp from 'react-countup';

const Success = () => {
     return (
          <div className=' mt-10 mb-32'>
               <div className=' w-11/12 flex  flex-col mx-auto lg:gap-y-24 '>
                    <div className='flex flex-col justify-between items-center mx-auto lg:flex-row-reverse gap-x-2 p-5 w-full'>
                         <div className=' relative'>
                              <img src={about} alt="" className=' max-w-[400px] lg:max-w-[600px] ' />
                              <div className=' absolute -bottom-[5rem] right-0 -z-[1] rotate-[45deg]'>
                                   <img src={square1} alt="" width={50} />
                              </div>
                         </div>
                         <div className=' relative flex gap-y-5 flex-col my-auto w-fit'>
                              <div className=' absolute -z-[1] -top-10 -left-10 rotate-12'>
                                   <img src={mutisquare} alt="" width={45} />
                              </div>
                              <h1 className=' lg:text-3xl text-2xl mt-5 font-medium tracking-wide'> <span className=' text-[#1998E0] underline underline-offset-[1rem] font-bold'>About</span> Weblogiance Technologices</h1>
                              <span className=' lg:w-[85%] w-full text-lg text-zinc-600 mt-5'>
                                   weblogiance Technologices was “born” out of the desire to bring the top and finest Android and iOS engineers from around the world together to develop specialized, unique, and technologically advanced mobile apps for the world’s leading brands, enterprises, startups, and businesses.
                              </span>
                              <span className=' lg:w-[85%] w-full text-zinc-600 text-lg'>
                                   We have the “Get Things Done” culture at our workplace. There are no excuses, no if’s or but’s in our dictionary. Our passion for work has won us many awards, year after year.
                              </span>
                              <span className=' lg:w-[85%] w-full text-zinc-600 text-lg'>
                                   With development centers in India & business in United States, Canada, United Kingdom and Australia etc, we take pride in building long-term relationships with our clients and working to help them attain their business goals.
                              </span>
                         </div>
                    </div>
                    <div className=' relative flex lg:justify-between max-sm:flex-col w-full  items-center mx-auto p-2 gap-x-28  '>
                         {/* image section  */}
                         <div className='  rounded-xl overflow-hidden w-full max-w-[450px] lg:max-w-[640px] '>
                              <img src={way} alt="" className=' max-w-[450px] lg:max-w-[700px] ' />
                              <div className=' absolute -bottom-30 -z-[1] rotate-12'>
                                  <img src={square} alt="" className='w-[240px]' />
                              </div>
                         </div>
                         {/* completed projecte of company   */}
                         <div className='flex flex-col w-full'>
                              <div className=' flex flex-col gap-y-5'>
                                   <h1 className=' text-center lg:text-4xl text-2xl mt-5 font-semibold '>Our Comapany <span className=' text-[#1998E0] underline underline-offset-8'>success</span></h1>
                                   <p className=' text-xs lg:text-sm lg:w-[80%] w-full mb-3 text-center mx-auto tracking-wide text-zinc-700 font-semibold'>software build wasn't built in a day, but with consistent effort, strategic planning, and a dedication to quality service, our company has steadily grown to become a leader in the industry.</p>
                              </div>
                              <div className=' grid lg:grid-cols-2 max-sm:mt-10 mt-2 gap-y-2 gap-x-2 text-white w-full items-center '>
                                   {
                                        successOfweblogiance.map((weblogiance) => (
                                             <div className={`flex flex-col text-center py-5 bg-[#1998E0] rounded-md`}>
                                                  <CountUp start={0} end={weblogiance.count} suffix={weblogiance.suffix} duration={weblogiance.duration} style={{ fontSize: "2.3rem" }} enableScrollSpy={true} />
                                                  <h1 className=' text-2xl font-medium font-serif tracking-wide'>{weblogiance.title}</h1>
                                             </div>
                                        ))
                                   }
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Success
