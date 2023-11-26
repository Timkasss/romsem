import '../style/reviews.scss';
import AdaptMenu from './AdaptMenu';

import { reviews } from '../data/reviews';

function Reviews() {
   return (
      <div className="reviews__container">
         <div className="reviews__content">
            <div className="reviews__content_header">
               <div className="reviews__content_name">Отзывы</div>
               <div className="reviews__content_function">
                  <button id="reviews_add">+ Добавить отзыв</button>
               </div>
            </div>
            <div className="reviews__content_body">
               {
                  reviews.map(review => {
                     return (
                        <div className="response" key={review.id}>
                           <div className="response_header">
                              <div className="response_header_name">{review.name}</div>
                              <div className="response_header_date">{review.date}</div>
                           </div>
                           <div className="response_text_content">
                              <p className="response_text">{review.comment}</p>
                           </div>
                        </div>
                     )
                  })
               }
            </div>
         </div>
         <AdaptMenu />
      </div>
   )
}

export default Reviews;