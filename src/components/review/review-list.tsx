import ReviewForm from './review-form';
import ReviewItem from './review-item';
import { reviewsData } from '../../mocks/reviews';
import { MAX_REVIEWS_COUNT } from '../../const';

function ReviewList () {
  const reviewToRender = [...reviewsData]
    .sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, MAX_REVIEWS_COUNT);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsData.length}</span></h2>
      <ul className="reviews__list">
        {reviewToRender.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </ul>
      <ReviewForm />
    </section>
  );
}

export default ReviewList;
