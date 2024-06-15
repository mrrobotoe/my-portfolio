import * as React from 'react';
import { Button as AriaButton } from 'react-aria-components';

import './button.styles.scss';

export type ButtonProps = {
  children: React.ReactNode;
  type: 'button' | 'submit' | 'reset';
};

export const Button = ({ children, type, ...props }: ButtonProps) => {
  return (
    <AriaButton className="button" type={type} {...props}>
      {children}
    </AriaButton>
  );
};
