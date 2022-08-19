import { translators } from '../../../../test/jest/fixtures';
import { getTranslatorOptions } from './getTranslatorOptions';

const intl = {
  formatMessage: jest.fn(({ id }) => id),
};

describe('getTranslatorOptions', () => {
  it('should return options for translation selection', () => {
    const options = getTranslatorOptions(intl, translators.translators);

    expect(options.length).toEqual(translators.translators.length);
  });
});
