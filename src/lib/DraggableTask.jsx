import { useDrag } from "react-dnd";
import { useDispatch } from "react-redux";
import ProjectDetail from "../components/ProjectDetail";

// Draggable Task Component
export const DraggableTask = ({ project, listType }) => {
  const dispatch = useDispatch();

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "TASK",
    item: { id: project.id, fromSection: listType },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`w-[90%] bg-white rounded-2xl p-5 cursor-move transition-colors duration-300 border-2 border-dashed ${
        isDragging ? "bg-[#5030E50F] border-[#5030E596]" : "border-transparent"
      }`}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <ProjectDetail project={project} />
    </div>
  );
};
