import { Helmet } from 'react-helmet-async';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="cities__places-container container">
      <Helmet>
        <title>6 cities. Page not found</title>
      </Helmet>
      <h1>404. Page not found</h1>
    </div>
  );
}

export default NotFoundScreen;
