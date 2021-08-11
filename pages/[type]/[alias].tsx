import React from 'react';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import axios from 'axios';
import { ParsedUrlQuery } from 'node:querystring';
import { firstLevelMenu } from '../../helpers/helpers';
import { withLayout } from '../../layout/Layout';
import { IMenuItem } from '../../interfaces/menu.interface';
import { IProductModel } from '../../interfaces/product.interface';
import { ITopPageModel, TopLevelCategory } from '../../interfaces/page.interface';

const Course = ({ menu, page, products }: ICourseProps): JSX.Element => {
  return (
    <div>
      {products?.length}
    </div>
  );
};

export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: string[] = [];

  for (const m of firstLevelMenu) {
    const { data: menu } = await axios
      .post<IMenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory: m.id,
      });

    paths = paths.concat(menu.flatMap(menuItem => menuItem.pages.map(p => `/${m.route}/${p.alias}`)));
  }

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps<ICourseProps> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return { notFound: true };
  }

  const firstCategoryItem = firstLevelMenu.find(m => m.route === params.type);

  if (!firstCategoryItem) {
    return { notFound: true };
  }

  try {
    const { data: menu } = await axios
      .post<IMenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory: firstCategoryItem.id,
      });

    if (menu.length === 0) {
      return { notFound: true };
    }

    const { data: page } = await axios
      .get<ITopPageModel>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias/' + params.alias);
    const { data: products } = await axios
      .post<IProductModel[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find', {
        category: page.category,
        limit: 10,
      });

    return {
      props: {
        menu,
        firstCategory: firstCategoryItem.id,
        page,
        products,
      },
    };
  } catch {
    return { notFound: true };
  }

};

interface ICourseProps extends Record<string, unknown> {
  menu: IMenuItem[];
  firstCategory: TopLevelCategory;
  page: ITopPageModel;
  products: IProductModel[];
}