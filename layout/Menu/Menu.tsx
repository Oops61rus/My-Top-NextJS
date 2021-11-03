import React, { KeyboardEvent, useContext, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';
import { motion, useReducedMotion } from 'framer-motion';
import { AppContext } from '../../context/app.context';
import { firstLevelMenu } from '../../helpers/helpers';
import { IFirstLevelMenuItem, IPageItem } from '../../interfaces/menu.interface';
import styles from './Menu.module.sass';

const Menu = (): JSX.Element => {
  const { menu, firstCategory, setMenu } = useContext(AppContext);
  const [announce, setAnnounce] = useState<'closed' | 'opened' | undefined>(undefined);
  const shouldReduceMotion = useReducedMotion();
  const router = useRouter();

  const variants = {
    visible: {
      marginBottom: 20,
      transition: shouldReduceMotion
        ? {}
        : {
          when: 'beforeChildren',
          staggerChildren: 0.1,
        },
    },
    hidden: { marginBottom: 0 },
  };

  const variantsChildren = {
    visible: {
      opacity: 1,
      height: 29,
    },
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      height: 0,
    },
  };

  const openSecondLevel = (secondCategory: string): void => {
    setMenu && setMenu(menu.map(menuItem => {
      if (menuItem._id.secondCategory === secondCategory) {
        setAnnounce(menuItem.isOpened ? 'closed' : 'opened');
        menuItem.isOpened = !menuItem.isOpened;
      }
      return menuItem;
    }));
  };

  const openSecondLevelKey = (key: KeyboardEvent, secondCategory: string) => {
    if (key.code === 'Space' || key.code === 'Enter') {
      key.preventDefault();
      openSecondLevel(secondCategory);
    }
  };

  const buildFirstLevel = (): JSX.Element => (
    <ul className={styles.firstLevelList}>
      {firstLevelMenu.map(menuItem => (
        <li key={menuItem.route} aria-expanded={menuItem.id === firstCategory}>
          <Link href={`/${menuItem.route}`}>
            <a>
              <div className={cn(styles.firstLevel, {
                [styles.firstLevelActive]: menuItem.id === firstCategory,
              })}>
                {menuItem.icon}
                <span>{menuItem.name}</span>
              </div>
            </a>
          </Link>

          {menuItem.id === firstCategory && buildSecondLevel(menuItem)}
        </li>
      ))
      }
    </ul>
  );

  const buildSecondLevel = (menuItem: IFirstLevelMenuItem): JSX.Element => (
    <ul className={styles.secondBlock}>
      {menu.map(item => {
          if (item.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
            item.isOpened = true;
          }
          return (
            <li key={item._id.secondCategory}>
              <button
                className={styles.secondLevel}
                onClick={() => openSecondLevel(item._id.secondCategory)}
                onKeyDown={(key: KeyboardEvent) => openSecondLevelKey(key, item._id.secondCategory)}
                aria-expanded={item.isOpened}
              >
                {item._id.secondCategory}
              </button>
              <motion.ul
                layout
                variants={variants}
                initial={item.isOpened ? 'visible' : 'hidden'}
                animate={item.isOpened ? 'visible' : 'hidden'}
                className={styles.secondLevelBlock}
              >
                {buildThirdLevel(item.pages, menuItem.route, item.isOpened ?? false)}
              </motion.ul>
            </li>
          );
        },
      )}
    </ul>
  );


  const buildThirdLevel = (pages: IPageItem[], route: string, isOpened: boolean): JSX.Element[] => (
    pages.map(page => (
      <motion.li key={page._id} variants={variantsChildren}>
        <Link href={`/${route}/${page.alias}`}>
          <a
            tabIndex={isOpened ? 0 : -1}
            className={cn(styles.thirdLevel, {
              [styles.thirdLevelActive]: `/${route}/${page.alias}` === router.asPath,
            })}
            aria-current={`/${route}/${page.alias}` === router.asPath ? 'page' : false}
          >
            {page.category}
          </a>
        </Link>
      </motion.li>
    ))
  );


  return (
    <nav className={styles.menu} role='navigation'>
      {announce && (
        <span
          role='log'
          className='visuallyHidden'
        >
          {announce === 'opened' ? 'развернуто' : 'свернуто'}
        </span>
      )}
      {buildFirstLevel()}
    </nav>
  );
};

export default Menu;