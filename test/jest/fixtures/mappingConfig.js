export const mappingConfig = {
  mappingType: 'Default',
  mapping: [
    {
      field: 'ACQUISITION_METHOD',
      dataSource: {
        default: 'Purchase At Vendor System',
      },
    },
    {
      field: 'APPROVED',
      dataSource: {
        default: 'true',
        translation: 'toBoolean',
        translateDefault: true,
      },
    },
    {
      field: 'CLAIMED',
      dataSource: {
        default: 'true',
        translation: 'toBoolean',
        translateDefault: true,
      },
    },
    {
      field: 'COLLECTION',
      dataSource: {
        default: 'false',
        translation: 'toBoolean',
        translateDefault: true,
      },
    },
    {
      field: 'CONTRIBUTOR',
      dataSource: {
        from: "//datafield[@tag='100']/*",
        combinator: 'concat',
      },
    },
    {
      field: 'CONTRIBUTOR_NAME_TYPE',
      dataSource: {
        default: 'Personal name',
        translation: 'lookupContributorNameTypeId',
        translateDefault: true,
      },
    },
    {
      field: 'CURRENCY',
      dataSource: {
        from: '//ListPrice/Currency',
        default: 'USD',
      },
    },
    {
      field: 'DATE_ORDERED',
      dataSource: {
        from: '//OrderPlaced',
        translation: 'toDate',
      },
    },
    {
      field: 'FUND_ID',
      dataSource: {
        from: '//FundCode',
        translation: 'lookupFundId',
      },
    },
    {
      field: 'FUND_CODE',
      dataSource: {
        from: '//FundCode',
      },
    },
    {
      field: 'FUND_PERCENTAGE',
      dataSource: {
        default: '100',
        translation: 'toDouble',
        translateDefault: true,
      },
    },
    {
      field: 'VENDOR_INSTRUCTIONS',
      dataSource: {
        from: '//OrderNotes',
        default: 'N/A',
      },
    },
    {
      field: 'LIST_UNIT_PRICE',
      dataSource: {
        from: '//ListPrice/Amount',
        default: '0',
        translation: 'toDouble',
        translateDefault: true,
      },
    },
    {
      field: 'LOCATION',
      dataSource: {
        from: '//Location',
        default: '*',
        translation: 'lookupLocationId',
        translateDefault: true,
      },
    },
    {
      field: 'MANUAL_PO',
      dataSource: {
        default: 'false',
        translation: 'toBoolean',
        translateDefault: true,
      },
    },
    {
      field: 'ORDER_TYPE',
      dataSource: {
        default: 'One-Time',
      },
    },
    {
      field: 'PO_LINE_ORDER_FORMAT',
      dataSource: {
        default: 'Physical Resource',
      },
    },
    {
      field: 'PO_LINE_PAYMENT_STATUS',
      dataSource: {
        default: 'Awaiting Payment',
      },
    },
    {
      field: 'PO_LINE_RECEIPT_STATUS',
      dataSource: {
        default: 'Awaiting Receipt',
      },
    },
    {
      field: 'PRODUCT_ID',
      dataSource: {
        from: "//datafield[@tag='020']/subfield[@code='a']",
        translation: 'truncateISBNQualifier',
      },
    },
    {
      field: 'PRODUCT_ID_TYPE',
      dataSource: {
        default: 'ISBN',
        translation: 'lookupProductIdType',
        translateDefault: true,
      },
    },
    {
      field: 'PRODUCT_QUALIFIER',
      dataSource: {
        from: "//datafield[@tag='020']/subfield[@code='q']",
        defaultMapping: {
          dataSource: {
            from: "//datafield[@tag='020']/subfield[@code='a']",
            translation: 'separateISBNQualifier',
          },
        },
      },
    },
    {
      field: 'PUBLICATION_DATE',
      dataSource: {
        from: "//datafield[@tag='260']/subfield[@code='c']",
      },
    },
    {
      field: 'PUBLISHER',
      dataSource: {
        from: "//datafield[@tag='260']/subfield[@code='b']",
      },
    },
    {
      field: 'QUANTITY_PHYSICAL',
      dataSource: {
        from: '//Quantity',
        default: '1',
        translation: 'toInteger',
      },
    },
    {
      field: 'SOURCE',
      dataSource: {
        default: 'API',
      },
    },
    {
      field: 'TITLE',
      dataSource: {
        from: "//datafield[@tag='245']/*",
        combinator: 'concat',
      },
    },
    {
      field: 'VENDOR',
      dataSource: {
        default: 'GOBI',
        translation: 'lookupOrganization',
        translateDefault: true,
      },
    },
    {
      field: 'MATERIAL_SUPPLIER',
      dataSource: {
        default: 'GOBI',
        translation: 'lookupOrganization',
        translateDefault: true,
      },
    },
    {
      field: 'VENDOR_ACCOUNT',
      dataSource: {
        from: '//SubAccount',
        default: '0',
      },
    },
    {
      field: 'VENDOR_REF_NO',
      dataSource: {
        from: '//YBPOrderKey',
      },
    },
    {
      field: 'VENDOR_REF_NO_TYPE',
      dataSource: {
        default: 'Vendor order reference number',
      },
    },
    {
      field: 'WORKFLOW_STATUS',
      dataSource: {
        default: 'Open',
      },
    },
    {
      field: 'MATERIAL_TYPE',
      dataSource: {
        from: "//LocalData[Description='LocalData1']/Value",
        default: 'unspecified',
        translation: 'lookupMaterialTypeId',
        translateDefault: true,
      },
    },
    {
      field: 'LINKED_PACKAGE',
      dataSource: {
        from: "//LocalData[Description='LocalData2']/Value",
        translation: 'lookupLinkedPackage',
      },
    },
    {
      field: 'SHIP_TO',
      dataSource: {
        from: "//LocalData[Description='LocalData3']/Value",
        translation: 'lookupConfigAddress',
      },
    },
    {
      field: 'PREFIX',
      dataSource: {
        from: "//LocalData[Description='LocalData4']/Value",
        translation: 'lookupPrefix',
      },
    },
  ],
};