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
    <div className="p-4 border-t-1 border-primary-1/2">
      <button
        className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-600"
        type="submit"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};
