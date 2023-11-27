import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { MIN_COMMENT_LENGTH, RequestStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { postReviews } from '../../store/api-action';
import { Offer } from '../../types/offer';
import { fetchReviews } from '../../store/actions';

type ReviewsTypeProps = {
  offerId: Offer['id'];
}

function ReviewForm({offerId}: ReviewsTypeProps): JSX.Element {
  const dispatch = useAppDispatch();
  const sendingStatus = useAppSelector((state) => state.reviewsSendingStatus);
  const [comment, setComment] = useState<string>('');
  const [rating, setRating] = useState<number | string>('');
  const isValid = comment.length >= MIN_COMMENT_LENGTH && rating !== '';
  // const isSending = sendingStatus === RequestStatus.Pending;

  function handleCommentChange(evt: ChangeEvent<HTMLTextAreaElement>) {
    setComment(evt.target.value);
  }

  function handleRatingChange(evt: ChangeEvent<HTMLInputElement>) {
    setRating(evt.target.value);
  }

  function handleFormSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    dispatch(
      postReviews({
        reviewData: {
          comment,
          rating: +rating,
          id: 0,
          user: {
            id: 0,
            name: '',
            isPro: false,
            avatarUrl: ''
          },
          date: ''
        },
        offerId,
      })
    );
  }

  useEffect(() => {
    if(sendingStatus === RequestStatus.Success) {
      setComment('');
      setRating('');
      dispatch(fetchReviews);
    }
  }, [sendingStatus, dispatch]);

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {['5', '4', '3', '2', '1'].map((value) => (
          <React.Fragment key={value}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={value}
              id={`${value}-stars`}
              type="radio"
              onChange={handleRatingChange}
              checked={rating === value}
            />
            <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title="rating title">
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        value={comment}
        onChange={handleCommentChange}
        id="review"
        name="review"
        placeholder='Tell how was your stay, what you like and what can be improved'
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit a review, please make sure to set a rating and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isValid}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
