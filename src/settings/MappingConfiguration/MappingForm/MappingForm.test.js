import { act, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import { HasCommand } from '@folio/stripes/components';
import {
  useAccordionToggle,
} from '@folio/stripes-acq-components';
import MappingForm from './MappingForm';

jest.mock('@folio/stripes/components', () => ({
  ...jest.requireActual('@folio/stripes/components'),
  HasCommand: jest.fn(({ children }) => <>{children}</>),
}));
jest.mock('@folio/stripes-acq-components/lib/hooks/useAccordionToggle', () => ({
  useAccordionToggle: jest.fn().mockReturnValue([jest.fn(), {}, jest.fn()]),
}));

const defaultProps = {
  form: { change: jest.fn },
  initialValues: {},
  handleSubmit: jest.fn(),
  onSubmit: jest.fn(),
  onCancel: jest.fn(),
  pristine: true,
  submitting: false,
  translators: [],
  values: {},
};

const queryClient = new QueryClient();

const wrapper = ({ children }) => (
  <MemoryRouter>
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  </MemoryRouter>
);

const renderMappingForm = (props = {}) => render(
  <MappingForm
    {...defaultProps}
    {...props}
  />,
  { wrapper },
);

describe('MappingForm', () => {
  beforeEach(() => {
    defaultProps.handleSubmit.mockClear();
    defaultProps.onCancel.mockClear();
  });

  it('should render pane with order mapping edit form', () => {
    renderMappingForm();

    expect(screen.getByTestId('gobi-mapping-edit-pane')).toBeInTheDocument();
  });

  describe('Actions', () => {
    beforeEach(() => {
      HasCommand.mockClear();
      defaultProps.handleSubmit.mockClear();
      defaultProps.onCancel.mockClear();
      defaultProps.onSubmit.mockClear();
    });

    it('should close mapping view pane when close button was clicked', () => {
      renderMappingForm();

      HasCommand.mock.calls[0][0].commands.find(c => c.name === 'cancel').handler();

      expect(defaultProps.onCancel).toHaveBeenCalled();
    });

    it('should expand all accordions on \'expandAllSections\' shortcut', async () => {
      const expandMock = jest.fn();

      useAccordionToggle.mockClear().mockReturnValue([expandMock, {}, jest.fn()]);

      renderMappingForm();

      HasCommand.mock.calls[0][0].commands.find(c => c.name === 'expandAllSections').handler();

      expect(expandMock).toHaveBeenCalled();
    });

    it('should collapse all accordions on \'collapseAllSections\' shortcut', async () => {
      const collapseMock = jest.fn();

      useAccordionToggle.mockClear().mockReturnValue([collapseMock, {}, jest.fn()]);

      renderMappingForm();

      HasCommand.mock.calls[0][0].commands.find(c => c.name === 'collapseAllSections').handler();

      expect(collapseMock).toHaveBeenCalled();
    });
  });
});
