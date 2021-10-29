import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IReviewModel } from '../../interfaces';

export interface ReviewProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  review: IReviewModel
}