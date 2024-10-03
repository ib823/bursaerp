import React, { useState, useMemo, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ProcessGrid from './components/ProcessGrid';
import Modal from './components/Modal';
import Footer from './components/Footer';
import PassKeyPrompt from './components/PassKeyPrompt';
import { financeProcesses } from './data/financeProcesses';
import { procurementProcesses } from './data/procurementProcesses';
import { salesProcesses } from './data/salesProcesses';
import './styles/App.css';

// Define a simple LoadingSpinner component
const LoadingSpinner = () => <div className="loading-spinner">Loading...</div>;

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProcess, setSelectedProcess] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  const allProcesses = useMemo(() => ({
    'Finance': financeProcesses,
    'Procurement': procurementProcesses,
    'Sales': salesProcesses,
  }), []);

  useEffect(() => {
    const storedAuth = localStorage.getItem('isAuthenticated');
    if (storedAuth) {
      setIsAuthenticated(JSON.parse(storedAuth));
    }
    // Simulate API call or data fetching delay
    setTimeout(() => {
      setIsLoading(false); // Stop loading after 1 second
    }, 1000);
  }, []);

  const filteredProcesses = useMemo(() => {
    if (!searchTerm) return allProcesses;
    return Object.entries(allProcesses).reduce((acc, [category, processes]) => {
      const filteredCategoryProcesses = processes.filter(
        process => process.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                   process.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (filteredCategoryProcesses.length > 0) {
        acc[category] = filteredCategoryProcesses;
      }
      return acc;
    }, {});
  }, [allProcesses, searchTerm]);

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

  // Display loading spinner if the app is still loading
  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="app-container">
      <Header />
      <main>
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <ProcessGrid processes={filteredProcesses} onSelectProcess={setSelectedProcess} />
        {selectedProcess && (
          <Modal process={selectedProcess} onClose={() => setSelectedProcess(null)} />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
