import PropTypes from 'prop-types';

import {
  FieldSelectionFinal,
} from '@folio/stripes-acq-components';

export const FieldFromFieldName = ({
  name,
  dataOptions = [],
}) => {
  return (
    <FieldSelectionFinal
      name={name}
      id={`from-field-name-${name}`}
      labelId="ui-gobi-settings.order.mappings.field.dataSource.fromFieldName"
      dataOptions={dataOptions}
    />
  );
};

FieldFromFieldName.propTypes = {
  dataOptions: PropTypes.arrayOf(PropTypes.object),
  name: PropTypes.string.isRequired,
};
