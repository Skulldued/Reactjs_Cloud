import React from "react";
import {data} from "../constants/index";
import HeroImg from "../assets/cyber-bg.png";
const Hero = () => {
  return (
    <div name="home" className="w-full  bg-zinc-200 flex flex-col justify-between  py-10 ">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1240px]  md:m-auto">
        <div className="px-2 md:pt-0 pt-12 flex flex-col md:items-start justify-center py-10 md:py-0">
          <p className="text-xl font-semibold">
            Unique Sequencing & Production
          </p>
          <h1 className="text-3xl md:text-6xl font-bold py-3">
            Cloud <br /> Management
          </h1>
          <p className=" font-bold mb-2">This is our Tech Brand</p>
          <button className="sm:w-[40%] lg:w-[50%] py-2">Get Started</button>
        </div>
        <div className="flex justify-center items-center">
          <img src={HeroImg} className="" alt="" />
        </div>
      </div>
      <div className="data-services   max-w-[1024px] py-8 px-6  mx-auto border rounded-md shadow-2xl">
       
          <div>
            <h1 className="text-center font-bold">Data Services</h1>
          </div>
          <div className="grid md:grid-cols-4 mt-5">
            {data.map((items, index) => (
              <div className="flex items-center justify-center " key={index}>
                <items.icons className="text-indigo-600 mx-3 w-8"/>
                <p className="text-[18px]">{items.title}</p>
              </div>
            ))}
          </div>
        </div>
     
    </div>
  );
};

export default Hero;
