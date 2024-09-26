import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import {
  CommandList,
  defaultKeyboardShortcuts,
} from '@folio/stripes/components';
import { Settings } from '@folio/stripes/smart-components';
import { usePaneFocus } from '@folio/stripes-acq-components';

import { MappingConfiguration } from '../MappingConfiguration';

const sections = [
  {
    label: <FormattedMessage id="ui-gobi-settings.integrationDetails" />,
    pages: [
      {
        component: MappingConfiguration,
        label: <FormattedMessage id="ui-gobi-settings.mappingConfig" />,
        route: 'mapping-configuration',
        perm: 'ui-gobi-settings.permission.settings.view',
      },
    ],
  },
];

const GobiIntegration = ({ ...props }) => {
  const { paneTitleRef } = usePaneFocus();

  return (
    <CommandList commands={defaultKeyboardShortcuts}>
      <Settings
        {...props}
        navPaneWidth="25%"
        paneTitle={<FormattedMessage id="ui-gobi-settings.meta.title" />}
        paneTitleRef={paneTitleRef}
        sections={sections}
      />
    </CommandList>
  );
};

GobiIntegration.propTypes = {
  match: PropTypes.object.isRequired,
};

export default GobiIntegration;
