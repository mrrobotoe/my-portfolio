import * as React from 'react';
import { Label as AriaLabel } from 'react-aria-components';

import './label.styles.scss';

type LabelProps = {
  children: React.ReactNode;
};

export const Label = ({ children }: LabelProps) => {
  return <AriaLabel className="label">{children}</AriaLabel>;
};
