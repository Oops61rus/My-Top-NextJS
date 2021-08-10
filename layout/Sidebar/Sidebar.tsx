import React from 'react';
import { ISidebarProps } from './Sidebar.props';
import { Menu } from '../';

const Sidebar = ({ ...props }: ISidebarProps): JSX.Element => {
  return (
    <div {...props}>
      <Menu/>
    </div>
  );
};

export default Sidebar;