import React from 'react';
import { ISidebarProps } from './Sidebar.props';

const Sidebar = ({ ...props }: ISidebarProps): JSX.Element => {
  return (
    <div {...props}>
      Sidebar
    </div>
  );
};

export default Sidebar;