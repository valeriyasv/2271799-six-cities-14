import { useAppDispatch, useAppSelector } from '../../hooks';
import cn from 'classnames';
import { useCallback } from 'react';
import { fetchOffers, postFavorites } from '../../store/api-action';
import { Offer } from '../../types/offer';

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
  const dispatch = useAppDispatch();
  const isAuthorized = useAppSelector((state) => state.authorizationStatus);

  const {isFavorite, id} = offer;
  const handleButtonClick = useCallback(() => {
    dispatch(postFavorites({offer, offerId: id, status: isFavorite ? 0 : 1}));
    dispatch(fetchOffers());
  },[dispatch, id, isFavorite, offer]);

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
