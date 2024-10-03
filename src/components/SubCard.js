import React from 'react';
import '../styles/SubCard.css';
import { motion } from 'framer-motion';
import { getPainPointStatus } from '../utils/helpers';

function SubCard({ subProcess, openModal }) {
  const { label, color } = getPainPointStatus(subProcess.painPoints.length);

  return (
    <motion.div
      className="sub-card"
      onClick={() => openModal(subProcess)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div 
        className="sub-process-icon"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        {subProcess.icon}
      </motion.div>
      <h4>{subProcess.title}</h4>
      <p className="sub-process-description">{subProcess.description}</p>
      <motion.div 
        className={`pain-points-indicator ${color}`}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        {label}
      </motion.div>
    </motion.div>
  );
}

export default SubCard;
