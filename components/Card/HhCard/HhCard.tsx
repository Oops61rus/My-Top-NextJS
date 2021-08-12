import React from 'react';
import { Card } from '../';
import { HhStar } from '../../../assets/icons';
import { IHHCardProps } from './HhCard.props';
import styles from './HhCard.module.sass';
import { priceRu } from '../../../helpers/helpers';

const HhCard = ({ count, juniorSalary, middleSalary, seniorSalary }: IHHCardProps): JSX.Element => {
  return (
    <div className={styles.hh}>
      <Card className={styles.count}>
        <div className={styles.count__title}>Всего вакансий</div>
        <div className={styles.count__value}>{count}</div>
      </Card>
      <Card className={styles.salary}>
        <div>
          <div className={styles.salary__title}>Начальный</div>
          <div className={styles.salary__value}>{priceRu(juniorSalary)}</div>
          <div className={styles.salary__rate}>
            <HhStar className={styles.filled} />
            <HhStar />
            <HhStar />
          </div>
        </div>
        <div>
          <div className={styles.salary__title}>Средний</div>
          <div className={styles.salary__value}>{priceRu(middleSalary)}</div>
          <div className={styles.salary__rate}>
            <HhStar className={styles.filled} />
            <HhStar className={styles.filled} />
            <HhStar />
          </div>
        </div>
        <div>
          <div className={styles.salary__title}>Профессионал</div>
          <div className={styles.salary__value}>{priceRu(seniorSalary)}</div>
          <div className={styles.salary__rate}>
            <HhStar className={styles.filled} />
            <HhStar className={styles.filled} />
            <HhStar className={styles.filled} />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default HhCard;