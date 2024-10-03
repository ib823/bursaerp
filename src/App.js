import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ProcessCard from './components/ProcessCard';
import SubCard from './components/SubCard';
import Modal from './components/Modal';
import PassKeyPrompt from './components/PassKeyPrompt';
import { financeProcesses } from './data/financeProcesses';
import { procurementProcesses } from './data/procurementProcesses';
import { salesProcesses } from './data/salesProcesses';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  // Use useMemo to memoize allProcesses
  const allProcesses = useMemo(() => ({
    ...financeProcesses,
    ...procurementProcesses,
    ...salesProcesses
  }), []);

  const [selectedGroup, setSelectedGroup] = useState(null);
  const [selectedSubProcess, setSelectedSubProcess] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProcesses, setFilteredProcesses] = useState(allProcesses);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {}, []); // Empty hook, not necessary anymore for auth

  useEffect(() => {
    if (searchTerm) {
      const filtered = Object.keys(allProcesses).reduce((acc, group) => {
        const matchingProcesses = allProcesses[group].filter(
          process => process.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                     process.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
        if (matchingProcesses.length > 0) {
          acc[group] = matchingProcesses;
        }
        return acc;
      }, {});
      setFilteredProcesses(filtered);
    } else {
      setFilteredProcesses(allProcesses);
    }
  }, [searchTerm, allProcesses]);

  const openSubCards = (group) => {
    setSelectedGroup(group);
  };

  const openModal = (subProcess) => {
    setSelectedSubProcess(subProcess);
  };

  const closeModal = () => {
    setSelectedSubProcess(null);
  };

  const handlePassKeySubmit = (passKey) => {
    if (passKey === 'ABeamBursa2024') {
      setIsAuthenticated(true);
      localStorage.setItem('isAuthenticated', JSON.stringify(true));
    } else {
      alert('Invalid Pass Key. Please try again.');
    }
  };

  if (!isAuthenticated) {
    return <PassKeyPrompt onPassKeySubmit={handlePassKeySubmit} />;
  }

  return (
    <div className="app-container">
      <Header />
      <h1 className="main-title">BURSA Malaysia ERP Transformation</h1>
      <p className="intro">Navigating SAP S/4HANA: Streamlined Business Processes, Enhanced Capabilities, and Strategic Solutions to BURSA's Pain Points</p>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <AnimatePresence>
        {!selectedGroup ? (
          <motion.div
            className="process-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {Object.keys(filteredProcesses).map(group => (
              <ProcessCard
                key={group}
                group={group}
                processes={filteredProcesses[group]}
                openSubCards={openSubCards}
              />
            ))}
          </motion.div>
        ) : (
          <motion.div
            className="subcard-section"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="breadcrumbs">
              <button onClick={() => setSelectedGroup(null)} className="breadcrumb-link">Home</button> &gt; {selectedGroup}
            </div>
            <motion.div
              className="process-grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {filteredProcesses[selectedGroup].map((subProcess, index) => (
                <SubCard key={index} subProcess={subProcess} openModal={openModal} />
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {selectedSubProcess && <Modal subProcess={selectedSubProcess} closeModal={closeModal} />}
      </AnimatePresence>
    </div>
  );
}

export default App;
