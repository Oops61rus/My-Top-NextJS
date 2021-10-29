import React from 'react';
import cn from 'classnames';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { ReviewProps } from './Review.props';
import { UserIcon } from '../../assets/icons';
import { Rating } from '../';
import styles from './Review.module.sass';

const Review = ({ review, className, ...props }: ReviewProps): JSX.Element => {
  const { name, title, description, rating, createdAt } = review;

  return (
    <div className={cn(styles.review, className)} {...props}>
      <UserIcon className={styles.user} />
      <div className={styles.title}>
        <span className={styles.name}>{name}:</span>
        <span>{title}</span>
      </div>
      <div className={styles.date}>
        {format(new Date(createdAt), 'dd MMMM yyyy', { locale: ru })}
      </div>
      <div className={styles.rating}>
        <Rating rating={rating} />
      </div>
      <div className={styles.description}>
        {description}
      </div>
    </div>
  );
};

export default Review;