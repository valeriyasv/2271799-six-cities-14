import ReviewForm from './review-form';
import ReviewItem from './review-item';
import { Offer } from '../../types/offer';
import { ReviewType } from '../../types/review';

type ReviewListPropsType = {
  offerId: Offer['id'];
  reviews: ReviewType[];
}

function ReviewList ({offerId, reviews}: ReviewListPropsType) {

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((item) => (
          <ReviewItem key={item.id} review={item} />
        ))}
      </ul>
      <ReviewForm offerId={offerId}/>
    </section>
  );
}

export default ReviewList;
