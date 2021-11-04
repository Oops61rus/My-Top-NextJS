import React from 'react';
import { withLayout } from '../layout/Layout';
import { Error } from '../components';

export const Error500 = (): JSX.Element => (
  <Error
    textError='Ошибка сервера'
    statusCode={500}
    descriptionError='На сервере произошла непредвиденная ошибка. Пожалуйста, подождите, она вскоре будет исправлена'
  />
);


export default withLayout(Error500);