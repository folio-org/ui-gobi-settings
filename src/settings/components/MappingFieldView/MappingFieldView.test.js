import { render, screen } from '@testing-library/react';

import { MappingFieldView } from './MappingFieldView';

const dataSource = {
  dataSourceFieldName: 'dataSourceFieldName',
  from: '//LocalData',
  default: 'default',
  translation: 'translation',
  translateDefault: 'translateDefault',
};

const defaultProps = {
  dataSource,
  name: 'name',
};

const renderMappingFieldView = (props = {}) => render(
  <MappingFieldView
    {...defaultProps}
    {...props}
  />,
);

describe('MappingFieldView', () => {
  it('should render mapping field', () => {
    renderMappingFieldView();

    expect(screen.getByText(`ui-gobi-settings.order.mappings.field.${defaultProps.name}`)).toBeInTheDocument();
    expect(screen.getByText('ui-gobi-settings.order.mappings.field.dataSource.fromFieldName')).toBeInTheDocument();
    expect(screen.getByText('ui-gobi-settings.order.mappings.field.dataSource.fromFieldPath')).toBeInTheDocument();
    expect(screen.getByText('ui-gobi-settings.order.mappings.field.dataSource.defaultValue')).toBeInTheDocument();
    expect(screen.getByText('ui-gobi-settings.order.mappings.field.dataSource.translator')).toBeInTheDocument();
    expect(screen.getByText('ui-gobi-settings.order.mappings.field.dataSource.translateDefault')).toBeInTheDocument();
  });
});
