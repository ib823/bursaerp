import React from 'react';
import '../styles/ProcessCard.css';

function ProcessCard({ process, onSelect }) {
  const painPointCount = process.painPoints.length;
  let painPointClass = 'pain-point-0';
  let painPointLabel = 'No Issue';

  if (painPointCount === 1 || painPointCount === 2) {
    painPointClass = 'pain-point-1-2';
    painPointLabel = `Pain Point: ${painPointCount}`;
  } else if (painPointCount > 2) {
    painPointClass = 'pain-point-3-plus';
    painPointLabel = 'Pain Point: 3+';
  }

  return (
    <div className="process-card" onClick={() => onSelect(process)}>
      <div className="process-icon">{process.icon}</div>
      <h3>{process.title}</h3>
      <p>{process.description}</p>
      <div className={`pain-point-indicator ${painPointClass}`}>
        {painPointLabel}
      </div>
    </div>
  );
}

export default ProcessCard;