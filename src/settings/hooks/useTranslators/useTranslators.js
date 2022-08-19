import { useQuery } from 'react-query';

import {
  useNamespace,
  useOkapiKy,
} from '@folio/stripes/core';

import { ORDER_TRANSLATORS_API } from '../../constants';

export const useTranslators = (options = {}) => {
  const ky = useOkapiKy();
  const [namespace] = useNamespace({ key: 'gobi-mapping-translators' });

  const queryFn = () => ky.get(ORDER_TRANSLATORS_API).json();

  const {
    data,
    isLoading,
    refetch,
  } = useQuery(
    [namespace],
    queryFn,
    {
      ...options,
    },
  );

  return {
    isLoading,
    translators: data?.translators || [],
    refetch,
  };
};
