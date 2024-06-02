import React from 'react'
import {cardValue} from "../constants/index";
const Pricing = () => {
  return (
    <div name="Pricing" className='w-full my-18 text-white'>
      <div className='w-full   bg-slate-900 mix-blend-overlay'>
         <div className='max-w-[1240px] mx-auto '>
           <div>
           <h2 className='text-center text-2xl md:text-3xl text-gray-500 py-8 '> PRICING</h2>
            <h1 className='text-2xl md:text-5xl font-bold text-center'>
                The right price for your research
            </h1>
            <p className='text-slate-500 my-6 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, at incidunt dolorem non iure adipisci libero esse! Accusantium, dicta vel.</p>
           </div>
             <div className="grid md:grid-cols-2 gap-4">
               {
                cardValue.map((items,index)=>(
                  <div key={index} className='flex justify-center'>
                    <div className='bg-white px-8 py-8 text-black rounded-xl shadow-2xl my-10 max-w-[450px]'>
                            <p className='bg-indigo-500 inline-block px-2 py-1 text-white rounded-full '>{items.title}</p>
                           <div className='flex items-center'>
                           <h1 className='my-5 text-4xl font-bold'>{items.head}  </h1>
                            <span className='text-xl text-gray-400'>{items.month}</span>
                           </div>
                           <p className='font-bold'>{items.desc}</p>
                           <div className='flex items-center'>
                            <items.icons className='text-green-500 my-4 mr-6'/>
                            <p>{items.text}</p>
                           </div>
                           <div className='flex items-center'>
                            <items.icons className='text-green-500 my-4 mr-6'/>
                            <p>{items.text}</p>
                           </div>
                           <div className='flex items-center'>
                            <items.icons className='text-green-500 my-4 mr-6'/>
                            <p>{items.text}</p>
                           </div>
                           <div className='flex items-center'>
                            <items.icons className='text-green-500 my-4 mr-6'/>
                            <p>{items.text}</p>
                           </div>
                           <div className='flex items-center'>
                            <items.icons className='text-green-500 my-4 mr-6'/>
                            <p>{items.text}</p>
                           </div>
                           <button className='px-5 py-2 my-3'>{items.button}</button>
                    </div>
                  </div>
                ))
               }
             </div>
         </div>
      </div>
    </div>
  )
}

export default Pricing
