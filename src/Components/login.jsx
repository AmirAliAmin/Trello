import React, {useState} from 'react'
import './login.css'
import UI from '../Media/TrelloUICollage.webp'
import { IoPlayCircleOutline } from "react-icons/io5";
import board from '../Media/Carousel_Image_Boards_2x.webp'
import list from '../Media/Carousel_Image_Lists_2x.webp'
import card from '../Media/Carousel_Image_Cards_2x.webp'
import { useNavigate } from 'react-router-dom';
import LoginNavbar from "../Components/LoginNavbar"; // Optional
import LoginFooter from "../Components/loginFooter.jsx";


export default function login() {
  const [selectImage, setSelectImage] = useState(board)
  const navigation = useNavigate();
  const hnadleLogin = ()=>{
    navigation('/login')
  }
  return (
    <div>
        {/* Optional Navbar */}
        <LoginNavbar />
        <div className="custom-shape-divider-bottom-1735215481">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
    </svg>
</div>
      <div className='main-div w-full text-white h-auto
       flex flex-col md:flex-row'>
        <div className='w-full md:w-1/2 h-auto my-[50px] md:my-[100px] mx-4 md:mx-8 flex flex-wrap items-center'>
        <div className='w-full md:w-[90%] my-6 mx-10 md:my-10'>
          <h1 className='font-medium text-3xl md:text-5xl'>Trello brings all your tasks, teammates, and tools together</h1>
          <p className='text-lg md:text-xl my-4 md:my-6'>Keep everything in the same place—even if your team isn’t.</p>
        </div>
      <div className='mt-6 md:bottom-4 mx-10 md:absolute'>
        {/* <input className='px-3 pr-20 text-black py-3 rounded w-full md:w-auto mb-3 md:mb-0' type="email"placeholder='Email'/> */}
        <button className='bg-blue-700 lg:mx-0 md:mx-3  px-4 md:px-6 py-2 md:py-3 rounded w-full md:w-auto' onClick={hnadleLogin}>Sign up - it's free</button><br />
        <button className='hover:bg-black hover:opacity-50 underline pr-6  py-4 my-2 w-full md:w-auto flex justify-center items-center'>Watch Video <IoPlayCircleOutline className='ml-1 text-xl' /></button>
      </div>
    </div>
    <div className='w-full md:w-1/2 mt-[80px]'>
      <div className='mt-4 md:my-2 relative'>
        <img src={UI} alt="UI Screenshot" className='w-full md:w-auto' />
      </div>
    </div>
    
    </div>
    <div className='mt-[200px]'>
      <div className='text-black w-1/2 mx-10'>
        <h2 className='text-4xl font-semibold'>A productivity powerhouse</h2>
        <p className='text-xl mt-10 font-normal'>Simple, flexible, and powerful. All it takes are boards, lists, and cards to get a clear view of who’s doing what and what needs to get done. Learn more in our guide for getting started.</p>
      </div>
      <div className='flex w-[90%] mt-4'>
        <div className='w-[35%] mx-10'>
          <div className='w-full mt-5 border-l-8 cursor-pointer hover:shadow-lg rounded-lg border-blue-500 p-3' onClick={()=> setSelectImage(board)}>
            <h1 className='font-bold'>Boards</h1>
            <p className='font-normal mt-2'>Trello board keep the task organized and work moving forward. In a glance , see everything from "Thing to do" to "aww yeah, we did it</p>
          </div>
          <div className='w-full mt-5 cursor-pointer rounded-lg hover:shadow-lg  border-l-8 border-blue-500 p-3' onClick={()=>setSelectImage(list)}>
          <h1 className='font-bold'>Lists</h1>
          <p className='font-normal mt-2'>Trello board keep the task organized and work moving forward.  In a glance , see everything from "Thing to do" to "aww yeah, we did it</p>
          </div>
          <div className='w-full mt-5 cursor-pointer rounded-lg hover:shadow-lg  border-l-8 border-blue-500 p-3' onClick={()=>setSelectImage(card)}>
          <h1 className='font-bold'>Cards</h1>
          <p className='font-normal mt-2'>Trello board keep the task organized and work moving forward. In a glance , see everything from "Thing to do" to "aww yeah, we did it</p>

          </div>

        </div>
        <div className='w-[65%] '>
          <div className=''>
            <img src={selectImage} alt="" />
          </div>
        
        </div>
      </div>
    </div>
    {/* Optional Footer */}
    <LoginFooter />

    </div>
  )
}
