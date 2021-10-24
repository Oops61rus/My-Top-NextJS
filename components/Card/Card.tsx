import React, { ForwardedRef, forwardRef } from 'react';
import cn from 'classnames';
import { ICardProps } from './Card.props';
import styles from './Card.module.sass';

export const Card = forwardRef(({
                                  color = 'white',
                                  children,
                                  className,
                                  ...props
                                }: ICardProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => (
  <div
    className={cn(styles.card, className, {
      [styles.blue]: color === 'blue',
    })}
    ref={ref}
    {...props}
  >
    {children}
  </div>
));