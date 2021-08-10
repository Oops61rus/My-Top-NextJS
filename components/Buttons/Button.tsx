import React from 'react';
import cn from 'classnames';
import { IButtonProps } from './Button.props';
import { ArrowIcon } from '../../assets/icons';
import styles from './Button.module.sass';

const Button = ({ children, arrow = 'none', appearance, className, ...props }: IButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance === 'primary',
        [styles.ghost]: appearance === 'ghost',
      })}
      {...props}
    >
      {children}
      {arrow !== 'none' && <ArrowIcon className={cn(styles.arrow, {
        [styles.down]: arrow === 'down',
        [styles.right]: arrow === 'right',
      })} />}
    </button>
  );
};

export default Button;