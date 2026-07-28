import { PipelineToolbar } from './components/toolbar/PipelineToolbar';
import { PipelineUI } from './components/canvas/PipelineUI';
import { SubmitButton } from './components/controls/SubmitButton';

function App() {
  return (
    <div>
      <PipelineToolbar />
      <PipelineUI />
      <SubmitButton />
    </div>
  );
}

export default App;
