import BaseNode from "../nodes/BaseNode";
import { Position } from "reactflow";

export const ConditionNode = ({ id, data }) => (
  <BaseNode
    id={id}
    title="Condition"
    fields={[
      {
        name: "operator",
        label: "Operator",
        type: "select",
        options: [
          { name: "Equal", key: "==" },
          { name: "Not Equal", key: "!=" },
          { name: "Greater Than", key: ">" },
          { name: "Less Than", key: "<" },
        ],
        defaultValue: data?.operator || "==",
      },
      {
        name: "value",
        label: "Value",
        type: "number",
        defaultValue: data?.value || 0,
      },
    ]}
    handles={[
      { type: "target", position: Position.Left, id: `${id}-input` },
      {
        type: "source",
        position: Position.Right,
        id: `${id}-true`,
        style: { top: `${100 / 3}%` },
      },
      {
        type: "source",
        position: Position.Right,
        id: `${id}-false`,
        style: { top: `${200 / 3}%` },
      },
    ]}
  />
);
