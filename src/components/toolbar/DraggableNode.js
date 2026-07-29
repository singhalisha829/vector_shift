// draggableNode.js

export const DraggableNode = ({ type, label, icon, color = "#6366F1" }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = "grabbing";
    event.dataTransfer.setData(
      "application/reactflow",
      JSON.stringify(appData),
    );
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = "grab")}
      className="flex cursor-grab items-center gap-2 p-2 rounded-md bg-primary-80
      hover:bg-primary border border-1 border-primary-70 transition-colors duration-200"
      draggable
      tabIndex={0}
      role="button"
      aria-label={`Add ${label} node to canvas`}
    >
      <div
        className="w-[26px] h-[26px] flex justify-center items-center rounded-[6px] text-white font-bold"
        style={{ background: color }}
      >
        {icon}
      </div>
      <span className="text-text font-medium">{label}</span>
    </div>
  );
};
