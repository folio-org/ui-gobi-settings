import { render, screen } from '@testing-library/react';

import { MappingFormFooter } from './MappingFormFooter';

const defaultProps = {
  disabled: false,
  onCancel: jest.fn(),
  onSubmit: jest.fn(),
};

const renderMappingFormFooter = (props = {}) => render(
  <MappingFormFooter
    {...defaultProps}
    {...props}
  />,
);

describe('MappingFieldEdit', () => {
  it('should render mapping form footer', () => {
    renderMappingFormFooter();

    expect(screen.getByText('stripes-acq-components.FormFooter.cancel')).toBeInTheDocument();
    expect(screen.getByText('stripes-acq-components.FormFooter.save')).toBeInTheDocument();
  });
});
