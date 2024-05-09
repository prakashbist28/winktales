import React, { useEffect, useState } from 'react'
import Brand from '../assets/Brand.svg'
import success from '../assets/success.svg'
import { Link, Navigate } from 'react-router-dom'
const Success = () => {

    const [redirect, setRedirect] = useState(false);
  const [timer, setTimer] = useState(5);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      setRedirect(true);
    }
  }, [timer]);

  if (redirect) {
    return <Navigate to="/" />;
  }


  return (
    
    <div className='p-10 '>
        <div className='flex flex-row justify-between'>
        <img src={Brand} alt="error"/>
        </div>
        <div className='flex flex-col items-center pt-20'>
        <img src={success} alt="error" className=' w-28 '/>
        <div className='pt-10 w-50% flex flex-col items-center'>
        <h1 className=" font-tertiary text-3xl md:text-4xl lg:text-4xl text-center justify-center text-green-600">
          Success Submitted
        </h1>
        <h1 className="flex flex-col text-3xl md:text-4xl lg:text-6xl text-center pt-8 font-primary font-medium gap-4">
          Congratulations
        </h1>
        <h1 className="flex w-1/2 flex-col text-lg md:text-2xl lg:text-4xl text-center pt-8 font-primary text-slate-500 font-light gap-4">
        Your request has been successfully submitted to us. We will validate your information and reach out to your shortly with updates
        </h1>
        <p className='font-primary font-light text-xl pt-[200px] '>Redirecting you to Homepage in <span className='font-bold text-2xl'>{timer} Seconds</span></p>
        </div>
        </div>
    </div>
  )
}

export default Success