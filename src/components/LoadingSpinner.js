import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import '../styles/LoadingSpinner.css';

function LoadingSpinner() {
  const theme = useTheme();
  const isDarkMode = theme.palette.type === 'dark';

  return (
    <div className="loading-spinner-container">
      <div className="spinner">
        <svg
          className="spinner-svg"
          viewBox="0 0 50 50"
          style={{
            stroke: isDarkMode ? '#FF9500' : '#007AFF',
          }}
        >
          <circle
            className="spinner-path"
            cx="25"
            cy="25"
            r="20"
            fill="none"
            strokeWidth="4"
          />
        </svg>
      </div>
      <p className="loading-text">Hang tight, we're loading your data!</p>
    </div>
  );
}

export default LoadingSpinner;
