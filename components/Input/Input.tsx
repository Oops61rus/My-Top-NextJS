import React, { ForwardedRef, forwardRef } from 'react';
import cn from 'classnames';
import { IInputProps } from './Input.props';
import styles from './Input.module.sass';

export const Input = forwardRef(({
                                   className,
                                   error,
                                   ...props
                                 }: IInputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => (

  <div className={cn(styles.inputWrapper, className)}>
    <input
      className={cn(styles.input, {
        [styles.error]: error,
      })}
      {...props}
      ref={ref}
    />
    {error && (
      <span className={styles.errorMessage}>{error.message}</span>
    )}
  </div>
));
