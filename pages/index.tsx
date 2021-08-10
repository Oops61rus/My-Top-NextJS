import { useState } from 'react';
import { GetStaticProps } from 'next';
import axios from 'axios';
import { Button, Htag, Rating, Tag } from '../components';
import { withLayout } from '../layout/Layout';
import { IMenuItem } from '../interfaces/menu.interface';

function Home({ menu }: IHomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag={'h1'}>Text</Htag>
      <Button appearance='primary'>Button</Button>
      <Button appearance='ghost' arrow={'down'}>Button</Button>
      <Tag size='s'>hello</Tag>
      <Tag size='m' color='green'>hello</Tag>
      <Tag size='m'>hello</Tag>
      <Tag size='s' color='red' href='https://google.com'>hello</Tag>
      <Tag size='s' color='primary'>hello</Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
      <ul>
        {menu.map(m => (
          <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
        ))}
      </ul>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<IHomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios
    .post<IMenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
      firstCategory
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