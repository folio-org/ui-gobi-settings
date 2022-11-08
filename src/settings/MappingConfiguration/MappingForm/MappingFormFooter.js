import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { Button, PaneFooter } from '@folio/stripes/components';

import css from './MappingFormFooter.css';

export const MappingFormFooter = ({
  clearAllDisabled,
  disabled,
  onCancel,
  onClearMappings,
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
    <div className={css.paneFooterEnd}>
      <Button
        id="clear-mapping"
        buttonStyle="default mega"
        disabled={clearAllDisabled}
        type="reset"
        onClick={onClearMappings}
      >
        <FormattedMessage id="ui-gobi-settings.mappingConfig.edit.footer.clearAll" />
      </Button>

      <Button
        data-test-button-save
        id="save-mapping"
        buttonStyle="primary mega"
        type="submit"
        disabled={disabled}
        onClick={onSubmit}
      >
        <FormattedMessage id="stripes-acq-components.FormFooter.save" />
      </Button>
    </div>
  );

  return (
    <PaneFooter
      renderStart={start}
      renderEnd={end}
    />
  );
};

MappingFormFooter.propTypes = {
  clearAllDisabled: PropTypes.bool,
  disabled: PropTypes.bool,
  onCancel: PropTypes.func.isRequired,
  onClearMappings: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
