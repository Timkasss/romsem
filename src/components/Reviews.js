import '../style/reviews.scss';
import AdaptMenu from './AdaptMenu';


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
               <div className="response">
                  <div className="response_header">
                     <div className="response_header_name">Розалия</div>
                     <div className="response_header_date">02.24.21</div>
                  </div>
                  <div className="response_text_content">
                     <p className="response_text">Ваша доставка и ваши блюда лучшие в Харькове!) всегда очень вкусно, вовремя, всегда вежливые курьеры и девушки на телефоне</p>
                  </div>
               </div>
               <div className="response">
                  <div className="response_header">
                     <div className="response_header_name">Розалия</div>
                     <div className="response_header_date">02.24.21</div>
                  </div>
                  <div className="response_text_content">
                     <p className="response_text">Ваша доставка и ваши блюда лучшие в Харькове!) всегда очень вкусно, вовремя, всегда вежливые курьеры и девушки на телефоне</p>
                  </div>
               </div>
               <div className="response">
                  <div className="response_header">
                     <div className="response_header_name">Розалия</div>
                     <div className="response_header_date">02.24.21</div>
                  </div>
                  <div className="response_text_content">
                     <p className="response_text">Ваша доставка и ваши блюда лучшие в Харькове!) всегда очень вкусно, вовремя, всегда вежливые курьеры и девушки на телефоне</p>
                  </div>
               </div> <div className="response">
                  <div className="response_header">
                     <div className="response_header_name">Розалия</div>
                     <div className="response_header_date">02.24.21</div>
                  </div>
                  <div className="response_text_content">
                     <p className="response_text">Ваша доставка и ваши блюда лучшие в Харькове!) всегда очень вкусно, вовремя, всегда вежливые курьеры и девушки на телефоне</p>
                  </div>
               </div>
            </div>
         </div>
         <AdaptMenu />
      </div>
   )
}

export default Reviews;