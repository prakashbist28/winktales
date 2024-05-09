import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { fadeIn } from "../Variants";
import main from "../assets/mainimg.svg";
import spark from "../assets/sparkle.svg"
import jet from "../assets/jet.svg"
import Card from "../Data/Sliderdata"

const About = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
  
  };

  return (
    <div className="flex flex-col mt-60  ">
      <div className="flex flex-col ">
        <h1 className=" font-tertiary text-3xl md:text-4xl lg:text-6xl text-center justify-center text-green-600">
          Success stories
        </h1>
        <h1 className="flex flex-col text-4xl md:text-6xl lg:text-8xl text-center pt-8 font-primary font-medium gap-4">
          <span>Every success journey</span> <span>we’ve encountered.</span>
        </h1>
      </div>

      <div className=" flex flex-col lg:flex-row gap-20 lg:gap-0 mt-40">

       <div className=" relative w-full lg:w-1/2">
        <motion.img
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          src={main}
          className=" lg:w-[60%] h-[60%] rounded-[60px] lg:h-auto  float-right "
        />
        <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
         className=" p-10 shadow-md hover:shadow-xl hover:shadow-black/20 rounded-[35px] bg-white absolute top-[60px] left-[180px] w-[360px] cursor-pointer">
          <img src={spark} alt="error" className="absolute w-[120px] top-[-20px] left-10" />
          <h1 className=" font-semibold text-8xl ">
            40%
           </h1>
           <h1 className="text-2xl text-gray-500 font-primary  mt-8">
           Achieved reduction in project execution time by optimising team availability
           </h1>
        </motion.div>

        <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
         className="shadow-lg hover:shadow-xl hover:shadow-black/20 p-2 rounded-full bg-white absolute bottom-[40px] left-[220px] w-[360px] cursor-pointer">
          <div className=" flex flex-row gap-2">
            <div className="w-1/4 p-2">
              <div className="bg-slate-200 rounded-[100%] h-[70px] w-[70px] flex items-center justify-center">
          <img src={jet} alt="error" className="w-[35px] h-[35px]  " />
          </div>
          </div>

          <div>
          <h1 className=" font-semibold text-4xl ">
            10 DAYS
           </h1>
           <h1 className="text-2xl text-gray-500 font-primary pt-2">
           Staff Deployment
           </h1>
           </div>
           
           </div>
        </motion.div>
        
        <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
         className="border-2 border-green-900 shadow-lg hover:shadow-xl hover:shadow-black/20 p-10 rounded-[35px] bg-black absolute bottom-[-50px] right-[-100px] w-[400px]">
          <h1 className=" space-x-4  cursor-pointer">
          <span className="text-6xl hover:text-green-200 text-white font-primary font-medium">$ 0.5</span> 
          <span className="text-3xl hover:text-gray-300 font-primary text-green-100">MILLION</span>
           </h1>
           <h1 className="text-2xl hover:text-gray-300 font-primary text-green-100 mt-8">
           Reduced client expenses by saving on hiring and employee costs.
           </h1>
        </motion.div>
        </div>


      <div className="w-[50%]">
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col h-[100%] m-[20px] lg:mt-[150px] md:m-[80px] "
        >
          <Slider {...settings} className="">
            {Card.map((i) => (
          <div>
          <h1 className="text-3xl text-left md:text-5xl lg:text-6xl font-medium font-primary  pl-60  ">
            {i.text}
          </h1>
          </div>
            ))
}
          </Slider>
          <a
            href="#"
            target="_blank"
            className=" mt-32"
          >
            <button className="border-2 font-medium border-black hover:bg-white hover:text-black text-white text-[12px] rounded-full p-6 md:text-[20px] bg-black transition-colors duration-200 ease-in ">
              <div className=" space-x-3 ">
              <span className="font-primary font-semibold">Explore more </span>  
              <span className="items-center font-extrabold ">🠖</span>
              </div>
            </button>
          </a>
          </motion.div>
          
        
        </div>
      </div>
    </div>
  );
};

export default About;
