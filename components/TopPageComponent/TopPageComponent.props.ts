import { ITopPageModel, TopLevelCategory, IProductModel } from '../../interfaces';

export interface TopPageComponentProps {
  firstCategory: TopLevelCategory;
  page: ITopPageModel;
  products: IProductModel[];
}