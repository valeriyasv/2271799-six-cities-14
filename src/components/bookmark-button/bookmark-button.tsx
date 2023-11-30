import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { AppRoute } from '../../const';
import cn from 'classnames';

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
}

function BookmarkButton({
  isActive,
  block,
  size = 'small',
}: BookmarkButtonProps) {
  const navigate = useNavigate();
  const isAuthorized = useAppSelector((state) => state.authorizationStatus);

  const handleButtonClick = () => {
    if(!isAuthorized) {
      navigate(AppRoute.Login);
    }
  };
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
