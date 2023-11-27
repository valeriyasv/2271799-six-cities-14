import ReviewForm from './review-form';
import ReviewItem from './review-item';
import { MAX_REVIEWS_COUNT } from '../../const';
import { ReviewType } from '../../types/review';
import { Offer } from '../../types/offer';

type ReviewListPropsType = {
  reviews: ReviewType[];
  offerId: Offer['id'];
}

function ReviewList ({reviews, offerId}: ReviewListPropsType) {
  const reviewsRender = reviews.slice(0, MAX_REVIEWS_COUNT);
  const reviewsToRender = reviewsRender
    .sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, MAX_REVIEWS_COUNT);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviewsToRender.map((item) => (
          <ReviewItem key={item.id} review={item} />
        ))}
      </ul>
      <ReviewForm offerId={offerId}/>
    </section>
  );
}

export default ReviewList;
