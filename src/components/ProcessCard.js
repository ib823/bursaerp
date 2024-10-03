import React from 'react';
import '../styles/ProcessCard.css';
import { motion } from 'framer-motion';
import { getPainPointStatus } from '../utils/helpers';

function ProcessCard({ group, processes, openSubCards }) {
  const painPointCount = processes.reduce((acc, subProcess) => acc + subProcess.painPoints.length, 0);
  const { label, color } = getPainPointStatus(painPointCount);

  const icon = {
    'Core Financial Accounting': '💼',
    'Management Accounting': '📊',
    'Cash and Treasury Management': '💰',
    'Financial Planning and Analysis': '📅',
    'Revenue Management': '💼',
    'Real-Time Analytics and Reporting': '📉',
    'Central Finance': '🌐',
    'Core Procurement Operations': '🛒',
    'Supplier Management': '🤝',
    'Strategic Procurement': '📝',
    'Procurement Analytics': '📊',
    'Supplier Invoicing': '💳',
    'Sales Order Management': '📝',
    'Shipping and Transportation': '🚚',
    'Billing and Invoicing': '📄',
    'Credit and Risk Management': '🔒',
    'Returns and Refunds': '↩️',
    'Sales Analytics': '��'
  }[group] || '🏛';

  return (
    <motion.div
      className="process-card"
      onClick={() => openSubCards(group)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div 
        className="process-icon"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        {icon}
      </motion.div>
      <h3>{group}</h3>
      <p className="process-description">{`Explore processes under ${group}`}</p>
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

export default ProcessCard;
