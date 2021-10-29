import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { CloseIcon, MenuIcon, UpIcon } from '../../assets/icons';

export const icons = {
  UpIcon,
  CloseIcon,
  MenuIcon,
};

export type IconName = keyof typeof icons

export interface ButtonIconProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  icon: IconName;
  appearance: 'primary' | 'white';
}