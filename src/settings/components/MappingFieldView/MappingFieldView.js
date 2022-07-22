import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import {
  Checkbox,
  Col,
  KeyValue,
  Row,
} from '@folio/stripes/components';

import { MappingFieldCard } from '../MappingFieldCard';

export const MappingFieldView = ({
  dataSource = {},
  name,
}) => {
  return (
    <MappingFieldCard
      id={`field-${name}`}
      name={name}
    >
      <Row>
        <Col xs={6} md={3}>
          <KeyValue
            label={<FormattedMessage id="ui-gobi-settings.order.mappings.field.dataSource.fromFieldName" />}
            value={dataSource.dataSourceFieldName}
          />
        </Col>

        <Col xs={6} md={3}>
          <KeyValue
            label={<FormattedMessage id="ui-gobi-settings.order.mappings.field.dataSource.fromFieldPath" />}
            value={dataSource.from}
          />
        </Col>

        <Col xs={6} md={3}>
          <KeyValue
            label={<FormattedMessage id="ui-gobi-settings.order.mappings.field.dataSource.defaultValue" />}
            value={dataSource.default}
          />
        </Col>

        <Col xs={6} md={3}>
          <KeyValue
            label={<FormattedMessage id="ui-gobi-settings.order.mappings.field.dataSource.translator" />}
            value={dataSource.translation}
          />
        </Col>

        <Col xs={6} md={3}>
          <Checkbox
            label={<FormattedMessage id="ui-gobi-settings.order.mappings.field.dataSource.translateDefault" />}
            checked={dataSource.translateDefault}
            disabled
            vertical
          />
        </Col>
      </Row>
    </MappingFieldCard>
  );
};

MappingFieldView.propTypes = {
  dataSource: PropTypes.object,
  name: PropTypes.string.isRequired,
};
