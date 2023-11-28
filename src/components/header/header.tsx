import Logo from '../logo/logo';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../const';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { logout } from '../../store/api-action';

function Header(): JSX.Element {
  const status = useAppSelector((state) => state.authorizationStatus);
  const userData = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  function handleClick(): void {
    dispatch(logout());
  }

  return (
    <header className='header'>
      <div className='container'>
        <div className='header__wrapper'>
          <div className='header__left'>
            <Logo />
          </div>
          <nav className='header__nav'>
            {status === AuthorizationStatus.Auth ?
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                    <div className="header__avatar-wrapper user__avatar-wrapper" style={{'backgroundImage': `url(${userData?.avatarUrl})`}}>
                    </div>
                    <span className="header__user-name user__name">{userData?.name}</span>
                    <span className="header__favorite-count">3</span>
                  </Link>
                </li>
                <li className="header__nav-item">
                  <Link onClick={handleClick} className="header__nav-link" to={AppRoute.Main}>
                    <span className="header__signout">Sign out</span>
                  </Link>
                </li>
              </ul>
              :
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </Link>
                </li>
              </ul>}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
