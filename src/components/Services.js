import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";
import Questions from '../Data/Questionsdata'


const Services = () => {
  const [openState, setOpenState] = useState({});

  const toggleQuestion = (index) => {
    setOpenState(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  return (
   <div className="w-full">
    <div className="flex flex-col lg:bg-white bg-white pl-1 lg:pl-0 lg:items-center mt-[200px]  ">
      <div className="flex flex-col pt-4 items-center gap-4 ">
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col lg:flex-row  h-[100%] m-[30px] p-14 border-4 bg-green-100/50 border-green-100/50 hover:shadow-xl  duration-200 rounded-[60px]"
        >
          <div className="w-1/2">
            <div className="p-20 flex flex-col ">
              <h1 className=" font-tertiary text-gray-400 text-5xl">What’s on your mind</h1>
              <h1 className=" font-primary text-8xl font-medium"> Ask Questions </h1>
            </div>
            <div className="relative pt-10">
            <div className=" rounded-full w-28 h-28 ml-20 bg-green-200/60 absolute top-[-50px]">
            </div>
            <div className=" rounded-full w-40 h-40 ml-35 bg-green-200/60   absolute top-[150px]">
            </div>
            <div className=" rounded-full w-28 h-28 ml-20 bg-green-200/60  absolute left-[150px] ">
            </div>
            </div>
          </div>

          <div className="w-1/2 pt-10">
            {Questions.map((question, index) => (
              <div className="flex flex-row items-center justify-between border-b-2 border-slate-300" key={index}>
                <div className="lg:w-2/3 w-full justify-between py-10 flex flex-col">
                  <p className="py-2 overflow-hidden font-primary font-semibold text-[12px] md:text-[16px] lg:text-2xl">
                    {question.ques}
                  </p>
                  {openState[index] && (
                    <motion.p
                    variants={fadeIn("up", 0.1)}
                    initial="hidden"
                   whileInView={"show"}
                   viewport={{ once: false, amount: 0.1 }}
                     className="py-2 overflow-hidden font-primary text-gray-500 text-[14px] md:text-2xl lg:text-[20px] w-5/6 ">
                      {question.ans}
                    </motion.p>
                  )}
                </div>
                <div className="flex justify-center rounded-full w-10 h-10 hover:bg-slate-200">
                  <button className="absolute  text-4xl font-primary font-bold " onClick={() => toggleQuestion(index)}>
                    {openState[index] ? '-' : '+'}
                  </button>
                </div>
                <div className="border-2"></div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    
    </div>
    </div>
  );
};

export default Services;
