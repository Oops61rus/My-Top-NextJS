import React, { ForwardedRef, forwardRef, KeyboardEvent, useEffect, useRef, useState } from 'react';
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
                                    tabIndex,
                                    ...props
                                  }: RatingProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));
  const ratingArrayRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    constructRating(rating);
  }, [rating, tabIndex]);

  const handleMouseEnter = (i: number) => {
    if (!isEditable) return;
    constructRating(i);
  };

  const handleClick = (i: number) => {
    if (!isEditable || !setRating) return;
    setRating(i);
  };

  const handleKey = (key: KeyboardEvent<HTMLDivElement>) => {
    if (!isEditable || !setRating) return;
    if (key.code === 'ArrowRight' || key.code === 'ArrowUp') {
      key.preventDefault();
      if (!rating) {
        setRating(1);
      } else {
        setRating(rating < 5 ? rating + 1 : 5);
      }
      ratingArrayRef.current[rating]?.focus();
    }
    if (key.code === 'ArrowLeft' || key.code === 'ArrowDown') {
      key.preventDefault();
      if (!rating) {
        setRating(1);
      } else {
        setRating(rating > 1 ? rating - 1 : 1);
      }
      ratingArrayRef.current[rating - 2]?.focus();
    }
  };

  const computeFocus = (r: number, i: number): number => {
    if (!isEditable) return -1;
    if (!rating && i === 0) return tabIndex ?? 0;
    if (r === i + 1) return tabIndex ?? 0;
    return -1;
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
        tabIndex={computeFocus(rating, i)}
        onKeyDown={handleKey}
        ref={r => ratingArrayRef.current?.push(r)}
        role={isEditable ? 'slider' : ''}
        aria-valuenow={rating}
        aria-label={isEditable ? 'Укажите рейтинг курса' : ('рейтинг' + rating)}
        aria-valuemax={5}
        aria-valuemin={1}
        aria-invalid={!!error}
      >
          <EmptyStarIcon />
        </span>
    ));
    setRatingArray(updatedArray);
  };

  return (
    <div
      {...props}
      ref={ref}
      className={cn(styles.ratingWrapper, {
        [styles.error]: error,
      })}
    >
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
      {error && (
        <span role='alert' className={styles.errorMessage}>{error.message}</span>
      )}
    </div>
  );
});