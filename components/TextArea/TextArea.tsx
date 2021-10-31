import React, { ForwardedRef, forwardRef } from 'react';
import cn from 'classnames';
import { TextAreaProps } from './TextArea.props';
import styles from './TextArea.module.sass';

export const TextArea = forwardRef(({
                                      className,
                                      error,
                                      ...props
                                    }: TextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => (

  <div className={cn(styles.textAreaWrapper, className)}>
    <textarea
      className={cn(styles.textarea, {
        [styles.error]: error,
      })}
      {...props}
      ref={ref}
    />
    {error && (
      <span role='alert' className={styles.errorMessage}>{error.message}</span>
    )}
  </div>
));