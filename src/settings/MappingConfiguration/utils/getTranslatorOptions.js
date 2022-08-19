import { camelCase } from 'lodash';

export const getTranslatorOptions = (intl, translators = []) => {
  return translators.map(({
    description,
    name,
    translator,
  }) => ({
    label: intl.formatMessage({
      id: `ui-gobi-settings.order.mappings.translator.${camelCase(name)}`,
      defaultMessage: description,
    }),
    value: translator,
  }));
};
