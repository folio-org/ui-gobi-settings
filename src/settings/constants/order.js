import { FormattedMessage } from 'react-intl';

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

  ],
  [ORDER_MAPPING_ACCORDIONS.poTags]: [

  ],
  [ORDER_MAPPING_ACCORDIONS.poSummary]: [

  ],
  [ORDER_MAPPING_ACCORDIONS.poOngoing]: [

  ],
  [ORDER_MAPPING_ACCORDIONS.poNotes]: [

  ],
  [ORDER_MAPPING_ACCORDIONS.itemDetails]: [

  ],
  [ORDER_MAPPING_ACCORDIONS.ongoingOrder]: [

  ],
  [ORDER_MAPPING_ACCORDIONS.lineDetails]: [

  ],
  [ORDER_MAPPING_ACCORDIONS.costDetails]: [

  ],
  [ORDER_MAPPING_ACCORDIONS.vendor]: [

  ],
  [ORDER_MAPPING_ACCORDIONS.fundDistribution]: [

  ],
  [ORDER_MAPPING_ACCORDIONS.eresources]: [

  ],
  [ORDER_MAPPING_ACCORDIONS.physical]: [

  ],
  [ORDER_MAPPING_ACCORDIONS.other]: [

  ],
  [ORDER_MAPPING_ACCORDIONS.location]: [

  ],
  [ORDER_MAPPING_ACCORDIONS.polTags]: [

  ],
};
