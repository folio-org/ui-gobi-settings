import PropTypes from 'prop-types';

import {
  FieldSelectionFinal,
} from '@folio/stripes-acq-components';

export const FieldTranslator = ({
  name,
  dataOptions = [],
}) => {
  return (
    <FieldSelectionFinal
      dataOptions={dataOptions}
      id={`translator-${name}`}
      labelId="ui-gobi-settings.order.mappings.field.dataSource.translator"
      name={name}
    />
  );
};

FieldTranslator.propTypes = {
  dataOptions: PropTypes.arrayOf(PropTypes.object),
  name: PropTypes.string.isRequired,
};
