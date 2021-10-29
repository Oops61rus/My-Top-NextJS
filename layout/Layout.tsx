import React, { Component, FC } from 'react';
import { ILayoutProps } from './Layout.props';
import { Footer, Header, Sidebar } from './';
import { AppContextProvider, IAppContext } from '../context/app.context';
import { Up } from '../components';
import styles from './Layout.module.sass';

const Layout = ({ children, ...props }: ILayoutProps): JSX.Element => (
  <div className={styles.wrapper} {...props}>
    <Header className={styles.header} />
    <Sidebar className={styles.sidebar} />
    <div className={styles.body}>
      {children}
    </div>
    <Footer className={styles.footer} />
    <Up />
  </div>
);


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
