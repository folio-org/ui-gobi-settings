import { MemoryRouter } from 'react-router-dom';

import {
  render,
  screen,
} from '@folio/jest-config-stripes/testing-library/react';

import GobiIntegration from './GobiIntegration';

jest.mock('@folio/stripes/components', () => ({
  ...jest.requireActual('@folio/stripes/components'),
  CommandList: jest.fn(({ children }) => <>{children}</>),
}));
jest.mock('@folio/stripes/smart-components', () => ({
  ...jest.requireActual('@folio/stripes/smart-components'),
  Settings: jest.fn(() => 'GOBI Integration'),
}));

const defaultProps = {
  history: {
    push: jest.fn(),
  },
  match: {
    params: { id: 'id' },
  },
};

// eslint-disable-next-line react/prop-types
const wrapper = ({ children }) => (
  <MemoryRouter>
    {children}
  </MemoryRouter>
);

const renderGobiIntegration = (props = {}) => render(
  <GobiIntegration
    {...defaultProps}
    {...props}
  />,
  { wrapper },
);

describe('GobiIntegration', () => {
  it('should render integration details settings pane', () => {
    renderGobiIntegration();

    expect(screen.getByText('GOBI Integration')).toBeInTheDocument();
  });
});
