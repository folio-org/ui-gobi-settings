import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import { Settings } from '@folio/stripes/smart-components';
import { usePaneFocus } from '@folio/stripes-acq-components';

import { APIKey } from '../APIKey';
import { MappingConfiguration } from '../MappingConfiguration';

const sections = [
  {
    label: <FormattedMessage id="ui-gobi-settings.integrationDetails" />,
    pages: [
      {
        component: APIKey,
        label: <FormattedMessage id="ui-gobi-settings.apiKey" />,
        route: 'api-key',
        perm: 'ui-gobi-settings.permission.settings',
      },
      {
        component: MappingConfiguration,
        label: <FormattedMessage id="ui-gobi-settings.mappingConfig" />,
        route: 'mapping-configuration',
        perm: 'ui-gobi-settings.permission.settings',
      },
    ],
  },
];

const GobiIntegration = ({ ...props }) => {
  const { paneTitleRef } = usePaneFocus();

  return (
    <Settings
      {...props}
      navPaneWidth="20%"
      paneTitle={<FormattedMessage id="ui-gobi-settings.meta.title" />}
      paneTitleRef={paneTitleRef}
      sections={sections}
    />
  );
};

GobiIntegration.propTypes = {
  match: PropTypes.object.isRequired,
};

export default GobiIntegration;
