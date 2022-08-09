import user from '@testing-library/user-event';
import { act, render, screen } from '@testing-library/react';
import { MemoryRouter, withRouter } from 'react-router-dom';

import { MappingConfiguration } from './MappingConfiguration';

jest.mock('@folio/stripes/components', () => ({
  ...jest.requireActual('@folio/stripes/components'),
  Layer: jest.fn(({ children }) => <>{children}</>),
}));
jest.mock('../hooks', () => ({
  ...jest.requireActual('../hooks'),
  useOrderMappingTypes: jest.fn(() => ({ orderMappingTypes: ['test'] })),
  useOrderMapping: jest.fn(() => ({ mapping: [] })),
}));

const defaultProps = {};

// eslint-disable-next-line react/prop-types
const wrapper = ({ children }) => (
  <MemoryRouter>
    {children}
  </MemoryRouter>
);

const WrappedMappingConfiguration = withRouter(MappingConfiguration);

const renderMappingConfiguration = (props = {}) => render(
  <WrappedMappingConfiguration
    {...defaultProps}
    {...props}
  />,
  { wrapper },
);

describe('MappingConfiguration', () => {
  it('should render pane for configuration files list', () => {
    renderMappingConfiguration();

    expect(screen.getByText('ui-gobi-settings.configFiles')).toBeInTheDocument();
  });

  describe('Actions', () => {
    it('should render pane for mapping when corresponding list item was clicked', async () => {
      renderMappingConfiguration();

      const listItems = screen.getAllByTestId('mapping-type-list-item');

      await act(async () => user.click(listItems[0]));

      expect(screen.getByTestId('gobi-mapping-pane')).toBeInTheDocument();
    });

    it('should close mapping pane when \'Close\' icon button was clicked', () => {
      renderMappingConfiguration();

      const listItems = screen.getAllByTestId('mapping-type-list-item');

      act(() => user.click(listItems[0]));
      act(() => user.click(screen.getByLabelText('stripes-components.closeItem')));

      expect(screen.queryByTestId('gobi-mapping-pane')).not.toBeInTheDocument();
    });
  });
});
