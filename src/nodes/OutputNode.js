// outputNode.js

import { Position } from "reactflow";
import BaseNode from "./BaseNode";
import { NODE_CONFIG_MAP } from "../constant/nodeConstants";

const { icon, color } = NODE_CONFIG_MAP.customOutput;

export const OutputNode = ({ id, data }) => (
  <BaseNode
    id={id}
    title="Output"
    fields={[
      {
        name: "name",
        label: "Name",
        type: "text",
        defaultValue:
          data?.outputName || id.replace("customOutput-", "output_"),
      },
      {
        name: "type",
        label: "Type",
        type: "select",
        options: [
          { name: "Text", key: "Text" },
          { name: "Image", key: "File" },
        ],
        defaultValue: data?.outputType || "Text",
      },
    ]}
    handles={[{ type: "target", position: Position.Left, id: `${id}-value` }]}
    icon={icon}
    color={color}
  />
);
