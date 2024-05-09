import React from "react";
import { useState } from "react";


import {Link} from 'react-router-dom'
import { TiInputChecked } from "react-icons/ti";
import { TiThMenu } from "react-icons/ti";
import Brand from '../assets/Brand.svg'

const Navbar = () => {
  const [select, setselect] = useState(null);
  let [open, setOpen] = useState(false);

  

  return (
    <nav className="flex flex-col md:flex-row fixed w-[95%] h-[10%] justify-between border-[2px] m-8 pb-5 items-center border-slate-200 rounded-full bg-white z-[10] shadow-xl">
      <div className="flex ml-10 mt-5 flex-row justify-between">
        <div className="flex flex-row">
          <img src={Brand} alt="error"/>
        </div>
        <button onClick={() => setOpen(!open)}>
          <TiThMenu
            name={open ? "close" : "menu"}
            className="text-blue-400 text-[40px] md:hidden"
          />
        </button>
      </div>

      <div
        className={`order-last absolute w-full text-center md:text-justify md:w-auto left-0 shadow-blue-400 md:static flex-col md:flex-row md:z-auto z-[10] bg-white font-semibold flex gap-8 mt-5 text-[12px] md:text-[24px] lg:text-[30px] mr-20 transition-all duration-500 ease-in `}
      >
        <Link
          to="/register"
          className="  rounded-full border-[2px] border-slate-200 bg-white text-black text-[20px] p-4 font-primary font-light cursor-pointer text-center hover:cursor-pointer hover:bg-slate-300 transition-colors duration-200 ease-linear "
        >
          <button
          >
            Get Projects
          </button>
        </Link>

        <Link
          to="/services" 
          className="  rounded-full border-[2px] border-slate-200 bg-black text-white text-[20px] p-4 font-primary font-light cursor-pointer text-center hover:cursor-pointer hover:bg-slate-800 transition-colors duration-200 ease-linear "
        >
          <button>
            Onboard Talent
          </button>
        </Link>
     
       
      </div>
    </nav>
  );
};

export default Navbar;
