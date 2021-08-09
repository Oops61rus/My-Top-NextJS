  import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { IRatingProps } from './Rating.props';
import { EmptyStar } from '../Icons';
import styles from './Rating.module.sass';

const Rating = ({ isEditable = false, rating, className, ...props }: IRatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((rating: JSX.Element, i: number) => {
      return (
        <EmptyStar
          className={cn(styles.star, {
            [styles.filledStar]: i < currentRating,
          })}
        />
      );
    });
    setRatingArray(updatedArray);
  };

  return (
    <div {...props}>
      {ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
    </div>
  );
};

export default Rating;