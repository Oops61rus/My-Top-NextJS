import React from 'react';
import cn from 'classnames';
import { DividerProps } from './Divider.props';
import styles from './Divider.module.sass';

const Divider = ({ className, ...props }: DividerProps): JSX.Element => (
  <hr className={cn(styles.hr, className)} {...props} />
);


export default Divider;