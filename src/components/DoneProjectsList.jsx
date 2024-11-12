import React from "react";
import { GoDotFill } from "react-icons/go";
import ProjectDetail from "./ProjectDetail";
import { DroppableList } from "../lib/DroppableList";

const DoneProjectsList = ({ projectDetails }) => {
  return (
    <DroppableList listType="completed" projectDetails={projectDetails}>
      <div className="flex items-center justify-between gap-1 p-4">
        <div className="flex items-center justify-between gap-2">
          <GoDotFill className="text-[#8BC48A]" />
          <h3 className="text-base font-medium">Done</h3>
          <span className="w-5 h-5 py-0.5 rounded-full bg-[#E0E0E0] text-center text-xs font-medium text-[#625F6D]">
            3
          </span>
        </div>
      </div>

      <div className="border-t border-[#8BC48A] border-4 mx-5 mt-2" />

      {/* <div className="mt-5 flex flex-col items-center justify-between gap-2">
        {projectDetails.map((project, index) => (
          <ProjectDetail key={project.id || index} project={project} />
        ))}
      </div> */}
    </DroppableList>
  );
};

export default DoneProjectsList;
