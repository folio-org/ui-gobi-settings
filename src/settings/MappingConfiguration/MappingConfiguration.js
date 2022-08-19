import PropTypes from 'prop-types';
import { Switch } from 'react-router-dom';

import { PermissionedRoute } from '@folio/stripes-acq-components';

import {
  MAPPING_CONFIGS_RETURN_LINK,
  MAPPING_CONFIGS_RETURN_LABEL_ID,
  SETTINGS_RETURN_LINK,
} from '../constants';
import { MappingEditor } from './MappingEditor';
import { MappingView } from './MappingView';
import { MappingsList } from './MappingsList';

export const MappingConfiguration = ({ history, match }) => {
  const { path } = match;

  return (
    <Switch>
      <PermissionedRoute
        exact
        path={path}
        perm="ui-gobi-settings.permission.settings"
        returnLink={SETTINGS_RETURN_LINK}
        returnLinkLabelId={MAPPING_CONFIGS_RETURN_LABEL_ID}
      >
        <MappingsList
          history={history}
          match={match}
        />
      </PermissionedRoute>

      <PermissionedRoute
        exact
        path={`${path}/:name/view`}
        perm="ui-gobi-settings.permission.settings"
        returnLink={MAPPING_CONFIGS_RETURN_LINK}
        returnLinkLabelId={MAPPING_CONFIGS_RETURN_LABEL_ID}
      >
        <MappingView
          history={history}
          match={match}
          onClose={() => history.push(path)}
          rootPath={match.path}
        />
      </PermissionedRoute>

      <PermissionedRoute
        exact
        path={`${path}/:name/edit`}
        perm="ui-gobi-settings.permission.settings"
        returnLink={MAPPING_CONFIGS_RETURN_LINK}
        returnLinkLabelId={MAPPING_CONFIGS_RETURN_LABEL_ID}
      >
        <MappingEditor
          history={history}
          match={match}
          rootPath={match.path}
        />
      </PermissionedRoute>
    </Switch>
  );
};

MappingConfiguration.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};
