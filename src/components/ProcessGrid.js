import React, { useState } from 'react';
import ProcessCard from './ProcessCard';
import ToolCard from './ToolCard';
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

  const toolCards = [
    {
      id: 'enable-now',
      title: 'SAP Enable Now',
      description: 'Accelerate user adoption and streamline change management across all processes.',
      benefits: [
        'Faster user adoption and reduced training time',
        'Customized learning content for specific roles and processes',
        'Improved user productivity and reduced errors',
        'Efficient knowledge transfer and documentation',
      ],
      icon: '🚀',
      category: 'Enablement',
    },
    {
      id: 'analytics-cloud',
      title: 'SAP Analytics Cloud',
      description: 'Empower decision-making with advanced analytics and visualizations for all processes.',
      benefits: [
        'Native integration with SAP and non-SAP data sources',
        'Real-time insights and predictive analytics',
        'Self-service BI and data discovery',
        'Advanced forecasting and scenario planning',
      ],
      icon: '📊',
      category: 'Analytics',
    }
  ];

  return (
    <div className="process-grid">
      <CategoryNavigation
        categories={[...Object.keys(processes), 'Enablement Tools']}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      {activeCategory !== 'Enablement Tools' && (
        <KeyImprovements category={activeCategory} improvements={keyImprovements[activeCategory]} />
      )}
      <Grid container spacing={3} className={classes.gridContainer}>
        {activeCategory === 'Enablement Tools' ? (
          toolCards.map((tool, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} className={classes.gridItem}>
              <ToolCard tool={tool} />
            </Grid>
          ))
        ) : (
          processes[activeCategory].map((process, index) => (
            <Grid item xs={12} sm={6} md={4} key={index} className={classes.gridItem}>
              <ProcessCard process={process} onSelect={onSelectProcess} />
            </Grid>
          ))
        )}
      </Grid>
    </div>
  );
}

export default ProcessGrid;

