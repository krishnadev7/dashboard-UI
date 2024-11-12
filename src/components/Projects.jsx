import React, { useState } from "react";
import { GrEdit } from "react-icons/gr";
import { IoLink } from "react-icons/io5";
import { GoPlus } from "react-icons/go";
import { LuFilter } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { BsCalendarDate } from "react-icons/bs";
import { GoPeople } from "react-icons/go";
import { BsGrid } from "react-icons/bs";
import { FaPause } from "react-icons/fa6";

import profile1 from "../assets/profile1.jpg";
import profile2 from "../assets/profile2.jpg";
import profile3 from "../assets/profile3.jpg";
import profile4 from "../assets/profile4.jpg";
import TodoList from "./TodoList";
import OnProgessList from "./OnProgessList";
import DoneProjectsList from "./DoneProjectsList";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const Projects = () => {
  const id = useParams();
  const tasks = useSelector((state) => state.tasks);

  // filters
  const [filterStatus, setFilterStatus] = useState("all");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter tasks based on selected status
  const getFilteredTasks = () => {
    switch (filterStatus) {
      case "todo":
        return {
          toDo: tasks.toDo || [],
          onProgress: [],
          completed: [],
        };
      case "inprogress":
        return {
          toDo: [],
          onProgress: tasks.onProgress || [],
          completed: [],
        };
      case "completed":
        return {
          toDo: [],
          onProgress: [],
          completed: tasks.completed || [],
        };
      default:
        return tasks;
    }
  };

  const filteredTasks = getFilteredTasks();

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-col mt-10 px-10">
        <div className="flex items-center justify-between">
          {/* Project Name div */}
          <div className="flex items-center">
            <h1 className="font-semibold text-5xl text-[#0D062D] leading-10">
              project name
            </h1>
            <div className="flex items-center gap-3 pl-5 p-3 rounded-xl ">
              <div className="bg-[#5030E533] p-1 rounded-lg">
                <GrEdit className="text-[#5030E5] text-sm" />
              </div>
              <div className="bg-[#5030E533] p-1 rounded-lg">
                <IoLink className="text-[#5030E5] text-sm" />
              </div>
            </div>
          </div>

          {/* Project members list */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex gap-2 items-center">
              <div className="w-5 h-5 rounded-lg bg-[#5030E533]">
                <GoPlus className="text-[#5030E5] h-5 ml-0.5" />
              </div>
              <span className="font-medium text-base text-[#5030E5]">
                Invite
              </span>
            </div>

            {/* Profile Logos */}
            <div className="flex items-center bg-white rounded-sm">
              <img
                src={profile1}
                alt="profile"
                className="w-9 h-9 object-cover  rounded-full border border-inherit"
              />
              <img
                src={profile2}
                alt="profile"
                className="w-9 h-9 object-cover rounded-full -ml-2 border-inherit border-2"
              />
              <img
                src={profile3}
                alt="profile"
                className="w-9 h-9 object-cover rounded-full -ml-2 border-2"
              />
              <img
                src={profile4}
                alt="profile"
                className="w-9 h-9 object-cover rounded-full -ml-2 border-2"
              />
              <span className="h-9 w-9 rounded-full -ml-2 border-2 bg-[#F4D7DA] text-center py-1.5 font-medium text-sm text-[#D25B68]">
                +2
              </span>
            </div>
          </div>
        </div>

        {/* filter tabs */}
        <div className="flex items-center justify-between mt-10">
          <div className="flex items-center gap-2">
            <div className="relative">
              <button
                className="w-32 h-10 border-2 border-[#787486] rounded-md"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
              >
                <div className="flex items-center text-[#787486] gap-2 px-5 py-2">
                  <LuFilter />
                  <p className="font-medium text-base">
                    {filterStatus === "all" ? "All" : filterStatus}
                  </p>
                  <IoIosArrowDown />
                </div>
              </button>

              {isFilterOpen && (
                <div className="absolute top-12 left-0 w-32 bg-white border border-[#787486] rounded-md shadow-lg z-10">
                  <button
                    className={`w-full px-4 py-2 text-left hover:bg-[#5030E533] ${
                      filterStatus === "all" ? "bg-[#5030E533]" : ""
                    }`}
                    onClick={() => {
                      setFilterStatus("all");
                      setIsFilterOpen(false);
                    }}
                  >
                    All
                  </button>
                  <button
                    className={`w-full px-4 py-2 text-left hover:bg-[#5030E533] ${
                      filterStatus === "todo" ? "bg-[#5030E533]" : ""
                    }`}
                    onClick={() => {
                      setFilterStatus("todo");
                      setIsFilterOpen(false);
                    }}
                  >
                    To Do
                  </button>
                  <button
                    className={`w-full px-4 py-2 text-left hover:bg-[#5030E533] ${
                      filterStatus === "inprogress" ? "bg-[#5030E533]" : ""
                    }`}
                    onClick={() => {
                      setFilterStatus("inprogress");
                      setIsFilterOpen(false);
                    }}
                  >
                    In Progress
                  </button>
                  <button
                    className={`w-full px-4 py-2 text-left hover:bg-[#5030E533] ${
                      filterStatus === "completed" ? "bg-[#5030E533]" : ""
                    }`}
                    onClick={() => {
                      setFilterStatus("completed");
                      setIsFilterOpen(false);
                    }}
                  >
                    Completed
                  </button>
                </div>
              )}
            </div>

            <div className="w-32 h-10  border-2 border-[#787486] rounded-md">
              <div className="flex items-center text-[#787486] gap-2 px-5 py-2">
                <BsCalendarDate />
                <p className="font-medium text-base">Today</p>
                <IoIosArrowDown />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-3">
            <div className="w-24 h-10  border-2 border-[#787486] rounded-md">
              <div className="flex items-center text-[#787486] gap-2 px-3 py-2">
                <GoPeople />
                <p className="font-medium text-base">Share</p>
              </div>
            </div>
            <div className="h-7 border-l border-[#787486] border " />
            <div className="w-10 h-10 rounded-md bg-[#5030E5] flex items-center justify-center">
              <FaPause className="text-white rotate-90 w-5 h-5" />
            </div>
            <BsGrid className="w-5 h-5" />
          </div>
        </div>

        {/* Task list */}
        <div className="flex items-start gap-3 mt-10">
          <TodoList projectDetails={filteredTasks.toDo || []} />
          <OnProgessList projectDetails={filteredTasks.onProgress || []} />
          <DoneProjectsList projectDetails={filteredTasks.completed || []} />
        </div>
      </div>
    </DndProvider>
  );
};

export default Projects;
