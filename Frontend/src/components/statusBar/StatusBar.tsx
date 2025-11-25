import React from "react";
import {
  VscSourceControl,
  VscError,
  VscWarning,
  VscLayout,
  VscEye,
  VscAccount,
  VscBell,
} from "react-icons/vsc";
import "./StatusBar.css";

type StatusBarProps = {
  errors?: number;
  warnings?: number;
  layoutLabel?: string; // e.g. "Layout: U.S."
  watchers?: number; // e.g. 1982
};

function Item({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button className={`sb-item ${className}`} title={title} type="button">
      {children}
    </button>
  );
}

export default function StatusBar({
  errors = 0,
  warnings = 0,
  layoutLabel = "Layout: U.S.",
  watchers = 1982,
}: StatusBarProps) {
  return (
    <footer className="statusbar" role="contentinfo" aria-label="Status bar">
      <div className="sb-left">
        <Item title="Source Control" className="sb-primary">
          <VscSourceControl className="sb-icon" />
        </Item>

        <Item title={`Problems: ${errors} errors`} className="sb-compact">
          <VscError className="sb-icon" />
          <span className="sb-count">{errors}</span>
        </Item>

        <Item title={`Problems: ${warnings} warnings`} className="sb-compact">
          <VscWarning className="sb-icon" />
          <span className="sb-count">{warnings}</span>
        </Item>
      </div>

      <div className="sb-right">
        <Item title="Keyboard Layout">
          <VscLayout className="sb-icon" />
          <span className="sb-text">{layoutLabel}</span>
        </Item>

        <Item title="Watchers">
          <VscEye className="sb-icon" />
          <span className="sb-text">{watchers}</span>
        </Item>

        <Item title="Account">
          <VscAccount className="sb-icon" />
        </Item>

        <Item title="Notifications">
          <VscBell className="sb-icon" />
        </Item>
      </div>
    </footer>
  );
}
