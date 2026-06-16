export const getTranslatorOptions = (intl, translators = []) => {
  return translators
    .filter(({ translator }) => translator !== 'lookupMock')
    .map(({
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
