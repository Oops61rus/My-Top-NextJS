import React from 'react';
import { Button, Input, Rating, TextArea } from '../index';
import { IReviewFormProps } from './ReviewForm.props';
import cn from 'classnames';
import styles from './ReviewForm.module.sass';
import { CloseIcon } from '../../assets/icons';

const ReviewForm = ({ productId, className, ...props }: IReviewFormProps): JSX.Element => {
  return (
    <>
      <div className={cn(styles.reviewForm, className)} {...props}>
        <Input placeholder='Имя' />
        <Input placeholder='Заголовок отзыва' className={styles.title} />
        <div className={styles.rating}>
          <span>Оценка:</span>
          <Rating rating={0} />
        </div>
        <TextArea placeholder='Текст отзыва' className={styles.description} />
        <div className={styles.submit}>
          <Button appearance='primary'>Отправить</Button>
          <span className={styles.info}>
          * Перед публикацией отзыв пройдет предварительную модерацию и проверку
        </span>
        </div>
      </div>
      <div className={styles.success}>
        <div className={styles.successTitle}>Ваш отзыв отправлен</div>
        <div>
          Спасибо, ваш отзыв будет опубликован после проверки.
        </div>
        <CloseIcon className={styles.close} />
      </div>
    </>
  );
};

export default ReviewForm;