import { Button, Htag, Rating, Tag } from '../components';
import { useState } from 'react';
import { withLayout } from '../layout/Layout';

function Home(): JSX.Element {
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
    </>
  );
}

export default withLayout(Home);