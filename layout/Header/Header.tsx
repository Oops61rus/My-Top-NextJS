import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import cn from 'classnames';
import { motion, useReducedMotion } from 'framer-motion';
import { HeaderProps } from './Header.props';
import { Logo } from '../../assets/icons';
import { ButtonIcon } from '../../components';
import { Sidebar } from '../index';
import styles from './Header.module.sass';

const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const shouldReduceMotion = useReducedMotion();
  const router = useRouter();

  useEffect(() => {
    setIsOpened(false);
  }, [router]);

  const variants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        stiffness: 20,
      },
    },
    closed: {
      opacity: shouldReduceMotion ? 1 : 0,
      x: '100%',
    },
  };

  return (
    <header className={cn(className, styles.header)} {...props}>
      <Logo />
      <ButtonIcon
        onClick={() => setIsOpened(true)}
        icon='MenuIcon'
        appearance='white'
      />
      <motion.div
        variants={variants}
        initial='closed'
        animate={isOpened ? 'opened' : 'closed'}
        className={styles.mobileMenu}
      >
        <Sidebar />
        <ButtonIcon
          className={styles.menuClose}
          icon='CrossIcon'
          appearance='white'
          onClick={() => setIsOpened(false)}
        />
      </motion.div>
    </header>
  );
};

export default Header;