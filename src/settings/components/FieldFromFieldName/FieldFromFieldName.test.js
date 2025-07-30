import { Form } from 'react-final-form';

import {
  act,
  render,
  screen,
} from '@folio/jest-config-stripes/testing-library/react';
import userEvent from '@folio/jest-config-stripes/testing-library/user-event';

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

    await act(async () => userEvent.click(screen.getByText('stripes-components.selection.controlLabel')));
    await act(async () => userEvent.click(screen.getByText(defaultProps.dataOptions[1].label)));

    expect(defaultProps.change).toHaveBeenCalled();
  });
});
