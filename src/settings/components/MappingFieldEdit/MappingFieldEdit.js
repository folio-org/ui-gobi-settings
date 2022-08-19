import PropTypes from 'prop-types';
import { memo } from 'react';
import { FormattedMessage } from 'react-intl';

import {
  Col,
  KeyValue,
  Row,
} from '@folio/stripes/components';

import { FieldDefaultValue } from '../FieldDefaultValue';
import { FieldFromFieldName } from '../FieldFromFieldName';
import { FieldTranslator } from '../FieldTranslator';
import { FieldTranslateDefault } from '../FieldTranslateDefault';
import { MappingFieldCard } from '../MappingFieldCard';

const MappingFieldEditComponent = ({
  change,
  field = {},
  name,
  translatorOptions,
}) => {
  return (
    <MappingFieldCard
      id={`field-${name}`}
      name={name}
    >
      <Row>
        <Col xs={6} md={3}>
          <FieldFromFieldName
            name={`${name}.dataSource.dataSourceFieldName`}
          />
        </Col>

        <Col xs={6} md={3}>
          <KeyValue
            label={<FormattedMessage id="ui-gobi-settings.order.mappings.field.dataSource.fromFieldPath" />}
            value={field.dataSource?.from}
          />
        </Col>

        <Col xs={6} md={3}>
          <FieldDefaultValue
            name={`${name}.dataSource.default`}
          />
        </Col>

        <Col xs={6} md={3}>
          <FieldTranslator
            name={`${name}.dataSource.translation`}
            change={change}
            dataOptions={translatorOptions}
            mappingFieldName={name}
          />
        </Col>

        <Col xs={6} md={3}>
          <FieldTranslateDefault
            name={`${name}.dataSource.translateDefault`}
          />
        </Col>
      </Row>
    </MappingFieldCard>
  );
};

MappingFieldEditComponent.propTypes = {
  change: PropTypes.func.isRequired,
  field: PropTypes.object,
  name: PropTypes.string.isRequired,
  translatorOptions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export const MappingFieldEdit = memo(MappingFieldEditComponent);
