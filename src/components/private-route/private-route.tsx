import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../const';

export type TProtectedRoute = {
    redirectPage: AppRoute;
    children: JSX.Element;
    isAuth: boolean;
  }

export function PrivateRoute(props: TProtectedRoute): JSX.Element {
  const { redirectPage, children, isAuth} = props;


  return (
    isAuth ? children : <Navigate to={redirectPage} />
  );
}
