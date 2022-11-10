import user from '@testing-library/user-event';
import { act, render, screen } from '@testing-library/react';

import { MappingFormFooter } from './MappingFormFooter';

const defaultProps = {
  clearAllDisabled: false,
  disabled: false,
  onCancel: jest.fn(),
  onClearMappings: jest.fn(),
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

  it('should call \'onClearMappings\' when \'Clear all field mappings\' button was clicked', async () => {
    renderMappingFormFooter();

    await act(async () => user.click(screen.getByText('ui-gobi-settings.mappingConfig.edit.footer.clearAll')));

    expect(defaultProps.onClearMappings).toHaveBeenCalled();
  });
});
