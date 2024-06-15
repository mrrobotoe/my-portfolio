import { Link } from 'react-router-dom';
import './not-found.styles.scss';
export const NotFoundRoute = () => {
  return (
    <div className="notfound_layout">
      <h1 className="notfound__header">404 Not Found</h1>
      <Link className="notfound__link" to="/" replace>
        Go to home
      </Link>
    </div>
  );
};
