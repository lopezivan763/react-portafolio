import React from 'react'
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='flex justify-center shadow-gray-400 m-2 p-4'>
      <div className="flex justify-between pt-6 max-w-[130px] w-full">
          <a className='cursor-pointer hover:scale-110 ease-in duration-300' href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="cursor-pointer " size={20} />
        </a>
        <a className='cursor-pointer hover:scale-110 ease-in duration-300' href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn className="cursor-pointer" size={20} />
        </a>
        <a className='cursor-pointer hover:scale-110 ease-in duration-300' href="https://github.com/lopezivan763" target="_blank" rel="noopener noreferrer">
          <FaGithub className="cursor-pointer" size={20} />
        </a>
          </div>
    </div>
  )
}

export default Footer
