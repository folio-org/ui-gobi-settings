export const mappingConfig = {
  mappingType: 'Default',
  orderMappings: {
    orderType: 'ListedElectronicMonograph',
    mappings: [
      {
        field: 'ACCESS_PROVIDER',
        dataSource: {
          from: '//PurchaseOption/VendorPOCode',
          translation: 'lookupOrganization',
        },
      },
      {
        field: 'ACQUISITION_METHOD',
        dataSource: {
          default: 'Purchase At Vendor System',
        },
      },
      {
        field: 'ACTIVATED',
        dataSource: {
          translation: 'toBoolean',
          translateDefault: true,
          default: 'false',
        },
      },
      {
        field: 'APPROVED',
        dataSource: {
          translation: 'toBoolean',
          translateDefault: true,
          default: 'true',
        },
      },
      {
        field: 'CLAIMED',
        dataSource: {
          translation: 'toBoolean',
          translateDefault: true,
          default: 'true',
        },
      },
      {
        field: 'COLLECTION',
        dataSource: {
          translation: 'toBoolean',
          translateDefault: true,
          default: 'false',
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
          translation: 'lookupContributorNameTypeId',
          translateDefault: true,
          default: 'Personal name',
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
          translation: 'toDouble',
          translateDefault: true,
          default: '100',
        },
      },
      {
        field: 'LIST_UNIT_PRICE_ELECTRONIC',
        dataSource: {
          from: '//ListPrice/Amount',
          translation: 'toDouble',
          translateDefault: true,
          default: '0',
        },
      },
      {
        field: 'LOCATION',
        dataSource: {
          from: '//Location',
          translation: 'lookupLocationId',
          translateDefault: true,
          default: '*',
        },
      },
      {
        field: 'MANUAL_PO',
        dataSource: {
          translation: 'toBoolean',
          translateDefault: true,
          default: 'false',
        },
      },
      {
        field: 'MATERIAL_TYPE',
        dataSource: {
          from: "//LocalData[Description='LocalData1']/Value",
          translation: 'lookupMaterialTypeId',
          translateDefault: true,
          default: 'unspecified',
        },
      },
      {
        field: 'NOTE_FROM_VENDOR',
        dataSource: {
          from: '//PurchaseOption/VendorCode',
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
          default: 'Electronic Resource',
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
          default: 'Receipt Not Required',
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
          translation: 'lookupProductIdType',
          translateDefault: true,
          default: 'ISBN',
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
        field: 'QUANTITY_ELECTRONIC',
        dataSource: {
          from: '//Quantity',
          translation: 'toInteger',
          default: '1',
        },
      },
      {
        field: 'RECEIVING_NOTE',
        dataSource: {
          from: "//LocalData[Description='LocalData2']/Value",
        },
      },
      {
        field: 'REQUESTER',
        dataSource: {
          from: "//LocalData[Description='LocalData3']/Value",
        },
      },
      {
        field: 'SOURCE',
        dataSource: {
          default: 'API',
        },
      },
      {
        field: 'TAGS',
        dataSource: {
          from: "//LocalData[Description='LocalData4']/Value",
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
        field: 'TRIAL',
        dataSource: {
          translation: 'toBoolean',
          translateDefault: true,
          default: 'false',
        },
      },
      {
        field: 'VENDOR',
        dataSource: {
          translation: 'lookupOrganization',
          translateDefault: true,
          default: 'GOBI',
        },
      },
      {
        field: 'MATERIAL_SUPPLIER',
        dataSource: {
          translation: 'lookupOrganization',
          translateDefault: true,
          default: 'GOBI',
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
        field: 'VENDOR_INSTRUCTIONS',
        dataSource: {
          from: '//OrderNotes',
          default: 'N/A',
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
    ],
  },
};
