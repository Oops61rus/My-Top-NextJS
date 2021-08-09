import React from 'react';
import { IHeaderProps } from './Header.props';

const Header = ({ ...props }: IHeaderProps): JSX.Element => {
  return (
    <div {...props}>
      Header
    </div>
  );
};

export default Header;