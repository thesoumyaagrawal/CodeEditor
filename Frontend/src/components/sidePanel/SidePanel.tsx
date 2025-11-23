import React from "react";
import {
  VscFiles,
  VscSearch,
  VscSourceControl,
  VscDebugAlt,
  VscExtensions,
  VscAccount,
  VscMenu,
  VscGear
} from "react-icons/vsc";
import { Tooltip } from "antd";
import "antd/dist/reset.css";
import "./SidePanel.css";

interface SidePanelProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const SidePanel: React.FC<SidePanelProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="sidePanel">
      <div className="sidePanel-top-items">
        {/* Menu - doesn't change tab, just a button for later use */}
        <Tooltip title="Menu" placement="right" color="#44444E">
          <div className="sidePanel-item">
            <VscMenu />
          </div>
        </Tooltip>

        <Tooltip title="Explorer" placement="right" color="#44444E">
          <div
            className={`sidePanel-item ${
              activeTab === "explorer" ? "active" : ""
            }`}
            onClick={() => onTabChange("explorer")}
          >
            <VscFiles />
          </div>
        </Tooltip>

        <Tooltip title="Search" placement="right" color="#44444E">
          <div
            className={`sidePanel-item ${
              activeTab === "search" ? "active" : ""
            }`}
            onClick={() => onTabChange("search")}
          >
            <VscSearch />
          </div>
        </Tooltip>

        <Tooltip title="Source Control" placement="right" color="#44444E">
          <div
            className={`sidePanel-item ${
              activeTab === "sourceControl" ? "active" : ""
            }`}
            onClick={() => onTabChange("sourceControl")}
          >
            <VscSourceControl />
          </div>
        </Tooltip>

        <Tooltip title="Run & Debug" placement="right" color="#44444E">
          <div
            className={`sidePanel-item ${
              activeTab === "debug" ? "active" : ""
            }`}
            onClick={() => onTabChange("debug")}
          >
            <VscDebugAlt />
          </div>
        </Tooltip>

        <Tooltip title="Extensions" placement="right" color="#44444E">
          <div
            className={`sidePanel-item ${
              activeTab === "extensions" ? "active" : ""
            }`}
            onClick={() => onTabChange("extensions")}
          >
            <VscExtensions />
          </div>
        </Tooltip>
      </div>

      {/* Bottom items – you can reuse tabs or make them something else */}
      <div className="sidePanel-bottom-items">
        <Tooltip title="Profile" placement="right" color="#44444E">
          <div
            className={`sidePanel-item ${
              activeTab === "explorer" ? "active" : ""
            }`}
            onClick={() => onTabChange("Profile")}
          >
           <VscAccount />
          </div>
        </Tooltip>
        <Tooltip title="Settings" placement="right" color="#44444E">
          <div
            className={`sidePanel-item ${
              activeTab === "search" ? "active" : ""
            }`}
            onClick={() => onTabChange("settings")}
          >
            <VscGear />
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

export default SidePanel;
