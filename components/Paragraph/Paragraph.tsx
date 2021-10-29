import React from 'react';
import cn from 'classnames';
import { ParagraphProps } from './Paragraph.props';
import styles from './Paragraph.module.sass';

const Paragraph = ({ size = 'm', children, className, ...props }: ParagraphProps): JSX.Element => (
  <p
    className={cn(styles.paragraph, className, {
      [styles.s]: size === 's',
      [styles.m]: size === 'm',
      [styles.l]: size === 'l',
    })}
    {...props}
  >
    {children}
  </p>

);


export default Paragraph;