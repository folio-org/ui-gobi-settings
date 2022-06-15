import React from 'react';
import { PropTypes } from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import { Pane } from '@folio/stripes/components';

const GobiIntegration = ({ match: { path } }) => {
  return (
    <Switch>
      <Route
        path={path}
        render={() => (
          <Pane
            id="pane-gobi-settings-list"
            defaultWidth="fill"
            paneTitle={<FormattedMessage id="ui-gobi-settings.meta.title" />}
          />
        )}
      />
    </Switch>
  );
};

GobiIntegration.propTypes = {
  match: PropTypes.object.isRequired,
};

export default GobiIntegration;
