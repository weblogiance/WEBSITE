import React from 'react'
import { Link } from 'react-router-dom'

const Btnbutton = ({text,link,icons}) => {
  return (
    <div>
        <Link to={link}>
            <button type="button" className='flex items-center gap-x-2 mx-auto bg-orange-400 py-2 px-5 rounded-lg text-yellow-950 text-lg font-bold hover:opacity-80 transition-all duration-200 ease-in-out'>
            {text} <span>{icons}</span>
            </button>
        </Link>
    </div>
  )
}

export default Btnbutton
