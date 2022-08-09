import { QueryClient, QueryClientProvider } from 'react-query';
import { renderHook } from '@testing-library/react-hooks';

import { useOkapiKy } from '@folio/stripes/core';

import { mappingConfig } from '../../../../test/jest/fixtures/mappingConfig';
import { useOrderMapping } from './useOrderMapping';

const queryClient = new QueryClient();

// eslint-disable-next-line react/prop-types
const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
);

describe('useOrderMapping', () => {
  beforeEach(() => {
    useOkapiKy
      .mockClear()
      .mockReturnValue({
        get: () => ({
          json: () => Promise.resolve(Object.keys(mappingConfig)),
        }),
      });
  });

  it('should fetch order mapping for specified type', async () => {
    const { result, waitFor } = renderHook(() => useOrderMapping('TestType'), { wrapper });

    await waitFor(() => !result.current.isLoading);

    expect(result.current.mapping).toEqual(mappingConfig.mapping);
  });
});
