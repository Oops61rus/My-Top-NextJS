import React from 'react';
import cn from 'classnames';
import { SortProps, SortEnum } from './Sort.props';
import { SortIcon } from '../../assets/icons';
import styles from './Sort.module.sass';

const Sort = ({ sort, setSort, className, ...props }: SortProps): JSX.Element => (
  <div className={cn(styles.sort, className)} {...props}>
      <span
        onClick={() => setSort(SortEnum.Rating)}
        className={cn({
          [styles.active]: sort === SortEnum.Rating,
        })}
      >
        <SortIcon className={styles.sort__icon} /> По рейтингу
      </span>
    <span
      onClick={() => setSort(SortEnum.Price)}
      className={cn({
        [styles.active]: sort === SortEnum.Price,
      })}
    >
        <SortIcon className={styles.sort__icon} /> По цене
      </span>
  </div>
);


export default Sort;