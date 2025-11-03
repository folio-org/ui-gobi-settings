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
  Layer,
  LoadingPane,
} from '@folio/stripes/components';
import { useShowCallout } from '@folio/stripes-acq-components';

import { FORMATTED_ORDER_MAPPING_TYPES } from '../../constants';
import {
  useOrderMapping,
  useOrderMappingTypeMutation,
  useTranslators,
} from '../../hooks';
import { MappingForm } from '../MappingForm';
import {
  formValuesToMappings,
  mappingsToFormValues,
} from '../utils';

export const MappingEditor = ({
  history,
  rootPath,
}) => {
  const intl = useIntl();
  const showCallout = useShowCallout();
  const { name } = useParams();

  const {
    isLoading: isMappingsLoading,
    mappingType,
    orderMappings,
  } = useOrderMapping(name);
  const {
    isLoading: isTranslatorsLoading,
    translators,
  } = useTranslators();

  const { changeMappingConfig } = useOrderMappingTypeMutation();

  const mappings = orderMappings?.mappings;
  const contentLabel = intl.formatMessage({ id: 'ui-gobi-settings.mappingConfig' });
  const initialValues = useMemo(() => mappingsToFormValues(mappings), [mappings]);

  const onClose = useCallback(() => {
    history.push(`${rootPath}/${name}/view`);
  }, [history, name, rootPath]);

  const onSubmit = useCallback((values) => {
    const formMappings = formValuesToMappings(values);

    changeMappingConfig({
      data: {
        ...orderMappings,
        ...formMappings,
      },
      mappingType,
      name: orderMappings?.orderType,
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
  }, [changeMappingConfig, mappingType, name, onClose, orderMappings, showCallout]);

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
        initialValues={initialValues}
        onCancel={onClose}
        onSubmit={onSubmit}
        translators={translators}
      />
    </Layer>
  );
};

MappingEditor.propTypes = {
  history: PropTypes.object.isRequired,
  rootPath: PropTypes.string.isRequired,
};
