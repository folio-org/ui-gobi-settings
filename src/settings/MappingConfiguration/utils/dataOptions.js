export const getTranslatorOptions = (intl, translators = []) => {
  return translators.map(({ translator, description }) => ({
    label: intl.formatMessage({
      id: `ui-gobi-settings.order.mappings.translator.${translator}`,
      defaultMessage: description,
    }),
    value: translator,
  }));
};
