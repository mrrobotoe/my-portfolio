import { zodResolver } from '@hookform/resolvers/zod';
import { Form as AriaForm } from 'react-aria-components';
import {
  FormProvider,
  useForm,
  FieldValues,
  UseFormReturn,
  UseFormProps,
  SubmitHandler,
} from 'react-hook-form';
import { ZodType, z } from 'zod';
import './form.styles.scss';

type FormProps<TFormValues extends FieldValues, Schema> = {
  onSubmit: SubmitHandler<TFormValues>;
  schema: Schema;
  className?: string;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  options?: UseFormProps<TFormValues>;
  id?: string;
};

export const Form = <
  Schema extends ZodType<any, any, any>,
  TFormValues extends FieldValues = z.infer<Schema>,
>({
  onSubmit,
  children,
  className,
  options,
  id,
  schema,
}: FormProps<TFormValues, Schema>) => {
  const form = useForm({ ...options, resolver: zodResolver(schema) });

  return (
    <FormProvider {...form}>
      <AriaForm
        className={[className, 'form_container'].join(' ')}
        onSubmit={form.handleSubmit(onSubmit)}
        id={id}
      >
        {children(form)}
      </AriaForm>
    </FormProvider>
  );
};
