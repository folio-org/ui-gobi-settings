import PropTypes from 'prop-types';
import { useCallback, useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import { useParams } from 'react-router-dom';
import { keyBy, mapValues } from 'lodash';

import {
  Accordion,
  AccordionSet,
  Button,
  checkScope,
  Col,
  ExpandAllButton,
  HasCommand,
  Icon,
  Layer,
  LoadingPane,
  Pane,
  Row,
} from '@folio/stripes/components';
import {
  handleKeyCommand,
  useAccordionToggle,
  usePaneFocus,
} from '@folio/stripes-acq-components';

import { IfPermission, useStripes } from '@folio/stripes/core';

import { MappingFieldView } from '../../components';
import {
  FORMATTED_ORDER_MAPPING_TYPES,
  GOBI_MAPPING_TYPES,
  INITIAL_ORDER_MAPPING_ACCORDIONS,
  ORDER_MAPPING_ACCORDIONS_TITLES,
  ORDER_MAPPING_FIELDS_ACCORDIONS_MAP,
} from '../../constants';
import { useOrderMapping } from '../../hooks';

export const MappingView = ({
  history,
  rootPath,
  onClose,
}) => {
  const stripes = useStripes();
  const { name } = useParams();
  const { paneTitleRef } = usePaneFocus();
  const {
    isLoading,
    mappingType,
    mappings,
  } = useOrderMapping(name);

  const mappingMap = useMemo(() => keyBy(mappings, 'field'), [mappings]);

  const [
    expandAll,
    stateSections,
    toggleSection,
  ] = useAccordionToggle(INITIAL_ORDER_MAPPING_ACCORDIONS);

  const onEdit = useCallback(() => {
    history.push(`${rootPath}/${name}/edit`);
  }, [history, name, rootPath]);

  const shortcuts = [
    {
      name: 'edit',
      handler: handleKeyCommand(() => stripes.hasPerm('ui-gobi-settings.permission.settings') && onEdit()),
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
    return (
      <>
        <IfPermission perm="ui-gobi-settings.permission.settings">
          <Button
            data-testid="action-edit-mapping"
            buttonStyle="dropdownItem"
            onClick={onEdit}
          >
            <Icon icon="edit">
              <FormattedMessage id="ui-gobi-settings.button.edit" />
            </Icon>
          </Button>
        </IfPermission>
        {
          mappingType === GOBI_MAPPING_TYPES.custom && (
            <IfPermission perm="ui-gobi-settings.permission.settings">
              <Button
                data-testid="action-restore-default-mapping"
                buttonStyle="dropdownItem"
                onClick={() => {
                  // TODO: connect with API
                  console.log('restoreDefaultConfig button clicked');
                  onToggle();
                }}
              >
                <Icon icon="trash">
                  <FormattedMessage id="ui-gobi-settings.order.mappings.action.restoreDefaultConfig" />
                </Icon>
              </Button>
            </IfPermission>
          )
        }
      </>
    );
  }, [mappingType, onEdit]);

  if (isLoading) {
    return (
      <Layer isOpen>
        <LoadingPane
          dismissible
          onClose={onClose}
        />
      </Layer>
    );
  }

  return (
    <Layer
      contentLabel="Mapping configuration"
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
