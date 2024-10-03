export const salesProcesses = {
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
      ],
    };