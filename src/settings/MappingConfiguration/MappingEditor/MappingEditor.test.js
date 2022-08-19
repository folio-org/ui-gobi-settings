import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import { mappingConfig, translators } from '../../../../test/jest/fixtures';
import {
  useOrderMapping,
  useOrderMappingTypeMutation,
  useTranslators,
} from '../../hooks';
import { MappingForm } from '../MappingForm';
import { MappingEditor } from './MappingEditor';

jest.mock('@folio/stripes/components', () => ({
  ...jest.requireActual('@folio/stripes/components'),
  Layer: jest.fn(({ children }) => <>{children}</>),
}));
jest.mock('../../hooks', () => ({
  ...jest.requireActual('../../hooks'),
  useOrderMapping: jest.fn(),
  useOrderMappingTypeMutation: jest.fn(),
  useTranslators: jest.fn(),
}));
jest.mock('../MappingForm', () => ({
  MappingForm: jest.fn(() => 'MappingForm'),
}));

const defaultProps = {
  history: {
    push: jest.fn(),
  },
  rootPath: '/',
};

const queryClient = new QueryClient();

const wrapper = ({ children }) => (
  <MemoryRouter>
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  </MemoryRouter>
);

const renderMappingEditor = (props = {}) => render(
  <MappingEditor
    {...defaultProps}
    {...props}
  />,
  { wrapper },
);

const changeMappingConfig = jest.fn(() => Promise.resolve());

describe('MappingEditor', () => {
  beforeEach(() => {
    useOrderMapping.mockClear().mockReturnValue({ mappings: mappingConfig, isLoading: false });
    useOrderMappingTypeMutation.mockClear().mockReturnValue({ changeMappingConfig });
    useTranslators.mockClear().mockReturnValue({ translators: translators.translators, isLoading: false });
    defaultProps.history.push.mockClear();
  });

  it('should render loading pane when resources are loading', () => {
    useOrderMapping.mockClear().mockReturnValue({ mappings: mappingConfig, isLoading: true });

    renderMappingEditor();

    expect(screen.queryByText('MappingForm')).not.toBeInTheDocument();
  });

  it('should render pane with order mapping', () => {
    renderMappingEditor();

    expect(screen.getByText('MappingForm')).toBeInTheDocument();
  });

  it('should close edit pane on cancel', () => {
    renderMappingEditor();

    MappingForm.mock.calls[0][0].onCancel();

    expect(defaultProps.history.push).toHaveBeenCalled();
  });

  it('should call \'changeMappingConfig\' when form was updated', () => {
    renderMappingEditor();

    MappingForm.mock.calls[0][0].onSubmit({});

    expect(changeMappingConfig).toHaveBeenCalled();
  });

  it('should catch \'changeMappingConfig\' rejects', () => {
    changeMappingConfig.mockRejectedValue({});

    renderMappingEditor();

    MappingForm.mock.calls[0][0].onSubmit({});

    expect(changeMappingConfig).rejects.toEqual({});
  });
});
