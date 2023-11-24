import '../style/productItem.scss'

import foodImage from '../image/fil.png'

import slide1 from '../image/slide1.png';
import slide2 from '../image/slide2.png';
import slide3 from '../image/slide3.png';
import OrderInf from '../components/OrderInf';
import AdaptMenu from '../components/AdaptMenu';

function ProductItem() {
   return (
      <div className="product_item_wrapper">
         <div className="product_item__container">
            <div className="prodct_item_content">
               <div className="product_item_controls">
                  <div className="product_item_controls_pre">
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="10" fill="#FF9846" />
                        <path d="M11.75 5.75L7.25 10.25L11.75 14.75" stroke="#F2F2F2" strokeLinecap="round" />
                     </svg>
                     <span>Back</span>
                  </div>
                  <div className="product_item_controls_next">
                     <span>Next</span>
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="10" fill="#FF9846" />
                        <path d="M8 6L12.5 10.5L8 15" stroke="#F2F2F2" strokeLinecap="round" />
                     </svg>
                  </div>
               </div>
               <article className="product_item">
                  <figure className="product_item_img">
                     <img src={foodImage} alt="food" />
                  </figure>
                  <section className="product_item_info">
                     <h2 className="product_item_name">Филадельфия и лосось сет</h2>
                     <p className="product_item_weight">290 грамм</p>
                     <div className="product_price_count">
                        <p className="product_item_price">1150 СОМ</p>
                        <div className="product_item_count">
                           <button className="product_counter_button">
                              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="2" viewBox="0 0 23 2" fill="none">
                                 <path d="M1 1L22 0.999999" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
                              </svg>
                           </button>
                           <span id='quantity'>10</span>
                           <button className="product_counter_button">
                              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                 <ellipse cx="20" cy="20" rx="20" ry="20" transform="rotate(90 20 20)" fill="#F46D40" />
                                 <path d="M20 9V30" stroke="#F2F2F2" strokeWidth="2" strokeLinecap="round" />
                                 <path d="M10 19L31 19" stroke="#F2F2F2" strokeWidth="2" strokeLinecap="round" />
                              </svg>
                           </button>
                        </div>
                     </div>
                     <h3 className="product_item_composition_title">Состав</h3>
                     <p className="product_item_composition_details">
                        Лосось, сыр "Филадельфия", огурец, авокадо
                     </p>
                     <button className="product_buy_button">Want!</button>
                  </section>
               </article>
               <div className="product_slider_wrapper">
                  <h3 className="product_slider_title">Рекомендуем к этому товару</h3>
                  <div className="product_slider">
                     <div className="product_sliders">
                        <div className="product_slide">
                           <figure className="product_slide_img">
                              <img src={slide1} alt="food" />
                           </figure>
                           <h3 className="product_slide_name">Филадельфия</h3>
                           <div className="product_slide_cena">
                              <p className="product_slide_price">140 COM</p>
                              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                 <ellipse cx="13" cy="13" rx="13" ry="13" transform="rotate(90 13 13)" fill="#F46D40" />
                                 <path d="M13 5.84998V19.5" stroke="#F2F2F2" strokeWidth="2" strokeLinecap="round" />
                                 <path d="M6.5 12.35L20.15 12.35" stroke="#F2F2F2" strokeWidth="2" strokeLinecap="round" />
                              </svg>
                           </div>
                        </div>
                        <div className="product_slide">
                           <figure className="product_slide_img">
                              <img src={slide3} alt="food" />
                           </figure>
                           <h3 className="product_slide_name">Банзай</h3>
                           <div className="product_slide_cena">
                              <p className="product_slide_price">140 COM</p>
                              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                 <ellipse cx="13" cy="13" rx="13" ry="13" transform="rotate(90 13 13)" fill="#F46D40" />
                                 <path d="M13 5.84998V19.5" stroke="#F2F2F2" strokeWidth="2" strokeLinecap="round" />
                                 <path d="M6.5 12.35L20.15 12.35" stroke="#F2F2F2" strokeWidth="2" strokeLinecap="round" />
                              </svg>
                           </div>
                        </div>
                        <div className="product_slide">
                           <figure className="product_slide_img">
                              <img src={slide2} alt="food" />
                           </figure>
                           <h3 className="product_slide_name">Аригато</h3>
                           <div className="product_slide_cena">
                              <p className="product_slide_price">140 COM</p>
                              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                 <ellipse cx="13" cy="13" rx="13" ry="13" transform="rotate(90 13 13)" fill="#F46D40" />
                                 <path d="M13 5.84998V19.5" stroke="#F2F2F2" strokeWidth="2" strokeLinecap="round" />
                                 <path d="M6.5 12.35L20.15 12.35" stroke="#F2F2F2" strokeWidth="2" strokeLinecap="round" />
                              </svg>
                           </div>
                        </div>
                        <div className="product_slide">
                           <figure className="product_slide_img">
                              <img src={slide2} alt="food" />
                           </figure>
                           <h3 className="product_slide_name">НеАригато</h3>
                           <div className="product_slide_cena">
                              <p className="product_slide_price">140 COM</p>
                              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                 <ellipse cx="13" cy="13" rx="13" ry="13" transform="rotate(90 13 13)" fill="#F46D40" />
                                 <path d="M13 5.84998V19.5" stroke="#F2F2F2" strokeWidth="2" strokeLinecap="round" />
                                 <path d="M6.5 12.35L20.15 12.35" stroke="#F2F2F2" strokeWidth="2" strokeLinecap="round" />
                              </svg>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="product_slider_control">
                     <div className="product_slider_control_pre">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" fill="none">
                           <ellipse cx="30" cy="30" rx="30" ry="30" transform="rotate(90 30 30)" fill="#111111" />
                           <path d="M36 15L23 28.5L36 42" stroke="#F2F2F2" strokeLinecap="round" />
                        </svg>
                     </div>
                     <div className="product_slider_control_next">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" fill="none">
                           <ellipse cx="30" cy="30" rx="30" ry="30" transform="rotate(90 30 30)" fill="#111111" />
                           <path d="M23 15L36 28.5L23 42" stroke="#F2F2F2" strokeLinecap="round" />
                        </svg>
                     </div>
                  </div>
               </div>
               <OrderInf />
            </div>

         </div>
         <AdaptMenu />
      </div>
   )
}

export default ProductItem;