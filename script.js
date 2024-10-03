const financeProcesses = {
    'Core Financial Accounting': [
      {
        icon: '📒',
        title: 'General Ledger Accounting (FI-GL)',
        description: 'Universal Journal for simplified data model and real-time financial reporting.',
        module: 'FI (Financial Accounting)',
        keyFeatures: [
          'Universal Journal for simplified data model and real-time financial reporting.',
          'Flexible ledger approach, supporting parallel accounting.'
        ],
        painPoints: [
          { number: 1, description: 'Inability to automate reporting schedules and reconciliation tasks.' }
        ]
      },
      {
        icon: '💳',
        title: 'Accounts Payable (FI-AP)',
        description: 'Automated invoice processing with intelligent OCR and machine learning.',
        module: 'FI (Financial Accounting)',
        keyFeatures: [
          'Automated invoice processing with intelligent OCR and machine learning.',
          'Fiori-based interface for improved user experience.'
        ],
        painPoints: [
          { number: 13, description: 'Manual invoice receipt and data entry.' },
          { number: 15, description: 'Limited analytics in accounts payables.' }
        ]
      },
      {
        icon: '📜',
        title: 'Accounts Receivable (FI-AR)',
        description: 'Automated matching of incoming payments with machine learning.',
        module: 'FI (Financial Accounting)',
        keyFeatures: [
          'Automated matching of incoming payments with machine learning.',
          'Improved credit management tools integrated with real-time analytics.'
        ],
        painPoints: [
          { number: 11, description: 'Manual matching of incoming payments.' },
          { number: 9, description: 'Decentralized credit management.' }
        ]
      },
      {
        icon: '🏛',
        title: 'Asset Accounting (FI-AA)',
        description: 'Simplified asset accounting integration with Universal Journal.',
        module: 'FI-AA (Asset Accounting)',
        keyFeatures: [
          'Simplified asset accounting integration with Universal Journal.',
          'Real-time depreciation runs without the need for periodic batch jobs.'
        ],
        painPoints: [
          { number: 7, description: 'Lack of multiple depreciation areas for capital allowances.' }
        ]
      },
      {
        icon: '💼',
        title: 'Tax Management',
        description: 'Enhanced support for indirect tax calculations (VAT, GST).',
        module: 'FI (Financial Accounting)',
        keyFeatures: [
          'Enhanced support for indirect tax calculations (VAT, GST).',
          'Integrated tax reporting and compliance features for global tax management.'
        ],
        painPoints: [
          { number: 5, description: 'Significant effort for SST rate changes.' },
          { number: 6, description: 'Scattered tax data across modules.' },
          { number: 8, description: 'Manual tax calculation and effective tax rate checking.' }
        ]
      }
    ],
    'Management Accounting': [
      {
        icon: '📊',
        title: 'Controlling (CO)',
        description: 'Enable real-time profitability analysis with Universal Journal.',
        module: 'CO (Controlling)',
        keyFeatures: [
          'Universal Journal simplifies data flow between FI and CO.',
          'Real-time profitability analysis (COPA) with no data replication required.'
        ],
        painPoints: [
          { number: 3, description: 'Challenges in setting up subsidiaries.' },
          { number: 28, description: 'Management fee and cost allocation challenges.' },
          { number: 29, description: 'Segmental profit and loss statement challenges.' }
        ]
      }
    ],
    'Cash and Treasury Management': [
      {
        icon: '🏦',
        title: 'Cash and Bank Management (FI-BL)',
        description: 'Real-time cash management and liquidity forecasting tools.',
        module: 'FI-BL (Banking)',
        keyFeatures: [
          'Real-time cash management and liquidity forecasting tools.',
          'Bank account management with central control of bank accounts globally.'
        ],
        painPoints: [
          { number: 4, description: 'Limited bank reconciliation functionality.' },
          { number: 18, description: 'Manual cash flow forecast.' },
          { number: 21, description: 'Manual payment processing.' },
          { number: 22, description: 'Lack of real-time bank balance visibility.' }
        ]
      },
      {
        icon: '💰',
        title: 'Treasury and Risk Management (TRM)',
        description: 'Manage treasury operations with real-time analytics.',
        module: 'TRM (Treasury)',
        keyFeatures: [
          'Integrated risk management tools for real-time treasury operations.',
          'Enhanced support for complex financial instruments and hedging.'
        ],
        painPoints: [
          { number: 19, description: 'Limited monitoring of counterparty limits.' },
          { number: 20, description: 'Customization required for handling new currencies.' },
          { number: 23, description: 'Absence of liquidity bucket information.' }
        ]
      }
    ],
    'Financial Planning and Analysis': [
      {
        icon: '📅',
        title: 'Financial Planning and Analysis (FP&A)',
        description: 'Embedded planning and forecasting tools with SAP Analytics Cloud integration.',
        module: 'CO (Controlling)',
        keyFeatures: [
          'Embedded planning and forecasting tools with SAP Analytics Cloud integration.',
          'Real-time variance analysis and predictive capabilities.'
        ],
        painPoints: []
      },
      {
        icon: '📝',
        title: 'Budgeting and Planning (BPC)',
        description: 'Integration with SAP Analytics Cloud for advanced planning and forecasting.',
        module: 'BPC (Business Planning and Consolidation)',
        keyFeatures: [
          'Integration with SAP Analytics Cloud for advanced planning and forecasting.',
          'Improved collaboration with real-time financial data.'
        ],
        painPoints: [
          { number: 31, description: 'Budgeting is spreadsheet-based.' },
          { number: 32, description: 'Difficulty creating multiple budget scenarios.' },
          { number: 33, description: 'Manual budget input compilation.' },
          { number: 34, description: 'Manual tracking of actual vs. budget performance.' }
        ]
      },
      {
        icon: '📊',
        title: 'Group Reporting (Consolidation)',
        description: 'Embedded real-time consolidation without data replication.',
        module: 'Group Reporting',
        keyFeatures: [
          'Embedded real-time consolidation without data replication.',
          'Seamless integration with Universal Journal for consolidated reporting.'
        ],
        painPoints: []
      }
    ],
    'Revenue Management': [
      {
        icon: '💼',
        title: 'Revenue Recognition',
        description: 'Native support for IFRS 15 / ASC 606 revenue recognition standards.',
        module: 'FI (Financial Accounting)',
        keyFeatures: [
          'Native support for IFRS 15 / ASC 606 revenue recognition standards.',
          'Event-based revenue recognition with automated contract handling.'
        ],
        painPoints: []
      }
    ],
    'Real-Time Analytics and Reporting': [
      {
        icon: '📉',
        title: 'Real-Time Analytics and Reporting',
        description: 'Embedded real-time analytics with SAP Fiori dashboards.',
        module: 'FI, CO (Financial/Controlling)',
        keyFeatures: [
          'Embedded real-time analytics with SAP Fiori dashboards.',
          'Integration with SAP Analytics Cloud for advanced reporting and visualization.'
        ],
        painPoints: [
          { number: 2, description: 'Lack of advanced analytics and visualization capabilities.' },
          { number: 30, description: 'Limited customization options for management reports.' }
        ]
      }
    ],
    'Central Finance': [
      {
        icon: '🌐',
        title: 'Central Finance',
        description: 'Real-time financial data replication from multiple ERP systems.',
        module: 'Central Finance',
        keyFeatures: [
          'Real-time financial data replication from multiple ERP systems.',
          'Centralized reporting with minimal latency and simplified reconciliation.'
        ],
        painPoints: []
      }
    ],
    'Core Procurement Operations': [
      {
        icon: '📋',
        title: 'Purchase Requisition',
        description: 'Simplified approval workflows with Fiori apps.',
        module: 'MM (Materials Management)',
        keyFeatures: [
          'Simplified approval workflows with Fiori apps.',
          'Real-time tracking of requisitions and approval statuses.'
        ],
        painPoints: [
          { number: 24, description: 'Challenges with complex approval workflows.' }
        ]
      },
      {
        icon: '🛒',
        title: 'Purchase Order Processing',
        description: 'Automated purchase order creation based on demand forecasts.',
        module: 'MM (Materials Management)',
        keyFeatures: [
          'Automated purchase order creation based on demand forecasts.',
          'Integrated catalog management for efficient ordering.'
        ],
        painPoints: []
      },
      {
        icon: '📦',
        title: 'Goods Receipt',
        description: 'Real-time integration with warehouse management.',
        module: 'MM (Materials Management)',
        keyFeatures: [
          'Real-time integration with warehouse management.',
          'Enhanced goods receipt posting with automatic matching to purchase orders.'
        ],
        painPoints: []
      },
      {
        icon: '🧾',
        title: 'Invoice Verification',
        description: 'Automated 3-way matching between purchase orders, goods receipts, and invoices.',
        module: 'MM (Materials Management)',
        keyFeatures: [
          'Automated 3-way matching between purchase orders, goods receipts, and invoices.',
          'Machine learning integration for better accuracy.'
        ],
        painPoints: [
          { number: 14, description: 'Lack of 3-way matching in PO invoice automation.' },
          { number: 17, description: 'Lack of vendor invoice repository.' }
        ]
      },
      {
        icon: '📊',
        title: 'Inventory Management',
        description: 'Real-time inventory visibility with Fiori-based tracking.',
        module: 'MM (Materials Management)',
        keyFeatures: [
          'Real-time inventory visibility with Fiori-based tracking.',
          'Improved integration with demand planning and warehouse management.'
        ],
        painPoints: []
      }
    ],
    'Supplier Management': [
      {
        icon: '📈',
        title: 'Supplier Evaluation',
        description: 'Enhanced supplier evaluation using real-time performance analytics.',
        module: 'MM (Supplier Management)',
        keyFeatures: [
          'Enhanced supplier evaluation using real-time performance analytics.',
          'Integrated supplier collaboration tools.'
        ],
        painPoints: []
      },
      {
        icon: '👤',
        title: 'Vendor Master Data Management',
        description: 'Centralized vendor master data management with Fiori interface.',
        module: 'MM (Supplier Management)',
        keyFeatures: [
          'Centralized vendor master data management with Fiori interface.',
          'Integration with Ariba for vendor onboarding.'
        ],
        painPoints: []
      }
    ],
    'Strategic Procurement': [
      {
        icon: '📝',
        title: 'Sourcing and Contract Management',
        description: 'Automated contract creation based on historical data.',
        module: 'MM (Sourcing)',
        keyFeatures: [
          'Automated contract creation based on historical data.',
          'Contract lifecycle management for key milestones and renewals.'
        ],
        painPoints: [
          { number: 27, description: 'Minimal contract lifecycle management functionality.' }
        ]
      },
      {
        icon: '🤝',
        title: 'Supplier Collaboration',
        description: 'Enhanced supplier collaboration via Ariba Network.',
        module: 'MM (Sourcing)',
        keyFeatures: [
          'Enhanced supplier collaboration via Ariba Network.',
          'Real-time tracking and communication with suppliers for orders/delivery.'
        ],
        painPoints: []
      }
    ],
    'Procurement Analytics': [
      {
        icon: '📊',
        title: 'Procurement Reporting',
        description: 'Real-time spend analytics with SAP Fiori dashboards.',
        module: 'MM (Materials Management)',
        keyFeatures: [
          'Real-time spend analytics with SAP Fiori dashboards.',
          'Integrated category management for spend categorization and analysis.'
        ],
        painPoints: [
          { number: 26, description: 'Limited procurement analytics capabilities.' }
        ]
      }
    ],
    'Supplier Invoicing': [
      {
        icon: '💳',
        title: 'Supplier Invoicing',
        description: 'Real-time supplier invoicing and settlement through centralized invoicing platform.',
        module: 'MM (Materials Management)',
        keyFeatures: [
          'Real-time supplier invoicing and settlement through centralized invoicing platform.',
          'Automated matching and error detection.'
        ],
        painPoints: [
          { number: 16, description: 'Lack of integrated procure-to-pay capabilities.' }
        ]
      }
    ],
    'Sales Order Management': [
      {
        icon: '📝',
        title: 'Sales Order Creation',
        description: 'Simplified order creation with Fiori-based interface.',
        module: 'SD (Sales and Distribution)',
        keyFeatures: [
          'Simplified order creation with Fiori-based interface.',
          'Real-time order tracking and availability checks through ATP (Available-to-Promise).'
        ],
        painPoints: [
          { number: 10, description: 'Manual processing required despite mass invoice upload.' }
        ]
      },
      {
        icon: '💰',
        title: 'Pricing and Conditions',
        description: 'Real-time pricing simulations for complex pricing conditions.',
        module: 'SD (Sales and Distribution)',
        keyFeatures: [
          'Real-time pricing simulations for complex pricing conditions.',
          'Advanced pricing engine integrated for dynamic pricing calculations.'
        ],
        painPoints: []
      },
      {
        icon: '🚚',
        title: 'Order Fulfillment',
        description: 'Automated order fulfillment process with real-time updates on delivery status.',
        module: 'SD (Sales and Distribution)',
        keyFeatures: [
          'Automated order fulfillment process with real-time updates on delivery status.',
          'Integration with Advanced ATP (aATP) for accurate delivery promises.'
        ],
        painPoints: []
      }
    ],
    'Shipping and Transportation': [
      {
        icon: '📦',
        title: 'Delivery Processing',
        description: 'Simplified delivery creation and processing with automation.',
        module: 'SD (Sales and Distribution)',
        keyFeatures: [
          'Simplified delivery creation and processing with automation.',
          'Enhanced transportation scheduling for optimized delivery routing.'
        ],
        painPoints: []
      },
      {
        icon: '🚛',
        title: 'Shipping and Goods Issue',
        description: 'Real-time goods issue with integration to warehouse management.',
        module: 'SD (Sales and Distribution)',
        keyFeatures: [
          'Real-time goods issue with integration to warehouse management.',
          'Automated shipping execution based on predefined rules.'
        ],
        painPoints: []
      }
    ],
    'Billing and Invoicing': [
      {
        icon: '📄',
        title: 'Billing Document Creation',
        description: 'Automated billing based on delivery and order completion.',
        module: 'SD (Sales and Distribution)',
        keyFeatures: [
          'Automated billing based on delivery and order completion.',
          'Fiori-based billing management with real-time invoice generation.'
        ],
        painPoints: []
      },
      {
        icon: '💳',
        title: 'Invoice Processing',
        description: 'Automated invoicing with enhanced compliance features.',
        module: 'SD (Sales and Distribution)',
        keyFeatures: [
          'Automated invoicing with enhanced compliance features.',
          'Improved handling of credit memos, debit memos, and other adjustments.'
        ],
        painPoints: [
          { number: 12, description: 'Absence of e-invoicing compliance capabilities.' }
        ]
      }
    ],
    'Credit and Risk Management': [
      {
        icon: '🔒',
        title: 'Credit Control and Management',
        description: 'Real-time credit checks with automated risk management.',
        module: 'SD (Sales and Distribution)',
        keyFeatures: [
          'Real-time credit checks with automated risk management.',
          'Integrated credit limit management and alerts for high-risk orders.'
        ],
        painPoints: []
      }
    ],
    'Returns and Refunds': [
      {
        icon: '↩️',
        title: 'Returns Management',
        description: 'Streamlined returns processing with automatic credit note creation.',
        module: 'SD (Sales and Distribution)',
        keyFeatures: [
          'Streamlined returns processing with automatic credit note creation.',
          'Integrated handling of defective products and returns routing.'
        ],
        painPoints: []
      }
    ],
    'Sales Analytics': [
      {
        icon: '📊',
        title: 'Sales Reporting and Analytics',
        description: 'Real-time sales analytics with SAP Fiori dashboards.',
        module: 'SD (Sales and Distribution)',
        keyFeatures: [
          'Real-time sales analytics with SAP Fiori dashboards.',
          'Embedded predictive analytics for demand forecasting and sales planning.'
        ],
        painPoints: []
      }
    ]
  };
  
  const getPainPointStatus = (count) => {
    if (count === 0) {
      return { label: 'No Issue', color: 'green' };
    } else if (count === 1 || count === 2) {
      return { label: `Pain Point: ${count}`, color: 'amber' };
    } else {
      return { label: 'Pain Point: 3+', color: 'red' };
    }
  };
  
  const ProcessCard = ({ title, icon, description, painPointCount, openSubCards }) => {
    const { label, color } = getPainPointStatus(painPointCount);
  
    return (
      <div className="process-card" onClick={openSubCards}>
        <div className="process-icon">{icon}</div>
        <h3>{title}</h3>
        <p className="process-description">{description}</p>
        <div className={`pain-points-indicator ${color}`}>
          {label}
        </div>
      </div>
    );
  };
  
  const SubCard = ({ subProcess, openModal }) => {
    const { label, color } = getPainPointStatus(subProcess.painPoints.length);
  
    return (
      <div className="process-card" onClick={() => openModal(subProcess)}>
        <div className="process-icon">{subProcess.icon}</div>
        <h4>{subProcess.title}</h4>
        <p className="process-description">{subProcess.description}</p>
        <div className={`pain-points-indicator ${color}`}>
          {label}
        </div>
      </div>
    );
  };
  
  const Modal = ({ subProcess, closeModal }) => {
    return (
      <div className="modal-overlay" onClick={closeModal}>
        <div className="modal-content" onClick={e => e.stopPropagation()}>
          <span className="modal-close-icon" onClick={closeModal}>&times;</span>
          <h2>{subProcess.title}</h2>
          <p><strong>Module:</strong> {subProcess.module}</p>
          <div>
            <h3>Key Features:</h3>
            <ul>
              {subProcess.keyFeatures.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Indicative Pain Point(s) Addressed:</h3>
            <ul>
              {subProcess.painPoints.map((pain, index) => (
                <li key={index}>Pain Point {pain.number}: {pain.description}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  const App = () => {
    const [selectedGroup, setSelectedGroup] = React.useState(null);
    const [selectedSubProcess, setSelectedSubProcess] = React.useState(null);
    const [searchTerm, setSearchTerm] = React.useState('');
    const [filteredProcesses, setFilteredProcesses] = React.useState(financeProcesses);
  
    React.useEffect(() => {
      if (searchTerm) {
        const filtered = Object.keys(financeProcesses).reduce((acc, group) => {
          const matchingProcesses = financeProcesses[group].filter(
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
        setFilteredProcesses(financeProcesses);
      }
    }, [searchTerm]);
  
    const openSubCards = (group) => {
      setSelectedGroup(group);
    };
  
    const openModal = (subProcess) => {
      setSelectedSubProcess(subProcess);
    };
  
    const closeModal = () => {
      setSelectedSubProcess(null);
    };
  
    const handleSearch = (e) => {
      e.preventDefault();
      // Search is already handled by the useEffect
    };
  
    return (
       <div id="app-container">
        <h1 className="main-title">BURSA Malaysia ERP Transformation</h1>
        <p className="intro">Navigating SAP S/4HANA: Streamlined Business Processes, Enhanced Capabilities, and Strategic Solutions to BURSA's Pain Points</p>
        <form className="search-bar" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search processes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">🔍</button>
        </form>
        {!selectedGroup ? (
          <div className="process-grid">
            {Object.keys(filteredProcesses).map(group => (
              <ProcessCard
                key={group}
                title={group}
                icon={group === 'Core Financial Accounting' ? '💼' :
                      group === 'Management Accounting' ? '📊' :
                      group === 'Cash and Treasury Management' ? '💰' :
                      group === 'Financial Planning and Analysis' ? '📅' :
                      group === 'Revenue Management' ? '💼' :
                      group === 'Real-Time Analytics and Reporting' ? '📉' :
                      group === 'Central Finance' ? '🌐' :
                      group === 'Core Procurement Operations' ? '🛒' :
                      group === 'Supplier Management' ? '🤝' :
                      group === 'Strategic Procurement' ? '📝' :
                      group === 'Procurement Analytics' ? '📊' :
                      group === 'Supplier Invoicing' ? '💳' :
                      group === 'Sales Order Management' ? '📝' :
                      group === 'Shipping and Transportation' ? '🚚' :
                      group === 'Billing and Invoicing' ? '📄' :
                      group === 'Credit and Risk Management' ? '🔒' :
                      group === 'Returns and Refunds' ? '↩️' :
                      group === 'Sales Analytics' ? '📊' :
                      '🏛'}
                description={`Explore processes under ${group}`}
                painPointCount={filteredProcesses[group].reduce((acc, subProcess) => acc + subProcess.painPoints.length, 0)}
                openSubCards={() => openSubCards(group)}
              />
            ))}
          </div>
        ) : (
          <div className="subcard-section">
            <div className="breadcrumbs">
              <a href="#" onClick={() => setSelectedGroup(null)}>Home</a> &gt; {selectedGroup}
            </div>
            <div className="subcard-header">
              <h2>{selectedGroup}</h2>
              <div className="back-arrow" onClick={() => setSelectedGroup(null)}>
                ← Back
              </div>
            </div>
            <div className="process-grid">
              {filteredProcesses[selectedGroup].map((subProcess, index) => (
                <SubCard key={index} subProcess={subProcess} openModal={openModal} />
              ))}
            </div>
          </div>
        )}
        {selectedSubProcess && <Modal subProcess={selectedSubProcess} closeModal={closeModal} />}
      </div>
    );
  };
  
  ReactDOM.render(<App />, document.getElementById('app-container'));
  