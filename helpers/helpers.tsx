import { BookIcon, CoursesIcon, ProductIcon, ServiceIcon } from '../assets/icons';
import { IFirstLevelMenuItem, TopLevelCategory } from '../interfaces';

export const firstLevelMenu: IFirstLevelMenuItem[] = [
  {
    route: 'courses',
    name: 'Курсы',
    icon: <CoursesIcon />,
    id: TopLevelCategory.Courses,
  },
  {
    route: 'books',
    name: 'Книги',
    icon: <BookIcon />,
    id: TopLevelCategory.Books,
  },
  {
    route: 'products',
    name: 'Товары',
    icon: <ProductIcon />,
    id: TopLevelCategory.Products,
  },
  {
    route: 'services',
    name: 'Сервисы',
    icon: <ServiceIcon />,
    id: TopLevelCategory.Services,
  },
];

export const priceRu = (price: number): string =>
  price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat(' ₽');

export const declensionsOfNums = (number: number, titles: [string, string, string]): string => {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[
    (number % 100 > 4 && number % 100 < 20)
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
    ];
};