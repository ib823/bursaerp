import React, { useState } from 'react';
import ProcessCard from './ProcessCard';
import ToolCard from './ToolCard';
import KeyImprovements from './KeyImprovements';
import CategoryNavigation from './CategoryNavigation';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '../styles/ProcessGrid.css';
import SAPLogo from '../assets/images/sap-logo.png';
import ABeamLogo from '../assets/images/abeam-logo.png';

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    marginTop: theme.spacing(3),
  },
  gridItem: {
    display: 'flex',
  },
  // Custom layout for Security & Compliance section
  securityComplianceContainer: {
    display: 'flex',  // Use flexbox
    flexWrap: 'wrap',  // Allow wrapping
    gap: '20px',       // Add gap between items
    justifyContent: 'space-between', // Spread items
  },
  fullWidthCard: {
    flexBasis: '100%',  // Make SAP S/4HANA Enhanced Security span the full width
  },
  equalHeightCard: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,        // Allow the card to grow and take equal height
  },
  cardContent: {
    flexGrow: 1,  // Ensure content inside the card grows to fill available space
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
      logo: SAPLogo,
      provider: 'SAP'
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
      logo: SAPLogo,
      provider: 'SAP'
    },
    {
      id: 's4hana-security',
      title: 'SAP S/4HANA Enhanced Security',
      subtitle: 'for Financial Institutions',
      description: 'Comprehensive security features tailored for financial institutions like BURSA Malaysia.',
      benefits: [
        'Advanced Data Encryption & Privacy: Secure financial data with end-to-end encryption, ensuring compliance and protection from unauthorized access.',
        'Identity & Access Management (IAM): Role-based access control, MFA, and SoD to prevent unauthorized access and reduce fraud risks. (Includes SAP Identity Management & Access Control)',
        'Real-Time Threat Detection & Monitoring: Proactively detect and respond to threats using SAP Enterprise Threat Detection. (Optional, recommended add-on tool)',
        'Automated Compliance with Financial Regulations: Ensure compliance with global/local regulations (e.g., GDPR, Basel III, Malaysian regulations) through automated audits and reporting.',
        'Cloud Security Integration: Data residency controls and automated backups for hybrid or cloud deployments. (Optional for cloud or hybrid)',
        'Regular Security Patches & Updates: Continuous protection through automated patches and regular system updates.',
        'Data Masking & Privacy Controls: Protect sensitive information through data masking while maintaining usability. (Optional tool for enhanced privacy controls)'
      ],
      icon: '🔒',
      category: 'Security',
      logo: SAPLogo,
      provider: 'SAP',
    },
    {
      id: 'abeam-einvoicing',
      title: 'ABeam e-Invoice',
      description: 'Customized solution connecting SAP S/4HANA to LHDN MyInvois API Platform.',
      benefits: [
        'Lightweight and optimized for BURSA\'s specific needs',
        'One-off fee with no annual license costs',
        'Full API integration for submission, monitoring, and updates',
        'Tailored to LHDN and BURSA requirements',
        'Efficient and cost-effective implementation'
      ],
      icon: '🧾',
      category: 'Compliance',
      logo: ABeamLogo,
      provider: 'ABeam'
    },
    {
      id: 'document-compliance',
      title: 'SAP DRC',
      description: 'Native solution for LHDN e-invoicing and regulatory compliance.',
      benefits: [
        'Seamless integration with SAP S/4HANA',
        'Automatic updates for regulatory changes',
        'Real-time compliance checks and validations',
        'Simplified audit processes',
        'Part of SAP BTP cloud for scalability and flexibility'
      ],
      icon: '📄',
      category: 'Compliance',
      logo: SAPLogo,
      provider: 'SAP',
    },
  ];

  return (
    <div className="process-grid">
      <CategoryNavigation
        categories={[...Object.keys(processes), 'Enablement Tools', 'Security & Compliance']}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />
      {!['Enablement Tools', 'Security & Compliance'].includes(activeCategory) && (
        <KeyImprovements category={activeCategory} improvements={keyImprovements[activeCategory]} />
      )}
      <Grid container spacing={3} className={classes.gridContainer}>
        {activeCategory === 'Enablement Tools' ? (
          toolCards
            .filter(tool => ['Enablement', 'Analytics'].includes(tool.category))
            .map((tool, index) => (
              <Grid item xs={12} sm={6} md={4} key={index} className={classes.gridItem}>
                <ToolCard tool={tool} />
              </Grid>
            ))
        ) : activeCategory === 'Security & Compliance' ? (
          <div className={classes.securityComplianceContainer}>
            <div className={`${classes.gridItem} ${classes.equalHeightCard}`}>
              <ToolCard tool={toolCards.find(tool => tool.id === 'abeam-einvoicing')} />
            </div>
            <div className={`${classes.gridItem} ${classes.equalHeightCard}`}>
              <ToolCard tool={toolCards.find(tool => tool.id === 'document-compliance')} />
            </div>
            <div className={`${classes.gridItem} ${classes.fullWidthCard}`}>
              <ToolCard tool={toolCards.find(tool => tool.id === 's4hana-security')} />
            </div>
          </div>
        ) : (
          processes[activeCategory]?.map((process, index) => (
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
