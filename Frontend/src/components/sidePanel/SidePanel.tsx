import React from "react";
import {
  VscFiles,
  VscSearch,
  VscSourceControl,
  VscDebugAlt,
  VscExtensions,
  VscMenu,
} from "react-icons/vsc";
import { Tooltip } from "antd";
import "antd/dist/reset.css";
import "./SidePanel.css";

const sidePanel: React.FC = () => {
  return (
    <div className="sidePanel">
      <div className="sidePanel-top-items">
        <Tooltip title="Files" placement="right" color="#44444E">
          <div className="sidePanel-item menu">
            <VscMenu />
          </div>
        </Tooltip>
        <Tooltip title="Explorer" placement="right" color="#44444E">
          <div className="sidePanel-item">
            <VscFiles />
          </div>
        </Tooltip>
        <Tooltip title="Search" placement="right" color="#44444E">
          <div className="sidePanel-item">
            <VscSearch />
          </div>
        </Tooltip>
        <Tooltip title="Source Control" placement="right" color="#44444E">
          <div className="sidePanel-item">
            <VscSourceControl />
          </div>
        </Tooltip>
        <Tooltip title="Run & Debug" placement="right" color="#44444E">
          <div className="sidePanel-item">
            <VscDebugAlt />
          </div>
        </Tooltip>
        <Tooltip title="Extensions" placement="right" color="#44444E">
          <div className="sidePanel-item">
            <VscExtensions />
          </div>
        </Tooltip>
      </div>
      <div className="sidePanel-bottom-items">
        <Tooltip title="Files" placement="right" color="#44444E">
          <div className="sidePanel-item">
            <VscFiles />
          </div>
        </Tooltip>
        <Tooltip title="Search" placement="right" color="#44444E">
          <div className="sidePanel-item">
            <VscSearch />
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

export default sidePanel;
