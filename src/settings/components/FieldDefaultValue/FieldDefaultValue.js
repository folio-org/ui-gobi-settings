import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import { FormattedMessage } from 'react-intl';

import { TextField } from '@folio/stripes/components';

export const FieldDefaultValue = ({
  name,
}) => {
  return (
    <Field
      component={TextField}
      id={`default-value-${name}`}
      label={<FormattedMessage id="ui-gobi-settings.order.mappings.field.dataSource.defaultValue" />}
      name={name}
    />
  );
};

FieldDefaultValue.propTypes = {
  name: PropTypes.string.isRequired,
};
