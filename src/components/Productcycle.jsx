import React from 'react'

import { workflow } from '../assets/homeinfo';

const Productcycle = () => {
  return (
    <div className=' bg-black/5'>
      <div className='w-11/12 flex flex-col mx-auto'>

        <h1 className=' lg:text-4xl  mx-auto font-medium font-serif mt-10 tracking-wide'>End-to-End <span className=' text-blue-900 underline underline-offset-[1rem]'>SaaS Application &</span> Product Development</h1>
        <div className=' relative flex lg:flex-row flex-col mt-10 p-2 gap-x-2'>
          {
            workflow.map((cycle) => (
              <div className=' mb-10'>
                <div className='  flex justify-center items-center w-fit   p-2'>
                  <div className='flex flex-col w-full mx-auto gap-y-2 mt-5'>
                    {/* <h1 className=' text-center text-lg font-medium text-[#33538d]'>{cycle.step}</h1> */}
                    <p className=' text-sm w-[80%] text-center mx-auto text-[#543A14] font-semibold'>{cycle.process}</p>
                    <div className='flex flex-col gap-y-2 mx-auto items-center mt-5'>
                       <div className='  flex items-center mx-auto gap-x-2'>
                          <div className={`w-20 h-20 rounded-full border flex items-center ${cycle.color}`}>
                            <span className='flex items-center mx-auto'><cycle.icons size={50} color='white' /></span>
                          </div>
                          <div className='hidden lg:block'>
                              <span className={`absolute bottom-[8rem] ${cycle.step == "step-4" && "hidden "} ${cycle.textcolor} font-bold`}><span>-----</span>---------------------------------------------<span className={`${cycle.step == "step-1" && "hidden"}`}>---</span></span>
                          </div>
                       </div>
                      <h1 className={`mx-auto border py-1.5 rounded-md tracking-wide px-6 w-fit ${cycle.color} text-white`}>{cycle.title}</h1>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Productcycle
