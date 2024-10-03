export const procurementProcesses = [
  {
    icon: '📋',
    title: 'Purchase Requisition',
    description: 'Create and manage purchase requisitions.',
    module: 'MM (Materials Management)',
    keyFeatures: [
      'Simplified approval workflows with Fiori apps.',
      'Real-time tracking of requisitions and approval statuses.'
    ],
    painPoints: [
      { description: 'Challenges with complex approval workflows.' }
    ]
  },
  {
    icon: '🛒',
    title: 'Purchase Order Processing',
    description: 'Create and manage purchase orders.',
    module: 'MM (Materials Management)',
    keyFeatures: [
      'Automated purchase order creation based on demand forecasts.',
      'Integrated catalog management for efficient ordering.'
    ],
    painPoints: [
      { description: 'Lack of integrated procure-to-pay capabilities.' }
    ]
  },
  {
    icon: '📦',
    title: 'Goods Receipt',
    description: 'Manage the receipt of goods.',
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
    description: 'Verify supplier invoices against goods receipts and purchase orders.',
    module: 'MM (Materials Management)',
    keyFeatures: [
      'Automated 3-way matching between purchase orders, goods receipts, and invoices.',
      'Machine learning integration for better accuracy.'
    ],
    painPoints: [
      { description: 'Lack of 3-way matching in PO invoice automation.' }
    ]
  },
  {
    icon: '📊',
    title: 'Inventory Management',
    description: 'Manage inventory levels and stock movements.',
    module: 'MM (Materials Management)',
    keyFeatures: [
      'Real-time inventory visibility with Fiori-based tracking.',
      'Improved integration with demand planning and warehouse management.'
    ],
    painPoints: []
  },
  {
    icon: '🤝',
    title: 'Supplier Evaluation',
    description: 'Evaluate and manage supplier performance.',
    module: 'MM (Supplier Management)',
    keyFeatures: [
      'Enhanced supplier evaluation using real-time performance analytics.',
      'Integrated supplier collaboration tools.'
    ],
    painPoints: []
  },
  {
    icon: '📁',
    title: 'Vendor Master Data Management',
    description: 'Manage vendor information and data.',
    module: 'MM (Supplier Management)',
    keyFeatures: [
      'Centralized vendor master data management with Fiori interface.',
      'Integration with Ariba for vendor onboarding.'
    ],
    painPoints: []
  },
  {
    icon: '📑',
    title: 'Sourcing and Contract Management',
    description: 'Manage sourcing processes and contracts.',
    module: 'MM (Sourcing)',
    keyFeatures: [
      'Automated contract creation based on historical data.',
      'Contract lifecycle management for key milestones and renewals.'
    ],
    painPoints: [
      { description: 'Minimal contract lifecycle management functionality.' }
    ]
  },
  {
    icon: '🤝',
    title: 'Supplier Collaboration',
    description: 'Collaborate with suppliers on orders and deliveries.',
    module: 'MM (Sourcing)',
    keyFeatures: [
      'Enhanced supplier collaboration via Ariba Network.',
      'Real-time tracking and communication with suppliers for orders/delivery.'
    ],
    painPoints: []
  },
  {
    icon: '📊',
    title: 'Procurement Analytics',
    description: 'Analyze procurement data and spending.',
    module: 'MM (Materials Management)',
    keyFeatures: [
      'Real-time spend analytics with SAP Fiori dashboards.',
      'Integrated category management for spend categorization and analysis.'
    ],
    painPoints: [
      { description: 'Limited procurement analytics capabilities.' },
      { description: 'Limited analytics in accounts payables.' }
    ]
  },
  {
    icon: '💳',
    title: 'Supplier Invoicing',
    description: 'Manage supplier invoices and payments.',
    module: 'MM (Materials Management)',
    keyFeatures: [
      'Real-time supplier invoicing and settlement through centralized invoicing platform.',
      'Automated matching and error detection.'
    ],
    painPoints: [
      { description: 'Lack of vendor invoice repository.' }
    ]
  }
];
