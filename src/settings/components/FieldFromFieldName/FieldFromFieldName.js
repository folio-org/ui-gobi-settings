import PropTypes from 'prop-types';

import { Field } from 'react-final-form';
import { FormattedMessage } from 'react-intl';
import { TextField } from '@folio/stripes/components';

export const FieldFromFieldName = ({
  name,
}) => {
  return (
    <Field
      name={name}
      component={TextField}
      id={`from-field-name-${name}`}
      label={<FormattedMessage id="ui-gobi-settings.order.mappings.field.dataSource.fromFieldName" />}
    />
  );
};

FieldFromFieldName.propTypes = {
  name: PropTypes.string.isRequired,
};
