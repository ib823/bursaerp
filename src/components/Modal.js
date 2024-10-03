import React from 'react';
import '../styles/Modal.css';
import { motion } from 'framer-motion';

function Modal({ subProcess, closeModal }) {
  return (
    <motion.div
      className="modal-overlay"
      onClick={closeModal}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="modal-content"
        onClick={e => e.stopPropagation()}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
      >
        <span className="modal-close-icon" onClick={closeModal}>&times;</span>
        <h2>{subProcess.title}</h2>
        <p><strong>Module:</strong> {subProcess.module}</p>
        <div>
          <h3>Key Features:</h3>
          <ul>
            {subProcess.keyFeatures.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {feature}
              </motion.li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Indicative Pain Point(s) Addressed:</h3>
          <ul>
            {subProcess.painPoints.map((pain, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
              >
                Pain Point {pain.number}: {pain.description}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Modal;
