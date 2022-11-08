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

  return (
    <Field
      id={`from-field-path-${name}`}
      name={name}
      label={<FormattedMessage id="ui-gobi-settings.order.mappings.field.dataSource.fromFieldPath" />}
      render={(props) => (
        isCustomPath
          ? <TextField {...props} />
          // eslint-disable-next-line react/prop-types
          : <KeyValue value={props.input.value} {...props} />
      )}
    />
  );
};

FieldFromPath.propTypes = {
  mappingField: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
};
