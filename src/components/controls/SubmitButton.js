// submit.js
import { useStore } from "../../store/usePipelineStore";

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:8000/pipelines/parse", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nodes, edges }),
      });

      if (!response.ok) {
        alert("Error: Failed to reach the backend.");
        return;
      }

      const { num_nodes, num_edges, is_dag } = await response.json();
      alert(
        `Pipeline Analysis\n` +
          `Nodes:  ${num_nodes}\n` +
          `Edges:  ${num_edges}\n` +
          `Is DAG: ${is_dag ? "Yes" : "No"}`,
      );
    } catch (err) {
      alert("Error: Could not connect to the backend.");
    }
  };

  return (
    <div className="p-4 border-t border-1 border-primary-70">
      <button
        className="w-full px-0 py-2.5 bg-gradient-to-br from-[#6366F1] to-[#513DD9] 
        text-white border-0 rounded-lg text-[13px] font-bold 
        cursor-pointer tracking-[0.03em] transition-opacity transition-transform duration-150 
        active:scale-95 hover:opacity-90"
        type="submit"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};
