import React from 'react';
import './EditorArea.css';

const EditorArea: React.FC = () => {
  return (
    <div className="editor-area">
      <div className="editor-tab">Untitled-1</div>
      <textarea className="editor-textarea" placeholder="Start coding..."></textarea>
    </div>
  );
};

export default EditorArea;
