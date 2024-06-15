import * as React from 'react';

import { RegisterForm } from '@/app/features/auth/components/register-form';
import { Layout } from '@/components/layouts/auth-layout';

export const RegisterRoute = () => {
  return (
    <Layout title="Register your account">
      <RegisterForm />
    </Layout>
  );
};
