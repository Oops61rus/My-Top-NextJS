import React, { useEffect, useReducer } from 'react';
import { useReducedMotion } from 'framer-motion';
import { sortReducer } from '../../reducers/sort.reducer';
import { Advantages, HhCard, Htag, Product, Sort, Tag } from '../';
import { TopPageComponentProps } from './TopPageComponent.props';
import { TopLevelCategory } from '../../interfaces';
import { SortEnum } from '../Sort/Sort.props';
import styles from './TopPageComponent.module.sass';

const TopPageComponent = ({ page, products, firstCategory }: TopPageComponentProps): JSX.Element => {
  const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(sortReducer, {
    products,
    sort: SortEnum.Rating,
  });
  const shouldReduceMotion = useReducedMotion();

  const setSort = (sort: SortEnum): void => {
    dispatchSort({ type: sort });
  };

  useEffect(() => {
    dispatchSort({ type: 'reset', initialState: products });
  }, [products]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag='h1'>{page?.title}</Htag>
        {products && <Tag color='grey' size='m' aria-label={products.length + 'элементов'}>{products.length}</Tag>}
        <Sort
          sort={sort}
          setSort={setSort}
        />
      </div>
      <div role='list'>
        {sortedProducts &&
        sortedProducts.map(product => (
          <Product
            role='listitem'
            key={product._id}
            layout={!shouldReduceMotion}
            product={product}
          />
        ))}
      </div>
      <div className={styles.hhTitle}>
        <Htag tag='h2'>Вакансии - {page.category}</Htag>
        <Tag color='red' size='m'>hh.ru</Tag>
      </div>
      {firstCategory === TopLevelCategory.Courses && page.hh && <HhCard {...page.hh} />}
      {page.advantages &&
      page.advantages.length > 0 && (
        <>
          <Htag tag='h2'>Преимущества</Htag>
          <Advantages advantages={page.advantages} />
        </>
      )}
      {
        page?.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{ __html: page.seoText }} />
      }
      <Htag tag='h2'>Получаемые навыки</Htag>
      {page.tags.map(tag => <Tag color='primary' className={styles.getSkills} key={tag}>{tag}</Tag>)}
    </div>
  );
};

export default TopPageComponent;