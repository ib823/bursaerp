export const procurementProcesses = {
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
      };