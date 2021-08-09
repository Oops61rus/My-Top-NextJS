import React from 'react';
import cn from 'classnames';
import { IButtonProps } from './Button.props';
import styles from './Button.module.sass';

const Button = ({ children, appearance }: IButtonProps): JSX.Element => {
  return (
    <button className={cn(styles.button, {
      [styles.primary]: appearance === 'primary',
      [styles.ghost]: appearance === 'ghost',
    })}>
      {children}
    </button>
  );
};

export default Button;