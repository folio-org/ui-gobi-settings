import { FormattedMessage } from 'react-intl';

export const GOBI_MAPPING_TYPES = {
  default: 'Default',
  custom: 'Custom',
};

export const FORMATTED_ORDER_MAPPING_TYPES = {
  listedElectronicMonograph: <FormattedMessage id="ui-gobi-settings.order.mappings.type.listedElectronicMonograph" />,
  listedElectronicSerial: <FormattedMessage id="ui-gobi-settings.order.mappings.type.listedElectronicSerial" />,
  listedPrintMonograph: <FormattedMessage id="ui-gobi-settings.order.mappings.type.listedPrintMonograph" />,
  listedPrintSerial: <FormattedMessage id="ui-gobi-settings.order.mappings.type.listedPrintSerial" />,
  unlistedPrintMonograph: <FormattedMessage id="ui-gobi-settings.order.mappings.type.unlistedPrintMonograph" />,
  unlistedPrintSerial: <FormattedMessage id="ui-gobi-settings.order.mappings.type.unlistedPrintSerial" />,
};

export const FIELDS = {
  ACCESS_PROVIDER: 'ACCESS_PROVIDER',
  ACQUISITION_METHOD: 'ACQUISITION_METHOD',
  ACQUISITION_UNIT: 'ACQUISITION_UNIT',
  ACTIVATED: 'ACTIVATED',
  ACTIVATION_DUE: 'ACTIVATION_DUE',
  ADDITIONAL_COST: 'ADDITIONAL_COST',
  AGGREMENT_ID: 'AGGREMENT_ID',
  APPROVED: 'APPROVED',
  ASSIGNED_TO: 'ASSIGNED_TO',
  BILL_TO: 'BILL_TO',
  CANCELLATION_RESTRICTION: 'CANCELLATION_RESTRICTION',
  CANCELLATION_RESTRICTION_NOTE: 'CANCELLATION_RESTRICTION_NOTE',
  CLAIM_ACTIVE: 'CLAIM_ACTIVE',
  CLAIM_INTERVAL: 'CLAIM_INTERVAL',
  COLLECTION: 'COLLECTION',
  CONTRIBUTOR: 'CONTRIBUTOR',
  CONTRIBUTOR_NAME_TYPE: 'CONTRIBUTOR_NAME_TYPE',
  CREATE_INVENTORY: 'CREATE_INVENTORY',
  CURRENCY: 'CURRENCY',
  DESCRIPTION: 'DESCRIPTION',
  DISCOUNT: 'DISCOUNT',
  DISCOUNT_TYPE: 'DISCOUNT_TYPE',
  DONOR: 'DONOR',
  EDITION: 'EDITION',
  EXCHANGE_RATE: 'EXCHANGE_RATE',
  EXPECTED_ACTIVATION: 'EXPECTED_ACTIVATION',
  EXPECTED_RECEIPT_DATE: 'EXPECTED_RECEIPT_DATE',
  EXPENSE_CLASS: 'EXPENSE_CLASS',
  FUND_ID: 'FUND_ID',
  FUND_CODE: 'FUND_CODE',
  FUND_PERCENTAGE: 'FUND_PERCENTAGE',
  LINKED_PACKAGE: 'LINKED_PACKAGE',
  LIST_UNIT_PRICE: 'LIST_UNIT_PRICE',
  LIST_UNIT_PRICE_ELECTRONIC: 'LIST_UNIT_PRICE_ELECTRONIC',
  LOCATION: 'LOCATION',
  MANUAL_PO: 'MANUAL_PO',
  MATERIAL_SUPPLIER: 'MATERIAL_SUPPLIER',
  MATERIAL_TYPE: 'MATERIAL_TYPE',
  NOTES: 'NOTES',
  ORDER_TYPE: 'ORDER_TYPE',
  PACKAGE_DESIGNATION: 'PACKAGE_DESIGNATION',
  PO_LINE_DESCRIPTION: 'PO_LINE_DESCRIPTION',
  PO_LINE_ESTIMATED_PRICE: 'PO_LINE_ESTIMATED_PRICE',
  PO_LINE_ORDER_FORMAT: 'PO_LINE_ORDER_FORMAT',
  PO_LINE_PAYMENT_STATUS: 'PO_LINE_PAYMENT_STATUS',
  PO_LINE_RECEIPT_STATUS: 'PO_LINE_RECEIPT_STATUS',
  PREFIX: 'PREFIX',
  PRODUCT_ID: 'PRODUCT_ID',
  PRODUCT_ID_TYPE: 'PRODUCT_ID_TYPE',
  PRODUCT_QUALIFIER: 'PRODUCT_QUALIFIER',
  PUBLICATION_DATE: 'PUBLICATION_DATE',
  PUBLISHER: 'PUBLISHER',
  PURCHASE_ORDER_ID: 'PURCHASE_ORDER_ID',
  QUANTITY_ELECTRONIC: 'QUANTITY_ELECTRONIC',
  QUANTITY_PHYSICAL: 'QUANTITY_PHYSICAL',
  RECEIPT_DATE: 'RECEIPT_DATE',
  RECEIPT_DUE: 'RECEIPT_DUE',
  RECEIVING_NOTE: 'RECEIVING_NOTE',
  ONGOING_IS_SUBSCRIPTION: 'ONGOING_IS_SUBSCRIPTION',
  ONGOING_DATE: 'ONGOING_DATE',
  ONGOING_INTERVAL: 'ONGOING_INTERVAL',
  ONGOING_MANUAL: 'ONGOING_MANUAL',
  ONGOING_REVIEW_PERIOD: 'ONGOING_REVIEW_PERIOD',
  ONGOING_NOTES: 'ONGOING_NOTES',
  ONGOING_REVIEW_DATE: 'ONGOING_REVIEW_DATE',
  RECEIVING_WORKFLOW: 'RECEIVING_WORKFLOW',
  REQUESTER: 'REQUESTER',
  RE_ENCUMBER: 'RE_ENCUMBER',
  RUSH: 'RUSH',
  SELECTOR: 'SELECTOR',
  SHIP_TO: 'SHIP_TO',
  SOURCE: 'SOURCE',
  SUBSCRIPTION_FROM: 'SUBSCRIPTION_FROM',
  SUBSCRIPTION_INTERVAL: 'SUBSCRIPTION_INTERVAL',
  SUBSCRIPTION_TO: 'SUBSCRIPTION_TO',
  SUFFIX: 'SUFFIX',
  SUPPRESS_INSTANCE_FROM_DISCOVERY: 'SUPPRESS_INSTANCE_FROM_DISCOVERY',
  TAGS: 'TAGS',
  TITLE: 'TITLE',
  TOTAL_ESTIMATED_PRICE: 'TOTAL_ESTIMATED_PRICE',
  TOTAL_ITEMS: 'TOTAL_ITEMS',
  TRIAL: 'TRIAL',
  USER_LIMIT: 'USER_LIMIT',
  URL: 'URL',
  VENDOR: 'VENDOR',
  VENDOR_ACCOUNT: 'VENDOR_ACCOUNT',
  VENDOR_INSTRUCTIONS: 'VENDOR_INSTRUCTIONS',
  VENDOR_REF_NO: 'VENDOR_REF_NO',
  VENDOR_REF_NO_TYPE: 'VENDOR_REF_NO_TYPE',
  VOLUMES: 'VOLUMES',
  WORKFLOW_STATUS: 'WORKFLOW_STATUS',
};

export const CUSTOM_PATH = 'Custom Path';

export const GOBI_FIELDS = {
  baseAccount: 'Base Account',
  subAccount: 'Sub Account',
  title: 'Title',
  productId: 'Product ID',
  productQualifier: 'Product Qualifier',
  publicationDate: 'Publication Date',
  publisher: 'Publisher',
  contributor: 'Contributor',
  fundCode: 'Fund Code',
  location: 'Location',
  quantity: 'Quantity',
  ypbOrderKey: 'YBP Order Key',
  orderPlaced: 'Order Placed',
  unitPrice: 'Unit Price',
  currency: 'Currency',
  localData1: 'Local Data 1',
  localData2: 'Local Data 2',
  localData3: 'Local Data 3',
  localData4: 'Local Data 4',
  suppressInstanceFromDiscovery: 'Suppress instance from discovery',
};

export const GOBI_FIELDS_PATH_MAP = {
  [GOBI_FIELDS.baseAccount]: '//BaseAccount',
  [GOBI_FIELDS.subAccount]: '//SubAccount',
  [GOBI_FIELDS.title]: '//datafield[@tag=\'245\']/*',
  [GOBI_FIELDS.productId]: '//datafield[@tag=\'020\']/subfield[@code=\'a\']',
  [GOBI_FIELDS.productQualifier]: '//datafield[@tag=\'020\']/subfield[@code=\'q\']',
  [GOBI_FIELDS.publicationDate]: '//datafield[@tag=\'260\']/subfield[@code=\'c\']',
  [GOBI_FIELDS.publisher]: '//datafield[@tag=\'260\']/subfield[@code=\'b\']',
  [GOBI_FIELDS.contributor]: '//datafield[@tag=\'100\']/*',
  [GOBI_FIELDS.fundCode]: '//fundcode',
  [GOBI_FIELDS.location]: '//Location',
  [GOBI_FIELDS.quantity]: '//Quantity',
  [GOBI_FIELDS.ypbOrderKey]: '//YBPOrderKey',
  [GOBI_FIELDS.orderPlaced]: '//OrderPlaced',
  [GOBI_FIELDS.unitPrice]: '//ListPrice/Amount',
  [GOBI_FIELDS.currency]: '//ListPrice/Currency',
  [GOBI_FIELDS.localData1]: '//LocalData[Description=\'LocalData1\']/Value',
  [GOBI_FIELDS.localData2]: '//LocalData[Description=\'LocalData2\']/Value',
  [GOBI_FIELDS.localData3]: '//LocalData[Description=\'LocalData3\']/Value',
  [GOBI_FIELDS.localData4]: '//LocalData[Description=\'LocalData4\']/Value',
  [GOBI_FIELDS.suppressInstanceFromDiscovery]: '//SuppressInstanceFromDiscovery',
};
