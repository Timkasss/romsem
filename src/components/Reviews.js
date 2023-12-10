import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import '../style/reviews.scss';

import { reviews } from '../data/reviews';

function Reviews() {

   const [modelActive, setModelActive] = useState(false);
   const [name, setName] = useState('');
   const [comment, setComment] = useState('');

   function openModel() {
      setModelActive(!modelActive);
   }
   function closeModel(e) {
      e.preventDefault();
      setModelActive(!modelActive);
   }


   function sendComment() {
      //add comment
   }
   const { t } = useTranslation();
   return (
      <>
         <div className="reviews__container">
            {
               modelActive &&
               <section className="model_reviews_wrapper">
                  <h1>{t('reviews.review')}</h1>
                  <form className="model_reviews_form">
                     <label>{t('reviews.name')}</label>
                     <input type="text" id="name" value={name} onChange={e => setName(e.target.value)} />
                     <label>{t('reviews.comment')}</label>
                     <input type="hidden" value='02.12.2023' />
                     <textarea name="text" value={comment} onChange={e => setComment(e.target.value)} id="comment_text" cols="30" rows="5"></textarea>
                     <div className="model_reviews_button">
                        <button id='cancel' onClick={closeModel}>{t('reviews.cancel')}</button>
                        <button id='send' onClick={sendComment}>{t('reviews.send')}</button>
                     </div>
                  </form>
               </section>
            }

            <section className="reviews__content">
               <div className="reviews__content_header">
                  <h1 className="reviews__content_name">{t('reviews.reviews')}</h1>
                  <div className="reviews__content_function">
                     <button id="reviews_add" onClick={openModel}>{t('reviews.add_review')}</button>
                  </div>
               </div>
               <div className="reviews__content_body">
                  {
                     reviews.map(review => {
                        return (
                           <article className="response" key={review.id}>
                              <header className="response_header">
                                 <h1 className="response_header_name">{review.name}</h1>
                                 <p className="response_header_date">{review.date}</p>
                              </header>
                              <div className="response_text_content">
                                 <p className="response_text">{review.comment}</p>
                              </div>
                           </article>
                        )
                     })
                  }
               </div>
            </section>
         </div>
      </>
   )
}

export default Reviews;