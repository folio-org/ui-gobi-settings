import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { APIKey } from './APIKey';

const defaultProps = {};

// eslint-disable-next-line react/prop-types
const wrapper = ({ children }) => (
  <MemoryRouter>
    {children}
  </MemoryRouter>
);

const renderAPIKey = (props = {}) => render(
  <APIKey
    {...defaultProps}
    {...props}
  />,
  { wrapper },
);

describe('APIKey', () => {
  it('should render URL and FOLIO API key values', () => {
    renderAPIKey();

    expect(screen.getByText('ui-gobi-settings.url')).toBeInTheDocument();
    expect(screen.getByText('ui-gobi-settings.folioApiKey')).toBeInTheDocument();
  });
});
