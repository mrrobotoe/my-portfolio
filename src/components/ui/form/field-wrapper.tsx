import * as React from 'react';
import { type FieldError } from 'react-hook-form';

import { Error } from './error';
import { Label } from './label';

import './field-wrapper.styles.scss';

type FieldWrapperProps = {
  label?: string;
  className?: string;
  children: React.ReactNode;
  error?: FieldError | undefined;
};

export type FieldWrapperPassThroughProps = Omit<
  FieldWrapperProps,
  'className' | 'children'
>;

export const FieldWrapper = (props: FieldWrapperProps) => {
  const { label, className, children, error } = props;

  return (
    <div className={`field_wrapper ${className}`}>
      <Label>{label}</Label>
      <div className="field_wrapper__element">{children}</div>
      <Error errorMessage={error?.message} />
    </div>
  );
};
