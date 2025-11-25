import { loader } from "@monaco-editor/react";
import * as monaco from "monaco-editor";

import EditorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
import JsonWorker from "monaco-editor/esm/vs/language/json/json.worker?worker";
import CssWorker from "monaco-editor/esm/vs/language/css/css.worker?worker";
import HtmlWorker from "monaco-editor/esm/vs/language/html/html.worker?worker";
import TsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";

// Vite needs this for Monaco workers
(self as any).MonacoEnvironment = {
  getWorker(_: unknown, label: string) {
    if (label === "json") return new (JsonWorker as any)();
    if (label === "css" || label === "scss" || label === "less") return new (CssWorker as any)();
    if (label === "html" || label === "handlebars" || label === "razor") return new (HtmlWorker as any)();
    if (label === "typescript" || label === "javascript") return new (TsWorker as any)();
    return new (EditorWorker as any)();
  },
};

loader.config({ monaco });

// Optional: export a promise if you ever want to wait for init
export const monacoReady = loader.init();
