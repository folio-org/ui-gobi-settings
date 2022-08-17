import { render, screen } from '@testing-library/react';

import { MappingFieldCard } from './MappingFieldCard';

const defaultProps = {
  children: 'fields',
  id: 'id',
  name: 'name',
};

const renderMappingFieldCard = (props = {}) => render(
  <MappingFieldCard
    {...defaultProps}
    {...props}
  />,
);

describe('MappingFieldCard', () => {
  it('should render card with heading and content', () => {
    renderMappingFieldCard();

    expect(screen.getByText(`ui-gobi-settings.order.mappings.field.${defaultProps.name}`)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.children)).toBeInTheDocument();
  });
});
