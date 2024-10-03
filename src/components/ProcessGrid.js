import React, { useState, useMemo } from 'react';
import ProcessCard from './ProcessCard';
import KeyImprovements from './KeyImprovements';
import CategoryNavigation from './CategoryNavigation';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '../styles/ProcessGrid.css';

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    marginTop: theme.spacing(3),
  },
  gridItem: {
    display: 'flex',
  },
}));

function ProcessGrid({ processes, onSelectProcess }) {
  const [activeCategory, setActiveCategory] = useState(Object.keys(processes)[0]);
  const classes = useStyles();

  const keyImprovements = {
    Finance: [
      "Simplified Data Models with Universal Journal",
      "Real-Time Processing",
      "Embedded Analytics",
      "Machine Learning and AI Integration",
      "Improved User Interface with Fiori",
      "Automation and Efficiency Improvements"
    ],
    Procurement: [
      "Streamlined Procure-to-Pay Processes",
      "Real-Time Insights and Analytics",
      "Automation and AI Integration",
      "Enhanced Supplier Collaboration",
      "Improved User Experience with Fiori",
      "Integrated Contract Management"
    ],
    Sales: [
      "Improved Sales Order Management",
      "Enhanced Shipping and Transportation",
      "Streamlined Billing and Invoicing",
      "Advanced Credit and Risk Management",
      "Efficient Returns and Refunds Handling",
      "Real-Time Sales Analytics"
    ]
  };

  // Calculate the maximum pain point count across all categories
  const maxPainPoints = useMemo(() => {
    return Object.values(processes).flat().reduce((max, process) => 
      Math.max(max, process.painPoints.length), 0
    );
  }, [processes]);

  return (
    <div className="process-grid">
      <CategoryNavigation
        categories={Object.keys(processes)}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      <KeyImprovements category={activeCategory} improvements={keyImprovements[activeCategory]} />
      <Grid container spacing={3} className={classes.gridContainer}>
        {processes[activeCategory].map((process, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} className={classes.gridItem}>
            <ProcessCard 
              process={process} 
              onSelect={onSelectProcess} 
              maxPainPoints={maxPainPoints}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ProcessGrid;