import { Link } from 'react-router-dom';
import { CardOfferProps } from '../../../types/common';
import BookmarkButton from '../../bookmark-button/bookmark-button';

export type CardImageSizeType = 'small' | 'large';

const sizeMap: Record<CardImageSizeType, {width: string; height: string}> = {
  small: {width: '150', height: '110'},
  large: {width: '260', height: '200'},
};

function CardOffer({
  offer,
  size = 'large',
  block,
  onCardHover
}: CardOfferProps): JSX.Element {
  const {previewImage, price, title, id, type, isFavorite, isPremium} = offer;
  const handleMouseEnter = () => {
    onCardHover?.(id);
  };

  const handleMouseLeave = () => {
    onCardHover?.(null);
  };

  return (
    <article className={`${block}__card place-card`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isPremium ?
        <div className='place-card__mark'>
          <span>Premium</span>
        </div>
        : ''}
      <div className='cities__image-wrapper place-card__image-wrapper'>
        <img
          className='place-card__image'
          src={previewImage}
          {...sizeMap[size]}
          alt={title}
        />
      </div>
      <div className='place-card__info'>
        <div className='place-card__price-wrapper'>
          <div className='place-card__price'>
            <b className='place-card__price-value'>&euro;{price}</b>
            <span className='place-card__price-text'>&#47;&nbsp;night</span>
          </div>
          <BookmarkButton id={id} isActive={isFavorite} block={'place-card'} size={'small'} offer={offer} />
        </div>
        <div className='place-card__rating rating'>
          <div className='place-card__stars rating__stars'>
            <span style={{width: '80%'}}></span>
            <span className='visually-hidden'>Rating</span>
          </div>
        </div>
        <h2 className='place-card__name'>
          <Link to={`/offer/${id}`}>
            {title}
          </Link>
        </h2>
        <p className='place-card__type'>{type}</p>
      </div>
    </article>
  );
}

export default CardOffer;
