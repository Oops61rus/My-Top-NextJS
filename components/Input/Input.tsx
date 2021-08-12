import React from 'react';
import cn from 'classnames';
import { IInputProps } from './Input.props';
import styles from './Input.module.sass';

const Input = ({ className, ...props }: IInputProps): JSX.Element => (
  <input
    className={cn(className, styles.input)}
    {...props}
  />
);


export default Input;