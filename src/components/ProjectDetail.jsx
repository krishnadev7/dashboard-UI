import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { LuFile } from "react-icons/lu";

import profile1 from "../assets/profile1.jpg";
import profile2 from "../assets/profile2.jpg";
import profile3 from "../assets/profile3.jpg";

const ProjectDetail = ({project}) => {
  
  return (
    <div className="flex flex-col bg-white w-80 rounded-xl p-5 mb-2">
      <div className="flex justify-between items-center">
        <span className="w-9 h-6 rounded-md bg-[#DFA87433] text-[#D58D49] text-center font-medium text-sm">
          Low
        </span>
        <BsThreeDots className="font-extrabold text-base text-[#0D062D]" />
      </div>

      <div className="flex flex-col gap-1 mt-2">
        <h1 className="font-semibold text-lg text-[#0D062D]">{project ? project.title : "Branstorming"}</h1>
        <p className="font-normal text-xs text-[#787486]">
          {project ? project.description : "description"}{" "}
        </p>
      </div>

      <div className="flex justify-between gap-5 mt-5">
        <div className="flex items-center bg-white rounded-sm">
          <img
            src={profile1}
            alt="profile"
            className="w-6 h-6 object-cover  rounded-full border border-inherit"
          />
          <img
            src={profile2}
            alt="profile"
            className="w-6 h-6 object-cover bg-black rounded-full -ml-2 border-inherit border-2"
          />
          <img
            src={profile3}
            alt="profile"
            className="w-6 h-6 object-cover bg-black rounded-full -ml-2 border-2"
          />
        </div>

        <div className="flex items-center justify-between gap-2 font-medium text-xs text-[#787486]">
          <span className="flex items-center gap-1">
            <IoChatboxEllipsesOutline className="w-4 h-4" /> 3 comments
          </span>
          <span className="flex items-center gap-1">
            <LuFile className="w-4 h-4" /> 0 files
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
