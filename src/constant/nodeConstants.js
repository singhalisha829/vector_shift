export const NODE_CONFIG = [
  { type: "customInput", label: "Input", icon: "→", color: "#10B981" },
  { type: "customOutput", label: "Output", icon: "←", color: "#3B82F6" },
  { type: "text", label: "Text", icon: "T", color: "#F59E0B" },
  { type: "llm", label: "LLM", icon: "⬡", color: "#8B5CF6" },
  { type: "delay", label: "Delay", icon: "✎", color: "#EC4899" },
  { type: "condition", label: "Condition", icon: "◈", color: "#06B6D4" },
  { type: "math", label: "Math", icon: "◎", color: "#14B8A6" },
  { type: "api", label: "API", icon: "⇄", color: "#6366F1" },
  { type: "translator", label: "Translator", icon: "◆", color: "#EF4444" },
];

export const NODE_CONFIG_MAP = Object.fromEntries(
  NODE_CONFIG.map((node) => [node.type, node]),
);
