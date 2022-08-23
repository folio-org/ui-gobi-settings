import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import { FormattedMessage } from 'react-intl';

import { KeyValue, TextField } from '@folio/stripes/components';

import { CUSTOM_PATH } from '../../constants';

export const FieldFromPath = ({
  mappingField,
  name,
}) => {
  const isCustomPath = mappingField.dataSource?.dataSourceFieldName === CUSTOM_PATH;

  return isCustomPath
    ? (
      <Field
        name={name}
        component={TextField}
        id={`from-field-path-${name}`}
        label={<FormattedMessage id="ui-gobi-settings.order.mappings.field.dataSource.fromFieldPath" />}
      />
    )
    : (
      <KeyValue
        label={<FormattedMessage id="ui-gobi-settings.order.mappings.field.dataSource.fromFieldPath" />}
        value={mappingField.dataSource?.from}
      />
    );
};

FieldFromPath.propTypes = {
  mappingField: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
};
