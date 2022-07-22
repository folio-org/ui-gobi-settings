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

export const MappingFieldEdit = ({
  field,
}) => {
  return (
    <MappingFieldCard>
      <Row>
        <Col xs={3}>
          <FieldFromFieldName
          />
        </Col>

        <Col xs={3}>
          <KeyValue
            label="From field path"
            value="bar"
          />
        </Col>

        <Col xs={3}>
          <FieldDefaultValue
          />
        </Col>

        <Col xs={3}>
          <FieldTranslator
          />
        </Col>

        <Col xs={3}>
          <FieldTranslateDefault
          />
        </Col>
      </Row>
    </MappingFieldCard>
  );
};
