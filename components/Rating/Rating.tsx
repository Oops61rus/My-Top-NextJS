import React, { ForwardedRef, forwardRef, KeyboardEvent, useEffect, useState } from 'react';
import cn from 'classnames';
import { RatingProps } from './Rating.props';
import { EmptyStarIcon } from '../../assets/icons';
import styles from './Rating.module.sass';

export const Rating = forwardRef(({
                                    isEditable = false,
                                    rating,
                                    setRating,
                                    error,
                                    className,
                                    ...props
                                  }: RatingProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
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
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => (
      <span
        className={cn(styles.star, className, {
          [styles.filledStar]: i < currentRating,
          [styles.editable]: isEditable,
        })}
        onMouseEnter={() => handleMouseEnter(i + 1)}
        onMouseLeave={() => handleMouseEnter(rating)}
        onClick={() => handleClick(i + 1)}
      >
          <EmptyStarIcon
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(i + 1, e)}
          />
        </span>
    ));
    setRatingArray(updatedArray);
  };

  return (
    <div
      {...props}
      ref={ref}
      className={cn(styles.ratingWrapper, {
        [styles.error]: error
      })}
    >
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
      {error && (
        <span className={styles.errorMessage}>{error.message}</span>
      )}
    </div>
  );
});