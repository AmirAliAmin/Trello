import React,{useState} from 'react'
import logo from '../Media/Trello-logo.png';
import { FaAngleDown } from "react-icons/fa6";
// import { CiSearch } from "react-icons/ci";
export default function Header() {
  const [showDiv, setShowDiv] = useState(false);
  const [showDiv1, setShowDiv1] = useState(false);
  const [showDiv2, setShowDiv2] = useState(false);


  const toggleDiv = ()=>{
    setShowDiv((prev) => !prev);
    setShowDiv1(false);
    setShowDiv2(false);
  }
  const toggleDiv1 = ()=>{
    setShowDiv1((prev) => !prev);
    setShowDiv(false);
    setShowDiv2(false);
  }
  const toggleDiv2 = ()=>{
    setShowDiv2((prev) => !prev);
    setShowDiv(false);
    setShowDiv1(false);

  }
  return (
    <div>
        <div className='flex justify-between items-center h-[10vh] header p-3 bg-[#7D2650]'>
           <div className='w-[50%] h-full flex'>
              <img  className='w-[10%]' src={logo} alt="img not found" />
            <ul className='flex justify-between font-medium text-white items-center h-full w-[70%] '>
              <li className='flex items-center px-3 py-1 cursor-pointer  hover:bg-[#ffffff8e]'>workspace <FaAngleDown /></li>
              <li className='flex items-center px-3 py-1 cursor-pointer hover:bg-[#ffffff8e]'  onClick={toggleDiv}>Recent <FaAngleDown /></li>
              <li className='flex items-center px-3 py-1 cursor-pointer hover:bg-[#ffffff8e]' onClick={toggleDiv1}>starred <FaAngleDown /></li>
              <li className='flex items-center px-3 py-1 cursor-pointer hover:bg-[#ffffff8e]'>More <FaAngleDown /></li>
              <li className='flex items-center px-3 py-1 rounded-md cursor-pointer bg-[#ffffff8e]' onClick={toggleDiv2}>+</li>
            </ul>
           </div>
           <div className='w-50%'>
            <input className='bg-[#ffffff9b] placeholder-white focus:outline-none  p-1 pr-8 rounded-md' type="text" placeholder=' Search' />
           </div>
        </div>
        {
          showDiv && <div className='absolute left-[200px] w-[20%] p-3 rounded-md  bg-white'>
          <div className=' w-full'>
            <ul>
            <li className='w-full p-3 hover:bg-[#a93131b0] cursor-pointer relative before:content-[""] before:w-6 before:h-6 before:bg-purple-950 before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 pl-6'>My Trello board</li>
            <li className='w-full p-3 hover:bg-[#892828b0] cursor-pointer relative before:content-[""] before:w-6 before:h-6 before:bg-purple-950 before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 pl-6 mt-3'>my Trello board</li>
            </ul>
          </div>
        </div>
        }
        {
          showDiv1 && <div className='absolute left-[290px] w-[20%] p-3 rounded-md  bg-white'>
          <div className=' w-full flex justify-center items-center text-center'>
          Star important boards to access them quickly and easily.
          </div>
        </div>
        }
         {
          showDiv2 && <div className='absolute left-[470px] w-[26%] p-3 rounded-md  bg-white'>
          <div className=' w-full '>
          <div>
            <h1 className='font-medium'>Create board</h1>
            <p className='text-sm text-gray-500'>A borad is made up of cards order on lists.Use it to manage project,tack information, or organize anything </p>
          </div>
          </div>
        </div>
        }
        
    </div>
  )
}
