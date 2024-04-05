import React from "react";
import googlelogo from "../assets/googlelogo.jpg";
import { IoSearchSharp } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { BiHelpCircle } from "react-icons/bi";
import { IoMdSettings } from "react-icons/io";
import { PiDotsNineBold } from "react-icons/pi";
import { FaCircleUser } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="border-b border-gray-300">
      <div className="mx-4 my-3 flex  sm:flex-row items-center justify-between">
        <div className="flex items-center mb-3 sm:mb-0">
          <a href={googlelogo}>
            <img src={googlelogo} className="h-15 w-20" alt="Google Logo" />
          </a>
          <div className="text-gray-700 text-xl ml-2 self-center">News</div>
        </div>

        <div className="flex items-center mb-3 sm:mb-0">
          <div className="flex flex-row py-3 bg-gray-100 rounded gap-2">
            <IoSearchSharp className="size-5 text-gray-500" />
            <input
              className="bg-gray-100 w-40 sm:w-96"
              type="text"
              placeholder="Search for topics, locations & sources"
            />
            <IoMdArrowDropdown className="size-6 text-gray-500" />
          </div>
        </div>

        <div className="flex items-center mb-3 sm:mb-0">
          <div className="flex gap-6">
            <BiHelpCircle className="size-6 text-gray-700" />
            <IoMdSettings className="size-6 text-gray-700" />
          </div>
        </div>

        <div className="flex items-center">
          <div className="flex gap-5">
            <PiDotsNineBold className="text-gray-700 size-6" />
            <FaCircleUser className="text-gray-500 size-8" />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-2 sm:gap-2 md:gap-3 lg:gap-4 xl:gap-6 text-gray-500 text-sm font-semibold font-sans my-2">
        <div className="px-2 py-1">Home</div>
        <div className="px-2 py-1">For you</div>
        <div className="px-2 py-1">Following</div>
        <div className="px-2 py-1">News Showcase</div>
        <div className="px-2 py-1">India</div>
        <div className="px-2 py-1">World</div>
        <div className="px-2 py-1">Local</div>
        <div className="px-2 py-1">Business</div>
        <div className="px-2 py-1">Technology</div>
        <div className="px-2 py-1">Entertainment</div>
        <div className="px-2 py-1">Sports</div>
        <div className="px-2 py-1">Science</div>
        <div className="px-2 py-1">Health</div>
      </div>
    </div>
  );
};

export default Navbar;
