import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/PassKeyPrompt.css';
import bursaLogo from '../assets/images/bursa-logo.png';
import abeamLogo from '../assets/images/abeam-logo.png';

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
        <div className="logo-container">
          <img src={abeamLogo} alt="ABeam Logo" className="logo-image-left" />
          <img src={bursaLogo} alt="Bursa Logo" className="logo-image-right" />
        </div>
        <h2>Confidential</h2>
        <p>
          This presentation is confidential and the sole property of ABeam Malaysia.<br />
          Access is restricted and requires a valid Pass Key.<br />
          For inquiries, contact edmund@abeam.com.
        </p>
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
