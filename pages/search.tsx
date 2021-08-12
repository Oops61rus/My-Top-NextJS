import { GetStaticProps } from 'next';
import axios from 'axios';
import { withLayout } from '../layout/Layout';
import { IMenuItem } from '../interfaces';

const Search = (): JSX.Element => {
  return (
    <>
      Search
    </>
  );
};

export default withLayout(Search);

export const getStaticProps: GetStaticProps<ISearchProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios
    .post<IMenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
      firstCategory,
    });
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface ISearchProps extends Record<string, unknown> {
  menu: IMenuItem[];
  firstCategory: number;
}