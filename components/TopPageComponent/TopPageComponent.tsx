import React from 'react';
import { ITopPageComponentProps } from './TopPageComponent.props';
import { HhCard, Htag, Tag } from '../index';
import styles from './TopPageComponent.module.sass';
import { TopLevelCategory } from '../../interfaces/page.interface';

const TopPageComponent = ({ page, products, firstCategory }: ITopPageComponentProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag={'h1'}>{page.title}</Htag>
        {products && <Tag color={'grey'} size={'m'}>{products.length}</Tag>}
        <span>Сортировка</span>
      </div>
      <div>
        {products && products.map(product => <div key={product._id}>{product.title}</div>)}
      </div>
      <div className={styles.hhTitle}>
        <Htag tag={'h2'}>Вакансии - {page.category}</Htag>
        <Tag color={'red'} size={'m'}>hh.ru</Tag>
      </div>
      {firstCategory === TopLevelCategory.Courses && <HhCard {...page.hh} />}
    </div>
  );
};

export default TopPageComponent;