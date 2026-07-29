// textNode.js

import { Position } from "reactflow";
import BaseNode from "./BaseNode";
import { NODE_CONFIG_MAP } from "../constant/nodeConstants";

const { icon, color } = NODE_CONFIG_MAP.text;

export const TextNode = ({ id, data }) => (
  <BaseNode
    id={id}
    title="Text"
    fields={[
      {
        name: "text",
        label: "Text",
        type: "text",
        defaultValue: data?.text || "{{input}}",
      },
    ]}
    handles={[{ type: "source", position: Position.Right, id: `${id}-output` }]}
    icon={icon}
    color={color}
  />
);
