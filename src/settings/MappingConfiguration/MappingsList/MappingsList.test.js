import {
  render,
  screen,
} from '@folio/jest-config-stripes/testing-library/react';
import userEvent from '@folio/jest-config-stripes/testing-library/user-event';

import { MappingsList } from './MappingsList';

jest.mock('../../hooks', () => ({
  ...jest.requireActual('../../hooks'),
  useOrderMappingTypes: jest.fn(() => ({ orderMappingTypes: ['test'] })),
}));

const defaultProps = {
  history: {
    push: jest.fn(),
  },
  match: {
    path: 'path',
  },
};

const renderMappingsList = (props = {}) => render(
  <MappingsList
    {...defaultProps}
    {...props}
  />,
);

describe('MappingsList', () => {
  beforeEach(() => {
    defaultProps.history.push.mockClear();
  });

  it('should render mapping types', () => {
    renderMappingsList();

    const navItems = screen.getAllByTestId('mapping-type-list-item');

    expect(navItems).toBeDefined();
  });

  it('should navigate to mapping view when mapping type button was clicked', async () => {
    renderMappingsList();

    const navItems = screen.getAllByTestId('mapping-type-list-item');

    await userEvent.click(navItems[0]);

    expect(defaultProps.history.push).toHaveBeenCalled();
  });
});
