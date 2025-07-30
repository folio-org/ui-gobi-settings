import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import {
  MemoryRouter,
  withRouter,
} from 'react-router-dom';

import {
  act,
  render,
  screen,
} from '@folio/jest-config-stripes/testing-library/react';
import userEvent from '@folio/jest-config-stripes/testing-library/user-event';

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

const queryClient = new QueryClient();

const wrapper = ({ children }) => (
  <MemoryRouter>
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
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

      await act(async () => userEvent.click(listItems[0]));

      expect(screen.getByTestId('gobi-mapping-pane')).toBeInTheDocument();
    });

    it('should close mapping pane when \'Close\' icon button was clicked', async () => {
      renderMappingConfiguration();

      const listItems = screen.getAllByTestId('mapping-type-list-item');

      await act(async () => userEvent.click(listItems[0]));
      await act(async () => userEvent.click(screen.getByLabelText('stripes-components.closeItem')));

      expect(screen.queryByTestId('gobi-mapping-pane')).not.toBeInTheDocument();
    }, 10000);
  });
});
