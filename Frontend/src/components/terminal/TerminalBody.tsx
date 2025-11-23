import React, { useState } from "react";
import { Button, Tabs } from "antd";
import type { TabsProps } from "antd";
import "./TerminalBody.css";

const MIN_HEIGHT = 20;
const MAX_HEIGHT = 700;

// VS Code–like terminal tabs
const items: TabsProps["items"] = Array.from({ length: 3 }).map((_, i) => {
  const id = String(i + 1);
  return {
    label: `Terminal ${id}`,
    key: id,
    children: (
      <div className="terminal-output">
        {`Content of terminal ${id}\n$ echo "Hello from terminal ${id}"`}
      </div>
    ),
  };
});

const operations = <Button size="small">+ New</Button>;

const TerminalBody: React.FC = () => {
  const [height, setHeight] = useState<number>(260);
  const [isResizing, setIsResizing] = useState<boolean>(false);

  const handleMouseDown = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    setIsResizing(true);

    const startY = e.clientY;
    const startHeight = height;

    const onMouseMove = (event: MouseEvent) => {
      const delta = event.clientY - startY;
      // drag up -> bigger, drag down -> smaller
      let newHeight = startHeight - delta;

      if (newHeight < MIN_HEIGHT) newHeight = MIN_HEIGHT;
      if (newHeight > MAX_HEIGHT) newHeight = MAX_HEIGHT;

      setHeight(newHeight);
    };

    const onMouseUp = () => {
      setIsResizing(false);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
  };

  return (
    <div className="terminal-wrapper" style={{ height }}>
      {/* draggable top border like VS Code panel */}
      <div
        className={`terminal-resizer ${isResizing ? "resizing" : ""}`}
        onMouseDown={handleMouseDown}
      >
        <span className="terminal-resizer-icon">⋮⋮</span>
      </div>

      <div className="terminal-inner">
        <Tabs
          className="terminal-tabs"
          tabBarExtraContent={operations}
          items={items}
          size="small"
        />
      </div>
    </div>
  );
};

export default TerminalBody;
