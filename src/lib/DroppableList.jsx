import { useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import { moveTask } from "../redux/taskSlice";
import { DraggableTask } from "./DraggableTask";

// Droppable List Component
export const DroppableList = ({ children, listType, projectDetails }) => {
  const dispatch = useDispatch();

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "TASK",
    drop: (item) => {
      if (item.fromSection !== listType) {
        dispatch(
          moveTask({
            taskId: item.id,
            fromSection: item.fromSection,
            toSection: listType,
          })
        );
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`flex flex-col w-2/5 min-h-[500px] bg-[#F5F5F5] rounded-2xl ${
        isOver ? "bg-opacity-70" : ""
      }`}
    >
      {children}
      <div className="mt-5 flex flex-col items-center justify-between gap-2">
        {projectDetails.map((project, index) => (
          <DraggableTask
            key={project.id || index}
            project={project}
            listType={listType}
          />
        ))}
      </div>
    </div>
  );
};
