import PropTypes from 'prop-types';
import { useCallback } from 'react';

import {
  FieldSelectionFinal,
} from '@folio/stripes-acq-components';

export const FieldTranslator = ({
  change,
  dataOptions = [],
  mappingFieldName,
  name,
}) => {
  const onChange = useCallback((translator) => {
    change(name, translator || undefined);
    change(`${mappingFieldName}.dataSource.default`, undefined);
  }, [change, mappingFieldName, name]);

  return (
    <FieldSelectionFinal
      dataOptions={dataOptions}
      id={`translator-${name}`}
      labelId="ui-gobi-settings.order.mappings.field.dataSource.translator"
      name={name}
      onChange={onChange}
    />
  );
};

FieldTranslator.propTypes = {
  change: PropTypes.func.isRequired,
  dataOptions: PropTypes.arrayOf(PropTypes.object),
  mappingFieldName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
