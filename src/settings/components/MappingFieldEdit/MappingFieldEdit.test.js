import user from '@testing-library/user-event';
import { act, render, screen } from '@testing-library/react';
import { Form } from 'react-final-form';

import { getFieldNameOptions } from '../../MappingConfiguration/utils';
import { MappingFieldEdit } from './MappingFieldEdit';

const defaultProps = {
  change: jest.fn(),
  name: 'PREFIX',
  field: {
    field: 'PREFIX',
    dataSource: { default: 'pref' },
  },
  fieldNameOptions: getFieldNameOptions(),
  translatorOptions: [
    { label: 'lookup 1', value: 'lookup1' },
    { label: 'lookup 2', value: 'lookup2' },
  ],
};

const renderMappingFieldEdit = (props = {}) => render(
  <Form
    onSubmit={() => jest.fn()}
    render={() => (
      <MappingFieldEdit
        {...defaultProps}
        {...props}
      />
    )}
  />,
);

describe('MappingFieldEdit', () => {
  beforeEach(() => {
    defaultProps.change.mockClear();
  });

  it('should render mapping field edit card', () => {
    renderMappingFieldEdit();

    expect(screen.getByText('ui-gobi-settings.order.mappings.field.dataSource.fromFieldName')).toBeInTheDocument();
    expect(screen.getByText('ui-gobi-settings.order.mappings.field.dataSource.defaultValue')).toBeInTheDocument();
    expect(screen.getByText('ui-gobi-settings.order.mappings.field.dataSource.translator')).toBeInTheDocument();
    expect(screen.getByText('ui-gobi-settings.order.mappings.field.dataSource.translateDefault')).toBeInTheDocument();
  });

  it('should clear field mappings when \'Clear\' icon button was clicked', async () => {
    renderMappingFieldEdit();

    await act(async () => user.click(screen.getByRole('button', { name: 'times-circle-solid' })));

    expect(defaultProps.change).toHaveBeenCalled();
  });
});
