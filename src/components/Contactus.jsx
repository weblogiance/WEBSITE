import React from 'react'
import { GoCommentDiscussion } from "react-icons/go";
import { BsShieldLockFill } from "react-icons/bs";
import { GiShakingHands } from "react-icons/gi";

const Contactus = () => {
  return (
    <div className='mt-[4.4rem]'>
        <div className=" bg-mapImage ">  
             <div className='w-full bg-black/90 py-14'>
                <div className=' relative w-11/12 flex flex-col lg:flex-row mx-auto gap-x-10'>
                    <form className='w-full flex flex-col gap-y-2'>
                            <div>

                                <h1 className=' text-3xl font-medium text-center text-orange-500 my-3'>What do you want to achieve?</h1>
                            </div>
                            <label>
                                <p className=' text-lg font-medium text-white px-1.5'>Name</p>
                                <input type="text" placeholder='Enter Your Name' className='w-full p-1.5 rounded-md outline-none'/>
                            </label>
                            <label>
                                <p className=' text-lg font-medium text-white px-1.5'>Email</p>
                                <input type="email" placeholder='Enter Your Email address' className='w-full p-1.5 rounded-md outline-none'/>
                            </label>
                            <label>
                                <p className=' text-lg font-medium text-white px-1.5'>Phone No</p>
                                <input type="tel" placeholder='Enter Your Phone Number' className='w-full p-1.5 rounded-md outline-none'/>
                            </label>
                            <label>
                                <p className=' text-lg font-medium text-white px-1.5'>Message</p>
                                <textarea rows={10} placeholder='Your Important message For Company' className='w-full p-1.5 rounded-md outline-none'/>
                            </label>
                            <div className=' w-full bg-orange-400 rounded-md p-1.5 text-center text-white font-semibold '>
                                <button type="submit">Submit</button>
                            </div>
                    </form>
                    <div className='mb-10 flex flex-col lg:flex-row-reverse w-full view'>
                         <div className='lg:absolute  -top-20 bg-white rounded-lg flex flex-col items-center p-10 mt-10 gap-y-2 hover:origin-bottom max-sm:hover:rotate-12 duration-200 transition-all ease-linear lg:w-[35%] border lg:hover:z-[2] lg:hover:scale-105  '>
                              <span><GoCommentDiscussion size={70} color='orange'/></span>
                              <h1 className=' text-xl font-medium'>Time Management </h1>
                              <p className='text-center'>Ensure timely responses through live chat, emails, or calls.inquiries quickly and efficiently to demonstrate that their time is valued.</p>
                         </div>
                         <div className='lg:absolute border z-[1] top-20 right-44 bg-white rounded-lg flex flex-col items-center p-10 mt-10 gap-y-2 hover:origin-bottom max-sm:hover:-rotate-12  duration-200 transition-all ease-linear lg:w-[35%] lg:hover:scale-105 '>
                              <span><BsShieldLockFill size={70} color='orange'/></span>
                              <h1 className=' text-xl font-medium'>Personal Details Security</h1>
                              <p className='text-center'>We guarantee at most security of your personal information. We will not share your contact details with anyone and will not spam or cold call using the details that you provide. Your information privacy is our priority.</p>
                         </div>
                         <div className='lg:absolute border -bottom-10 bg-white rounded-lg flex flex-col items-center p-10 mt-10 gap-y-2 hover:origin-bottom max-sm:hover:rotate-12  duration-200 transition-all ease-linear lg:w-[35%] lg:hover:z-[2] lg:hover:scale-105  '>
                              <span><GiShakingHands size={70} color='orange'/></span>
                              <h1 className=' text-xl font-medium'>Thank You</h1>
                              <p className='text-center'>Thank you for showing interest in working with us. Your trust is our greatest asset, and we are committed to ensuring that you feel confident and valued throughout this journey. We are dedicated to providing exceptional support tailored to your needs, ensuring you have an outstanding experience with us.</p>
                         </div>
                    </div>
                </div>
             </div>
        </div>
    </div>
  )
}

export default Contactus