import { Link } from 'react-router-dom';

export const NotFoundRoute = () => {
  return (
    <div>
      <h1>404 Not Found</h1>
      <Link to="/" replace>
        Go to home
      </Link>
    </div>
  );
};
