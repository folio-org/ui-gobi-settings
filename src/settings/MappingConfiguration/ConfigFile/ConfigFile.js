import PropTypes from 'prop-types';

import {
  Pane,
} from '@folio/stripes/components';
import { usePaneFocus } from '@folio/stripes-acq-components';

export const ConfigFile = ({
  configFiles,
  match,
  onClose,
}) => {
  const { paneTitleRef } = usePaneFocus();

  const configFile = configFiles.find(({ id }) => id === match.params.id);

  // TODO: add final version of fields form
  return (
    <Pane
      data-testid="gobi-config-file-pane"
      id="pane-gobi-mapping-configuration-file"
      defaultWidth="fill"
      dismissible
      onClose={onClose}
      paneTitle={configFile.name}
      paneTitleRef={paneTitleRef}
    >
      Fields list
    </Pane>
  );
};

ConfigFile.propTypes = {
  configFiles: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};
