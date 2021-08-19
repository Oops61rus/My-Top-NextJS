import React from 'react';
import { IHeaderProps } from './Header.props';

const Header = ({ ...props }: IHeaderProps): JSX.Element => (
  <header {...props}>
    Header
  </header>
);

export default Header;