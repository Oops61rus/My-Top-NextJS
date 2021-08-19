import React from 'react';
import cn from 'classnames';
import { IDividerProps } from './Divider.props';
import styles from './Divider.module.sass';

const Divider = ({ className, ...props }: IDividerProps): JSX.Element => (
  <hr className={cn(styles.hr, className)} {...props} />
);


export default Divider;