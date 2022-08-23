import user from '@testing-library/user-event';
import { act, render, screen } from '@testing-library/react';
import { Form } from 'react-final-form';

import { getFieldNameOptions } from '../../MappingConfiguration/utils';
import { FieldFromFieldName } from './FieldFromFieldName';

const defaultProps = {
  change: jest.fn(),
  dataOptions: getFieldNameOptions(),
  mappingFieldName: 'PREFIX',
  name: 'PREFIX.dataSource.dataSourceFieldName',
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

  it('should change \'Path\' when gobi field name was changed', async () => {
    renderFieldFromFieldName();

    const selectionBtn = screen.getByText('ui-gobi-settings.order.mappings.field.dataSource.fromFieldName');

    await act(async () => {
      user.click(selectionBtn);
      user.click(screen.getByText(defaultProps.dataOptions[1].label));
    });

    expect(defaultProps.change).toHaveBeenCalled();
  });
});
