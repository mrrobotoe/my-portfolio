import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Form, Input } from '@/components/ui/form';
import { registerInputSchema } from '@/lib/auth';
import './register-form.styles.scss';

export const RegisterForm = () => {
  return (
    <div>
      <Form
        onSubmit={(values) => {
          console.log(values);
        }}
        schema={registerInputSchema}
      >
        {({ register, formState }) => (
          <>
            <Input
              type="text"
              label="First Name"
              error={formState.errors['firstName']}
              registration={register('firstName')}
            />
            <Input
              type="text"
              label="Last Name"
              error={formState.errors['lastName']}
              registration={register('lastName')}
            />
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
            <Button type="submit">Register</Button>
            <div className="register_link_container">
              <div className="register_link_container__subtext">
                <Link
                  className="register_link_container__link"
                  to="/auth/login"
                >
                  Login
                </Link>
              </div>
            </div>
          </>
        )}
      </Form>
    </div>
  );
};
