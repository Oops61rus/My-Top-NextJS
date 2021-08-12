import { IFirstLevelMenuItem } from '../interfaces/menu.interface';
import { BookIcon, CoursesIcon, ProductIcon, ServiceIcon } from '../assets/icons';
import { TopLevelCategory } from '../interfaces/page.interface';

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