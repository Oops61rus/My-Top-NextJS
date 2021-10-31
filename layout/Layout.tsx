import React, { Component, FC, KeyboardEvent, useRef, useState } from 'react';
import cn from 'classnames';
import { LayoutProps } from './Layout.props';
import { Footer, Header, Sidebar } from './';
import { AppContextProvider, IAppContext } from '../context/app.context';
import { Up } from '../components';
import styles from './Layout.module.sass';

const Layout = ({ children, ...props }: LayoutProps): JSX.Element => {
  const [isSkipLinkDisplayed, setIsSkipLinkDisplayed] = useState<boolean>(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  const skipContentAction = (key: KeyboardEvent) => {
    if (key.code === 'Space' || key.code === 'Enter') {
      key.preventDefault();
      bodyRef.current?.focus();
    }
    setIsSkipLinkDisplayed(false);
  };

  return (
    <div className={styles.wrapper} {...props}>
      <a
        onFocus={() => setIsSkipLinkDisplayed(true)}
        onKeyDown={skipContentAction}
        tabIndex={1}
        className={cn(styles.skipLink, {
          [styles.displayed]: isSkipLinkDisplayed,
        })}
      >
        Сразу к содержанию
      </a>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <main
        role='main'
        className={styles.body}
        ref={bodyRef}
        tabIndex={0}
      >
        {children}
      </main>
      <Footer className={styles.footer} />
      <Up />
    </div>
  );
};


export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component: FC<T>) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <AppContextProvider
        menu={props.menu}
        firstCategory={props.firstCategory}
      >
        <Layout>
          <Component {...props} />
        </Layout>
      </AppContextProvider>
    );
  };
};
