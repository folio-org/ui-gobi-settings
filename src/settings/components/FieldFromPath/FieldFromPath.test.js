import { Form } from 'react-final-form';

import {
  render,
  screen,
} from '@folio/jest-config-stripes/testing-library/react';
import userEvent from '@folio/jest-config-stripes/testing-library/user-event';

import {
  CUSTOM_PATH,
  GOBI_FIELDS,
  GOBI_FIELDS_PATH_MAP,
} from '../../constants';
import { FieldFromPath } from './FieldFromPath';

const defaultProps = {
  mappingField: {
    field: 'SUFFIX',
    dataSource: {
      dataSourceFieldName: GOBI_FIELDS.localData4,
      from: GOBI_FIELDS_PATH_MAP[GOBI_FIELDS.localData4],
    },
  },
  name: 'SUFFIX',
};

const renderFieldFromPath = (props = {}) => render(
  <Form
    onSubmit={() => jest.fn()}
    render={() => (
      <FieldFromPath
        {...defaultProps}
        {...props}
      />
    )}
  />,
);

describe('FieldFromPath', () => {
  it('should render field \'Path\'', () => {
    renderFieldFromPath();

    expect(screen.getByText('ui-gobi-settings.order.mappings.field.dataSource.fromFieldPath')).toBeInTheDocument();
  });

  it('should render field \'Path\' as text input if it is custom', async () => {
    renderFieldFromPath({
      mappingField: {
        ...defaultProps.mappingField,
        dataSource: {
          ...defaultProps.mappingField.dataSource,
          dataSourceFieldName: CUSTOM_PATH,
        },
      },
    });

    const pathInput = screen.getByLabelText('ui-gobi-settings.order.mappings.field.dataSource.fromFieldPath');
    const customPath = '//Suffix';

    await userEvent.type(pathInput, customPath);

    expect(pathInput.value).toEqual(customPath);
  });
});
