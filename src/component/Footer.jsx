import React from "react";
import { footerValue } from "../constants/index";

const Footer = () => {
  return (
    <div name="Footer" className="w-full  border-t-[0.5px] bg-slate-900 mix-blend-overlay text-white">
      <div className="max-w-[1240px] py-10 mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          {footerValue.map((items, index) => (
            <div
              key={index}
              className={`${index === 4 ? "lg:col-span-2" : ""} px-4`}
            >
              <h2 className="text-white font-bold text-[18px] mb-4">
                {items.head}
              </h2>
              <ul className="text-white">
                {items.value.map((valueItem, valueIndex) => (
                  <li key={valueIndex} className="mb-2 my-2 px-0">
                    {valueItem}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="py-10 text-white px-6">
              <h1 className="">SUBSCRIBLE TO OUR CHANNEL</h1>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
              <input type="email" placeholder="Email Here" className="px-4 py-1 my-2 w-full" />
              <button className="w-full py-1">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
