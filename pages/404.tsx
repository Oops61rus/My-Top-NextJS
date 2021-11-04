import React from 'react';
import { withLayout } from '../layout/Layout';
import { Error } from '../components';

export const Error404 = (): JSX.Element => (
  <Error
    textError='Ой! Что-то пошло не так'
    statusCode={404}
    descriptionError='Страница, которую вы запрашиваете, не существует. Возможно она устарела, была удалена, или был введен неверный адрес в адресной строке'
  />
);

export default withLayout(Error404);