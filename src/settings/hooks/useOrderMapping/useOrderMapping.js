import { useQuery } from 'react-query';
import { upperFirst } from 'lodash';

import {
  useNamespace,
  useOkapiKy,
} from '@folio/stripes/core';

import { GOBI_CUSTOM_MAPPINGS_API } from '../../constants';

export const useOrderMapping = (orderMappingType) => {
  const ky = useOkapiKy();
  const [namespace] = useNamespace({ key: 'gobi-order-mapping' });

  const queryFn = () => ky.get(`${GOBI_CUSTOM_MAPPINGS_API}/${upperFirst(orderMappingType)}`).json();

  const {
    data,
    isLoading,
    refetch,
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
    mappings: data?.orderMappings?.mappings || [],
    refetch,
  };
};
