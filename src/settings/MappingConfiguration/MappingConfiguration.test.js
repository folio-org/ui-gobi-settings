import user from '@testing-library/user-event';
import { act, render, screen } from '@testing-library/react';
import { MemoryRouter, withRouter } from 'react-router-dom';

import { MappingConfiguration } from './MappingConfiguration';

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
    it('should render pane for configuration file when corresponding list item was clicked', async () => {
      renderMappingConfiguration();

      const listItems = screen.getAllByTestId('config-file-list-item');

      await act(async () => user.click(listItems[0]));

      expect(screen.getByTestId('gobi-config-file-pane')).toBeInTheDocument();
    });

    it('should close config file pane when \'Close\' icon button was clicked', async () => {
      renderMappingConfiguration();

      const listItems = screen.getAllByTestId('config-file-list-item');

      await act(async () => user.click(listItems[0]));
      await act(async () => user.click(screen.getByLabelText('stripes-components.closeItem')));

      expect(screen.queryByTestId('gobi-config-file-pane')).not.toBeInTheDocument();
    });
  });
});
