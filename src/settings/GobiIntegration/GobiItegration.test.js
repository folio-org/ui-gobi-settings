import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import '@folio/stripes-acq-components/test/jest/__mock__';

import GobiIntegration from './GobiIntegration';

const locationMock = {
  hash: '',
  pathname: '',
  search: '',
};

const renderGobiIntegration = (path) => (render(
  <MemoryRouter
    initialEntries={[path]}
    initialIndex={0}
  >
    <GobiIntegration
      match={{
        path: '',
        params: {},
        url: '/',
      }}
      history={{
        action: 'PUSH',
        block: jest.fn(),
        createHref: jest.fn(),
        go: jest.fn(),
        listen: jest.fn(),
        push: jest.fn(),
        replace: jest.fn(),
        location: locationMock,
      }}
      location={locationMock}
    />
  </MemoryRouter>,
));

describe('GobiIntegration', () => {
  it('should be display GobiIntegration when path is /', () => {
    const { getByText } = renderGobiIntegration('/');

    expect(getByText('ui-gobi-settings.meta.title')).toBeDefined();
  });
});
