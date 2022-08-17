import PropTypes from 'prop-types';
import { memo } from 'react';

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
            label="From field path"
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
            dataOptions={translatorOptions}
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
  field: PropTypes.object,
  name: PropTypes.string.isRequired,
};

export const MappingFieldEdit = memo(MappingFieldEditComponent);
