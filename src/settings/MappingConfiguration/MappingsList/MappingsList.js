import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { NavList, NavListItem, Pane } from '@folio/stripes/components';
import { usePaneFocus } from '@folio/stripes-acq-components';

import { useOrderMappingTypes } from '../../hooks';

export const MappingsList = ({ history, match }) => {
  const { paneTitleRef } = usePaneFocus();
  const { orderMappingTypes } = useOrderMappingTypes();

  return (
    <Pane
      id="pane-gobi-mapping-configuration"
      defaultWidth="fill"
      paneTitle={<FormattedMessage id="ui-gobi-settings.configFiles" />}
      paneTitleRef={paneTitleRef}
    >
      <NavList>
        {orderMappingTypes.map((type) => (
          <NavListItem
            data-testid="config-file-list-item"
            key={type}
            onClick={() => history.push(`${match.path}/${type}/view`)}
          >
            {type}
          </NavListItem>
        ))}
      </NavList>
    </Pane>
  );
};

MappingsList.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};
