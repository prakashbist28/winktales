import React from "react";


const Footer = () => {
  return (
    <div className="flex flex-row lg:flex-row h-[1/2] border-2 rounded-3xl w-[90%] ml-24 hover:shadow-xl items-center bg-slate-200 pt-4 mb-10 ">
      <div className="w-3/4">
      <h1 className="p-10 items-start text-left">
        <span className=" font-medium font-primary text-xl">
          ©️
        </span>
        <span className=" pl-2 font-primary font-medium">
        Talup 2023. All rights reserved
        </span>
      </h1>
      </div>
      <div className=" space-x-10 flex text-right">
        <a href="#" className=" font-primary font-light underline text-lg "> Terms & Conditions </a>
        <a href="#" className=" font-primary font-light underline text-lg"> Privacy Policy </a>
      </div>
    </div>
  );
};

export default Footer;
