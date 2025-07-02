import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from '../Media/login1.jpeg';
import img2 from '../Media/login2.jpeg';
import logo from '../Media/logo.jpeg';
import { FaCircleExclamation } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { FaMicrosoft } from "react-icons/fa6";
import { FaApple } from "react-icons/fa";
import { SiSlack } from "react-icons/si";

const continueApp = [
  {
    logo:<FcGoogle />,
    p:'Google'
  },
  {
    logo:<FaMicrosoft />,
    p:'Microsoft'
  },
  {
    logo:<FaApple />,
    p:'Apple'
  },
  {
    logo:<SiSlack />,
    p:'Slack'
  }
] 


function LoginPage({ setIsAuthenticated }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'amir' && password === '123') {
      setIsAuthenticated(true);
      navigate('/home');
    } else {
      if (username === '' || password === '') {
        setIsError('Please fill in all fields');
        return;
      }
      setIsError('Invalid credentials');
    }
  };

  return (
    <div className="flex flex-col items-center  h-screen bg-gray-100 relative">
      <div className='absolute right-[50px] bottom-7 w-[25%]'>
        <img className='w-[100%]' src={img1} alt="" />
      </div>
      <div className="bg-white p-4 mt-8 rounded shadow-md w-80 ">
        <img src={logo} className='w-10 h-8 absolute mx-14 mt-2' alt="" />
        <h2 className="text-3xl font-bold mb-4 mx-[100px]">Trello</h2>
        <p className='mx-[90px] font-extralight text-[11px] mb-4'>login to continue</p>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 w-full mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full mb-4 focus:inline"
        />
        {isError && <p className="text-red-500 mb-4 text-[13px]">{isError}</p>}
        <div className='text-[13px] flex w-[45%] justify-between items-center mb-2'>
          <input type="checkbox" /><p >Remember me</p><FaCircleExclamation />
        </div>

        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white p-2 w-full rounded"
        >
          Login
        </button>
        <p className='mx-[100px] font-sans text-sm mb-4 mt-2'>or continue:</p>
        <div className=''>
          {
            continueApp.map((curElem,index) =>(
              <div key={index} className="w-[100%] h-[6vh] border mb-3 flex justify-center items-center space-x-2">
                <span>{curElem.logo}</span>
                <p>{curElem.p}</p>


              </div>
            ))
          }

        </div>
      </div>
      <div className='absolute left-[50px] bottom-7 w-[25%]'>
        <img className='w-[100%]' src={img2} alt="" />
      </div>
    </div>
  );
}

export default LoginPage;
