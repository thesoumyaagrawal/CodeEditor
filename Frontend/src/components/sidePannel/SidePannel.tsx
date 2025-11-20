import React from 'react';
import './sidePannel.css';

const sidePannel: React.FC = () => {
  return (
   <div className="sidePannel">
    <div className="sidePannel-item">Explorer</div>
      <div className="sidePannel-item">Search</div>
      <div className="sidePannel-item">Source Control</div>
      <div className="sidePannel-item">Run & Debug</div>
      <div className="sidePannel-item">Extensions</div>
    </div>
  )
}

export default sidePannel;