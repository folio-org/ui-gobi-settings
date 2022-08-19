import PropTypes from 'prop-types';
import { useMemo } from 'react';
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
  usePaneFocus,
} from '@folio/stripes-acq-components';

import { MappingFieldEdit } from '../../components';
import {
  FORMATTED_ORDER_MAPPING_TYPES,
  ORDER_MAPPING_ACCORDIONS_TITLES,
  ORDER_MAPPING_FIELDS_ACCORDIONS_MAP,
} from '../../constants';
import { getTranslatorOptions } from '../utils';
import { MappingFormFooter } from './MappingFormFooter';

const MappingForm = ({
  accordionStatus,
  expandAll,
  form: { change },
  handleSubmit,
  onCancel,
  pristine,
  submitting,
  toggleSection,
  translators,
  values,
}) => {
  const intl = useIntl();
  const { name } = useParams();
  const { paneTitleRef } = usePaneFocus();

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
      handler: () => expandAll(mapValues(accordionStatus, () => true)),
    },
    {
      name: 'collapseAllSections',
      handler: () => expandAll(mapValues(accordionStatus, () => false)),
    },
  ];

  const paneTitle = (
    <FormattedMessage
      id="ui-gobi-settings.mappingConfig.edit.paneTitle"
      values={{
        name: FORMATTED_ORDER_MAPPING_TYPES[name],
      }}
    />
  );

  const formFooter = useMemo(() => (
    <MappingFormFooter
      disabled={pristine || submitting}
      onCancel={onCancel}
      onSubmit={handleSubmit}
    />
  ), [handleSubmit, onCancel, pristine, submitting]);

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
                translatorOptions={translatorOptions}
              />
            ))}
          </Col>
        </Row>
      </Accordion>
    ))
  ), [change, translatorOptions, values]);

  return (
    <HasCommand
      commands={shortcuts}
      isWithinScope={checkScope}
      scope={document.body}
    >
      <Pane
        data-testid="gobi-config-file-edit-pane"
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
                  accordionStatus={accordionStatus}
                  onToggle={expandAll}
                />
              </Col>
            </Row>

            <form>
              <AccordionSet
                accordionStatus={accordionStatus}
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
  accordionStatus: PropTypes.object.isRequired,
  expandAll: PropTypes.func.isRequired,
  form: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  toggleSection: PropTypes.func.isRequired,
  translators: PropTypes.arrayOf(PropTypes.object).isRequired,
  values: PropTypes.object,
};

export default stripesForm({
  navigationCheck: true,
  subscription: { values: true },
})(MappingForm);
