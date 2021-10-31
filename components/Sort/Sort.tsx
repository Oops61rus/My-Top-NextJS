import React from 'react';
import cn from 'classnames';
import { SortEnum, SortProps } from './Sort.props';
import { SortIcon } from '../../assets/icons';
import styles from './Sort.module.sass';

const Sort = ({ sort, setSort, className, ...props }: SortProps): JSX.Element => (
  <div className={cn(styles.sort, className)} {...props}>
    <div className={styles.sort__name} id='sort'>Сортировка</div>
    <button
      id='rating'
      onClick={() => setSort(SortEnum.Rating)}
      className={cn({
        [styles.active]: sort === SortEnum.Rating,
      })}
      aria-selected={sort === SortEnum.Rating}
      aria-labelledby='sort rating'
    >
      <SortIcon className={styles.sort__icon} /> По рейтингу
    </button>
    <button
      id='price'
      onClick={() => setSort(SortEnum.Price)}
      className={cn({
        [styles.active]: sort === SortEnum.Price,
      })}
      aria-selected={sort === SortEnum.Price}
      aria-labelledby='sort price'
    >
      <SortIcon className={styles.sort__icon} /> По цене
    </button>
  </div>
);


export default Sort;