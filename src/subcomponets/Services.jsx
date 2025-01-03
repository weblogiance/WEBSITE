import React, { useState } from 'react'
import { AboutCompany, Models, Resources, works } from '../assets/navbar'
import { VscSymbolProperty } from "react-icons/vsc";
import { FcIdea } from "react-icons/fc";


const Services = () => {
    const [view, setview] = useState(true)
    return (
        <div className='lg:absolute relative lg:border lg:right-10 lg:top-14  lg:w-[55rem]  bg-white text-black rounded-sm lg:mx-auto lg:shadow-md'>
            <div className='lg:p-10'>
                <div className='flex lg:justify-between max-sm:flex-col gap-x-2 w-full'>
                    <div className='flex w-full '>
                        <div className=' flex gap-x-2 justify-between w-full'>
                            {/* Engagement Models  */}
                            <div>
                                <h1 className=' text-xl font-medium'>Engagement Models</h1>
                                <p className=' text-sm text-gray-500 w-[95%]  opacity-70'>Hiring Software Developers becomes easier with just a few clicks.</p>
                                <section className='flex flex-col gap-y-2 mt-5'>
                                    
                                    {
                                        Models.map((service)=>(
                                            <div className='flex flex-col'>
                                                 <div className=' text-lg font-medium'>{service.title}</div>
                                                 <p className=' text-sm'>{service.decscription}</p>
                                            </div>
                                        ))
                                    }
                                </section>
                            </div>
                                 {/* Number of service  */}
                            <div className='flex w-[55%] flex-col gap-y-2 overflow-y-scroll h-[245px] scroll-smooth'>
                                
                                {
                                    works.map((service)=>(
                                        <div className='w-full'>
                                            <ul className='w-full'>
                                                <li className='flex hover:bg-orange-500 hover:text-white rounded-md justify-between px-2 items-center text-gray-500 text-lg w-full'><p>{service}</p><span><VscSymbolProperty/></span></li>
                                            </ul>
                                        </div>
                                    ))
                                }
                           
                        </div>
                        </div>
                    </div>
                </div>
                <hr className='mt-8 hidden lg:block' />
                <div className='hidden lg:block w-full'>
                    <div className='flex justify-between mt-8'>
                        <div className='flex items-center w-[75%]'>
                            <span><FcIdea size={50} /></span>
                            <section className='w-full'>
                                <h1 className=' text-2xl font-medium w-full'>High-quality, Cost-effective IT Outsourcing</h1>
                                <p className='text-gray-500 w-full'>Schedule a free discovery session to explore your needs and find tailored solutions with no obligation.</p>
                            </section>
                        </div>
                        <div className=' my-auto w-[30%]'>
                            <button className='bg-gray-900 py-3 px-5  text-gray-200 rounded-md '>
                                Explore All Services
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services