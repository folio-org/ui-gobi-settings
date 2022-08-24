import PropTypes from 'prop-types';
import { useCallback } from 'react';
import { FormattedMessage } from 'react-intl';

import {
  FieldSelectionFinal,
} from '@folio/stripes-acq-components';

import { GOBI_FIELDS_PATH_MAP } from '../../constants';

export const FieldFromFieldName = ({
  change,
  dataOptions,
  mappingFieldName,
  name,
}) => {
  const onChange = useCallback((gobiFieldName) => {
    const fieldPath = GOBI_FIELDS_PATH_MAP[gobiFieldName];

    change(name, gobiFieldName || undefined);
    change(`${mappingFieldName}.dataSource.from`, fieldPath);
  }, [change, mappingFieldName, name]);

  return (
    <FieldSelectionFinal
      name={name}
      dataOptions={dataOptions}
      id={`from-field-name-${name}`}
      label={<FormattedMessage id="ui-gobi-settings.order.mappings.field.dataSource.fromFieldName" />}
      onChange={onChange}
    />
  );
};

FieldFromFieldName.propTypes = {
  change: PropTypes.func.isRequired,
  dataOptions: PropTypes.arrayOf(PropTypes.object).isRequired,
  mappingFieldName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
