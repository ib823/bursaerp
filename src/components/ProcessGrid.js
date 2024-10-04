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
  securityComplianceContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '20px',
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: '1fr 1fr',
    },
  },
  fullWidthCard: {
    gridColumn: '1 / -1',
    backgroundColor: '#f0f8ff',  // Light blue background for distinction
    border: '2px solid #007AFF',  // Keep only the outer blue border
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',  // Subtle shadow
    borderRadius: '8px',
    padding: theme.spacing(2),
  },
  importantTitle: {
    color: '#007AFF',  // Bursa blue accent for the title
    fontSize: '1.5rem',  // Make the title larger
    fontWeight: 'bold',  // Emphasize the title
    display: 'flex',
    alignItems: 'center',
  },
  iconStyle: {
    marginRight: theme.spacing(1),
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  toolCardWithoutBorder: {
    border: 'none',  // Remove the inner dashed border for "SAP S/4HANA Enhanced Security"
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
      title: 'Enable Now',
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
      category: 'Enablement',
      logo: SAPLogo,
      provider: 'SAP'
    },
    {
      id: 'esg-reporting',
      title: 'Sustainability Reporting & Compliance (ESG Reporting)',
      description: 'Enable comprehensive sustainability governance and ESG reporting through SAP’s integrated tools.',
      benefits: [
        'Centralized reporting on carbon, water, and waste with SAP Sustainability Control Tower.',
        'Adhere to environmental regulations using SAP EHS for real-time compliance.',
        'Future-proof governance with risk management and carbon analytics tools.',
        'Real-time ESG insights and automated reporting with SAP Analytics Cloud.'
      ],
      icon: '🌱',
      category: 'Enablement',
      logo: SAPLogo,
      provider: 'SAP'
    },
    {
      id: 's4hana-security',
      title: 'Industry-Recognized Security Standards for Financial Institutions',
      description: 'Comprehensive security features tailored for financial institutions like BURSA Malaysia.',
      benefits: [
        'Advanced Data Encryption & Privacy: Secure financial data with end-to-end encryption, ensuring compliance and protection from unauthorized access.',
        'Identity & Access Management (IAM): Role-based access control, MFA, and SoD to prevent unauthorized access and reduce fraud risks.',
        'Real-Time Threat Detection & Monitoring: Detect and respond to threats using SAP Enterprise Threat Detection (Optional add-on).',
        'Automated Compliance with Financial Regulations: Ensure compliance with global/local regulations through automated audits and reporting.',
        'Cloud Security Integration: Data residency controls and automated backups for hybrid or cloud deployments (Optional for cloud or hybrid).',
        'Regular Security Patches & Updates: Continuous protection through automated patches and updates.',
        'Data Masking & Privacy Controls: Protect sensitive information with data masking while maintaining usability (Optional tool for enhanced privacy).'
      ],
      icon: '🛡️',
      category: 'Security',
      logo: SAPLogo,
      provider: 'SAP'
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
      icon: '⚖️',
      category: 'Compliance',
      logo: SAPLogo,
      provider: 'SAP'
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
            <div className={classes.equalHeightCard}>
              <ToolCard tool={toolCards.find(tool => tool.id === 'abeam-einvoicing')} />
            </div>
            <div className={classes.equalHeightCard}>
              <ToolCard tool={toolCards.find(tool => tool.id === 'document-compliance')} />
            </div>
            <div className={classes.fullWidthCard}>
              <div className={classes.importantTitle}>
                <span className={classes.iconStyle}>🔒</span>
                SAP S/4HANA Enhanced Security
              </div>
              {/* Removed the redundant inner title and border */}
              <ToolCard tool={toolCards.find(tool => tool.id === 's4hana-security')} className={classes.toolCardWithoutBorder} />
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
