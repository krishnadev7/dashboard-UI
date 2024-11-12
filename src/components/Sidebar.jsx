import React, { useEffect, useState } from "react";
import dashboardLogo from "../assets/dashboard.png";
import SidebarLinks from "./SidebarLinks";
import ProjectList from "./ProjectList";
import Project from "../../projects.json";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { BiMessageSquareDots } from "react-icons/bi";
import { FaTasks } from "react-icons/fa";
import { GoPeople } from "react-icons/go";
import { SlSettings } from "react-icons/sl";
import { MdOutlineAddBox } from "react-icons/md";
import { BsFillLightbulbFill } from "react-icons/bs";
import CreateProjectDialog from "./CreateProjectDialog";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const tasks = useSelector((state) => state.tasks)
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [projects,setProjects] = useState([]);

  useEffect(() => {
    // Only load from localStorage if tasks is empty
    if (tasks.toDo.length === 0 && tasks.onProgress.length === 0 && tasks.completed.length === 0) {
      const storedProjects = localStorage.getItem('tasks');
      if (storedProjects) {
        const parsedProjects = JSON.parse(storedProjects);
        setProjects([...parsedProjects.toDo, ...parsedProjects.onProgress, ...parsedProjects.completed]);
      }
    } else {
      // Use Redux state if it's populated
      setProjects([...tasks.toDo, ...tasks.onProgress, ...tasks.completed]);
    }
  }, [tasks]);

  

  return (
    <div className="fixed flex-col h-full justify-between w-56 border-r border-[#DBDBDB] ">
      <div className="flex items-center justify-between p-5">
        <div className="flex items-center gap-2 text-[#0D062D] font-semibold text-xl leading-6 font-sans">
          <img src={dashboardLogo} alt="logo" className="w-4 h-4" />
          Project M.
        </div>
        <div>
          <MdOutlineKeyboardDoubleArrowLeft className="text-[#787486] h-6 w-6" />
        </div>
      </div>

      <div className="border-b border-[#DBDBDB]" />

      {/* Sidebar Links */}
      <nav className="pt-6 pl-5 flex flex-col gap-6 ">
        <SidebarLinks label="Home" href="/" icon={<RxDashboard />} />
        <SidebarLinks
          label="Messages"
          href="/messages"
          icon={<BiMessageSquareDots />}
        />
        <SidebarLinks label="Tasks" href="/tasks" icon={<FaTasks />} />
        <SidebarLinks label="Members" href="/members" icon={<GoPeople />} />
        <SidebarLinks label="Settings" href="/settings" icon={<SlSettings />} />
      </nav>

      <div className="border-b pt-8 border-[#DBDBDB] mx-auto max-w-48 " />

      {/* Project List */}
      <div className="flex flex-col pt-6  gap-3 px-5">
        <div className="flex items-center justify-between max-w-44">
          <p className="font-bold text-xs leading-3 text-[#787486]">
            MY PROJECTS
          </p>
          <MdOutlineAddBox
            className="w-4 h-4 text-[#787486]"
            onClick={() => setIsDialogOpen(true)}
          />
        </div>
        <div className="pt-1 gap-5 flex flex-col w-full">
          {projects.map((project) => (
            <ProjectList
              key={project.id}
              href={`/projects/${project.id}`}
              label={project.title}
              status={project.status}
            />
          ))}
        </div>
      </div>

      {/* Message Box */}
      <div className="flex flex-col items-center mt-5 ">
        <div className="w-[50px] h-[50px] rounded-full bg-[#F5F5F5] -mb-5 z-10 flex items-center">
          <BsFillLightbulbFill className="m-4 text-yellow-500" />
        </div>
        <div className="w-[180px] h-[160px] bg-[#F5F5F5] rounded-lg">
          <p className="pt-5 text-center font-medium text-sm">Thoughts Time</p>
          <p className="pt-2 p-2 text-center text-xs text-[#787486]">
            We don’t have any notice for you, till then you can share your
            thoughts with your peers.
            <div className="bg-[#FFFFFF] px-2.5 py-2 mt-1">
              <p className="font-medium text-sm text-[#000000]">
                Write a message
              </p>
            </div>
          </p>
        </div>
      </div>

      {/* Project Creation Dialog */}
      <CreateProjectDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </div>
  );
};

export default Sidebar;
