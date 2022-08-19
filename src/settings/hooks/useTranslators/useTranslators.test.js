import { QueryClient, QueryClientProvider } from 'react-query';
import { renderHook } from '@testing-library/react-hooks';

import { useOkapiKy } from '@folio/stripes/core';

import { translators } from '../../../../test/jest/fixtures';
import { useTranslators } from './useTranslators';

const queryClient = new QueryClient();

// eslint-disable-next-line react/prop-types
const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
);

describe('useTranslators', () => {
  beforeEach(() => {
    useOkapiKy
      .mockClear()
      .mockReturnValue({
        get: () => ({
          json: () => Promise.resolve(translators),
        }),
      });
  });

  it('should fetch mapping translators', async () => {
    const { result, waitFor } = renderHook(() => useTranslators(), { wrapper });

    await waitFor(() => !result.current.isLoading);

    expect(result.current.translators).toEqual(translators.translators);
  });
});
