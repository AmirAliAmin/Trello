import React from "react";
import logo from "../Media/Trello-logo.png";
import { useNavigate } from 'react-router-dom';

export default function LoginNavbar() {
  const navigation = useNavigate();
  const hnadleLogin = ()=>{
    navigation('/login')
  }
  return (
    <div className="w-full h-[11vh] bg-white hover:shadow-xl flex justify-between fixed z-10">
      <div className="w-[8%] h-full">
        <img src={logo} alt="Trello Logo" className="h-full object-contain" />
      </div>
      <div className="w-[70%] h-full flex justify-start">
        <ul className="flex justify-between items-center text-md w-full sm:w-2/3">
          <li className="cursor-pointer hover:text-blue-500">Feature</li>
          <li className="cursor-pointer hover:text-blue-500">Solutions</li>
          <li className="cursor-pointer hover:text-blue-500">Plans</li>
          <li className="cursor-pointer hover:text-blue-500">Pricing</li>
          <li className="cursor-pointer hover:text-blue-500">Resources</li>
        </ul>
      </div>
      <div className="w-[21%] h-full flex justify-end ml-3 navbtn">
        <button className="text-lg font-medium hidden sm:block" onClick={hnadleLogin}>Login</button>
        <button className="bg-blue-600 text-white text-lg font-medium px-6 h-full">
          Get Trello for free
        </button>
      </div>
    </div>
  );
}
