import { render, screen } from '@testing-library/react';
import { Form } from 'react-final-form';

import { FieldTranslateDefault } from './FieldTranslateDefault';

const defaultProps = {
  name: 'name',
};

const renderFieldTranslateDefault = (props = {}) => render(
  <Form
    onSubmit={() => jest.fn()}
    render={() => (
      <FieldTranslateDefault
        {...defaultProps}
        {...props}
      />
    )}
  />,
);

describe('FieldTranslateDefault', () => {
  it('should render field \'Translate default\'', () => {
    renderFieldTranslateDefault();

    expect(screen.getByText('ui-gobi-settings.order.mappings.field.dataSource.translateDefault')).toBeInTheDocument();
  });
});
