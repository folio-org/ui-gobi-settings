import user from '@testing-library/user-event';
import { act, render, screen } from '@testing-library/react';
import { Form } from 'react-final-form';

import { FieldTranslator } from './FieldTranslator';

const defaultProps = {
  change: jest.fn(),
  dataOptions: [
    { label: 'lookup 1', value: 'lookup1' },
    { label: 'lookup 2', value: 'lookup2' },
  ],
  mappingFieldName: 'PREFIX',
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
  beforeEach(() => {
    defaultProps.change.mockClear();
  });

  it('should render field \'Translation\'', () => {
    renderFieldTranslator();

    expect(screen.getByText('ui-gobi-settings.order.mappings.field.dataSource.translator')).toBeInTheDocument();
  });

  it('should change \'Default value\' when translation was changed', async () => {
    renderFieldTranslator();

    const selectionBtn = screen.getByText('ui-gobi-settings.order.mappings.field.dataSource.translator');

    await act(async () => {
      user.click(selectionBtn);
      user.click(screen.getByText(defaultProps.dataOptions[1].label));
    });

    expect(defaultProps.change).toHaveBeenCalled();
  });
});
