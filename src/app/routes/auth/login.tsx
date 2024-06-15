import { LoginForm } from '@/app/features/auth/components/login-form';
import { Layout } from '@/components/layouts/auth-layout';

export const LoginRoute = () => {
  return (
    <Layout title="Login to your account">
      <LoginForm />
    </Layout>
  );
};
