import SidePanel from './components/sidePanel/SidePanel' 
import EditorArea from './components/EditorArea'; 
import SidePanelContent from './components/sidePanel/SidePanelContent';
import './App.css'; 
function App() { return ( 
<div className="vscode-clone-root"> 
  <div className="main-layout"> 
    <SidePanel /> 
    <SidePanelContent />
    <EditorArea /> 
  </div> 
  </div> 
  ); 
} 
  export default App;