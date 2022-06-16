import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Route } from 'react-router-dom';

import {
  NavList,
  NavListItem,
  Pane,
} from '@folio/stripes/components';
import { usePaneFocus } from '@folio/stripes-acq-components';

import { ConfigFile } from './ConfigFile';

export const MappingConfiguration = ({ history, match }) => {
  const { paneTitleRef } = usePaneFocus();

  // TODO: replace stub with actual data
  const configFiles = [
    {
      id: '1',
      name: 'Config file 1',
    },
    {
      id: '2',
      name: 'Config file 2',
    },
  ];

  return (
    <>
      <Pane
        id="pane-gobi-mapping-configuration"
        defaultWidth="15%"
        paneTitle={<FormattedMessage id="ui-gobi-settings.configFiles" />}
        paneTitleRef={paneTitleRef}
      >
        <NavList>
          {configFiles.map(({ id, name }) => (
            <NavListItem
              data-testid="config-file-list-item"
              key={id}
              onClick={() => history.push(`${match.path}/${id}`)}
            >
              {name}
            </NavListItem>
          ))}
        </NavList>
      </Pane>
      <Route
        path={`${match.path}/:id`}
        render={props => (
          <ConfigFile
            {...props}
            configFiles={configFiles}
            onClose={() => history.push(match.path)}
          />
        )}
      />
    </>
  );
};

MappingConfiguration.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};
