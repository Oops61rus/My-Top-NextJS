import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from '../index';
import { ArrowIcon } from '../../assets/icons';
import { firstLevelMenu } from '../../helpers/helpers';
import { MainPageProps } from './MainPage.props';
import styles from './MainPage.module.sass';

const MainPage = ({...props}: MainPageProps): JSX.Element => {
  const router = useRouter();

  return (
    <div {...props} className={styles.blocks}>
      {firstLevelMenu.map(menu => (
        <Link key={menu.id} href={`/${menu.route}`}>
          <a>
            <div className={styles.block}>
              <div className={styles.block__hover}>
                <Button
                  appearance='primary'
                  onClick={() => router.push(`/${menu.route}`)}
                  aria-hidden={true}
                >
                  К курсам <ArrowIcon />
                </Button>
              </div>
              <Image
                className={styles.block__image}
                src={menu.image}
                alt={menu.name}
                width={225}
                height={150}
                quality={100}
              />
              Курсы
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default MainPage;