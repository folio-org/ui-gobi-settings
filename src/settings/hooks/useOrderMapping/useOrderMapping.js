import { useQuery } from 'react-query';

import {
  useNamespace,
  useOkapiKy,
} from '@folio/stripes/core';

import { mappingConfig } from '../../../../test/jest/fixtures/mappingConfig';

export const useOrderMapping = (orderMappingType) => {
  const ky = useOkapiKy();
  const [namespace] = useNamespace({ key: 'gobi-order-mapping' });

  // TODO: connect with BE
  const queryFn = () => Promise.resolve(mappingConfig);

  const {
    data,
    isLoading,
  } = useQuery(
    [namespace],
    queryFn,
    {
      enabled: Boolean(orderMappingType),
    },
  );

  return {
    isLoading,
    mappingType: data?.mappingType,
    mapping: data?.mapping,
  };
};
