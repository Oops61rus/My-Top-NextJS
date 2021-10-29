import React from 'react';
import { HeaderProps } from './Header.props';

const Header = ({ ...props }: HeaderProps): JSX.Element => (
  <header {...props}>
    Header
  </header>
);

export default Header;