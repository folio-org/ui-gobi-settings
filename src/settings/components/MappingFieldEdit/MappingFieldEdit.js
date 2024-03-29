import PropTypes from 'prop-types';
import { memo, useCallback, useMemo } from 'react';

import {
  Col,
  IconButton,
  Row,
} from '@folio/stripes/components';

import { FieldDefaultValue } from '../FieldDefaultValue';
import { FieldFromFieldName } from '../FieldFromFieldName';
import { FieldFromPath } from '../FieldFromPath';
import { FieldTranslator } from '../FieldTranslator';
import { FieldTranslateDefault } from '../FieldTranslateDefault';
import { MappingFieldCard } from '../MappingFieldCard';

const MappingFieldEditComponent = ({
  change,
  field = {},
  fieldNameOptions,
  name,
  translatorOptions,
}) => {
  const onClear = useCallback(() => {
    change(name, undefined);
  }, [change, name]);

  const headerEnd = useMemo(() => !!Object.values(field.dataSource || {}).length && (
    <IconButton
      icon="times-circle-solid"
      onClick={onClear}
    />
  ), [field, onClear]);

  return (
    <MappingFieldCard
      id={`field-${name}`}
      name={name}
      headerEnd={headerEnd}
    >
      <Row>
        <Col xs={6} md={3}>
          <FieldFromFieldName
            name={`${name}.dataSource.dataSourceFieldName`}
            change={change}
            dataOptions={fieldNameOptions}
            mappingFieldName={name}
          />
        </Col>

        <Col xs={6} md={3}>
          <FieldFromPath
            mappingField={field}
            name={`${name}.dataSource.from`}
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
  change: PropTypes.func.isRequired,
  field: PropTypes.object,
  fieldNameOptions: PropTypes.arrayOf(PropTypes.object).isRequired,
  name: PropTypes.string.isRequired,
  translatorOptions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export const MappingFieldEdit = memo(MappingFieldEditComponent);
