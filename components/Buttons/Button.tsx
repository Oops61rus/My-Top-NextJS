import React from 'react';
import cn from 'classnames';
import { motion } from 'framer-motion';
import { ButtonProps } from './Button.props';
import { ArrowIcon } from '../../assets/icons';
import styles from './Button.module.sass';

const Button = ({ children, arrow = 'none', appearance, className, ...props }: ButtonProps): JSX.Element => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    className={cn(styles.button, className, {
      [styles.primary]: appearance === 'primary',
      [styles.ghost]: appearance === 'ghost',
    })}
    {...props}
  >
    {children}
    {arrow !== 'none' && <ArrowIcon className={cn(styles.arrow, {
      [styles.down]: arrow === 'down',
      [styles.right]: arrow === 'right',
    })} />}
  </motion.button>
);

export default Button;