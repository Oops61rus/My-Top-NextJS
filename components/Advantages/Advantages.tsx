import React from 'react';
import { IAdvantagesProps } from './Advantages.props';
import styles from './Advantages.module.sass'
import { CheckmarkIcon } from '../../assets/icons';

const Advantages = ({advantages}: IAdvantagesProps): JSX.Element => {
  return (
    <>
      {
        advantages.map(advantage => (
          <div
            key={advantage._id}
            className={styles.advantage}
          >
            <CheckmarkIcon/>
            <div className={styles.title}>{advantage.title}</div>
            <hr className={styles.vLine}/>
            <div>{advantage.description}</div>
          </div>
        ))
      }
    </>
  );
};

export default Advantages;