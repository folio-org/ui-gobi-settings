import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { renderHook, act } from '@testing-library/react-hooks';

import { useOkapiKy } from '@folio/stripes/core';

import {
  GOBI_CUSTOM_MAPPINGS_API,
  GOBI_MAPPING_TYPES,
} from '../../constants';
import { useOrderMappingTypeMutation } from './useOrderMappingTypeMutation';

const queryClient = new QueryClient();

// eslint-disable-next-line react/prop-types
const wrapper = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    {children}
  </QueryClientProvider>
);

describe('useOrderMappingTypeMutation', () => {
  it('should make post request when update default mapping config', async () => {
    const kyMock = jest.fn();

    useOkapiKy.mockClear().mockReturnValue(kyMock);

    const { result } = renderHook(
      () => useOrderMappingTypeMutation(),
      { wrapper },
    );

    await act(async () => {
      result.current.changeMappingConfig({
        data: {},
        mappingType: GOBI_MAPPING_TYPES.default,
        name: 'OrderType',
      });
    });

    expect(kyMock).toHaveBeenCalledWith(GOBI_CUSTOM_MAPPINGS_API, expect.objectContaining({ method: 'post' }));
  });

  it('should make put request when update custom mapping config', async () => {
    const kyMock = jest.fn();

    useOkapiKy.mockClear().mockReturnValue(kyMock);

    const { result } = renderHook(
      () => useOrderMappingTypeMutation(),
      { wrapper },
    );

    await act(async () => {
      result.current.changeMappingConfig({
        data: {},
        mappingType: GOBI_MAPPING_TYPES.custom,
        name: 'OrderType',
      });
    });

    expect(kyMock).toHaveBeenCalledWith(
      expect.stringContaining(GOBI_CUSTOM_MAPPINGS_API),
      expect.objectContaining({ method: 'put' }),
    );
  });

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
