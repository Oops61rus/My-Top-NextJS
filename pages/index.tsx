import { Button, Htag, Tag } from '../components';

export default function Home(): JSX.Element {
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
    </>
  );
}
