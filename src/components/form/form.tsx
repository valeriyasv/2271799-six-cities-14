import React, { useState } from 'react';

function Form(): JSX.Element {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(0);

  const handleRatingChange = (value: number) => {
    setRating(value);
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {[5, 4, 3, 2, 1].map((value) => (
          <React.Fragment key={value}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={value}
              id={`${value}-stars`}
              type="radio"
              onChange={() => handleRatingChange(value)}
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
        value={text}
        onChange={(e) => setText(e.target.value)}
        id="review"
        name="review"
        placeholder='Tell how was your stay, what you like and what can be improved'
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit a review, please make sure to set a rating and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={text.length < 50}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default Form;
