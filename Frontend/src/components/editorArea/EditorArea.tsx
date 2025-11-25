import React, { useRef, useMemo, useState } from "react";
import { Editor, type OnMount } from "@monaco-editor/react";
import type * as monaco from "monaco-editor";
import LanguageSelector from "./LanguageSelector";
import { LANGUAGES } from "../../constants/languages";
import "./EditorArea.css";

const getBoilerplate = (key: string) =>
  LANGUAGES.find((l) => l.key === key)?.boilerplate ?? "";

const EditorArea: React.FC = () => {
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

  const [language, setLanguage] = useState<string>("javascript");
  const [value, setValue] = useState<string>(getBoilerplate("javascript"));

  const onMount: OnMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  const options = useMemo<monaco.editor.IStandaloneEditorConstructionOptions>(
    () => ({
      minimap: { enabled: false },
      fontSize: 13,
      wordWrap: "on",
      smoothScrolling: true,
      scrollBeyondLastLine: false,
      automaticLayout: true,
    }),
    []
  );

  const onSelect = (langKey: string) => {
    setLanguage(langKey);
    setValue(getBoilerplate(langKey)); // ✅ boilerplate switches with language
  };

  return (
    <div className="editor-area">
      <div className="editor-tab">
        <LanguageSelector language={language} onSelect={onSelect} />
        
      </div>

      <div className="editor-monaco">
        <Editor
          height="100%"
          theme="vs-dark"
          language={language} // ✅ switches monaco language too
          value={value}
          onMount={onMount}
          onChange={(newValue) => setValue(newValue ?? "")}
          options={options}
        />
      </div>
    </div>
  );
};

export default EditorArea;
