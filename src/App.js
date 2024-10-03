import React, { useState, useMemo, useEffect } from 'react';
import Header from './components/Header';
import ProcessGrid from './components/ProcessGrid';
import Modal from './components/Modal';
import Footer from './components/Footer';
import PassKeyPrompt from './components/PassKeyPrompt';
import { financeProcesses } from './data/financeProcesses';
import { procurementProcesses } from './data/procurementProcesses';
import { salesProcesses } from './data/salesProcesses';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import { CssBaseline, Container } from '@material-ui/core';
import './styles/App.css';

const LoadingSpinner = () => <div className="loading-spinner">Loading...</div>;

function App() {
  const [selectedProcess, setSelectedProcess] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#007AFF',
      },
      secondary: {
        main: '#FF9500',
      },
    },
  });

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
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const handlePassKeySubmit = (passKey) => {
    if (passKey === 'AB24') {
      setIsAuthenticated(true);
      localStorage.setItem('isAuthenticated', JSON.stringify(true));
    } else {
      alert('Invalid Pass Key. Please try again.');
    }
  };

  const handleProcessSelect = (process) => {
    setSelectedProcess(process);
  };

  if (!isAuthenticated) {
    return <PassKeyPrompt onPassKeySubmit={handlePassKeySubmit} />;
  }

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app-container">
        <Header 
          darkMode={darkMode} 
          setDarkMode={setDarkMode}
        />
        <Container>
          <main>
            <ProcessGrid 
              processes={allProcesses} 
              onSelectProcess={handleProcessSelect}
            />
            {selectedProcess && (
              <Modal 
                process={selectedProcess} 
                onClose={() => setSelectedProcess(null)} 
              />
            )}
          </main>
        </Container>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;