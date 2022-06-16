import { FormattedMessage } from 'react-intl';

import {
  Col,
  KeyValue,
  Pane,
  Row,
} from '@folio/stripes/components';
import { usePaneFocus } from '@folio/stripes-acq-components';

export const APIKey = () => {
  const { paneTitleRef } = usePaneFocus();

  // TODO: connect values to actual data
  return (
    <Pane
      id="pane-gobi-api-key"
      defaultWidth="fill"
      paneTitle={<FormattedMessage id="ui-gobi-settings.approvals" />}
      paneTitleRef={paneTitleRef}
    >
      <Row xs>
        <Col xs>
          <KeyValue
            label={<FormattedMessage id="ui-gobi-settings.url" />}
            value={null}
          />
        </Col>
      </Row>
      <Row xs>
        <Col xs>
          <KeyValue
            label={<FormattedMessage id="ui-gobi-settings.folioApiKey" />}
            value={null}
          />
        </Col>
      </Row>
    </Pane>
  );
};
