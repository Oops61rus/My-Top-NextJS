import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Button, Input, Rating, TextArea } from '../index';
import { IReviewFormProps } from './ReviewForm.props';
import cn from 'classnames';
import { CloseIcon } from '../../assets/icons';
import { IReviewFormInterface } from '../../interfaces/reviewForm.interface';
import styles from './ReviewForm.module.sass';

const ReviewForm = ({ productId, className, ...props }: IReviewFormProps): JSX.Element => {
  const { register, control, handleSubmit, formState: { errors } } = useForm<IReviewFormInterface>();

  const onSubmit = (data: IReviewFormInterface) => {

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
              />
            )}
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
      <div className={styles.success}>
        <div className={styles.successTitle}>Ваш отзыв отправлен</div>
        <div>
          Спасибо, ваш отзыв будет опубликован после проверки.
        </div>
        <CloseIcon className={styles.close} />
      </div>
    </form>
  );
};

export default ReviewForm;