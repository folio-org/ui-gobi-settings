import { QueryClient, QueryClientProvider } from 'react-query';
import { renderHook } from '@testing-library/react-hooks';

import { useOkapiKy } from '@folio/stripes/core';

import { FORMATTED_ORDER_MAPPING_TYPES } from '../../constants';
import { useOrderMappingTypes } from './useOrderMappingTypes';

const queryClient = new QueryClient();

// eslint-disable-next-line react/prop-types
const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
);

describe('useOrderMappingTypes', () => {
  beforeEach(() => {
    useOkapiKy
      .mockClear()
      .mockReturnValue({
        get: () => ({
          json: () => Promise.resolve(Object.keys(FORMATTED_ORDER_MAPPING_TYPES)),
        }),
      });
  });

  it('should fetch mapping types', async () => {
    const { result, waitFor } = renderHook(() => useOrderMappingTypes(), { wrapper });

    await waitFor(() => !result.current.isLoading);

    expect(result.current.orderMappingTypes).toEqual(Object.keys(FORMATTED_ORDER_MAPPING_TYPES));
  });
});
