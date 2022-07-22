import { FormattedMessage } from 'react-intl';

import { FIELDS } from './mapping';

export const ORDER_MAPPING_ACCORDIONS = {
  poInfo: 'poInfo',
  poOngoing: 'poOngoing',
  poTags: 'poTags',
  poSummary: 'poSummary',
  poNotes: 'poNotes',
  itemDetails: 'itemDetails',
  lineDetails: 'lineDetails',
  vendor: 'vendor',
  costDetails: 'costDetails',
  fundDistribution: 'fundDistribution',
  location: 'location',
  physical: 'physical',
  eresources: 'eresources',
  other: 'other',
  polTags: 'polTags',
  ongoingOrder: 'ongoingOrder',
};

export const ORDER_MAPPING_ACCORDIONS_TITLES = {
  [ORDER_MAPPING_ACCORDIONS.poInfo]: <FormattedMessage id="ui-gobi-settings.order.mappings.accordion.poInfo" />,
  [ORDER_MAPPING_ACCORDIONS.poTags]: <FormattedMessage id="ui-gobi-settings.order.mappings.accordion.poTags" />,
  [ORDER_MAPPING_ACCORDIONS.poSummary]: <FormattedMessage id="ui-gobi-settings.order.mappings.accordion.poSummary" />,
  [ORDER_MAPPING_ACCORDIONS.poOngoing]: <FormattedMessage id="ui-gobi-settings.order.mappings.accordion.poOngoing" />,
  [ORDER_MAPPING_ACCORDIONS.poNotes]: <FormattedMessage id="ui-gobi-settings.order.mappings.accordion.poNotes" />,
  [ORDER_MAPPING_ACCORDIONS.itemDetails]: <FormattedMessage id="ui-gobi-settings.order.mappings.accordion.poItemDetails" />,
  [ORDER_MAPPING_ACCORDIONS.ongoingOrder]: <FormattedMessage id="ui-gobi-settings.order.mappings.accordion.polOngoingOrder" />,
  [ORDER_MAPPING_ACCORDIONS.lineDetails]: <FormattedMessage id="ui-gobi-settings.order.mappings.accordion.polDetails" />,
  [ORDER_MAPPING_ACCORDIONS.costDetails]: <FormattedMessage id="ui-gobi-settings.order.mappings.accordion.polCostDetails" />,
  [ORDER_MAPPING_ACCORDIONS.vendor]: <FormattedMessage id="ui-gobi-settings.order.mappings.accordion.polVendor" />,
  [ORDER_MAPPING_ACCORDIONS.fundDistribution]: <FormattedMessage id="ui-gobi-settings.order.mappings.accordion.polFundDistribution" />,
  [ORDER_MAPPING_ACCORDIONS.eresources]: <FormattedMessage id="ui-gobi-settings.order.mappings.accordion.polEResources" />,
  [ORDER_MAPPING_ACCORDIONS.physical]: <FormattedMessage id="ui-gobi-settings.order.mappings.accordion.polFResources" />,
  [ORDER_MAPPING_ACCORDIONS.other]: <FormattedMessage id="ui-gobi-settings.order.mappings.accordion.polOtherResources" />,
  [ORDER_MAPPING_ACCORDIONS.location]: <FormattedMessage id="ui-gobi-settings.order.mappings.accordion.polLocation" />,
  [ORDER_MAPPING_ACCORDIONS.polTags]: <FormattedMessage id="ui-gobi-settings.order.mappings.accordion.polTags" />,
};

export const INITIAL_ORDER_MAPPING_ACCORDIONS = Object.keys(ORDER_MAPPING_ACCORDIONS).reduce((acc, key) => ({
  ...acc,
  [key]: false,
}), {});

export const ORDER_MAPPING_FIELDS = {

};

export const ORDER_MAPPING_FIELDS_ACCORDIONS_MAP = {
  [ORDER_MAPPING_ACCORDIONS.poInfo]: [
    FIELDS.PREFIX,
    FIELDS.SUFFIX,
    FIELDS.VENDOR,
    FIELDS.ASSIGNED_TO,
    FIELDS.BILL_TO,
    FIELDS.SHIP_TO,
    FIELDS.ORDER_TYPE,
    FIELDS.LOOKUP_ACQUISITION_UNIT_DEFAULT_ACQ_UNIT_NAME,
    FIELDS.MANUAL_PO,
    FIELDS.RE_ENCUMBER,
  ],
  [ORDER_MAPPING_ACCORDIONS.poTags]: [
    FIELDS.TAGS,
  ],
  [ORDER_MAPPING_ACCORDIONS.poSummary]: [
    FIELDS.APPROVED,
  ],
  [ORDER_MAPPING_ACCORDIONS.poOngoing]: [
    FIELDS.ONGOING_IS_SUBSCRIPTION,
    FIELDS.ONGOING_INTERVAL,
    FIELDS.ONGOING_DATE,
    FIELDS.ONGOING_REVIEW_PERIOD,
    FIELDS.ONGOING_MANUAL,
    FIELDS.ONGOING_REVIEW_DATE,
    FIELDS.ONGOING_NOTES,
  ],
  [ORDER_MAPPING_ACCORDIONS.poNotes]: [
    FIELDS.NOTES,
  ],
  [ORDER_MAPPING_ACCORDIONS.itemDetails]: [
    FIELDS.PACKAGE_DESIGNATION,
    FIELDS.TITLE,
    FIELDS.RECEIVING_NOTE,
    // Must acknowledge receiving note
    FIELDS.SUBSCRIPTION_FROM,
    FIELDS.SUBSCRIPTION_TO,
    FIELDS.SUBSCRIPTION_INTERVAL,
    FIELDS.PUBLICATION_DATE,
    FIELDS.PUBLISHER,
    FIELDS.EDITION,
    FIELDS.LINKED_PACKAGE,
    FIELDS.CONTRIBUTOR,
    FIELDS.CONTRIBUTOR_NAME_TYPE,
    FIELDS.PRODUCT_ID,
    FIELDS.PRODUCT_QUALIFIER,
    FIELDS.PRODUCT_ID_TYPE,
    FIELDS.DESCRIPTION,
  ],
  [ORDER_MAPPING_ACCORDIONS.lineDetails]: [
    FIELDS.ACQUISITION_METHOD,
    // Automatic export
    FIELDS.PO_LINE_ORDER_FORMAT,
    FIELDS.RECEIPT_DATE,
    FIELDS.PO_LINE_RECEIPT_STATUS,
    FIELDS.PO_LINE_PAYMENT_STATUS,
    FIELDS.DONOR,
    FIELDS.SELECTOR,
    FIELDS.REQUESTER,
    FIELDS.CANCELLATION_RESTRICTION,
    FIELDS.CANCELLATION_RESTRICTION_NOTE,
    FIELDS.RUSH,
    FIELDS.COLLECTION,
    FIELDS.RECEIVING_WORKFLOW,
    FIELDS.PO_LINE_DESCRIPTION,
  ],
  [ORDER_MAPPING_ACCORDIONS.ongoingOrder]: [
    // renewalNote;
  ],
  [ORDER_MAPPING_ACCORDIONS.costDetails]: [
    FIELDS.LIST_UNIT_PRICE,
    FIELDS.QUANTITY_PHYSICAL,
    FIELDS.ADDITIONAL_COST,
    FIELDS.CURRENCY,
    FIELDS.EXCHANGE_RATE,
    FIELDS.QUANTITY_ELECTRONIC,
    FIELDS.LIST_UNIT_PRICE_ELECTRONIC,
    FIELDS.DISCOUNT,
    FIELDS.DISCOUNT_TYPE,
  ],
  [ORDER_MAPPING_ACCORDIONS.vendor]: [
    FIELDS.VENDOR_REF_NO,
    FIELDS.VENDOR_REF_NO_TYPE,
    FIELDS.VENDOR_ACCOUNT,
    FIELDS.VENDOR_INSTRUCTIONS,
  ],
  [ORDER_MAPPING_ACCORDIONS.fundDistribution]: [
    FIELDS.FUND_ID,
    FIELDS.EXPENSE_CLASS,
    // value
    FIELDS.FUND_PERCENTAGE,
  ],
  [ORDER_MAPPING_ACCORDIONS.location]: [
    FIELDS.LOCATION,
    // quantity p
    // quantity e
  ],
  [ORDER_MAPPING_ACCORDIONS.eresources]: [
    FIELDS.ACCESS_PROVIDER,
    // material type
    FIELDS.ACTIVATION_DUE,
    FIELDS.EXPECTED_ACTIVATION,
    // create inventory
    FIELDS.EXPECTED_ACTIVATION,
    FIELDS.USER_LIMIT,
    FIELDS.ACTIVATED,
    FIELDS.TRIAL,
    FIELDS.URL,
  ],
  [ORDER_MAPPING_ACCORDIONS.physical]: [
    FIELDS.MATERIAL_SUPPLIER,
    FIELDS.RECEIPT_DUE,
    FIELDS.EXPECTED_RECEIPT_DATE,
    FIELDS.CREATE_INVENTORY,
    FIELDS.MATERIAL_TYPE,
    FIELDS.VOLUMES,
  ],
  [ORDER_MAPPING_ACCORDIONS.other]: [
    // material supplier
    // FIELDS.RECEIPT_DUE,
    // FIELDS.EXPECTED_RECEIPT_DATE,
    // FIELDS.CREATE_INVENTORY,
    // FIELDS.MATERIAL_TYPE,
  ],
  [ORDER_MAPPING_ACCORDIONS.polTags]: [
    FIELDS.TAGS,
  ],
};
