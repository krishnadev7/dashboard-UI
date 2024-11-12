import React from "react";

const SidebarLinks = ({ href, label, icon }) => {
  return (
    <div className="text-base leading-5 font-medium text-[#787486] flex gap-2">
      {icon}
      {label}
    </div>
  );
};

export default SidebarLinks;
