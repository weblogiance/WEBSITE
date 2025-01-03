import React, { useEffect, useState } from 'react'
import { AboutCompany, Resources } from '../assets/navbar'
import { FcIdea } from "react-icons/fc";
import { IoIosArrowUp } from 'react-icons/io';


const Abouts = () => {
    const [screen,setscreen] = useState(true)
    const [view,setview] = useState(true)
    const [views,setviews] = useState(true)

   function AboutCompanys(){
      return AboutCompany.map((detail)=>(
        <h1 className='w-full'>{detail}</h1>
       ))
   }

   function ResourcesCompany(){
    return Resources.map((detail)=>(
      <h1 className='w-full'>{detail}</h1>
     ))
 }
  return (
    <div className='lg:absolute relative lg:border lg:right-10 lg:top-14  lg:w-[55rem]   rounded-sm lg:mx-auto lg:shadow-md z-[2] bg-white'>
        <div className='lg:p-10'>
            <div className='flex lg:justify-between max-sm:flex-col gap-x-2'>
                 <div className='flex flex-col lg:gap-y-2 lg:border-r-2 w-full lg:w-[50%] text-start px-5'>
                     <span className={`cursor-pointer group`}>
                            <span className=' max-sm:hidden' onClick={()=>setscreen(true)}>About Company </span>
                            <span className=' lg:hidden border-b-2 py-2 border-dotted flex justify-between items-center group' onClick={()=>setviews(!views)}>About Company <span><IoIosArrowUp className={`${!views &&"rotate-180"}`}/></span> </span>
                            <div className={` ${views ? "hidden":"block"} px-5 lg:hidden`}>
                                  {
                                     AboutCompanys()
                                  }
                            </div>
                     </span>
                     <span className={`cursor-pointer`} onClick={()=>setview(!view)}>
                            <span className=' max-sm:hidden' onClick={()=>setscreen(false)}>Resources</span>
                            <span className=' lg:hidden border-b-2 py-2 border-dotted  flex justify-between items-center' onClick={()=>setview(!view)}>Resources<span><IoIosArrowUp className={`${!view &&"rotate-180"}`}/></span></span>
                            <div className={` ${view ? "hidden":"block"} px-5 lg:hidden`}>
                                  {
                                     ResourcesCompany()
                                  }
                            </div>
                     </span>
                 </div>
                 <div className='w-full  lg:block max-sm:hidden'>
                        <h1 className='px-2 font-medium'>{screen ? "About Company":"Resources"}</h1>
                        <div className={`lg:grid grid-cols-2  flex-col gap-y-2 p-2 hidden`}>
                            {
                                screen ? AboutCompany.map((detail)=>(
                                    <h1 className='w-full '>{detail}</h1>
                                )) : Resources.map((detail)=>(
                                    <h1 className='w-full'>{detail}</h1>
                                ))
                            }
                        </div>
                 </div>
            </div>
            <hr className='mt-8 hidden lg:block'/>
            <div className='hidden lg:block'>
                <div className='flex justify-between mt-8'>
                    <div className='flex items-center'>
                        <span><FcIdea size={50}/></span>
                        <section>
                            <h1 className=' text-2xl font-medium'>We are great place to work certified™</h1>
                            <p className='text-gray-500'>Building and sustaining High-Trust, High-Performance Culture</p>
                        </section>
                    </div>
                    <button className='bg-gray-900 px-3 text-gray-200 rounded-md'>
                        Get Quote
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Abouts