import keyBy from 'lodash/keyBy';
import mapValues from 'lodash/mapValues';
import PropTypes from 'prop-types';
import {
  useCallback,
  useMemo,
} from 'react';
import {
  FormattedMessage,
  useIntl,
} from 'react-intl';
import { useParams } from 'react-router-dom';

import {
  Accordion,
  AccordionSet,
  Button,
  checkScope,
  Col,
  ConfirmationModal,
  ExpandAllButton,
  HasCommand,
  Icon,
  Layer,
  LoadingPane,
  Pane,
  Row,
} from '@folio/stripes/components';
import {
  IfPermission,
  useStripes,
} from '@folio/stripes/core';
import {
  handleKeyCommand,
  useAccordionToggle,
  useModalToggle,
  usePaneFocus,
  useShowCallout,
} from '@folio/stripes-acq-components';

import { MappingFieldView } from '../../components';
import {
  FORMATTED_ORDER_MAPPING_TYPES,
  GOBI_MAPPING_TYPES,
  INITIAL_ORDER_MAPPING_ACCORDIONS,
  ORDER_MAPPING_ACCORDIONS_TITLES,
  ORDER_MAPPING_FIELDS_ACCORDIONS_MAP,
} from '../../constants';
import {
  useOrderMapping,
  useOrderMappingTypeMutation,
} from '../../hooks';

export const MappingView = ({
  history,
  onClose,
  rootPath,
}) => {
  const intl = useIntl();
  const stripes = useStripes();
  const showCallout = useShowCallout();
  const { name } = useParams();

  const { paneTitleRef } = usePaneFocus();
  const [isRestoreConfirmation, toggleRestoreConfirmation] = useModalToggle();

  const [
    expandAll,
    stateSections,
    toggleSection,
  ] = useAccordionToggle(INITIAL_ORDER_MAPPING_ACCORDIONS);

  const {
    isLoading,
    mappingType,
    orderMappings,
    refetch,
  } = useOrderMapping(name);

  const { restoreMappingConfig } = useOrderMappingTypeMutation();

  const mappings = orderMappings?.mappings;
  const mappingMap = useMemo(() => keyBy(mappings, 'field'), [mappings]);
  const contentLabel = intl.formatMessage({ id: 'ui-gobi-settings.mappingConfig' });

  const onEdit = useCallback(() => {
    history.push(`${rootPath}/${name}/edit`);
  }, [history, name, rootPath]);

  const onRestoreDefault = useCallback(async () => {
    toggleRestoreConfirmation();
    restoreMappingConfig(orderMappings?.orderType)
      .then(() => {
        refetch();

        showCallout({
          message: <FormattedMessage id="ui-gobi-settings.restore.success" />,
        });
      })
      .catch(() => {
        showCallout({
          message: <FormattedMessage id="ui-gobi-settings.restore.error" />,
          type: 'error',
        });
      });
  }, [restoreMappingConfig, refetch, showCallout, name, toggleRestoreConfirmation]);

  const shortcuts = [
    {
      name: 'edit',
      handler: handleKeyCommand(() => stripes.hasPerm('ui-gobi-settings.permission.settings.edit') && onEdit()),
    },
    {
      name: 'cancel',
      shortcut: 'esc',
      handler: handleKeyCommand(onClose),
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

  const getActionMenu = useCallback(({ onToggle }) => {
    if (!stripes.hasPerm('ui-gobi-settings.permission.settings.edit')) return null;

    return (
      <IfPermission perm="ui-gobi-settings.permission.settings.edit">
        <Button
          data-testid="action-edit-mapping"
          buttonStyle="dropdownItem"
          onClick={onEdit}
        >
          <Icon icon="edit">
            <FormattedMessage id="ui-gobi-settings.button.edit" />
          </Icon>
        </Button>
        {
          mappingType === GOBI_MAPPING_TYPES.custom && (
            <Button
              data-testid="action-restore-default-mapping"
              buttonStyle="dropdownItem"
              onClick={() => {
                onToggle();
                toggleRestoreConfirmation();
              }}
            >
              <Icon icon="trash">
                <FormattedMessage id="ui-gobi-settings.actions.restore.heading" />
              </Icon>
            </Button>
          )
        }
      </IfPermission>
    );
  }, [mappingType, onEdit, stripes, toggleRestoreConfirmation]);

  if (isLoading) {
    return (
      <Layer isOpen contentLabel={contentLabel}>
        <LoadingPane
          dismissible
          onClose={onClose}
        />
      </Layer>
    );
  }

  return (
    <Layer
      contentLabel={contentLabel}
      isOpen
    >
      <HasCommand
        commands={shortcuts}
        isWithinScope={checkScope}
        scope={document.body}
      >
        <Pane
          data-testid="gobi-mapping-pane"
          id="pane-gobi-mapping-configuration-file"
          actionMenu={getActionMenu}
          defaultWidth="fill"
          dismissible
          onClose={onClose}
          paneTitle={FORMATTED_ORDER_MAPPING_TYPES[name]}
          paneTitleRef={paneTitleRef}
        >
          <Row center="xs">
            <Col xs={12} md={8}>
              <Row end="xs">
                <Col xs={12}>
                  <ExpandAllButton
                    accordionStatus={stateSections}
                    onToggle={expandAll}
                  />
                </Col>
              </Row>
            </Col>
          </Row>

          <Row center="xs">
            <Col xs={12} md={8} style={{ textAlign: 'left' }}>
              <AccordionSet
                accordionStatus={stateSections}
                onToggle={toggleSection}
              >
                {
                  Object.entries(ORDER_MAPPING_FIELDS_ACCORDIONS_MAP).map(([accordionId, fields]) => (
                    <Accordion
                      key={accordionId}
                      label={ORDER_MAPPING_ACCORDIONS_TITLES[accordionId]}
                      id={accordionId}
                    >
                      <Row>
                        <Col xs>
                          {fields.map((fieldName, indx) => (
                            <MappingFieldView
                              key={`${accordionId}-${fieldName}-${indx}`}
                              name={fieldName}
                              dataSource={mappingMap[fieldName]?.dataSource}
                            />
                          ))}
                        </Col>
                      </Row>
                    </Accordion>
                  ))
                }
              </AccordionSet>
            </Col>
          </Row>

          {isRestoreConfirmation && (
            <ConfirmationModal
              id="order-mapping-type-restore-confirmation"
              confirmLabel={<FormattedMessage id="ui-gobi-settings.actions.restore.confirm" />}
              heading={<FormattedMessage id="ui-gobi-settings.actions.restore.heading" />}
              message={<FormattedMessage id="ui-gobi-settings.actions.restore.message" />}
              onCancel={toggleRestoreConfirmation}
              onConfirm={onRestoreDefault}
              open
            />
          )}

        </Pane>
      </HasCommand>
    </Layer>
  );
};

MappingView.propTypes = {
  history: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
  rootPath: PropTypes.string.isRequired,
};
