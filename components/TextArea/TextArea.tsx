import React from 'react';
import cn from 'classnames';
import { ITextAreaProps } from './TextArea.props';
import styles from './TextArea.module.sass';

const TextArea = ({ className, ...props }: ITextAreaProps): JSX.Element => (
  <textarea
    className={cn(className, styles.textarea)}
    {...props}
  />
);

export default TextArea;