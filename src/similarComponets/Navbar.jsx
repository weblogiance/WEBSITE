import React, { useState } from 'react'
import { IoReorderThreeSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import Abouts from '../subcomponets/Abouts';
import Services from '../subcomponets/Services';
import { Link } from 'react-router-dom';
import { IoIosArrowUp } from 'react-icons/io';

const Navbar = () => {
    const [show,setshow] = useState(false)
    // const [about,setabout] = useState(false)
  return (
    <div className=''>
        <div className=' fixed top-0 w-full bg-black z-[999] shadow-sm border-b-0 text-white shadow-white'>
            <div className='  w-10/12 flex justify-between items-center mx-auto'>
                <Link to="/">logo</Link>
                <div className='relative max-sm:group '>
                    <div className=' lg:hidden'><IoReorderThreeSharp size={55} onClick={()=>setshow(true)}/></div>
                    <nav className={`max-sm:fixed max-sm:h-screen lg:relative flex flex-col top-0 lg:w-full  max-sm:shadow-md transition-all duration-300 ease-in-out  p-5 gap-y-7 mx-auto ${show ? "block motion-translate-x-in-[200%] motion-translate-y-in-[-1%] motion-blur-in-[10px] motion-duration-[0.59s] motion-delay-[0.16s] motion-duration-[0.60s]/translate motion-delay-[0.05s]/translate":"hidden"} lg:block rounded-sm right-0 w-[80%]  `}>
                        <div className='flex justify-between items-center lg:hidden'>
                            <span>Logo</span>
                            <span><IoMdClose size={45} onClick={()=>setshow(false)}/></span>
                        </div>
                        <div className='flex max-md:flex-col lg:flex items-start  justify-center text-xl w-full cursor-pointer  gap-x-10'>
                            <div className=' relative w-full group'>
                                <span className='group-hover:text-blue-500 transition-all duration-200 ease-linear w-full flex max-sm:border-x-0 max-sm:border-2 max-sm:py-2 px-1 justify-between items-center group'>About <span><IoIosArrowUp className=' group-hover:rotate-180 lg:hidden'/></span></span>
                                <div className='lg:absolute invisible max-sm:hidden max-sm:group-hover:block group-hover:visible -top-1.5 -right-[20rem] transition-all duration-[25ms] ease-linear max-sm:duration-1000'>
                                    <Abouts/>
                                </div>
                            </div>
                          
                            <div className=' relative w-full group'>
                                <span className='group-hover:text-blue-500 transition-all duration-200 ease-linear flex max-sm:border-b-2 max-sm:py-2 px-1 justify-between items-center group'>Services<span><IoIosArrowUp className=' group-hover:rotate-180 lg:hidden'/></span></span>
                                <div className='lg:absolute invisible max-sm:hidden max-sm:group-hover:block group-hover:visible -top-1.5 -right-[20rem] transition-all duration-200 ease-linear max-sm:duration-1000'>
                                    <Services/>
                                </div>
                            </div>
                            <span className=' hover:text-blue-500 w-full transition-all duration-200 delay-150 flex max-sm:border-b-2 max-sm:py-2 px-1'>Technology</span>
                            <Link to="/Contactus" className=' hover:text-blue-500 w-full transition-all duration-200 delay-150 flex max-sm:border-b-2 max-sm:py-2 px-1'>
                                <span >Contact</span>
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Navbar