import React, { useState } from "react";
import SidePanel from "./components/sidePanel/SidePanel";
import SidePanelContent from "./components/sidePanel/SidePanelContent";
import EditorArea from "./components/editorArea/EditorArea";
import TerminalBody from "./components/terminal/TerminalBody";
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
    </div>
  );
};

export default App;
