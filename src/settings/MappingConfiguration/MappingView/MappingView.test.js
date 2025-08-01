import {
  QueryClient,
  QueryClientProvider,
} from 'react-query';
import { MemoryRouter } from 'react-router-dom';

import {
  render,
  screen,
} from '@folio/jest-config-stripes/testing-library/react';
import userEvent from '@folio/jest-config-stripes/testing-library/user-event';

import { HasCommand } from '@folio/stripes/components';
import { useAccordionToggle } from '@folio/stripes-acq-components';

import { mappingConfig } from '../../../../test/jest/fixtures/mappingConfig';
import { useOrderMapping } from '../../hooks';
import { MappingView } from './MappingView';

jest.mock('@folio/stripes/components', () => ({
  ...jest.requireActual('@folio/stripes/components'),
  Layer: jest.fn(({ children }) => <>{children}</>),
  HasCommand: jest.fn(({ children }) => <>{children}</>),
}));
jest.mock('@folio/stripes-acq-components/lib/hooks/useAccordionToggle', () => ({
  useAccordionToggle: jest.fn().mockReturnValue([jest.fn(), {}, jest.fn()]),
}));
jest.mock('../../hooks', () => ({
  ...jest.requireActual('../../hooks'),
  useOrderMapping: jest.fn(),
  useOrderMappingTypeMutation: () => jest.fn().mockReturnValue({ restoreMappingConfig: jest.fn() }),
}));

const defaultProps = {
  history: {
    push: jest.fn(),
  },
  rootPath: '/',
  onClose: jest.fn(),
};

const queryClient = new QueryClient();

const wrapper = ({ children }) => (
  <MemoryRouter>
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  </MemoryRouter>
);

const renderConfigFile = (props = {}) => render(
  <MappingView
    {...defaultProps}
    {...props}
  />,
  { wrapper },
);

describe('MappingView', () => {
  beforeEach(() => {
    useOrderMapping.mockClear().mockReturnValue(mappingConfig);
    defaultProps.history.push.mockClear();
    defaultProps.onClose.mockClear();
  });

  it('should render pane with order mapping', () => {
    renderConfigFile();

    expect(screen.getByTestId('gobi-mapping-pane')).toBeInTheDocument();
  });

  describe('Actions', () => {
    beforeEach(() => {
      HasCommand.mockClear();
    });

    it('should close mapping view pane when close button was clicked', async () => {
      renderConfigFile();

      const closeBtn = screen.getByLabelText('stripes-components.closeItem');

      await userEvent.click(closeBtn);

      expect(defaultProps.onClose).toHaveBeenCalled();
    }, 10000);

    it('should navigate to edit mapping form when \'Edit\' button was clicked in action menu', async () => {
      renderConfigFile();

      const editBtn = screen.getByTestId('action-edit-mapping');

      await userEvent.click(editBtn);

      expect(defaultProps.history.push).toHaveBeenCalled();
    });

    it('should expand all accordions on \'expandAllSections\' shortcut', async () => {
      const expandMock = jest.fn();

      useAccordionToggle.mockClear().mockReturnValue([expandMock, {}, jest.fn()]);

      renderConfigFile();

      HasCommand.mock.calls[0][0].commands.find(c => c.name === 'expandAllSections').handler();

      expect(expandMock).toHaveBeenCalled();
    });

    it('should collapse all accordions on \'collapseAllSections\' shortcut', async () => {
      const collapseMock = jest.fn();

      useAccordionToggle.mockClear().mockReturnValue([collapseMock, {}, jest.fn()]);

      renderConfigFile();

      HasCommand.mock.calls[0][0].commands.find(c => c.name === 'collapseAllSections').handler();

      expect(collapseMock).toHaveBeenCalled();
    });

    it('should navigate to edit form on \'edit\' shortcut', async () => {
      renderConfigFile();

      HasCommand.mock.calls[0][0].commands.find(c => c.name === 'edit').handler();

      expect(defaultProps.history.push).toHaveBeenCalled();
    });
  });
});
