import React, { useState } from 'react'
import Brand from '../assets/Brand.svg'
import { MdOutlineCancel } from "react-icons/md";
import { Link, Navigate } from 'react-router-dom'

function Register() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false)
  
    const handleLogin = (e) => {
        e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          setError('Please enter a valid email address.');
        } else if (password === '') {
          setError('Please enter the password.');
        } else {
          setError('');
          setSuccess(true)
        }
    };

  return (
    <div className='p-10'>
        {success && <Navigate to='/success' replace={true}></Navigate> }
        <div className='flex flex-row justify-between'>
        <img src={Brand} alt="error"/>
        <Link to='/'>
        <div className=' border-2 border-slate-400 rounded-full flex items-center justify-center w-16 h-16 hover:bg-slate-900 hover:text-white transition-colors duration-200 ease-linear'>
            <button className='text-4xl font-primary font-light'> X </button>
        </div>
        </Link>
        </div>

        <div className='pt-20 w-50% flex flex-col items-center'>
        <h1 className=" font-tertiary text-3xl md:text-4xl lg:text-4xl text-center justify-center text-green-600">
          Registration Form
        </h1>
        <h1 className="flex flex-col text-3xl md:text-4xl lg:text-6xl text-center pt-8 font-primary font-medium gap-4">
          <span>Start your success </span> <span>Journey here!</span>
        </h1>

        <div className='pt-10 w-[23%] '>
      
      <form onSubmit={handleLogin} noValidate>
        <div >
          <input
            type="email"
            id="email"
            className='text-xl p-5 border-2 w-full  rounded-[60px] bg-slate-100  font-primary'
            value={email}
            placeholder='Enter your Name'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='pt-10'>
          <input
            type="password"
            id="password"
            className='text-xl p-5 border-2 w-full  rounded-[60px] bg-slate-100  font-primary'
            value={password}
            placeholder='Enter your Password'
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button type="submit" className='text-xl p-5 border-2 w-full  rounded-[60px] bg-slate-200 mt-10 hover:bg-black hover:text-white font-primary transition-colors duration-200 ease-linear'>Submit</button>
        
      </form>
      
    </div>
        
        </div>
    </div>
  )
}

export default Register