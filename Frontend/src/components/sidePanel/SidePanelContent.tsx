import React, { useState } from "react";
import "./SidePanelContent.css";

interface SidePanelContentProps {
  activeTab: string;
}

const MIN_WIDTH = 250;
const MAX_WIDTH = 1200;

const SidePanelContent: React.FC<SidePanelContentProps> = ({ activeTab }) => {
  const [width, setWidth] = useState<number>(300);
  const [isResizing, setIsResizing] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "explorer":
        return (
          <>
            <div className="sidepanel-section-header">EXPLORER</div>
            <div className="sidepanel-section-content">
              Here you can show your files
            </div>
          </>
        );

      case "search":
        return (
          <>
            <div className="sidepanel-section-header">SEARCH</div>
            <div className="sidepanel-section-content">
              Here you can show youasdfghjk
            </div>
          </>
        );

      case "sourceControl":
        return (
          <>
            <div className="sidepanel-section-header">SOURCE CONTROL</div>
            <div className="sidepanel-section-content">
              asdfghjkl.
            </div>
          </>
        );

      case "debug":
        return (
          <>
            <div className="sidepanel-section-header">RUN AND DEBUG</div>
            <div className="sidepanel-section-content">
              qwertyuioasdfghjklzxcvbnm
            </div>
          </>
        );

      case "extensions":
        return (
          <>
            <div className="sidepanel-section-header">EXTENSIONS</div>
            <div className="sidepanel-section-content">
              Here you can shike VS Code.
            </div>
          </>
        );

      default:
        return (
          <>
            <div className="sidepanel-section-header">EXPLORER</div>
            <div className="sidepanel-section-content">
              ers tree like VS Code.
            </div>
          </>
        );
    }
  };

  const handleMouseDown = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    setIsResizing(true);

    const startX = e.clientX;
    const startWidth = width;

    const onMouseMove = (event: MouseEvent) => {
      const delta = event.clientX - startX;
      let newWidth = startWidth + delta;
      if (newWidth < MIN_WIDTH) newWidth = MIN_WIDTH;
      if (newWidth > MAX_WIDTH) newWidth = MAX_WIDTH;
      setWidth(newWidth);
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
    <div className="sidepanel-wrapper" style={{ width }}>
      <div className="sidepanel-content">
        <div className="sidepanel-section">{renderContent()}</div>
      </div>

      <div
        className={`sidepanel-resizer ${isResizing ? "resizing" : ""}`}
        onMouseDown={handleMouseDown}
      >
        <span className="sidepanel-resizer-icon">⋮⋮</span>
      </div>
    </div>
  );
};

export default SidePanelContent;
