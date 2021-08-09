import React, { KeyboardEvent, useEffect, useState } from 'react';
import cn from 'classnames';
import { IRatingProps } from './Rating.props';
import { EmptyStar } from '../Icons';
import styles from './Rating.module.sass';

const Rating = ({ isEditable = false, rating, setRating, className, ...props }: IRatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const handleMouseEnter = (i: number) => {
    if (!isEditable) return;
    constructRating(i);
  };

  const handleClick = (i: number) => {
    if (!isEditable || !setRating) return;
    setRating(i);
  };

  const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
    if (e.code !== 'Space' || !setRating) return;
    setRating(i);
  };

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <span
          className={cn(styles.star, {
            [styles.filledStar]: i < currentRating,
            [styles.editable]: isEditable,
          })}
          onMouseEnter={() => handleMouseEnter(i + 1)}
          onMouseLeave={() => handleMouseEnter(rating)}
          onClick={() => handleClick(i + 1)}
        >
          <EmptyStar
            tabIndex={isEditable ? 0 : -1}
            onKeydown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(i + 1, e)}
          />
        </span>
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