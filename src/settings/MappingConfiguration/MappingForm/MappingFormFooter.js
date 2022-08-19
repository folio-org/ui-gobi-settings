import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { Button, PaneFooter } from '@folio/stripes/components';

export const MappingFormFooter = ({
  disabled,
  onCancel,
  onSubmit,
}) => {
  const start = (
    <Button
      id="clickable-close--edit-mappings-footer"
      buttonStyle="default mega"
      onClick={onCancel}
    >
      <FormattedMessage id="stripes-acq-components.FormFooter.cancel" />
    </Button>
  );

  const end = (
    <Button
      data-test-button-save
      id="clickable-updatePoLine"
      buttonStyle="primary mega"
      type="submit"
      disabled={disabled}
      onClick={onSubmit}
    >
      <FormattedMessage id="stripes-acq-components.FormFooter.save" />
    </Button>
  );

  return (
    <PaneFooter
      renderStart={start}
      renderEnd={end}
    />
  );
};

MappingFormFooter.propTypes = {
  disabled: PropTypes.bool,
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
