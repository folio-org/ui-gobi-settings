import { useMutation } from 'react-query';

import { useOkapiKy } from '@folio/stripes/core';

import { GOBI_CUSTOM_MAPPINGS_API, GOBI_MAPPING_TYPES } from '../../constants';

export const useOrderMappingTypeMutation = (options = {}) => {
  const ky = useOkapiKy();

  const { mutateAsync: changeMappingConfig } = useMutation({
    mutationFn: ({ data, mappingType, name }) => {
      const isCustomMappings = mappingType === GOBI_MAPPING_TYPES.custom;
      const method = isCustomMappings ? 'put' : 'post';
      const url = isCustomMappings
        ? `${GOBI_CUSTOM_MAPPINGS_API}/${name}`
        : GOBI_CUSTOM_MAPPINGS_API;

      return ky(url, {
        json: data,
        method,
      });
    },
    ...options,
  });

  const { mutateAsync: restoreMappingConfig } = useMutation({
    mutationFn: (name) => {
      return ky.delete(`${GOBI_CUSTOM_MAPPINGS_API}/${name}`);
    },
    ...options,
  });

  return {
    changeMappingConfig,
    restoreMappingConfig,
  };
};
