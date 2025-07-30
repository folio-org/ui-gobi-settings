import { Form } from 'react-final-form';

import {
  render,
  screen,
} from '@folio/jest-config-stripes/testing-library/react';

import { FieldDefaultValue } from './FieldDefaultValue';

const defaultProps = {
  name: 'name',
};

const renderFieldDefaultValue = (props = {}) => render(
  <Form
    onSubmit={() => jest.fn()}
    render={() => (
      <FieldDefaultValue
        {...defaultProps}
        {...props}
      />
    )}
  />,
);

describe('FieldDefaultValue', () => {
  it('should render field \'Default value\'', () => {
    renderFieldDefaultValue();

    expect(screen.getByText('ui-gobi-settings.order.mappings.field.dataSource.defaultValue')).toBeInTheDocument();
  });
});
