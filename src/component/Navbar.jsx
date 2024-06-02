import React, { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { Link, animateScroll as scroll } from "react-scroll";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleButton = () => {
    setToggle(!toggle);
  };
  return (
    <div className="w-full bg-[#191919] px-8 py-4 h-[70px] text-white fixed top-0">
      <div className="flex items-center justify-between">
        <div className="logo">
          <h2 className="sm:text-xl md:text-2xl">Brands</h2>
        </div>
        <div className="">
          <ul className="hidden  md:flex items-center">
            <li className="cursor-pointer">
              <Link to="Hero" smooth={true} offset={50} duration={500}>Home</Link>
            </li>
            <li className="cursor-pointer">
              <Link to="About" smooth={true} offset={50} duration={500}>About</Link>
            </li>
            <li className="cursor-pointer">
              <Link to="Support" smooth={true} offset={50} duration={500}>Support</Link>
            </li>
            <li className="cursor-pointer">
              <Link to="All" smooth={true} offset={50} duration={500}>Platforms</Link>
            </li>
            <li className="cursor-pointer">
              <Link to="Footer" smooth={true} offset={50} duration={500}>Pricing</Link>
            </li>
          </ul>
        </div>
        <div className="hidden  md:flex ">
          <button className="px-3 py-1">Sign In</button>
          <button className="ml-5 px-3 py-1">Sign Up</button>
        </div>
        <div className="md:hidden flex  " onClick={handleButton}>
          {toggle ? <CiMenuFries size={"25px"} /> : <RxCross2 size={"25px"} />}
        </div>
      </div>

      <ul
        className={
          !toggle
            ? "md:hidden flex bg-black w-full absolute left-0 top-14  flex-col items-center"
            : "hidden"
        }
      >
        <li className="py-2 border-b-2 border-zinc-300 w-full text-center">
          Home
        </li>
        <li className="py-2 border-b-2 border-zinc-300 w-full text-center">
          About
        </li>
        <li className="py-2 border-b-2 border-zinc-300 w-full text-center">
          Support
        </li>
        <li className="py-2 border-b-2 border-zinc-300 w-full text-center">
          Platforms
        </li>
        <li className="py-2 border-b-2 border-zinc-300 w-full text-center">
          Pricing
        </li>
        <div className="md:hidden flex flex-col w-full px-3 my-2">
          <button className="px-3 bg-transparent my-2 py-2 w-full">
            Sign In
          </button>
          <button className=" px-3 py-2">Sign Up</button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
