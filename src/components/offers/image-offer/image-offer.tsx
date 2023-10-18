import { ImageOfferType } from '../../../const';

function ImageOffer({src}: ImageOfferType): JSX.Element {
  return (
    <div className="offer__image-wrapper">
      <img className="offer__image" src={src} alt="Photo studio" />
    </div>
  );
}

export default ImageOffer;
