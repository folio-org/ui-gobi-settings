import { render, screen } from '@testing-library/react';
import { Form } from 'react-final-form';

import { FieldFromFieldName } from './FieldFromFieldName';

const defaultProps = {
  name: 'name',
};

const renderFieldFromFieldName = (props = {}) => render(
  <Form
    onSubmit={() => jest.fn()}
    render={() => (
      <FieldFromFieldName
        {...defaultProps}
        {...props}
      />
    )}
  />,
);

describe('FieldFromFieldName', () => {
  it('should render field \'From field name\'', () => {
    renderFieldFromFieldName();

    expect(screen.getByText('ui-gobi-settings.order.mappings.field.dataSource.fromFieldName')).toBeInTheDocument();
  });
});
