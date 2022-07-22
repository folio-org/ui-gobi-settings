import { useQuery } from 'react-query';

import {
  useNamespace,
  useOkapiKy,
} from '@folio/stripes/core';

export const useOrderMappings = () => {
  const ky = useOkapiKy();
  const [namespace] = useNamespace({ key: 'gobi-order-mappings' });

  const queryFn = () => {};

  const {
    data,
    isLoading,
  } = useQuery(
    [namespace],
    queryFn,
  );

  return {
    isLoading,
    orderMappings: data?.orderMappingsViews || [],
    totalRecords: data?.totalRecords,
  };
};
