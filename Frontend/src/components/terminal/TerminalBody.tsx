import React, { useMemo, useState } from "react";
import { Tabs, Dropdown, Button, Tooltip } from "antd";
import type { TabsProps, MenuProps } from "antd";
import {
  PlusOutlined,
  DownOutlined,
  MoreOutlined,
  UpOutlined,
  CloseOutlined,
} from "@ant-design/icons";
import "./TerminalBody.css";

const MIN_HEIGHT = 20;
const MAX_HEIGHT = 700;

type TerminalTabKey = "problems" | "output" | "debugConsole" | "terminal" | "ports";
type ProfileKey = "bash" | "zsh" | "jsDebug";

const TerminalBody: React.FC = () => {
  const [height, setHeight] = useState<number>(260);
  const [isResizing, setIsResizing] = useState<boolean>(false);

  const [activeKey, setActiveKey] = useState<TerminalTabKey>("terminal");
  const [profile, setProfile] = useState<ProfileKey>("bash");

  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<string[]>([]);

  const handleTerminalInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTerminalInput(e.target.value);
  };

  const handleTerminalKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const command = terminalInput.trim();
      if (command) {
        setTerminalHistory((prev) => [...prev, `$ ${command}`]);
        setTerminalInput('');
        // Backend call to execute command (pseudo, needs backend API)
        try {
          const res = await fetch('/api/terminal', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ command }),
          });
          const data = await res.json();
          setTerminalHistory((prev) => [...prev, data.output]);
        } catch (err) {
          setTerminalHistory((prev) => [...prev, '[error] Could not execute command']);
        }
      }
    }
  };

  const profileMenuItems: MenuProps["items"] = useMemo(
    () => [
      { key: "bash", label: "bash" },
      { key: "zsh", label: "zsh" },
      { key: "jsDebug", label: "JavaScript Debug Terminal" },
      {
        key: "split",
        label: "Split Terminal",
        children: [
          { key: "split-current", label: "Split with current profile" },
          { key: "split-bash", label: "Split with bash" },
          { key: "split-zsh", label: "Split with zsh" },
        ],
      },
      { type: "divider" },
      { key: "settings", label: "Configure Terminal Settings" },
      { key: "defaultProfile", label: "Select Default Profile" },
      { type: "divider" },
      { key: "runTask", label: "Run Task..." },
      { key: "configureTasks", label: "Configure Tasks..." },
    ],
    []
  );

  const onProfileMenuClick: MenuProps["onClick"] = ({ key }) => {
    if (key === "bash" || key === "zsh" || key === "jsDebug") setProfile(key);
    // handle other actions here if needed (settings/run task/splits...)
  };

  const onNewTerminal = () => {
    // Your real create-terminal logic goes here
    // (right now we just keep the UI consistent)
    // console.log("New terminal with profile:", profile);
  };

  const tabs: TabsProps["items"] = useMemo(
    () => [
      { key: "problems", label: "PROBLEMS", children: <div className="terminal-output">{`No problems have been detected.`}</div> },
      { key: "output", label: "OUTPUT", children: <div className="terminal-output">{`Output channel…`}</div> },
      { key: "debugConsole", label: "DEBUG CONSOLE", children: <div className="terminal-output">{`Debug console…`}</div> },
      {
        key: "terminal",
        label: "TERMINAL",
        children: (
          <div className="terminal-output">
            {terminalHistory.map((line, idx) => (
              <div key={idx}>{line}</div>
            ))}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ color: '#6f6f6f', marginRight: 4 }}>$</span>
              <input
                className="terminal-input"
                value={terminalInput}
                onChange={handleTerminalInput}
                onKeyDown={handleTerminalKeyDown}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: '#fff',
                  outline: 'none',
                  width: '100%',
                }}
                autoFocus
              />
            </div>
          </div>
        ),
      },
      { key: "ports", label: "PORTS", children: <div className="terminal-output">{`No ports are currently forwarded.`}</div> },
    ],
    [terminalHistory, terminalInput]
  );

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsResizing(true);

    const startY = e.clientY;
    const startHeight = height;

    const onMouseMove = (event: MouseEvent) => {
      const delta = event.clientY - startY;
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

  const toolbar = (
    <div className="terminal-toolbar">
      {/* + plus + dropdown arrow (like VS Code) */}
      <div className="terminal-toolbar-group">
        <Tooltip title="New Terminal">
          <Button
            size="small"
            type="text"
            className="terminal-icon-btn"
            icon={<PlusOutlined />}
            aria-label="New terminal"
            onClick={onNewTerminal}
          />
        </Tooltip>

        <Dropdown
          placement="bottomRight"
          trigger={["click"]}
          menu={{ items: profileMenuItems, onClick: onProfileMenuClick }}
          overlayClassName="vscode-terminal-dropdown"
        >
          <Button
            size="small"
            type="text"
            className="terminal-icon-btn"
            icon={<DownOutlined />}
            aria-label="Select terminal profile"
          />
        </Dropdown>
      </div>

      <Tooltip title="More Actions">
        <Button
          size="small"
          type="text"
          className="terminal-icon-btn"
          icon={<MoreOutlined />}
          aria-label="More actions"
        />
      </Tooltip>

      <Tooltip title="Maximize Panel">
        <Button
          size="small"
          type="text"
          className="terminal-icon-btn"
          icon={<UpOutlined />}
          aria-label="Maximize panel"
        />
      </Tooltip>

      <Tooltip title="Close Panel">
        <Button
          size="small"
          type="text"
          className="terminal-icon-btn"
          icon={<CloseOutlined />}
          aria-label="Close panel"
        />
      </Tooltip>
    </div>
  );

  return (
    <div className="terminal-wrapper" style={{ height }}>
      <div
        className={`terminal-resizer ${isResizing ? "resizing" : ""}`}
        onMouseDown={handleMouseDown}
      />

      <div className="terminal-inner">
        <Tabs
          className="terminal-tabs"
          items={tabs}
          activeKey={activeKey}
          onChange={(k) => setActiveKey(k as TerminalTabKey)}
          size="small"
          tabBarExtraContent={{ right: toolbar }}
        />
      </div>
    </div>
  );
};

export default TerminalBody;
