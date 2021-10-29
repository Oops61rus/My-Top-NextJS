import React from 'react';
import cn from 'classnames';
import { SidebarProps } from './Sidebar.props';
import { Search } from '../../components';
import { Menu } from '../';
import { Logo } from '../../assets/icons';
import styles from './Sidebar.module.sass';

const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => (
  <div className={cn(styles.sidebar, className)} {...props}>
    <Logo className={styles.logo} />
    <Search />
    <Menu />
  </div>
);


export default Sidebar;