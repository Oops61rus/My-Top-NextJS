import React, { useReducer } from 'react';
import { ITopPageComponentProps } from './TopPageComponent.props';
import { Advantages, HhCard, Htag, Sort, Tag } from '../';
import { TopLevelCategory } from '../../interfaces';
import { SortEnum } from '../Sort/Sort.props';
import styles from './TopPageComponent.module.sass';
import { sortReducer } from '../../reducers/sort.reducer';

const TopPageComponent = ({ page, products, firstCategory }: ITopPageComponentProps): JSX.Element => {
  const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(sortReducer, { products, sort: SortEnum.Rating });

  const setSort = (sort: SortEnum): void => {
    dispatchSort({ type: sort });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag={'h1'}>{page.title}</Htag>
        {products && <Tag color={'grey'} size={'m'}>{products.length}</Tag>}
        <Sort
          sort={sort}
          setSort={setSort}
        />
      </div>
      <div>
        {sortedProducts && sortedProducts.map(product => <div key={product._id}>{product.title}</div>)}
      </div>
      <div className={styles.hhTitle}>
        <Htag tag={'h2'}>Вакансии - {page.category}</Htag>
        <Tag color={'red'} size={'m'}>hh.ru</Tag>
      </div>
      {firstCategory === TopLevelCategory.Courses && page.hh && <HhCard {...page.hh} />}
      {
        page.advantages &&
        page.advantages.length > 0 &&
        <>
          <Htag tag={'h2'}>Преимущества</Htag>
          <Advantages advantages={page.advantages} />
        </>
      }
      {
        page?.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{ __html: page.seoText }} />
      }
      <Htag tag={'h2'}>Получаемые навыки</Htag>
      {page.tags.map(tag => <Tag color='primary' key={tag}>{tag}</Tag>)}
    </div>
  );
};

export default TopPageComponent;