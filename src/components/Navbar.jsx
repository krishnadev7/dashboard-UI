import React from "react";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { MdOutlineMarkChatUnread } from "react-icons/md";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import palakJain from "../assets/palak-jain.jpg";

const Navbar = () => {
  return (
    <>
    
    <nav className="flex items-center sticky top-0 z-30 bg-white p-3 pl-10 justify-between border-b border-[#DBDBDB]">
      {/* Search bar */}
      <div className="flex w-1/3 py-2 bg-[#F5F5F5] gap-2 pl-3 ">
        <HiMiniMagnifyingGlass className="text-[#787486] h-[22px] w-[22px]" />
        <input
          type="text"
          placeholder="Search for anything..."
          className="font-normal text-sm bg-[#F5F5F5]"
        />
      </div>

      {/* Notifications  & profile icon*/}
      <div className="flex items-center justify-between gap-5">
        {/* Notification Icons */}
        <div className="flex items-center justify-between gap-5 pr-10">
          <HiOutlineCalendarDays className="w-6 h-6" />
          <MdOutlineMarkChatUnread className="w-6 h-6" />
          <MdOutlineNotificationsActive className="w-6 h-6" />
        </div>

        {/* Profile */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center flex-col">
            <p className="font-normal text-sm text-[#0D062D]">Palak Jain</p>
            <p className="font-normal text-sm text-[#787486]">
              Rajasthan, India
            </p>
          </div>
          <img
            src={palakJain}
            alt="profile pic"
            className="w-[38px] h-[38px] rounded-full object-cover"
          />
          <IoIosArrowDown className="w-[18px] h-[18px]" />
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
