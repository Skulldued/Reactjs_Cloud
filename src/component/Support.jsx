import React from 'react';
import support from "../assets/support.jpg";
import { supportText } from "../constants/index";

const Support = () => {
  return (
    <div name="Support" className='w-full '>
      <div className="w-full h-[700px] bg-gray-900/90 absolute">
        <img src={support} className='w-full h-full object-cover mix-blend-overlay' alt="Support Background" />
      </div>
      <div className='text-white relative max-w-[1240px] mx-auto'>
        <div className='px-4 py-12'>
          <h2 className='pt-8 text-slate-300 text-2xl text-center uppercase'>Support</h2>
          <h3 className='text-5xl text-center font-bold py-5'>Finding the right team</h3>
          <p className='py-4 text-xl text-slate-300 text-center'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex soluta harum eos sunt a assumenda vitae accusamus perspiciatis et maiores esse, inventore nobis fugiat cupiditate nulla ipsam nihil libero atque totam fugit voluptates. Hic commodi obcaecati id saepe assumenda laudantium.
          </p>
        </div>
      </div>
      <div className="relative max-w-[1240px] mx-auto">
        <div className="grid md:grid-cols-3 gap-x-4 my-8 px-4">
          {
            supportText.map((item, index) => (
              <div key={index} className='my-5'>
                <div className='shadow-xl  bg-white border p-8'>
                  <item.icons className='w-12 h-12 absolute top-[-15px] bg-indigo-600 p-2 text-white rounded-xl' />
                  <h3 className='text-2xl font-bold'>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
                <div className='flex items-center gap-4 p-2 bg-slate-100 cursor-pointer'>
                  <p className='text-indigo-500 mb-0'>{item.contact}</p>
                 <item.arrow className='text-indigo-500 mb-0'/>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Support;
