import React, { useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";

const CreateProjectDialog = ({ isOpen, onClose }) => {
  const [projectData, setProjectData] = useState({
    title: "",
    description: "",
    status: "todo",
  });

  const dispatch = useDispatch();

  const statusOptions = [
    { value: "toDo", label: "To Do", color: "bg-blue-500" },
    { value: "onProgress", label: "In Progress", color: "bg-yellow-500" },
    { value: "completed", label: "Completed", color: "bg-green-500" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      title: projectData.title,
      description: projectData.description,
      status: projectData.status,
    };

    dispatch(addTask({ task: newTask, section: newTask.status }));

    // Reset form fields
    setProjectData({
      title: "",
      description: "",
      status: "toDo", // reset to default status
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0  backdrop-blur-sm z-50" onClick={onClose} />

      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-xl shadow-lg z-50 border-2 border-black">
        <div className="flex items-center justify-between p-6 border-b border-[#DBDBDB]">
          <h2 className="text-lg font-semibold text-[#0D062D]">
            Create New Project
          </h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-[#F5F5F5] rounded-full transition-colors"
          >
            <FaWindowClose className="w-5 h-5 text-[#787486]" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-[#0D062D]">
              Project Name
            </label>
            <input
              type="text"
              required
              value={projectData.title}
              onChange={(e) =>
                setProjectData({ ...projectData, title: e.target.value })
              }
              className="w-full px-4 py-2.5 border border-[#DBDBDB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D062D]/20"
              placeholder="Enter project name"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-[#0D062D]">
              Description
            </label>
            <textarea
              value={projectData.description}
              onChange={(e) =>
                setProjectData({ ...projectData, description: e.target.value })
              }
              className="w-full px-4 py-2.5 border border-[#DBDBDB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D062D]/20"
              placeholder="Enter project description"
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-[#0D062D]">
              Status
            </label>
            <div className="grid grid-cols-3 gap-3">
              {statusOptions.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() =>
                    setProjectData({ ...projectData, status: option.value })
                  }
                  className={`flex items-center justify-center px-4 py-2 rounded-lg border transition-all ${
                    projectData.status === option.value
                      ? "border-[#0D062D] bg-[#0D062D] text-white"
                      : "border-[#DBDBDB] hover:bg-[#F5F5F5]"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${option.color}`} />
                    <span className="text-sm font-medium">{option.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-end space-x-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-[#787486] bg-white border border-[#DBDBDB] rounded-lg hover:bg-[#F5F5F5]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-[#0D062D] rounded-lg hover:bg-[#0D062D]/90"
            >
              Create Project
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateProjectDialog;
