import React from 'react';
import cn from 'classnames';
import { ICardProps } from './Card.props';
import styles from './Card.module.sass';

const Card = ({ color = 'white', children, className, ...props }: ICardProps): JSX.Element => {
  return (
    <div
      className={cn(styles.card, className, {
        [styles.blue]: color === 'blue',
      })}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;