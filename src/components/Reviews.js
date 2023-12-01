import '../style/reviews.scss';
import AdaptMenu from './AdaptMenu';

import { reviews } from '../data/reviews';

function Reviews() {
   return (
      <div className="reviews__container">
         <section className="reviews__content">
            <div className="reviews__content_header">
               <h1 className="reviews__content_name">Отзывы</h1>
               <div className="reviews__content_function">
                  <button id="reviews_add">+ Добавить отзыв</button>
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
         <AdaptMenu />
      </div>
   )
}

export default Reviews;