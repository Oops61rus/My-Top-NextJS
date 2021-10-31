import React, { ForwardedRef, forwardRef, useRef, useState } from 'react';
import Image from 'next/image';
import cn from 'classnames';
import { motion } from 'framer-motion';
import { ProductProps } from './Product.props';
import { Button, Card, Divider, Rating, Review, ReviewForm, Tag } from '../';
import { declensionsOfNums, priceRu } from '../../helpers/helpers';
import { API } from '../../helpers/api';
import styles from './Product.module.sass';

const Product = motion(forwardRef(({
                                     product,
                                     className,
                                     ...props
                                   }: ProductProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
  const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
  const reviewRef = useRef<HTMLDivElement>(null);

  const variants = {
    visible: { opacity: 1, height: 'auto' },
    hidden: { opacity: 0, height: 0 },
  };

  const scrollToReview = () => {
    setIsReviewOpened(true);
    reviewRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    reviewRef.current?.focus();
  };

  return (
    <div className={className} ref={ref} {...props}>
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
        <div className={styles.rateTitle}>
          <a href='#reviews' onClick={scrollToReview}>
            {product.reviewCount}
            &nbsp;
            {declensionsOfNums(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
          </a>
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
            onClick={() => setIsReviewOpened(!isReviewOpened)}
          >
            Читать отзывы
          </Button>
        </div>
      </Card>
      <motion.div
        animate={isReviewOpened ? 'visible' : 'hidden'}
        variants={variants}
        initial='hidden'
      >
        <Card
          color='blue'
          className={styles.reviews}
          ref={reviewRef}
          tabIndex={isReviewOpened ? 0 : -1}
        >
          {product.reviews.map(review => (
            <div key={review._id}>
              <Review review={review} />
              <Divider />
            </div>
          ))}
          <ReviewForm productId={product._id} isOpened={isReviewOpened} />
        </Card>
      </motion.div>
    </div>
  );
}));


export default Product;