import TopBar from './components/TopBar';
import SidePannel from './components/sidePannel/SidePannel'
import EditorArea from './components/EditorArea';
import './App.css';

function App() {
  return (
    <div className="vscode-clone-root">
      <TopBar />
      <div className="main-layout">
        <SidePannel />
        <EditorArea />
      </div>
    </div>
  );
}

export default App;
