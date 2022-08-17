import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { camelCase } from 'lodash';

import { Card } from '@folio/stripes/components';

export const MappingFieldCard = ({
  children,
  id,
  name,
}) => {
  const legend = (
    <b>
      <FormattedMessage
        id={`ui-gobi-settings.order.mappings.field.${camelCase(name)}`}
        defaultMessage={name}
      />
    </b>
  );

  return (
    <Card
      id={id}
      headerStart={legend}
      roundedBorder
    >
      {children}
    </Card>
  );
};

MappingFieldCard.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
