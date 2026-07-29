// toolbar.js

import { DraggableNode } from "./DraggableNode";
import { NODE_CONFIG } from "../../constant/nodeConstants";

export const PipelineToolbar = () => {
  return (
    <div className="px-[14px] py-[10px] flex-1">
      <div className="mt-[20px] flex flex-col flex-wrap gap-[10px]">
        {NODE_CONFIG.map((node) => (
          <DraggableNode
            key={node.type}
            type={node.type}
            label={node.label}
            icon={node.icon}
            color={node.color}
          />
        ))}
      </div>
    </div>
  );
};
