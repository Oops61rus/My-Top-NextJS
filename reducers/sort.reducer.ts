import { SortEnum } from '../components/Sort/Sort.props';
import { IProductModel } from '../interfaces';

export type SortActions = { type: SortEnum.Price } | { type: SortEnum.Rating } | {type: 'reset', initialState: IProductModel[]}

export interface ISortReducerState {
  sort: SortEnum;
  products: IProductModel[];
}

export const sortReducer = (state: ISortReducerState, action: SortActions): ISortReducerState => {
  switch (action.type) {
    case SortEnum.Price:
      return {
        sort: SortEnum.Price,
        products: state.products.sort((a, b) =>
          a.initialRating - b.initialRating,
        ),
      };
    case SortEnum.Rating:
      return {
        sort: SortEnum.Rating,
        products: state.products.sort((a, b) =>
          a.price - b.price,
        ),
      };
    case 'reset':
      return {
        sort: SortEnum.Rating,
        products: action.initialState
      }
    default:
      return { ...state };
  }
};