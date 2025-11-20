import React from "react";
import {
  VscFiles,
  VscSearch,
  VscSourceControl,
  VscDebugAlt,
  VscExtensions,
} from "react-icons/vsc";
import "./SidePannel.css";

const sidePannel: React.FC = () => {
  return (
    <div className="sidePannel">

      <div className="sidePannel-top-items">
        <div className="sidePannel-item">
          <VscFiles />
        </div>
        <div className="sidePannel-item">
          <VscSearch />
        </div>
        <div className="sidePannel-item">
          <VscSourceControl />
        </div>
        <div className="sidePannel-item">
          <VscDebugAlt />
        </div>
        <div className="sidePannel-item">
          <VscExtensions />
        </div>
      </div>

      <div className="sidePannel-bottom-items">
        <div className="sidePannel-item">
          <VscFiles />
        </div>
        <div className="sidePannel-item">
          <VscSearch />
        </div>
      </div>
      
    </div>
  );
};

export default sidePannel;
