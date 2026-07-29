import BaseNode from "../nodes/BaseNode";
import { Position } from "reactflow";
import { NODE_CONFIG_MAP } from "../constant/nodeConstants";

const { icon, color } = NODE_CONFIG_MAP.api;

export const ApiNode = ({ id, data }) => (
  <BaseNode
    id={id}
    title="Api Request"
    fields={[
      {
        name: "method",
        label: "Method",
        type: "select",
        options: [
          { name: "GET", key: "GET" },
          { name: "POST", key: "POST" },
          { name: "PUT", key: "PUT" },
          { name: "DELETE", key: "DELETE" },
        ],
        defaultValue: data?.method || "GET",
      },
      {
        name: "url",
        label: "Url",
        type: "text",
        defaultValue: data?.url || "",
      },
    ]}
    handles={[
      { type: "target", position: Position.Left, id: `${id}-input` },
      { type: "source", position: Position.Right, id: `${id}-output` },
    ]}
    icon={icon}
    color={color}
  />
);
