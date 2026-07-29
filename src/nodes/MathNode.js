import BaseNode from "../nodes/BaseNode";
import { Position } from "reactflow";
import { NODE_CONFIG_MAP } from "../constant/nodeConstants";

const { icon, color } = NODE_CONFIG_MAP.math;

export const MathNode = ({ id, data }) => (
  <BaseNode
    id={id}
    title="Math"
    fields={[
      {
        name: "operation",
        label: "Operation",
        type: "select",
        options: [
          { name: "Add", key: "+" },
          { name: "Subtract", key: "-" },
          { name: "Multiply", key: "*" },
          { name: "Divide", key: "/" },
        ],
        defaultValue: data?.operation || "+",
      },
    ]}
    handles={[
      {
        type: "target",
        position: Position.Left,
        id: `${id}-a`,
        style: { top: `${100 / 3}%` },
      },
      {
        type: "target",
        position: Position.Left,
        id: `${id}-b`,
        style: { top: `${200 / 3}%` },
      },
      { type: "source", position: Position.Right, id: `${id}-result` },
    ]}
    icon={icon}
    color={color}
  />
);
