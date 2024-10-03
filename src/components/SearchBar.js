import React from 'react';
import '../styles/SearchBar.css';
import { motion } from 'framer-motion';

function SearchBar({ searchTerm, setSearchTerm }) {
  const handleSearch = (e) => {
    e.preventDefault();
  };

  return (
    <motion.form 
      className="search-bar" 
      onSubmit={handleSearch}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <input
        type="text"
        placeholder="Search processes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <motion.button 
        type="submit"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        🔍
      </motion.button>
    </motion.form>
  );
}

export default SearchBar;
