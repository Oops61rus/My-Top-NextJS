import React from 'react';
import { IHeaderProps } from './Header.props';

const Header = ({ ...props }: IHeaderProps): JSX.Element => {
  return (
    <header {...props}>
      Header
    </header>
  );
};

export default Header;