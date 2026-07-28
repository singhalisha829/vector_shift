import BaseNode from "../nodes/BaseNode";
import { Position } from "reactflow";

export const DelayNode = ({ id, data }) => (
  <BaseNode
    id={id}
    title="Delay"
    fields={[
      {
        name: "delay",
        label: "Delay (ms)",
        type: "number",
        defaultValue: data?.delay || 1000,
      },
    ]}
    handles={[
      { type: "target", position: Position.Left, id: `${id}-input` },
      { type: "source", position: Position.Right, id: `${id}-output` },
    ]}
  />
);
