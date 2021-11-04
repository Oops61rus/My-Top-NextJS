import React from 'react';
import { ErrorProps } from './Error.props';
import { Button } from '../index';
import { ArrowIcon } from '../../assets/icons';
import styles from './Error.module.sass';
import { useRouter } from 'next/router';

const Error = ({ statusCode, textError, descriptionError }: ErrorProps): JSX.Element => {
  const router = useRouter();

  return (
    <div className={styles.error}>
      <div className={styles.error__code}>{statusCode}</div>

      <div className={styles.error__text}>{textError}</div>
      <div className={styles.error__description}>{descriptionError}</div>

      <div className={styles.error__buttons}>
        <Button className={styles.error__toMain} appearance='primary' onClick={() => router.push('/')}>
          <ArrowIcon /> Вернуться на главную
        </Button>

        <Button appearance='ghost' onClick={() => router.push('/courses')}>
          <ArrowIcon /> К курсам
        </Button>
      </div>
    </div>
  );
};


export default Error;