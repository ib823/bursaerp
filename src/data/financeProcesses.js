export const financeProcesses = [
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
      { description: 'Inability to automate reporting schedules and reconciliation tasks.' }
    ]
  },
  {
    icon: '💳',
    title: 'Accounts Payable (FI-AP)',
    description: 'Manage outgoing payments and vendor invoices.',
    module: 'FI (Financial Accounting)',
    keyFeatures: [
      'Automated invoice processing with intelligent OCR and machine learning.',
      'Fiori-based interface for improved user experience.'
    ],
    painPoints: [
      { description: 'Manual invoice receipt and data entry.' },
      { description: 'Lack of 3-way matching in PO invoice automation.' },
      { description: 'Lack of vendor invoice repository.' }
    ]
  },
  {
    icon: '💰',
    title: 'Accounts Receivable (FI-AR)',
    description: 'Manage customer accounts and incoming payments.',
    module: 'FI (Financial Accounting)',
    keyFeatures: [
      'Automated matching of incoming payments with machine learning.',
      'Improved credit management tools integrated with real-time analytics.'
    ],
    painPoints: [
      { description: 'Manual matching of incoming payments.' },
      { description: 'Decentralized credit management.' },
      { description: 'Absence of e-invoicing compliance capabilities.' }
    ]
  },
  {
    icon: '🏢',
    title: 'Asset Accounting (FI-AA)',
    description: 'Manage fixed assets and depreciation.',
    module: 'FI-AA (Asset Accounting)',
    keyFeatures: [
      'Simplified asset accounting integration with Universal Journal.',
      'Real-time depreciation runs without the need for periodic batch jobs.'
    ],
    painPoints: [
      { description: 'Lack of multiple depreciation areas for capital allowances.' }
    ]
  },
  {
    icon: '📊',
    title: 'Controlling (CO)',
    description: 'Manage cost accounting and internal reporting.',
    module: 'CO (Controlling)',
    keyFeatures: [
      'Universal Journal simplifies data flow between FI and CO.',
      'Real-time profitability analysis (COPA) with no data replication required.'
    ],
    painPoints: [
      { description: 'Challenges in setting up subsidiaries.' },
      { description: 'Management fee and cost allocation challenges.' },
      { description: 'Segmental profit and loss statement challenges.' }
    ]
  },
  {
    icon: '🏦',
    title: 'Cash and Bank Management (FI-BL)',
    description: 'Manage cash positions and bank accounts.',
    module: 'FI-BL (Banking)',
    keyFeatures: [
      'Real-time cash management and liquidity forecasting tools.',
      'Bank account management with central control of bank accounts globally.'
    ],
    painPoints: [
      { description: 'Limited bank reconciliation functionality.' },
      { description: 'Manual cash flow forecast.' },
      { description: 'Manual payment processing.' },
      { description: 'Lack of real-time bank balance visibility.' }
    ]
  },
  {
    icon: '📈',
    title: 'Financial Planning and Analysis (FP&A)',
    description: 'Perform financial planning, budgeting, and forecasting.',
    module: 'CO (Controlling)',
    keyFeatures: [
      'Embedded planning and forecasting tools with SAP Analytics Cloud integration.',
      'Real-time variance analysis and predictive capabilities.'
    ],
    painPoints: [
      { description: 'Budgeting is spreadsheet-based.' },
      { description: 'Difficulty creating multiple budget scenarios.' },
      { description: 'Manual budget input compilation.' },
      { description: 'Manual tracking of actual vs. budget performance.' }
    ]
  },
  {
    icon: '📉',
    title: 'Treasury and Risk Management (TRM)',
    description: 'Manage financial risks and treasury operations.',
    module: 'TRM (Treasury)',
    keyFeatures: [
      'Integrated risk management tools for real-time treasury operations.',
      'Enhanced support for complex financial instruments and hedging.'
    ],
    painPoints: [
      { description: 'Limited monitoring of counterparty limits.' },
      { description: 'Customization required for handling new currencies.' },
      { description: 'Absence of liquidity bucket information.' }
    ]
  },
  {
    icon: '🧾',
    title: 'Tax Management',
    description: 'Manage tax calculations and reporting.',
    module: 'FI (Financial Accounting)',
    keyFeatures: [
      'Enhanced support for indirect tax calculations (VAT, GST).',
      'Integrated tax reporting and compliance features for global tax management.'
    ],
    painPoints: [
      { description: 'Significant effort for SST rate changes.' },
      { description: 'Scattered tax data across modules.' },
      { description: 'Manual tax calculation and effective tax rate checking.' }
    ]
  },
  {
    icon: '📊',
    title: 'Real-Time Analytics and Reporting',
    description: 'Generate real-time financial reports and analytics.',
    module: 'FI, CO (Financial/Controlling)',
    keyFeatures: [
      'Embedded real-time analytics with SAP Fiori dashboards.',
      'Integration with SAP Analytics Cloud for advanced reporting and visualization.'
    ],
    painPoints: [
      { description: 'Lack of advanced analytics and visualization capabilities.' },
      { description: 'Limited customization options for management reports.' }
    ]
  }
];
