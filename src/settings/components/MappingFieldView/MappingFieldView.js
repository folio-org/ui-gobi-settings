import PropTypes from 'prop-types';
import { memo } from 'react';
import { FormattedMessage } from 'react-intl';

import {
  Checkbox,
  Col,
  KeyValue,
  Row,
} from '@folio/stripes/components';

import { MappingFieldCard } from '../MappingFieldCard';

const MappingFieldViewComponent = ({
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
            value={dataSource.translation && (
              <FormattedMessage
                id={`ui-gobi-settings.order.mappings.translator.${dataSource.translation}`}
                defaultMessage={dataSource.translation}
              />
            )}
          />
        </Col>

        <Col xs={6} md={3}>
          <Checkbox
            label={<FormattedMessage id="ui-gobi-settings.order.mappings.field.dataSource.translateDefault" />}
            checked={Boolean(dataSource.translateDefault)}
            disabled
            vertical
          />
        </Col>
      </Row>
    </MappingFieldCard>
  );
};

MappingFieldViewComponent.propTypes = {
  dataSource: PropTypes.object,
  name: PropTypes.string.isRequired,
};

export const MappingFieldView = memo(MappingFieldViewComponent);
