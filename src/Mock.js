
import React from 'react';
import './Mock.css'; 

const Mock = () => {
  return (
    <div className="phone-container">
      <div className="phone-screen">
        {/* Header */}
        <div className="header">
          <span className="time">00:00</span>
        </div>

        {/* Body */}
        <div className="content">
          {/* Main content goes here */}
          
          <h1>Heading</h1>
          <p>Place holder text.</p>
        </div>

        {/* Footer */}
        <div className="footer">
          <div className="button">Home</div>
          <div className="button">Info</div>
          <div className="button">Teams</div>
        </div>
      </div>
    </div>
  );
};

export default Mock;
