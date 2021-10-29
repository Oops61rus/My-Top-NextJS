import React from 'react';
import { ButtonIconProps, icons } from './ButtonIcon.props';
import cn from 'classnames';
import styles from './ButtonIcon.module.sass'

const ButtonIcon = ({icon, appearance, className, ...props}: ButtonIconProps): JSX.Element => {
  const IconComponent = icons[icon]

  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance === 'primary',
        [styles.white]: appearance === 'white',
      })}
      {...props}
    >
      <IconComponent/>
    </button>
  );
};

export default ButtonIcon;