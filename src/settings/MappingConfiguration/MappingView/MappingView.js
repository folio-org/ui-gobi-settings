import PropTypes from 'prop-types';
import { useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import { useParams } from 'react-router-dom';
import { mapValues } from 'lodash';

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
  INITIAL_ORDER_MAPPING_ACCORDIONS,
  ORDER_MAPPING_ACCORDIONS,
  ORDER_MAPPING_ACCORDIONS_TITLES,
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
    mapping,
  } = useOrderMapping(name);

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
      </>
    );
  }, [onEdit]);

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
          data-testid="gobi-config-file-pane"
          id="pane-gobi-mapping-configuration-file"
          actionMenu={getActionMenu}
          defaultWidth="fill"
          dismissible
          onClose={onClose}
          paneTitle={name}
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
                <Accordion
                  label={ORDER_MAPPING_ACCORDIONS_TITLES[ORDER_MAPPING_ACCORDIONS.poInfo]}
                  id={ORDER_MAPPING_ACCORDIONS.poInfo}
                >
                  <Row>
                    <Col xs>
                      <MappingFieldView />
                      <MappingFieldView />
                    </Col>
                  </Row>
                </Accordion>

                <Accordion
                  label={ORDER_MAPPING_ACCORDIONS_TITLES[ORDER_MAPPING_ACCORDIONS.ongoingOrder]}
                  id={ORDER_MAPPING_ACCORDIONS.ongoingOrder}
                >
                  <Row>
                    <Col xs={3}>
                      2
                    </Col>
                  </Row>
                </Accordion>

                <Accordion
                  label={ORDER_MAPPING_ACCORDIONS_TITLES[ORDER_MAPPING_ACCORDIONS.poNotes]}
                  id={ORDER_MAPPING_ACCORDIONS.poNotes}
                >
                  <Row>
                    <Col xs={3}>
                      3
                    </Col>
                  </Row>
                </Accordion>

                <Accordion
                  label={ORDER_MAPPING_ACCORDIONS_TITLES[ORDER_MAPPING_ACCORDIONS.poTags]}
                  id={ORDER_MAPPING_ACCORDIONS.poTags}
                >
                  <Row>
                    <Col xs={3}>
                      3
                    </Col>
                  </Row>
                </Accordion>

                <Accordion
                  label={ORDER_MAPPING_ACCORDIONS_TITLES[ORDER_MAPPING_ACCORDIONS.poSummary]}
                  id={ORDER_MAPPING_ACCORDIONS.poSummary}
                >
                  <Row>
                    <Col xs={3}>
                      4
                    </Col>
                  </Row>
                </Accordion>

                <Accordion
                  label={ORDER_MAPPING_ACCORDIONS_TITLES[ORDER_MAPPING_ACCORDIONS.itemDetails]}
                  id={ORDER_MAPPING_ACCORDIONS.itemDetails}
                >
                  <Row>
                    <Col xs={3}>
                      5
                    </Col>
                  </Row>
                </Accordion>

                <Accordion
                  label={ORDER_MAPPING_ACCORDIONS_TITLES[ORDER_MAPPING_ACCORDIONS.lineDetails]}
                  id={ORDER_MAPPING_ACCORDIONS.lineDetails}
                >
                  <Row>
                    <Col xs={3}>
                      6
                    </Col>
                  </Row>
                </Accordion>

                <Accordion
                  label={ORDER_MAPPING_ACCORDIONS_TITLES[ORDER_MAPPING_ACCORDIONS.vendor]}
                  id={ORDER_MAPPING_ACCORDIONS.vendor}
                >
                  <Row>
                    <Col xs={3}>
                      7
                    </Col>
                  </Row>
                </Accordion>

                <Accordion
                  label={ORDER_MAPPING_ACCORDIONS_TITLES[ORDER_MAPPING_ACCORDIONS.costDetails]}
                  id={ORDER_MAPPING_ACCORDIONS.costDetails}
                >
                  <Row>
                    <Col xs={3}>
                      8
                    </Col>
                  </Row>
                </Accordion>

                <Accordion
                  label={ORDER_MAPPING_ACCORDIONS_TITLES[ORDER_MAPPING_ACCORDIONS.fundDistribution]}
                  id={ORDER_MAPPING_ACCORDIONS.fundDistribution}
                >
                  <Row>
                    <Col xs={3}>
                      9
                    </Col>
                  </Row>
                </Accordion>

                <Accordion
                  label={ORDER_MAPPING_ACCORDIONS_TITLES[ORDER_MAPPING_ACCORDIONS.location]}
                  id={ORDER_MAPPING_ACCORDIONS.location}
                >
                  <Row>
                    <Col xs={3}>
                      10
                    </Col>
                  </Row>
                </Accordion>

                <Accordion
                  label={ORDER_MAPPING_ACCORDIONS_TITLES[ORDER_MAPPING_ACCORDIONS.physical]}
                  id={ORDER_MAPPING_ACCORDIONS.physical}
                >
                  <Row>
                    <Col xs={3}>
                      11
                    </Col>
                  </Row>
                </Accordion>

                <Accordion
                  label={ORDER_MAPPING_ACCORDIONS_TITLES[ORDER_MAPPING_ACCORDIONS.eresources]}
                  id={ORDER_MAPPING_ACCORDIONS.eresources}
                >
                  <Row>
                    <Col xs={3}>
                      12
                    </Col>
                  </Row>
                </Accordion>

                <Accordion
                  label={ORDER_MAPPING_ACCORDIONS_TITLES[ORDER_MAPPING_ACCORDIONS.other]}
                  id={ORDER_MAPPING_ACCORDIONS.other}
                >
                  <Row>
                    <Col xs={3}>
                      13
                    </Col>
                  </Row>
                </Accordion>

                <Accordion
                  label={ORDER_MAPPING_ACCORDIONS_TITLES[ORDER_MAPPING_ACCORDIONS.polTags]}
                  id={ORDER_MAPPING_ACCORDIONS.polTags}
                >
                  <Row>
                    <Col xs={3}>
                      14
                    </Col>
                  </Row>
                </Accordion>
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
