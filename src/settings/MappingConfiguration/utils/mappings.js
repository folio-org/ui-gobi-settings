import keyBy from 'lodash/keyBy';

export const mappingsToFormValues = (mappings = []) => {
  return keyBy(mappings, 'field');
};

export const formValuesToMappings = (values) => {
  const mappings = Object.entries(values).map(([field, value]) => ({ ...value, field }));

  return { mappings };
};
