import React from 'react'
import {all} from "../constants/index";
const All = () => {
  return (
    <div name="All" className='w-full '>
      <div className='text-center my-20 px-10 max-w-[1240px] mx-auto'>
          <div>
          <h1 className='text-3xl md:text-5xl font-bold py-5'>All-In-One Platforms</h1>
           <p className='text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure doloribus eveniet ipsa obcaecati, facere tenetur soluta fugit laborum at acere tenetur soluta fugit laborum at acere tenetur soluta fugit laborum at  minima!</p>
          </div>
           <div className='grid sm:grid-cols-2 md:grid-cols-4 my-20'>
               {
                all.map((items,index)=>(
                    <div key={index} className='  my-10 mx-4'>
                       <div className='flex items-center'>
                       <items.icons className=' w-7 mr-4 text-green-600 '/>
                       <p className='font-bold text-start'>{items.title}</p>
                       </div>
                        <div className='ml-10'>
                           
                            <p className='text-justify'>{items.desc}</p>
                        </div>
                    </div>
                ))
               }
           </div>
      </div>
    </div>
  )
}

export default All
