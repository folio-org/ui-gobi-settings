import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { Field } from 'react-final-form';

import { Checkbox } from '@folio/stripes/components';

export const FieldTranslateDefault = ({
  name,
}) => {
  return (
    <Field
      component={Checkbox}
      type="checkbox"
      id={`translate-default-${name}`}
      name={name}
      label={<FormattedMessage id="ui-gobi-settings.order.mappings.field.dataSource.translateDefault" />}
      vertical
    />
  );
};

FieldTranslateDefault.propTypes = {
  name: PropTypes.string.isRequired,
};
