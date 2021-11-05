import React from 'react';
import { GetStaticProps } from 'next';
import axios from 'axios';
import { withLayout } from '../layout/Layout';
import { IMenuItem } from '../interfaces';
import { API } from '../helpers/api';
import { MainPage } from '../components';

function Home(): JSX.Element {
  return (
    <MainPage />
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<IHomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios
    .post<IMenuItem[]>(API.topPage.find, {
      firstCategory,
    });
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface IHomeProps extends Record<string, unknown> {
  menu: IMenuItem[];
  firstCategory: number;
}