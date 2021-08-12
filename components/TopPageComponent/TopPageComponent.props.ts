import { ITopPageModel, TopLevelCategory, IProductModel } from '../../interfaces';

export interface ITopPageComponentProps {
  firstCategory: TopLevelCategory;
  page: ITopPageModel;
  products: IProductModel[];
}