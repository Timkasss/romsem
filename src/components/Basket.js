import { useEffect, useContext } from "react";
import { NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { ProductContext } from './context';
function Basket({ order }) {
   const { arrBasket, setArrBasket } = useContext(ProductContext)
   const { t, i18n } = useTranslation();


   useEffect(() => {
      const store = localStorage.getItem('store');
      if (store) {
         setArrBasket(JSON.parse(store))
      }
   }, [setArrBasket])

   useEffect(() => {
      if (arrBasket.length > 0) {
         localStorage.setItem('store', JSON.stringify([...arrBasket]));
      }
      return () => localStorage.removeItem("store");

   }, [arrBasket]);

   const decreaseCount = itemId => {
      setArrBasket(prevArr => {
         return prevArr.map(item => {
            if (item.id === itemId && item.count > 1) {
               return { ...item, count: item.count - 1 };
            }
            return item;
         });
      });
   };

   const increaseCount = itemId => {
      setArrBasket(prevArr => {
         return prevArr.map(item => {
            if (item.id === itemId) {
               return { ...item, count: item.count + 1 };
            }
            return item;
         });
      });
   };
   const allCount = arrBasket.reduce((all, item) => all + parseFloat(item.cost), 0);
   let discount = 200;
   let allSuma = allCount - discount;

   const orderLocation = useLocation();
   const orderRender = orderLocation.pathname;


   const amountProduct = arrBasket.length;

   function closeProduct(item) {
      const filteredBasket = arrBasket.filter(product => product.id !== item.id);
      setArrBasket(filteredBasket);
   }

   return (

      <div className={`dev_bask_wrapper ${order ? 'active_bask' : ''}`} >
         <section className="basket">
            <h1 className="basket_state">{!arrBasket ? t('basket.title') : t('basket.untitle')}</h1>
            {
               arrBasket.length === 0 ?
                  <p className="basket_call">{t('basket.addPrompt')}</p>
                  :
                  <div className="basket_item_wrapper">
                     {
                        arrBasket.map((item) => {
                           return (
                              <article className="basket_item" key={item.id}>
                                 <div className="basket_item_img">
                                    <img src={item.img} alt="food" />
                                 </div>
                                 <section className="basket_item_content">
                                    <h2 className="basket_item_content_name">{i18n.language === 'ua' ? item.name : item.name_en}</h2>
                                    <div className="basket_item_content_cena">
                                       <div className="basket_item_content_count">
                                          <button className="product_counter_but" onClick={() => decreaseCount(item.id)}>
                                             <svg xmlns="http://www.w3.org/2000/svg" width="12" height="2" viewBox="0 0 12 2" fill="none">
                                                <path d="M1 1L11 1" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
                                             </svg>
                                          </button>
                                          <span>{item.count}</span>
                                          <button className="product_counter_but" onClick={() => increaseCount(item.id)}>
                                             <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                <ellipse cx="10.3602" cy="10.2589" rx="9.64029" ry="9.64029" transform="rotate(90 10.3602 10.2589)" fill="#F46D40" />
                                                <path d="M10.3604 4.95679V15.0791" stroke="#F2F2F2" strokeWidth="2" strokeLinecap="round" />
                                                <path d="M5.54004 9.77698L15.6623 9.77698" stroke="#F2F2F2" strokeWidth="2" strokeLinecap="round" />
                                             </svg>
                                          </button>
                                       </div>
                                       <div className="basket_item_content_suma">
                                          {item.cost}
                                       </div>
                                    </div>
                                    <div className="close" onClick={() => closeProduct(item)}>⨯</div>
                                 </section>
                              </article>
                           )
                        })
                     }
                  </div>
            }
            {
               orderRender === '/order' ?
                  <div className="basket_list_infa">
                     <div className="basket_list_infa_count basket_infa">
                        <h1 className="basket_list_infa_count_name"><span>{amountProduct}</span> {t('basket.item')}</h1>
                        <h1 className="basket_list_infa_count_meaning">{allCount} СОМ</h1>
                     </div>
                     <div className="basket_list_infa_sale basket_infa">
                        <h1 className="basket_list_infa_count_name">{t('basket.discount')}</h1>
                        <h1 className="basket_list_infa_count_meaning"><span>{discount}</span> СОМ</h1>
                     </div>
                     <div className="basket_list_infa_delivery basket_infa">
                        <h1 className="basket_list_infa_count_name">{t('basket.shipping')}</h1>
                        <h1 className="basket_list_infa_count_meaning">{t('basket.free')}</h1>
                     </div>
                     <div className="basket_list_infa_total basket_infa">
                        <h1 className="basket_list_infa_count_name col">{t('basket.total')}</h1>
                        <h1 className="basket_list_infa_count_meaning col">{allSuma} СОМ</h1>
                     </div>
                  </div>
                  : <></>

            }

            <div className="basket_button_wrapper">
               {
                  arrBasket.length === 0 ?
                     <button className="basket_button">
                        {t('basket.freeShipping')}
                     </button>
                     :
                     orderRender !== '/order' ?
                        <div className="basket_button_end">
                           <p className="basket_cost_full">{allCount} COM</p>
                           <NavLink to={'/order'} className="basket_button_order">{t('basket.checkout')}</NavLink>
                        </div>
                        : <></>
               }

            </div>
         </section>
         {
            arrBasket.length === 0 && <section className="delivery">
               <h1 className="delivery_address">{t('basket.enterAddress')}</h1>
               <p className="delivery_time">{t('basket.deliveryTime')}</p>
               <iframe
                  title="Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.606907400295!2d-73.9289123!3d40.8585535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2f404615e1ead%3A0x6b83a5cd474c2e30!2zNjQgSGlsbHNpZGUgQXZlLCBOZXcgWW9yaywgTlkgMTAwNDAsINCh0KjQkA!5e0!3m2!1sru!2sua!4v1700072101333!5m2!1sru!2sua"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
               ></iframe>
               <div className="deliver_icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
                     <g clipPath="url(#clip0_7_1440)">
                        <path d="M19 0C11.8889 0 6.10352 5.78532 6.10352 12.8964C6.10352 15.754 7.7859 20.0999 11.3981 26.5731C13.863 30.9899 16.3166 34.7206 16.4201 34.8778L18.1935 37.5658C18.3723 37.8369 18.6752 38 19 38C19.3248 38 19.6278 37.8369 19.8066 37.5658L21.5799 34.8779C21.6824 34.7226 24.1181 31.0241 26.6019 26.5731C30.2141 20.1002 31.8965 15.7543 31.8965 12.8964C31.8965 5.78532 26.1111 0 19 0ZM24.9144 25.6313C22.4651 30.0201 20.0679 33.6605 19.9669 33.8135L19 35.2791L18.0335 33.8139C17.9319 33.6597 15.5163 29.9866 13.0856 25.6313C9.73498 19.6268 8.03605 15.3422 8.03605 12.8964C8.03605 6.85092 12.9544 1.93254 19 1.93254C25.0456 1.93254 29.964 6.85092 29.964 12.8964C29.964 15.3425 28.2651 19.627 24.9144 25.6313Z" fill="#F2F2F2" />
                        <path d="M19 5.6655C15.0572 5.6655 11.8496 8.8732 11.8496 12.8159C11.8496 16.7586 15.0572 19.9663 19 19.9663C22.9428 19.9663 26.1504 16.7586 26.1504 12.8159C26.1504 8.8732 22.9428 5.6655 19 5.6655ZM19 18.0337C16.1228 18.0337 13.7821 15.693 13.7821 12.8159C13.7821 9.93872 16.1228 7.59803 19 7.59803C21.8772 7.59803 24.2178 9.93872 24.2178 12.8159C24.2178 15.693 21.8772 18.0337 19 18.0337Z" fill="#F2F2F2" />
                     </g>
                     <defs>
                        <clipPath id="clip0_7_1440">
                           <rect width="38" height="38" fill="white" />
                        </clipPath>
                     </defs>
                  </svg>
               </div>
            </section>
         }

      </div >


   )
}

export default Basket;