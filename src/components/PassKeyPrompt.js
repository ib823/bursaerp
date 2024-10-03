import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/PassKeyPrompt.css';

const PassKeyPrompt = ({ onPassKeySubmit }) => {
  const [passKey, setPassKey] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onPassKeySubmit(passKey);
  };

  return (
    <motion.div 
      className="pass-key-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div 
        className="pass-key-content"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <h2>Confidential Presentation</h2>
        <p>This presentation is confidential, and property of ABeam Malaysia for Bursa Malaysia. To proceed, please enter the Pass Key shared with you. Please note that this Pass Key has an expiry date of 30 days.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={passKey}
            onChange={(e) => setPassKey(e.target.value)}
            placeholder="Enter Pass Key"
            required
          />
          <button type="submit">Submit</button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default PassKeyPrompt;
