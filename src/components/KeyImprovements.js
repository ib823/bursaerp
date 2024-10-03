import React, { useState } from 'react';
import '../styles/KeyImprovements.css';

function KeyImprovements({ category, improvements }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="key-improvements">
      <h2 onClick={() => setIsExpanded(!isExpanded)}>
        Key Improvements for {category} {isExpanded ? '▼' : '▶'}
      </h2>
      {isExpanded && (
        <ul>
          {improvements.map((improvement, index) => (
            <li key={index}>{improvement}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default KeyImprovements;