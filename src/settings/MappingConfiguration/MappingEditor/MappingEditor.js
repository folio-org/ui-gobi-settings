import PropTypes from 'prop-types';
import { useCallback, useMemo } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useParams } from 'react-router-dom';

import {
  Layer,
  LoadingPane,
} from '@folio/stripes/components';
import {
  useAccordionToggle,
  useShowCallout,
} from '@folio/stripes-acq-components';

import {
  FORMATTED_ORDER_MAPPING_TYPES,
  INITIAL_ORDER_MAPPING_ACCORDIONS,
} from '../../constants';
import {
  useOrderMapping,
  useOrderMappingTypeMutation,
} from '../../hooks';
import { MappingForm } from '../MappingForm';
import {
  formValuesToMappings,
  mappingsToFormValues,
} from '../utils';
import { useTranslators } from '../../hooks/useTranslators/useTranslators';

export const MappingEditor = ({
  history,
  rootPath,
}) => {
  const intl = useIntl();
  const { name } = useParams();
  const showCallout = useShowCallout();
  const {
    isLoading: isMappingsLoading,
    mappings,
    mappingType,
  } = useOrderMapping(name);
  const {
    isLoading: isTranslatorsLoading,
    translators,
  } = useTranslators();
  const {
    changeMappingConfig,
  } = useOrderMappingTypeMutation();
  const [
    expandAll,
    stateSections,
    toggleSection,
  ] = useAccordionToggle(INITIAL_ORDER_MAPPING_ACCORDIONS);

  const contentLabel = intl.formatMessage({ id: 'ui-gobi-settings.mappingConfig' });

  const initialValues = useMemo(() => mappingsToFormValues(mappings), [mappings]);

  const onClose = useCallback(() => {
    history.push(`${rootPath}/${name}/view`);
  }, [history, name, rootPath]);

  const onSubmit = useCallback((values) => {
    const formMappings = formValuesToMappings(values, name);

    changeMappingConfig({
      data: formMappings,
      mappingType,
      name,
    })
      .then(() => {
        showCallout({
          message: (
            <FormattedMessage
              id="ui-gobi-settings.mappingConfig.update.success"
              values={{
                name: FORMATTED_ORDER_MAPPING_TYPES[name],
              }}
            />
          ),
        });

        onClose();
      })
      .catch(() => {
        showCallout({
          message: (
            <FormattedMessage
              id="ui-gobi-settings.mappingConfig.update.error"
              values={{
                name: FORMATTED_ORDER_MAPPING_TYPES[name],
              }}
            />
          ),
          type: 'error',
        });
      });
  }, [mappingType, name, onClose, changeMappingConfig, showCallout]);

  const isLoading = isMappingsLoading || isTranslatorsLoading;

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
      <MappingForm
        accordionStatus={stateSections}
        expandAll={expandAll}
        initialValues={initialValues}
        onCancel={onClose}
        onSubmit={onSubmit}
        toggleSection={toggleSection}
        translators={translators}
      />
    </Layer>
  );
};

MappingEditor.propTypes = {
  history: PropTypes.object.isRequired,
  rootPath: PropTypes.string.isRequired,
};
