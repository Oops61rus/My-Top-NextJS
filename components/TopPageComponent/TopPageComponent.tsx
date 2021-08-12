import React from 'react';
import { ITopPageComponentProps } from './TopPageComponent.props';
import { Advantages, HhCard, Htag, Paragraph, Tag } from '../';
import { TopLevelCategory } from '../../interfaces';
import styles from './TopPageComponent.module.sass';

const TopPageComponent = ({ page, products, firstCategory }: ITopPageComponentProps): JSX.Element => (
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
      page?.seoText && <Paragraph>{page.seoText}</Paragraph>
    }
    <Htag tag={'h2'}>Получаемые навыки</Htag>
    {page.tags.map(tag => <Tag color='primary' key={tag}>{tag}</Tag>)}
  </div>
);

export default TopPageComponent;