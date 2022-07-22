import { useQuery } from 'react-query';

import {
  useNamespace,
  useOkapiKy,
} from '@folio/stripes/core';

import {
  ORDER_MAPPING_TYPES,
  ORDER_MAPPING_TYPES_API,
} from '../../constants';

export const useOrderMappingTypes = () => {
  const ky = useOkapiKy();
  const [namespace] = useNamespace({ key: 'gobi-order-mappings' });

  const queryFn = () => Promise.resolve({
    orderMappingTypes: Object.values(ORDER_MAPPING_TYPES),
    totalRecords: ORDER_MAPPING_TYPES.length,
  });
  // const queryFn = () => ky.get(ORDER_MAPPING_TYPES_API).json();

  const {
    data,
    isLoading,
  } = useQuery(
    [namespace],
    queryFn,
  );

  return {
    isLoading,
    orderMappingTypes: data?.orderMappingTypes || [],
    totalRecords: data?.totalRecords,
  };
};
