import React, { useState } from 'react';
import cn from 'classnames';
import { ISearchProps } from './Search.props';
import { Button, Input } from '../';
import styles from './Search.module.sass'
import { GlassIcon } from '../../assets/icons';
import { useRouter } from 'next/router';

const Search = ({ className, ...props}: ISearchProps): JSX.Element => {
  const [search, setSearch] = useState<string>('')

  const router = useRouter()

  const goToSearch = () => {
    router.push({
      pathname: '/search',
      query: {
        q: search
      }
    })
  }

  const handleKeydown = (e: KeyboardEvent) => {
    if(e.key === 'Enter') {
      goToSearch()
    }
  }

  return (
    <div
      className={cn(className, styles.search)}
      {...props}
    >
      <Input
        className={styles.search__input}
        placeholder='Поиск...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeydown}
      />
      <Button
        appearance='primary'
        className={styles.search__button}
        onClick={goToSearch}
      >
        <GlassIcon />
      </Button>
    </div>
  );
};

export default Search;