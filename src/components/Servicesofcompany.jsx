import React, { useState } from 'react'
import { serviceInfo, serviceIndescription } from '../assets/homeinfo'



const Servicesofcompany = () => {
  const [view, setview] = useState("Web Development")
  return (
    <div>
      <div>
        <div className=' w-11/12 mx-auto mt-10 mb-10'>
          <h1 className=' text-4xl text-center font-medium'>OUR COMPANY <span className=' text-[#1998E0] underline underline-offset-8'>SERVICE</span></h1>
          <div className={`grid grid-cols-1 lg:grid-cols-4 gap-y-3 gap-x-3 mt-10 mb-5 select-none cursor-pointer`}>
            {
              serviceInfo.map((data) => (
                <div key={data.header} onClick={() => setview(data.header)}>
                  <div className={`flex flex-col w-full text-center items-center font-serif justify-center mx-auto  
          ${data.header === view ? "bg-[#378abb] text-white" : "bg-white text-black"} 
          shadow-md border p-2 rounded-md transition-all duration-300 gap-y-3`}>
                    <span><data.icon size={45} /></span>
                    <h1 className='text-xl w-full font-medium tracking-wide'>{data.header}</h1>
                  </div>
                </div>
              ))
            }
          </div>
          <div className=' flex flex-col  gap-y-5 mt-10  px-4 py-5  hover:text-white transition-all duration-200 ease-linear rounded-md'>
            {
              serviceIndescription.map((info) => (
                info.title === view && <div className=' relative flex max-sm:flex-col-reverse  gap-y-5 lg:justify-between mx-auto gap-x-10'>
                  <div className={`w-full flex max-sm:flex-col gap-y-5 rounded-3xl max-sm:rounded-xl items-center justify-center gap-x-16 ${info.backgroundImage} bg-center bg-cover`}>
                    <h1 className=' text-start max-sm:text-2xl font-bold text-4xl mt-8  text-[#1998E0] -motion-translate-x-in-[50%] -motion-translate-y-in-[-1%] motion-blur-in-[10px] motion-duration-[0.67s]/blur motion-delay-[0.04s]/blur'>{info.title}</h1>
                    <p className='  max-sm:text-center rounded-md lg:w-[60%] leading-8 bg-gray-800/50 text-white p-4 mt-5 mb-5'>{info.description}</p>
                  </div>
                  <div className=' overflow-hidden  outline outline-offset-0 lg:w-[600px] lg:h-[300px]  outline-[#1998E0] rounded-2xl'>
                    <img src={info.image} alt={info.title} srcset="" className='bg-cover lg:w-[600px] lg:h-[300px] object-cover fiel' />
                  </div>

                </div>
              ))
            }
          </div>

        </div>
      </div>
    </div>
  )
}

export default Servicesofcompany