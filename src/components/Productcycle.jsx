import React from 'react'
import { GiArcheryTarget } from "react-icons/gi";

const Productcycle = () => {
  return (
    <div className=' bg-black/5'>
        <div className='w-11/12 flex flex-col mx-auto'>
             <h1 className=' text-4xl mx-auto font-medium '>End-to-End SaaS Application & Product Development</h1>
             <div className='flex justify-center items-center border w-fit'>
                 <div className='flex flex-col w-full mx-auto'>
                     
                     <h1 className=' text-center'>Step-1</h1>
                     <p className=' text-sm w-[60%] text-center mx-auto'>We shape brands through exploration, applying in-depth research to challenge assumptions at every turn.</p>
                     <div className=' mx-auto'>
                        <div className='w-20 h-20 rounded-full border flex items-center bg-[#1998E0]'>
                            <span className='flex items-center mx-auto'><GiArcheryTarget size={50} color='white'/></span>
                        </div>
                        <h1 className=' mx-auto border py-1 px-8 w-fit bg-[#36aef3] text-white'>Examine</h1>
                     </div>
                 </div>
             </div>
        </div>
    </div>
  )
}

export default Productcycle
