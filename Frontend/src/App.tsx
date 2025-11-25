import React, { useState } from "react";
import SidePanel from "./components/sidePanel/SidePanel";
import SidePanelContent from "./components/sidePanel/SidePanelContent";
import EditorArea from "./components/editorArea/EditorArea";
import TerminalBody from "./components/terminal/TerminalBody";
import StatusBar from "./components/statusBar/StatusBar";
import "./App.css";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("explorer");

  return (
  
    <div className="vscode-clone-root">
      <div className="main-layout">
        <SidePanel activeTab={activeTab} onTabChange={setActiveTab} />
        <SidePanelContent activeTab={activeTab} />
        <div className="editor-area">
        <EditorArea />
        <TerminalBody />
        </div>
      </div>
       <StatusBar errors={3} warnings={5} layoutLabel="Layout: U.S." watchers={1982} />
    </div>
   

  );
};

export default App;
