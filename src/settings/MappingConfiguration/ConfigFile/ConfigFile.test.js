import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { ConfigFile } from './ConfigFile';

const defaultProps = {
  configFiles: [{ id: 'id', name: 'configFileName' }],
  match: {
    params: { id: 'id' },
  },
  onClose: jest.fn(),
};

// eslint-disable-next-line react/prop-types
const wrapper = ({ children }) => (
  <MemoryRouter>
    {children}
  </MemoryRouter>
);

const renderConfigFile = (props = {}) => render(
  <ConfigFile
    {...defaultProps}
    {...props}
  />,
  { wrapper },
);

describe('ConfigFile', () => {
  it('should render pane with config file name as title', () => {
    renderConfigFile();

    expect(screen.getByText(defaultProps.configFiles[0].name)).toBeInTheDocument();
  });
});
