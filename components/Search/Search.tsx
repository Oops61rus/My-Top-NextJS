import React, { KeyboardEvent, useState } from 'react';
import { useRouter } from 'next/router';
import cn from 'classnames';
import { SearchProps } from './Search.props';
import { Button, Input } from '../';
import { GlassIcon } from '../../assets/icons';
import styles from './Search.module.sass';

const Search = ({ className, ...props }: SearchProps): JSX.Element => {
  const [search, setSearch] = useState<string>('');

  const router = useRouter();

  const goToSearch = () => {
    router.push({
      pathname: '/search',
      query: {
        q: search,
      },
    });
  };

  const handleKeydown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      goToSearch();
    }
  };

  return (
    <form
      className={cn(className, styles.search)}
      {...props}
      role='search'
    >
      <Input
        className={styles.search__input}
        placeholder='Поиск...'
        aria-label='Искать по сайту'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeydown}
      />
      <Button
        appearance='primary'
        className={styles.search__button}
        onClick={goToSearch}
        aria-label='Искать по сайту'
      >
        <GlassIcon />
      </Button>
    </form>
  );
};

export default Search;