import React from 'react'
import brandIfo from '../Media/brand-logo.svg'
import logo from "../Media/Trello-logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { AiOutlineYoutube } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const socialIcons = [
  { 
    id: 1,
    icon: <FaFacebook />
  },
  { 
    id: 2,
    icon: <FaInstagram /> 
  },
  { 
    id: 3, 
    icon: <CiLinkedin /> 
  },
  { 
    id: 4, 
    icon: <CiTwitter /> 
  },
  { 
    id: 5, 
    icon: <AiOutlineYoutube /> 
  }
];
const sections = [
  {
    title: "About Trello",
    description: "What's behind the boards.",
  },
  {
    title: "Jobs",
    description: "Learn about open roles on the Trello team",
  },
  {
    title: "Apps",
    description: "Learn about the Trello apps",
  },
  {
    title: "Contact Us",
    description: "Get in touch with us",
  },
];


export default function loginFooter() {
   const navigation = useNavigate();
    const hnadleLogin = ()=>{
      navigation('/login')
    }
  return (
    <div>
      <div className='w-[100%]'>
            <div className='w-70% py-16  flex flex-wrap justify-center items-center'>
                <p className='text-xl font-normal'>Join over 2,000,000 teams worldwide that are using Trello to get more done.</p>
                <img src={brandIfo} alt="" />
            </div>
            <div className='w-full py-[100px] bg-gradient-to-r from-purple-500 to-pink-500 relative'>
                <div className='flex flex-wrap justify-center items-center'>
                {/* <input className='px-6 md:px-14 py-2 md:py-3 rounded w-full md:w-auto mb-3 md:mb-0' type="email"placeholder='Email'/> */}
                <button className='bg-blue-700 text-white mx-0 md:mx-3 px-4 md:px-6 py-2 md:py-3 rounded w-full md:w-auto' onClick={hnadleLogin}>Sign up - it's free</button><br />
                </div>
                <div class="absolute top-10 left-6 space-y-4">
                    <div class="bg-cyan-500 font-semibold text-white px-4 py-1 absolute left-10 rounded shadow-md">
                      Operations
                    </div>
                    <div class="bg-pink-500 font-semibold text-white px-10 py-1 top-12 absolute rounded shadow-md">
                      Sales
                    </div>
                    <div class="bg-yellow-500 font-semibold text-white px-8 py-1 left-10  top-[110px] absolute  rounded shadow-md">
                      Design
                    </div>
                </div>
                <div class="absolute top-10 right-2 space-y-4">
                  <div class="bg-green-500 font-semibold text-white px-4 py-1 right-[120px] absolute rounded shadow-md">
                    Marketing
                  </div>
                  <div class="bg-purple-500 font-semibold text-white px-10 py-1 right-14 top-12 absolute rounded shadow-md">
                    Product
                  </div>
                  <div class="bg-blue-500 font-semibold text-white px-4 py-1 right-[120px] top-[110px] absolute rounded shadow-md">
                    Engineering
                  </div>
                </div>  
            </div>
        </div>
        <div className='bg-blue-950'>
          <div className='w-[90%] mx-4 border-b-2 cursor-pointer text-white flex'>
            <div className='w-[18%]'>
              <img className='w-[100%] h-[20vh]' src={logo} alt="Trello Logo" />
            </div>
            {sections.map((section, index) => (
            <div key={index} className='w-[18%] mt-4 flex flex-wrap justify-center items-center h-[15vh] hover:bg-white hover:bg-opacity-50 mx-4 py-3 px-3'>
              <h1 className='font-bold'>{section.title}</h1>
              <p className='text-sm'>{section.description}</p>
            </div>
            ))}
          </div>
          <div className='w-[90%] text-white mx-4 py-4 flex justify-between'>
              <p className='w-[60%]'>Copyright © 2024 Atlassian</p>
              <ul className='flex justify-between w-[30%] list-none'>
                {socialIcons.map(({ id, icon }) => (
                <li key={id} className='w-8 cursor-pointer h-8 p-2 flex justify-center items-center rounded-[50%] border-2 overflow-hidden'>
                  <div className='transition-transform duration-200 hover:scale-75'>
                    {icon}
                  </div>
                </li>
                ))}
              </ul>
            </div>
          <div>

        </div>

      </div>
      
    </div>
  )
}
