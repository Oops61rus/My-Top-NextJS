import React from 'react';
import { ITopPageComponentProps } from './TopPageComponent.props';

const TopPageComponent = ({ page, products, firstCategory }: ITopPageComponentProps): JSX.Element => {
  return (
    <div>
      {products?.length}
    </div>
  );
};

export default TopPageComponent;