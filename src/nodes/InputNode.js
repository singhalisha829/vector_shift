// inputNode.js

import { Position } from "reactflow";
import BaseNode from "./BaseNode";
import { NODE_CONFIG_MAP } from "../constant/nodeConstants";

const { icon, color } = NODE_CONFIG_MAP.customInput;

export const InputNode = ({ id, data }) => (
  <BaseNode
    id={id}
    title="Input"
    fields={[
      {
        name: "name",
        label: "Name",
        type: "text",
        defaultValue: data?.inputName || id.replace("customInput-", "input_"),
      },
      {
        name: "type",
        label: "Type",
        type: "select",
        options: [
          { name: "Text", key: "Text" },
          { name: "File", key: "File" },
        ],
        defaultValue: data?.inputType || "Text",
      },
    ]}
    handles={[{ type: "source", position: Position.Right, id: `${id}-value` }]}
    icon={icon}
    color={color}
  />
);
