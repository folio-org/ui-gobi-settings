import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { renderHook, act } from '@testing-library/react-hooks';

import { useOkapiKy } from '@folio/stripes/core';

import { useOrderMappingTypeMutation } from './useOrderMappingTypeMutation';

const queryClient = new QueryClient();

// eslint-disable-next-line react/prop-types
const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
);

describe('useOrderMappingTypeMutation', () => {
  it('should make delete request', async () => {
    const deleteMock = jest.fn();

    useOkapiKy.mockClear().mockReturnValue({
      delete: deleteMock,
    });

    const { result } = renderHook(
      () => useOrderMappingTypeMutation(),
      { wrapper },
    );

    await act(async () => {
      result.current.restoreMappingConfig();
    });

    expect(deleteMock).toHaveBeenCalled();
  });
});
