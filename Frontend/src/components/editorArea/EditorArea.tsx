import React, { useMemo, useState } from "react";
import Editor from "@monaco-editor/react";
import "./EditorArea.css";

const EditorArea: React.FC = () => {
  const [value, setValue] = useState<string>("// some comment");
  const language = "javascript";

  // optional: nicer VS Code-ish defaults
  const options = useMemo(
    () => ({
      minimap: { enabled: false },
      fontSize: 13,
      wordWrap: "on" as const,
      smoothScrolling: true,
      scrollBeyondLastLine: false,
      automaticLayout: true, // important in resizable layouts
    }),
    []
  );

  return (
    <div className="editor-area">
      <div className="editor-tab">Untitled-1</div>

      <div className="editor-monaco">
        <Editor
          height="100%"
          defaultLanguage={language}
          value={value}
          onChange={(v) => setValue(v ?? "")}
          theme="vs-dark"
          options={options}
        />
      </div>
    </div>
  );
};

export default EditorArea;
