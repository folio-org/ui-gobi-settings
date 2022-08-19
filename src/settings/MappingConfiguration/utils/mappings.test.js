import { mappingConfig } from '../../../../test/jest/fixtures';
import {
  formValuesToMappings,
  mappingsToFormValues,
} from './mappings';

describe('mappings utils: formValuesToMappings and mappingsToFormValues', () => {
  it('should convert mapping to form values and vice versa', () => {
    const mappings = mappingConfig.orderMappings.mappings;

    const formValues = mappingsToFormValues(mappings);

    expect(formValues).toEqual(expect.objectContaining({
      [mappings[0].field]: mappings[0],
    }));

    const mappingFromForm = formValuesToMappings(formValues, 'test');

    expect(mappingFromForm).toEqual(expect.objectContaining({
      mappings: expect.arrayContaining([
        mappings[0],
      ]),
    }));
  });
});
