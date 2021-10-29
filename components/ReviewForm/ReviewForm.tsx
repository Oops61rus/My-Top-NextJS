import React, { useState } from 'react';
import axios from 'axios';
import cn from 'classnames';
import { Controller, useForm } from 'react-hook-form';
import { API } from '../../helpers/api';
import { Button, Input, Rating, TextArea } from '../index';
import { ReviewFormProps } from './ReviewForm.props';
import { CloseIcon } from '../../assets/icons';
import { IReviewFormInterface, IReviewSentResponse } from '../../interfaces/reviewForm.interface';
import styles from './ReviewForm.module.sass';

const ReviewForm = ({ productId, className, ...props }: ReviewFormProps): JSX.Element => {
  const { register, control, handleSubmit, formState: { errors }, reset } = useForm<IReviewFormInterface>();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<string | null>(null);

  const onSubmit = async (formData: IReviewFormInterface) => {
    try {
      const { data } = await axios.post<IReviewSentResponse>(API.review.createDemo, { ...formData, productId });
      if (data.message) {
        setIsSuccess(true);
        reset();
      } else {
        setIsError('Что-то пошло не так...');
      }
    } catch (e) {
      setIsError(e.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(styles.reviewForm, className)} {...props}>
        <Input
          {...register(
            'name',
            { required: { value: true, message: 'Заполните имя' } },
          )}
          placeholder='Имя'
          error={errors.name}
        />
        <Input
          {...register(
            'title',
            { required: { value: true, message: 'Заполните заголовок' } },
          )}
          placeholder='Заголовок отзыва'
          className={styles.title}
          error={errors.title}
        />
        <div className={styles.rating}>
          <span>Оценка:</span>
          <Controller
            render={({ field }) => (
              <Rating
                isEditable
                rating={field.value}
                setRating={field.onChange}
                ref={field.ref}
                error={errors.rating}
              />
            )}
            rules={{ required: { value: true, message: 'Укажите рейтинг' } }}
            name='rating'
            control={control}
          />

        </div>
        <TextArea
          error={errors.description}
          {...register(
            'description',
            { required: { value: true, message: 'Заполните описание' } },
          )}
          placeholder='Текст отзыва'
          className={styles.description}
        />
        <div className={styles.submit}>
          <Button appearance='primary'>Отправить</Button>
          <span className={styles.info}>
          * Перед публикацией отзыв пройдет предварительную модерацию и проверку
        </span>
        </div>
      </div>
      {isSuccess && (
        <div className={cn(styles.panel, styles.success)}>
          <div className={styles.successTitle}>Ваш отзыв отправлен</div>
          <div>
            Спасибо, ваш отзыв будет опубликован после проверки.
          </div>
          <CloseIcon className={styles.close} onClick={() => setIsSuccess(false)} />
        </div>
      )}
      {isError && (
        <div className={cn(styles.panel, styles.error)}>
          <div className={styles.errorTitle}>Ошибка!</div>
          Что-то пошло не так... попробуйте обновить страницу
          <CloseIcon className={styles.close} onClick={() => setIsError(null)} />
        </div>
      )}
    </form>
  );
};

export default ReviewForm;