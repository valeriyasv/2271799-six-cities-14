import { useAppDispatch, useAppSelector } from '../../hooks';
import { Offer } from '../../types/offer';
import cn from 'classnames';
import { useCallback } from 'react';
import { fetchOffers, postFavorites } from '../../store/api-action';
import { useNavigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';

export type BookmarkSizeType = 'small' | 'large';

const sizeMap: Record<BookmarkSizeType, {width: string; height: string}> = {
  small: {width: '18', height: '19'},
  large: {width: '31', height: '33'},
};

type BookmarkButtonProps = {
  id: string;
  isActive: boolean;
  block: string;
  size: 'small' | 'large';
  offer: Offer;
}

function BookmarkButton({
  isActive,
  block,
  size = 'small',
  offer
}: BookmarkButtonProps) {
  const isAuthorized = useAppSelector((state) => state.authorizationStatus);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {id, isFavorite} = offer;
  const handleButtonClick = useCallback(() => {
    if(isAuthorized === AuthorizationStatus.NoAuth) {
      navigate(AppRoute.Login);
    } else {
      dispatch(postFavorites({ offerId: id, status: isFavorite ? 0 : 1}))
        .then(() => {
          dispatch(fetchOffers());
        });
    }
  },[dispatch, id, isActive]);

  return (
    <button className={cn(`${block}__bookmark-button`, 'button', {
      [`${block}__bookmark-button--active`] : isActive && isAuthorized,
    })}
    type="button"
    onClick={handleButtonClick}
    >
      <svg className={`${block}__bookmark-icon`} {...sizeMap[size]}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isActive && isAuthorized ? 'In' : 'To'} bookmarks</span>
    </button>
  );
}

export default BookmarkButton;
