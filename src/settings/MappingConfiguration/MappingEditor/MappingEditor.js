import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { mapValues } from 'lodash';

import {
  checkScope,
  Col,
  ExpandAllButton,
  HasCommand,
  Layer,
  LoadingPane,
  Pane,
  Row,
} from '@folio/stripes/components';
import { stripesConnect } from '@folio/stripes/core';
import {
  handleKeyCommand,
  useAccordionToggle,
  usePaneFocus,
} from '@folio/stripes-acq-components';

import {
  INITIAL_ORDER_MAPPING_ACCORDIONS,
} from '../../constants';
import { useOrderMapping } from '../../hooks';
import { MappingForm } from '../MappingForm';

export const MappingEditor = ({
  history,
  rootPath,
  onClose,
  ...props
}) => {
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

  const shortcuts = [
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
          data-testid="gobi-config-file-edit-pane"
          id="pane-edit-gobi-mapping-configuration-file"
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

              <MappingForm
                accordionStatus={stateSections}
                toggleSection={toggleSection}
                onSubmit={console.log}
                initialValues={{}}
              />
            </Col>
          </Row>
        </Pane>
      </HasCommand>
    </Layer>
  );
};

MappingEditor.propTypes = {
  history: PropTypes.object.isRequired,
  rootPath: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default stripesConnect(MappingEditor);
