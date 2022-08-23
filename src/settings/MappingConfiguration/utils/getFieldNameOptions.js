import {
  CUSTOM_PATH,
  GOBI_FIELDS,
} from '../../constants';

export const getFieldNameOptions = () => {
  const fieldOptions = Object.values(GOBI_FIELDS).map(value => ({
    label: value,
    value,
  }));

  return [
    ...fieldOptions,
    { label: CUSTOM_PATH, value: CUSTOM_PATH },
  ];
};
