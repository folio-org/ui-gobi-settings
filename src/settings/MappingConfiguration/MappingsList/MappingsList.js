import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { camelCase } from 'lodash';

import { NavList, NavListItem, Pane } from '@folio/stripes/components';
import { usePaneFocus } from '@folio/stripes-acq-components';

import { useOrderMappingTypes } from '../../hooks';
import { FORMATTED_ORDER_MAPPING_TYPES } from '../../constants';

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
            data-testid="mapping-type-list-item"
            key={type}
            onClick={() => history.push(`${match.path}/${camelCase(type)}/view`)}
          >
            {FORMATTED_ORDER_MAPPING_TYPES[camelCase(type)]}
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
