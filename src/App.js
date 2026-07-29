import { PipelineToolbar } from "./components/toolbar/PipelineToolbar";
import { PipelineUI } from "./components/canvas/PipelineUI";
import { SubmitButton } from "./components/controls/SubmitButton";

function App() {
  return (
    <div style={{ display: "flex", overflow: "hidden", height: "100vh" }}>
      <div className="flex flex-col w-[220px] bg-primary h-full">
        <div className="border-b border-1 border-primary-70 p-4 bg-primary-80">
          <div className="sidebar-logo">VectorShift</div>
        </div>
        <PipelineToolbar />
        <SubmitButton />
      </div>
      <PipelineUI />
    </div>
  );
}

export default App;
