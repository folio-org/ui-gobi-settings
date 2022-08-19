export const getTranslatorOptions = (intl, translators = []) => {
  return translators.map(({
    description,
    translator,
  }) => ({
    label: intl.formatMessage({
      id: `ui-gobi-settings.order.mappings.translator.${translator}`,
      defaultMessage: description,
    }),
    value: translator,
  }));
};
