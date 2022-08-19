import { keyBy, upperFirst } from 'lodash';

export const mappingsToFormValues = (mappings = []) => {
  return keyBy(mappings, 'field');
};

export const formValuesToMappings = (values, type) => {
  const orderType = upperFirst(type);
  const mappings = Object.entries(values).map(([field, value]) => ({ ...value, field }));

  return {
    orderType,
    mappings,
  };
};
