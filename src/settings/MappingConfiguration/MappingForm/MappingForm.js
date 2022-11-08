import PropTypes from 'prop-types';
import { useCallback, useMemo } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useParams } from 'react-router-dom';
import { mapValues } from 'lodash';

import {
  Accordion,
  AccordionSet,
  checkScope,
  Col,
  ExpandAllButton,
  HasCommand,
  Pane,
  Row,
} from '@folio/stripes/components';
import stripesForm from '@folio/stripes/final-form';
import {
  handleKeyCommand,
  useAccordionToggle,
  usePaneFocus,
} from '@folio/stripes-acq-components';

import { MappingFieldEdit } from '../../components';
import {
  FORMATTED_ORDER_MAPPING_TYPES,
  INITIAL_ORDER_MAPPING_ACCORDIONS,
  ORDER_MAPPING_ACCORDIONS_TITLES,
  ORDER_MAPPING_FIELDS_ACCORDIONS_MAP,
} from '../../constants';
import {
  getFieldNameOptions,
  getTranslatorOptions,
} from '../utils';
import { MappingFormFooter } from './MappingFormFooter';

const MappingForm = ({
  form: { change, reset },
  handleSubmit,
  onCancel,
  pristine,
  submitting,
  translators,
  values,
}) => {
  const intl = useIntl();
  const { name } = useParams();
  const { paneTitleRef } = usePaneFocus();
  const [
    expandAll,
    stateSections,
    toggleSection,
  ] = useAccordionToggle(INITIAL_ORDER_MAPPING_ACCORDIONS);

  const fieldNameOptions = useMemo(() => getFieldNameOptions(), []);
  const translatorOptions = useMemo(() => getTranslatorOptions(intl, translators), [intl, translators]);

  const shortcuts = [
    {
      name: 'cancel',
      shortcut: 'esc',
      handler: handleKeyCommand(onCancel),
    },
    {
      name: 'save',
      handler: handleKeyCommand(handleSubmit),
    },
    {
      name: 'expandAllSections',
      handler: () => expandAll(mapValues(stateSections, () => true)),
    },
    {
      name: 'collapseAllSections',
      handler: () => expandAll(mapValues(stateSections, () => false)),
    },
  ];

  const isClearAllDisabled = !Object.keys(values).length;

  const paneTitle = (
    <FormattedMessage
      id="ui-gobi-settings.mappingConfig.edit.paneTitle"
      values={{
        name: FORMATTED_ORDER_MAPPING_TYPES[name],
      }}
    />
  );

  const onClearMappings = useCallback(() => {
    reset({});
  }, [reset]);

  const formFooter = useMemo(() => (
    <MappingFormFooter
      disabled={pristine || submitting}
      clearAllDisabled={isClearAllDisabled}
      onCancel={onCancel}
      onClearMappings={onClearMappings}
      onSubmit={handleSubmit}
    />
  ), [
    handleSubmit,
    isClearAllDisabled,
    onCancel,
    onClearMappings,
    pristine,
    submitting,
  ]);

  const content = useMemo(() => (
    Object.entries(ORDER_MAPPING_FIELDS_ACCORDIONS_MAP).map(([accordionId, fields]) => (
      <Accordion
        key={accordionId}
        label={ORDER_MAPPING_ACCORDIONS_TITLES[accordionId]}
        id={accordionId}
      >
        <Row>
          <Col xs>
            {fields.map((fieldName, indx) => (
              <MappingFieldEdit
                key={`${accordionId}-${fieldName}-${indx}`}
                name={fieldName}
                field={values[fieldName]}
                change={change}
                fieldNameOptions={fieldNameOptions}
                translatorOptions={translatorOptions}
              />
            ))}
          </Col>
        </Row>
      </Accordion>
    ))
  ), [
    change,
    fieldNameOptions,
    translatorOptions,
    values,
  ]);

  return (
    <HasCommand
      commands={shortcuts}
      isWithinScope={checkScope}
      scope={document.body}
    >
      <Pane
        data-testid="gobi-mapping-edit-pane"
        id="pane-edit-gobi-mapping-configuration-file"
        defaultWidth="fill"
        dismissible
        footer={formFooter}
        onClose={onCancel}
        paneTitle={paneTitle}
        paneTitleRef={paneTitleRef}
      >
        <Row center="xs">
          <Col xs={12} md={8} style={{ textAlign: 'left' }}>

            <Row end="xs">
              <Col xs={12}>
                <ExpandAllButton
                  accordionStatus={stateSections}
                  onToggle={expandAll}
                />
              </Col>
            </Row>

            <form>
              <AccordionSet
                accordionStatus={stateSections}
                onToggle={toggleSection}
              >
                {content}
              </AccordionSet>
            </form>

          </Col>
        </Row>
      </Pane>
    </HasCommand>
  );
};

MappingForm.propTypes = {
  form: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  translators: PropTypes.arrayOf(PropTypes.object).isRequired,
  values: PropTypes.object,
};

export default stripesForm({
  navigationCheck: true,
  subscription: { values: true },
})(MappingForm);
