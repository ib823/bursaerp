export const financeProcesses = {
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
    };