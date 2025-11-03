import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';

import {
  renderHook,
  waitFor,
} from '@folio/jest-config-stripes/testing-library/react';
import { useOkapiKy } from '@folio/stripes/core';

import { mappingConfig } from 'fixtures/mappingConfig';
import { useOrderMapping } from './useOrderMapping';

const queryClient = new QueryClient();
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
          json: () => Promise.resolve(mappingConfig),
        }),
      });
  });

  it('should fetch order mapping for specified type', async () => {
    const { result } = renderHook(() => useOrderMapping('TestType'), { wrapper });

    await waitFor(() => expect(result.current.isLoading).toBe(false));

    expect(result.current.orderMappings).toEqual(mappingConfig.orderMappings);
  });
});
