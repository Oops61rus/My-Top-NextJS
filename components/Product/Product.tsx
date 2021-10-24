import React, { useState } from 'react';
import Image from 'next/image';
import cn from 'classnames';
import { IProductProps } from './Product.props';
import { Button, Card, Divider, Rating, Review, ReviewForm, Tag } from '../';
import { declensionsOfNums, priceRu } from '../../helpers/helpers';
import { API } from '../../helpers/api';
import styles from './Product.module.sass';

const Product = ({ product, className, ...props }: IProductProps): JSX.Element => {
  const [isReviewOpened, setIsPreviewOpened] = useState<boolean>(false);

  return (
    <>
      <Card className={styles.product}>
        <div className={styles.logo}>
          <Image
            src={API.domain.main + product.image}
            alt={product.title}
            width={70}
            height={70}
            quality={100}
          />
        </div>

        <div className={styles.title}>{product.title}</div>

        <div className={styles.price}>
          {priceRu(product.price)}
          {product.oldPrice &&
          <Tag
            className={styles.oldPrice}
            color='green'
          >
            {priceRu(product.price - product.oldPrice)}
          </Tag>
          }
        </div>

        <div className={styles.credit}>
          {priceRu(product.credit)}
          <span className={styles.month}>
        /мес
      </span>
        </div>

        <div className={styles.rating}>
          <Rating rating={product.reviewAvg ?? product.initialRating} />
        </div>

        <div className={styles.tags}>
          {product.categories.map(category => (
            <Tag
              key={category}
              className={styles.category}
              color='ghost'
            >
              {category}
            </Tag>
          ))}
        </div>

        <div className={styles.priceTitle}>цена</div>
        <div className={styles.creditTitle}>кредит</div>
        <div
          className={styles.rateTitle}
        >
          {product.reviewCount}
          &nbsp;
          {declensionsOfNums(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
        </div>

        <Divider className={styles.hr} />

        <div className={styles.description}>{product.description}</div>
        <div className={styles.feature}>
          {product.characteristics.map(characteristic => (
            <div
              className={styles.characteristics}
              key={characteristic.name}
            >
              <span className={styles.characteristic_name}>{characteristic.name}</span>
              <span className={styles.characteristic_dots}></span>
              <span className={styles.characteristic_value}>{characteristic.value}</span>
            </div>
          ))}
        </div>

        <div className={styles.adv_block}>
          {product.advantages && (
            <div className={styles.advantages}>
              <div className={styles.adv_title}>Преимущества</div>
              <div>{product.advantages}</div>
            </div>
          )}
          {product.disadvantages && (
            <div className={styles.disadvantages}>
              <div className={styles.adv_title}>Недостатки</div>
              <div>{product.disadvantages}</div>
            </div>
          )}
        </div>

        <Divider className={cn(styles.hr, styles.hr2)} />

        <div className={styles.actions}>
          <Button appearance='primary'>Узнать подробнее</Button>
          <Button
            className={styles.reviewButton}
            appearance='ghost'
            arrow={isReviewOpened ? 'down' : 'right'}
            onClick={() => setIsPreviewOpened(!isReviewOpened)}
          >
            Читать отзывы
          </Button>
        </div>
      </Card>
      <Card color='blue' className={cn(styles.reviews, {
        [styles.opened]: isReviewOpened,
        [styles.closed]: !isReviewOpened,
      })}>
        {product.reviews.map(review => (
          <div key={review._id}>
            <Review review={review} />
            <Divider/>
          </div>
        ))}
        <ReviewForm productId={product._id} />
      </Card>
    </>
  );
};


export default Product;