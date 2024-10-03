import React from 'react';
import '../styles/Modal.css';

function Modal({ process, onClose }) {
  if (!process) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>&times;</button>
        <div className="modal-header">
          <span className="modal-icon">{process.icon}</span>
          <h2>{process.title}</h2>
        </div>
        <p><strong>Module:</strong> {process.module}</p>
        <p>{process.description}</p>
        <h3>Key Features:</h3>
        <ul>
          {process.keyFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        {process.painPoints.length > 0 && (
          <>
            <h3>Pain Points Addressed:</h3>
            <ul>
              {process.painPoints.map((painPoint, index) => (
                <li key={index}>{painPoint.description}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default Modal;
