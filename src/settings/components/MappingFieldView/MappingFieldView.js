import {
  Checkbox,
  Col,
  KeyValue,
  Row,
} from '@folio/stripes/components';

import { MappingFieldCard } from '../MappingFieldCard';

export const MappingFieldView = ({
  field,
}) => {
  return (
    <MappingFieldCard>
      <Row>
        <Col xs={3}>
          <KeyValue
            label="From field name"
            value="foo"
          />
        </Col>

        <Col xs={3}>
          <KeyValue
            label="From field path"
            value="bar"
          />
        </Col>

        <Col xs={3}>
          <KeyValue
            label="Default value"
            value="foo"
          />
        </Col>

        <Col xs={3}>
          <KeyValue
            label="Translator"
            value="baz"
          />
        </Col>

        <Col xs={3}>
          <Checkbox
            label="Translate default"
            checked
            disabled
            vertical
          />
        </Col>
      </Row>
    </MappingFieldCard>
  );
};
