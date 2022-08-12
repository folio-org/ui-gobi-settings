import { useMutation } from 'react-query';

import { useOkapiKy } from '@folio/stripes/core';

import { GOBI_CUSTOM_MAPPINGS_API } from '../../constants';

export const useOrderMappingTypeMutation = (options = {}) => {
  const ky = useOkapiKy();

  const { mutateAsync: restoreMappingConfig } = useMutation({
    mutationFn: (name) => {
      return ky.delete(`${GOBI_CUSTOM_MAPPINGS_API}/${name}`);
    },
    ...options,
  });

  return {
    restoreMappingConfig,
  };
};
