import * as React from 'react';
import { Input as AriaInput } from 'react-aria-components';
import { UseFormRegisterReturn } from 'react-hook-form';

import './input.styles.scss';
import { FieldWrapper, FieldWrapperPassThroughProps } from './field-wrapper';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  FieldWrapperPassThroughProps & {
    className?: string;
    registration: Partial<UseFormRegisterReturn>;
  };

export const Input = ({
  className,
  label,
  error,
  registration,
  type,
  ...props
}: InputProps) => {
  return (
    <FieldWrapper label={label} error={error}>
      <AriaInput
        type={type}
        className={[className, 'input_field'].join(' ')}
        {...props}
        {...registration}
      />
    </FieldWrapper>
  );
};
