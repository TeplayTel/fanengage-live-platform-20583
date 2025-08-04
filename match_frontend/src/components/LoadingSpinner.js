import React from 'react';
import './LoadingSpinner.css';

// PUBLIC_INTERFACE
const LoadingSpinner = ({ size = 'medium', message = 'Loading...' }) => {
  /**
   * Reusable loading spinner component with customizable size and message
   * @param {string} size - 'small', 'medium', or 'large'
   * @param {string} message - Loading message to display
   */
  return (
    <div className={`loading-container ${size}`}>
      <div className="loading-spinner"></div>
      {message && <span className="loading-message">{message}</span>}
    </div>
  );
};

export default LoadingSpinner;
