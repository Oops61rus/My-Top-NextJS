import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { UpIcon } from '../../assets/icons';
import { useScrollY } from '../../hooks/useScrollY';
import styles from './Up.module.sass';

const Up = (): JSX.Element => {
  const controls = useAnimation();
  const y = useScrollY();

  useEffect(() => {
    controls.start({ opacity: y / document.body.scrollHeight });
  }, [y, controls]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.button
      className={styles.up}
      onClick={scrollToTop}
      animate={controls}
      initial={{ opacity: 0 }}
    >
      <UpIcon />
    </motion.button>
  );
};

export default Up;