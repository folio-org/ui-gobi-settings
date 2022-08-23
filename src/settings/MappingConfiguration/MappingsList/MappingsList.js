import PropTypes from 'prop-types';
import { useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import { camelCase } from 'lodash';

import {
  Layout,
  Loading,
  NavList,
  NavListItem,
  Pane,
} from '@folio/stripes/components';
import { usePaneFocus } from '@folio/stripes-acq-components';

import { useOrderMappingTypes } from '../../hooks';
import { FORMATTED_ORDER_MAPPING_TYPES } from '../../constants';

export const MappingsList = ({ history, match }) => {
  const { paneTitleRef } = usePaneFocus();
  const {
    isLoading,
    orderMappingTypes,
  } = useOrderMappingTypes();

  const mappingsList = useMemo(() => (
    orderMappingTypes.map((type) => (
      <NavListItem
        data-testid="mapping-type-list-item"
        key={type}
        onClick={() => history.push(`${match.path}/${camelCase(type)}/view`)}
      >
        {FORMATTED_ORDER_MAPPING_TYPES[camelCase(type)]}
      </NavListItem>
    ))
  ), [history, match.path, orderMappingTypes]);

  return (
    <Pane
      id="pane-gobi-mapping-configuration"
      defaultWidth="fill"
      paneTitle={<FormattedMessage id="ui-gobi-settings.configFiles" />}
      paneTitleRef={paneTitleRef}
    >
      <NavList>
        {
          isLoading
            ? (
              <Layout className="display-flex centerContent">
                <Loading size="large" />
              </Layout>
            )
            : mappingsList
        }
      </NavList>
    </Pane>
  );
};

MappingsList.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};
