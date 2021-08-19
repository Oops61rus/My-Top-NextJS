import React from 'react';
import { IAdvantagesProps } from './Advantages.props';
import { CheckmarkIcon } from '../../assets/icons';
import styles from './Advantages.module.sass';

const Advantages = ({ advantages }: IAdvantagesProps): JSX.Element => (
  <>
    {
      advantages.map(advantage => (
        <div
          key={advantage._id}
          className={styles.advantage}
        >
          <CheckmarkIcon />
          <div className={styles.title}>{advantage.title}</div>
          <hr className={styles.vLine} />
          <div>{advantage.description}</div>
        </div>
      ))
    }
  </>
);


export default Advantages;