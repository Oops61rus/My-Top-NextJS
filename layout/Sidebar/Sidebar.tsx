import React from 'react';
import cn from 'classnames';
import { ISidebarProps } from './Sidebar.props';
import { Menu } from '../';
import { Logo } from '../../assets/icons';
import styles from './Sidebar.module.sass';

const Sidebar = ({ className, ...props }: ISidebarProps): JSX.Element => {
  return (
    <div className={cn(styles.sidebar, className)} {...props}>
      <Logo className={styles.logo} />
      <div>Поиск...</div>
      <Menu />
    </div>
  );
};

export default Sidebar;