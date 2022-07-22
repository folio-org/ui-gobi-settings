import { FormattedMessage } from 'react-intl';

import { Card } from '@folio/stripes/components';

export const MappingFieldCard = ({
  children,
  field,
}) => {
  const legend = (
    <FormattedMessage
      id={`ui-gobi-settings.mappings.field.${field}`}
      defaultMessage="Field"
      tagName="h4"
    />
  );

  return (
    <Card
      id="my-card"
      headerClass="my-card-header"
      headerStart={legend}
      roundedBorder
    >
      {children}
    </Card>
  );
};
