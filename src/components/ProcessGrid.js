import React from 'react';
import ProcessCard from './ProcessCard';
import KeyImprovements from './KeyImprovements';
import '../styles/ProcessGrid.css';

function ProcessGrid({ processes, onSelectProcess }) {
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

  return (
    <div className="process-grid">
      {Object.entries(processes).map(([category, categoryProcesses]) => (
        <div key={category} className="process-category">
          <h2>{category}</h2>
          <KeyImprovements category={category} improvements={keyImprovements[category]} />
          <div className="process-list">
            {categoryProcesses.map((process, index) => (
              <ProcessCard key={index} process={process} onSelect={onSelectProcess} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProcessGrid;