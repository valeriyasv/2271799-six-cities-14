import ReviewItem from './review-item';
import { ReviewType } from '../../types/review';

type ReviewListPropsType = {
  reviews: ReviewType[];
  reviewsRender: ReviewType[];
}

function ReviewList ({reviews, reviewsRender}: ReviewListPropsType) {

  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviewsRender.map((item) => (
          <ReviewItem key={item.id} review={item} />
        ))}
      </ul>
    </>
  );
}

export default ReviewList;
