import React, { KeyboardEvent, useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';
import { motion } from 'framer-motion';
import { AppContext } from '../../context/app.context';
import { firstLevelMenu } from '../../helpers/helpers';
import { IFirstLevelMenuItem, IPageItem } from '../../interfaces/menu.interface';
import styles from './Menu.module.sass';

const Menu = (): JSX.Element => {
  const { menu, firstCategory, setMenu } = useContext(AppContext);
  const router = useRouter();

  const variants = {
    visible: {
      marginBottom: 20,
      transition: {
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
      opacity: 0,
      height: 0,
    },
  };

  const openSecondLevel = (secondCategory: string): void => {
    setMenu && setMenu(menu.map(menuItem => {
      if (menuItem._id.secondCategory === secondCategory) {
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

  const buildFirstLevel = (): JSX.Element[] => (
    firstLevelMenu.map(menuItem => (
      <div key={menuItem.route}>
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
      </div>
    ))
  );

  const buildSecondLevel = (menuItem: IFirstLevelMenuItem): JSX.Element => (
    <div className={styles.secondBlock}>
      {menu.map(item => {
          if (item.pages.map(p => p.alias).includes(router.asPath.split('/')[2])) {
            item.isOpened = true;
          }
          return (
            <div key={item._id.secondCategory}>
              <div
                className={styles.secondLevel}
                onClick={() => openSecondLevel(item._id.secondCategory)}
                tabIndex={0}
                onKeyDown={(key: KeyboardEvent) => openSecondLevelKey(key, item._id.secondCategory)}
              >
                {item._id.secondCategory}
              </div>
              <motion.div
                layout
                variants={variants}
                initial={item.isOpened ? 'visible' : 'hidden'}
                animate={item.isOpened ? 'visible' : 'hidden'}
                className={cn(styles.secondLevelBlock)}
              >
                {buildThirdLevel(item.pages, menuItem.route, item.isOpened ?? false)}
              </motion.div>
            </div>
          );
        },
      )}
    </div>
  );


  const buildThirdLevel = (pages: IPageItem[], route: string, isOpened: boolean): JSX.Element[] => (
    pages.map(page => (
      <motion.div key={page._id} variants={variantsChildren}>
        <Link href={`/${route}/${page.alias}`}>
          <a
            tabIndex={isOpened ? 0 : -1}
            className={cn(styles.thirdLevel, {
              [styles.thirdLevelActive]: `/${route}/${page.alias}` === router.asPath,
            })}
          >
            {page.category}
          </a>
        </Link>
      </motion.div>
    ))
  );


  return (
    <div className={styles.menu}>
      {buildFirstLevel()}
    </div>
  );
};

export default Menu;