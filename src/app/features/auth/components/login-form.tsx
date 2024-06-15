import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Form, Input } from '@/components/ui/form';
import { loginInputSchema } from '@/lib/auth';
import './login-form.styles.scss';

export const LoginForm = () => {
  return (
    <div>
      <Form
        onSubmit={(values) => {
          console.log(values);
        }}
        schema={loginInputSchema}
      >
        {({ register, formState }) => (
          <>
            <Input
              type="email"
              label="Email Address"
              error={formState.errors['email']}
              registration={register('email')}
            />
            <Input
              type="password"
              label="Password"
              error={formState.errors['password']}
              registration={register('password')}
            />
            <Button type="submit">Login</Button>
            <div className="login_link_container">
              <div className="login_link_container__subtext">
                <Link
                  className="login_link_container__link"
                  to="/auth/register"
                >
                  Register
                </Link>
              </div>
            </div>
          </>
        )}
      </Form>
    </div>
  );
};
