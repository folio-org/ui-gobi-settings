import PropTypes from 'prop-types';
import { Field } from 'react-final-form';

import { TextField } from '@folio/stripes/components';
import {
  FieldSelectionFinal,
} from '@folio/stripes-acq-components';
import { FormattedMessage } from 'react-intl';

export const FieldDefaultValue = ({
  name,
}) => {

  // TODO: choose field based on translators
  return (
    <>
      {
        true
          ? (
            <FieldSelectionFinal
              id={`default-value-${name}`}
              dataOptions={[]}
              labelId="ui-gobi-settings.order.mappings.field.dataSource.defaultValue"
              name={name}
            />
          )
          : (
            <Field
              component={TextField}
              id={`default-value-${name}`}
              label={<FormattedMessage id="ui-gobi-settings.order.mappings.field.dataSource.defaultValue" />}
              name={name}
            />
          )
      }
    </>
  );
};

FieldDefaultValue.propTypes = {
  name: PropTypes.string.isRequired,
};
