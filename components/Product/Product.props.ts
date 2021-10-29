import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IProductModel } from '../../interfaces';

export interface ProductProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: IProductModel
}