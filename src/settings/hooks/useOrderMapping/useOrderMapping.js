import { useQuery } from 'react-query';

import {
  useNamespace,
  useOkapiKy,
} from '@folio/stripes/core';

export const useOrderMapping = (orderType) => {
  const ky = useOkapiKy();
  const [namespace] = useNamespace({ key: 'gobi-order-mapping' });

  const queryFn = () => {};

  const {
    data,
    isLoading,
  } = useQuery(
    [namespace],
    queryFn,
    {
      enabled: Boolean(orderType),
    },
  );

  return {
    isLoading,
    mappingType: data?.mappingType,
    mapping: data?.mappingType,
  };
};
