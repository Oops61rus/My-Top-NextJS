import React from 'react';
import { IHtagProps } from './Htag.props';

const Htag = ({tag, children}: IHtagProps): JSX.Element => {
  return (
    <div>
      {children}
    </div>
  );
};

export default Htag;