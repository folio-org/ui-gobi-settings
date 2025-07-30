import { Form } from 'react-final-form';

import {
  render,
  screen,
} from '@folio/jest-config-stripes/testing-library/react';

import { FieldTranslator } from './FieldTranslator';

const defaultProps = {
  dataOptions: [
    { label: 'lookup 1', value: 'lookup1' },
    { label: 'lookup 2', value: 'lookup2' },
  ],
  name: 'name',
};

const renderFieldTranslator = (props = {}) => render(
  <Form
    onSubmit={() => jest.fn()}
    render={() => (
      <FieldTranslator
        {...defaultProps}
        {...props}
      />
    )}
  />,
);

describe('FieldTranslator', () => {
  it('should render field \'Translation\'', () => {
    renderFieldTranslator();

    expect(screen.getByText('ui-gobi-settings.order.mappings.field.dataSource.translator')).toBeInTheDocument();
  });
});
