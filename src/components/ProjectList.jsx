import { GoDotFill } from "react-icons/go";
import { BsThreeDots } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

const ProjectList = ({ href, label, status }) => {
  const location = useLocation();

  // Determine if the current path matches the href to set active state
  const isActive = location.pathname === href;

  // Function to pass dot color to Dot icon
  const getDotColor = (status) => {
    switch (status) {
      case "completed":
        return "text-green-500";
      case "onProgress":
        return "text-orange-500";
      case "toDo":
        return "text-blue-500";
      case "red":
        return "text-red-500";
      default:
        return "text-gray-500";
    }
  };
  return (
    <Link to={href}>
      <div
        className={`flex  justify-between items-center max-w-44 ${
          isActive ? "bg-[#5030E514]" : "hover:bg-[#5030E514]"
        } cursor-pointer`}
      >
        <div className="flex gap-2 items-center">
          <GoDotFill className={`${getDotColor(status)}`} />
          <span
            className={`
            text-[16px] font-medium
            ${
              isActive
                ? "text-[#0D062D] font-semibold  "
                : "text-[#787486] font-extrabold"
            }
            group-hover:text-[#0D062D]
          `}
          >
            {label}
          </span>
        </div>
        {isActive && <BsThreeDots className="text-[#0D062D] text-lg" />}
      </div>
    </Link>
  );
};

export default ProjectList;
