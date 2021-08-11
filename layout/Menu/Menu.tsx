import React, { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';
import { AppContext } from '../../context/app.context';
import { firstLevelMenu } from '../../helpers/helpers';
import { IFirstLevelMenuItem, IPageItem } from '../../interfaces/menu.interface';
import styles from './Menu.module.sass';

const Menu = (): JSX.Element => {
  const { menu, firstCategory, setMenu } = useContext(AppContext);
  const router = useRouter();

  const openSecondLevel = (secondCategory: string): void => {
    setMenu && setMenu(menu.map(menuItem => {
      if (menuItem._id.secondCategory === secondCategory) {
        menuItem.isOpened = !menuItem.isOpened;
      }
      return menuItem;
    }));
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
              >
                {item._id.secondCategory}
              </div>
              <div className={cn(styles.secondLevelBlock, {
                [styles.secondLevelBlockOpened]: item.isOpened,
              })}>
                {buildThirdLevel(item.pages, menuItem.route)}
              </div>
            </div>
          );
        },
      )}
    </div>
  );


  const buildThirdLevel = (pages: IPageItem[], route: string): JSX.Element[] => (
    pages.map(page => (
      <Link key={page._id} href={`/${route}/${page.alias}`}>
        <a
          className={cn(styles.thirdLevel, {
            [styles.thirdLevelActive]: `/${route}/${page.alias}` === router.asPath,
          })}
        >
          {page.category}
        </a>
      </Link>
    ))
  );


  return (
    <div className={styles.menu}>
      {buildFirstLevel()}
    </div>
  );
};

export default Menu;