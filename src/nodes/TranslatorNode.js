import BaseNode from "../nodes/BaseNode";
import { Position } from "reactflow";

const LANGUAGES = [
  { name: "Auto Detect", value: "Auto Detect" },
  { name: "English", value: "English" },
  { name: "Hindi", value: "Hindi" },
  { name: "Spanish", value: "Spanish" },
  { name: "French", value: "French" },
  { name: "German", value: "German" },
  { name: "Japanese", value: "Japanese" },
  { name: "Chinese", value: "Chinese" },
];

export const TranslatorNode = ({ id, data }) => (
  <BaseNode
    id={id}
    title="Translator"
    fields={[
      {
        name: "sourceLanguage",
        label: "Source Language",
        type: "select",
        options: LANGUAGES,
        defaultValue: data?.sourceLanguage || "English",
      },
      {
        name: "targetLanguage",
        label: "Target Language",
        type: "select",
        options: LANGUAGES,
        defaultValue: data?.targetLanguage || "Spanish",
      },
    ]}
    handles={[
      { type: "target", position: Position.Left, id: `${id}-input` },
      { type: "source", position: Position.Right, id: `${id}-output` },
    ]}
  />
);
