import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full my-32 px-8">
      <div className="max-w-[1240px] mx-auto   py-4 px-6">
        <div className="text-center">
          <h1 className="font-bold text-2xl md:text-5xl">
            Trusted by developers <br /> across the world{" "}
          </h1>
          <p className="text-2xl py-5 text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            consequuntur sequi cumque! Optio assumenda ipsum ratione, possimus
            sint voluptatum sapiente.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-1 my-10 text-center">
          <div className="border shadow-xl py-6 px-5  rounded-xl">
            <h1 className="text-indigo-900 font-bold text-6xl">100%</h1>
            <p className="text-gray-400">Completion</p>
          </div>
          <div className="border shadow-xl py-6 px-5  rounded-xl">
            <h1 className="text-indigo-900 font-bold text-6xl">24/7</h1>
            <p className="text-gray-400">Delivery</p>
          </div>
          <div className="border shadow-xl py-6 px-5  rounded-xl">
            <h1 className="text-indigo-900 font-bold text-6xl">100k</h1>
            <p className="text-gray-400">Transactions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
