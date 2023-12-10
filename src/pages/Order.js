import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import Basket from '../components/Basket';

import '../style/order.scss'

function Order() {
   const { t } = useTranslation();

   const [couter, setCounter] = useState(1);
   const [couter2, setCounter2] = useState(1);
   return (
      <div className="order_wrapper">
         <div className="order">
            <div className="header_contact_phone">
               <NavLink to={'/'}>
                  <div className="header_navigation">
                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="10" fill="#FF9846" />
                        <path d="M11.75 5.75L7.25 10.25L11.75 14.75" stroke="#F2F2F2" strokeLinecap="round" />
                     </svg>
                     {t("order.continue_selection")}</div>
               </NavLink>
               <div className="header_contact_phone_inf">
                  <h1 className="header_contact_title"> {t("order.us_phone")}</h1>
                  <a href="tel: +996705188955">+996 705 188 955</a>
                  <a href="tel: +996555188955">+996 555 188 955</a>
                  <div className="header_work_time_wrapper">
                     <svg className="header_work_time_icon" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_7_41)">
                           <path d="M7.49999 2.44565C7.67934 2.44565 7.82608 2.29891 7.82608 2.11956V1.95652C7.82608 1.77717 7.67934 1.63043 7.49999 1.63043C7.32064 1.63043 7.1739 1.77717 7.1739 1.95652V2.11956C7.1739 2.29891 7.32064 2.44565 7.49999 2.44565Z" fill="#FF9846" />
                           <path d="M7.49999 12.5544C7.32064 12.5544 7.1739 12.7011 7.1739 12.8804V13.0435C7.1739 13.2228 7.32064 13.3696 7.49999 13.3696C7.67934 13.3696 7.82608 13.2228 7.82608 13.0435V12.8804C7.82608 12.7011 7.67934 12.5544 7.49999 12.5544Z" fill="#FF9846" />
                           <path d="M2.11956 7.17391H1.95652C1.77717 7.17391 1.63043 7.32065 1.63043 7.5C1.63043 7.67935 1.77717 7.82609 1.95652 7.82609H2.11956C2.29891 7.82609 2.44565 7.67935 2.44565 7.5C2.44565 7.32065 2.29891 7.17391 2.11956 7.17391Z" fill="#FF9846" />
                           <path d="M13.0435 7.17391H12.8804C12.7011 7.17391 12.5543 7.32065 12.5543 7.5C12.5543 7.67935 12.7011 7.82609 12.8804 7.82609H13.0435C13.2228 7.82609 13.3696 7.67935 13.3696 7.5C13.3696 7.32065 13.2228 7.17391 13.0435 7.17391Z" fill="#FF9846" />
                           <path d="M3.81521 3.3587C3.68478 3.22826 3.48913 3.22826 3.35869 3.3587C3.22826 3.48913 3.22826 3.68479 3.35869 3.81522L3.47282 3.92935C3.53804 3.99457 3.61956 4.02718 3.70108 4.02718C3.7826 4.02718 3.86413 3.99457 3.92934 3.92935C4.05978 3.79892 4.05978 3.60326 3.92934 3.47283L3.81521 3.3587Z" fill="#FF9846" />
                           <path d="M3.47282 11.0707L3.35869 11.1848C3.22826 11.3152 3.22826 11.5109 3.35869 11.6413C3.42391 11.7065 3.50543 11.7391 3.58695 11.7391C3.66847 11.7391 3.74999 11.7065 3.81521 11.6413L3.92934 11.5272C4.05978 11.3967 4.05978 11.2011 3.92934 11.0707C3.79891 10.9402 3.60326 10.9402 3.47282 11.0707Z" fill="#FF9846" />
                           <path d="M11.1848 3.3587L11.0707 3.47283C10.9402 3.60326 10.9402 3.79892 11.0707 3.92935C11.1359 3.99457 11.2174 4.02718 11.2989 4.02718C11.3804 4.02718 11.462 3.99457 11.5272 3.92935L11.6413 3.81522C11.7718 3.68479 11.7718 3.48913 11.6413 3.3587C11.5109 3.22826 11.3152 3.22826 11.1848 3.3587Z" fill="#FF9846" />
                           <path d="M7.82608 7.36957V4.40218C7.82608 4.22283 7.67934 4.07609 7.49999 4.07609C7.32064 4.07609 7.1739 4.22283 7.1739 4.40218V7.5C7.1739 7.58152 7.20651 7.66305 7.27173 7.72826L10.8424 11.2989C10.9076 11.3641 10.9891 11.3967 11.0706 11.3967C11.1522 11.3967 11.2337 11.3641 11.2989 11.2989C11.4293 11.1685 11.4293 10.9728 11.2989 10.8424L7.82608 7.36957Z" fill="#FF9846" />
                           <path d="M7.5 0C3.3587 0 0 3.3587 0 7.5C0 11.6413 3.3587 15 7.5 15C11.6413 15 15 11.6413 15 7.5C15 3.3587 11.6413 0 7.5 0ZM7.5 14.3478C3.71739 14.3478 0.652174 11.2826 0.652174 7.5C0.652174 3.71739 3.71739 0.652174 7.5 0.652174C11.2826 0.652174 14.3478 3.71739 14.3478 7.5C14.3478 11.2826 11.2826 14.3478 7.5 14.3478Z" fill="#FF9846" />
                        </g>
                        <defs>
                           <clipPath id="clip0_7_41">
                              <rect width="15" height="15" fill="white" />
                           </clipPath>
                        </defs>
                     </svg>
                     <div className="header_work_time">{t("order.working_hours")}</div>
                  </div>
               </div>
            </div>
            <form className="order-form">
               <h2 id="name_form">{t("order.your_data")}</h2>
               <div className="half_form half_form_one">
                  <div className="form-group">
                     <input type="tel" id="phone" name="phone" required placeholder={t("order.placeholder.phone")} />
                     <input type="text" id="name" name="name" required placeholder={t("order.placeholder.name")} />
                  </div>
                  <div className="form-group">
                     <label htmlFor="cash">
                        <button id="cash" className="color_button" name="payment" value="cash">
                           <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                              <g clipPath="url(#clip0_25_471)">
                                 <path d="M17.1821 9.0755V6.54563C17.1821 5.68778 16.5167 4.99013 15.676 4.92248L13.3265 0.818851C13.1088 0.439323 12.7572 0.168062 12.3366 0.0554233C11.9179 -0.0564485 11.4801 0.00230624 11.1053 0.220412L3.05136 4.90928H1.63684C0.734385 4.90928 0.000488281 5.64314 0.000488281 6.54563V16.3637C0.000488281 17.2661 0.734347 18 1.63684 18H15.5457C16.4482 18 17.1821 17.2661 17.1821 16.3637V13.8338C17.6572 13.6644 18.0002 13.2145 18.0002 12.6819V10.2274C18.0002 9.69476 17.6572 9.24494 17.1821 9.0755ZM14.7253 4.90928H11.1597L13.8339 3.35236L14.7253 4.90928ZM13.4274 2.64236L9.5336 4.90928H7.91849L13.0236 1.93703L13.4274 2.64236ZM11.5172 0.927501C11.7022 0.819235 11.9183 0.790471 12.1248 0.84562C12.3338 0.901537 12.508 1.03657 12.6162 1.22553L12.6171 1.22703L6.2925 4.90928H4.67747L11.5172 0.927501ZM16.3639 16.3637C16.3639 16.8147 15.9967 17.1818 15.5457 17.1818H1.63684C1.18582 17.1818 0.818682 16.8147 0.818682 16.3637V6.54563C0.818682 6.09462 1.18582 5.72748 1.63684 5.72748H15.5457C15.9967 5.72748 16.3639 6.09462 16.3639 6.54563V9.00014H13.9094C12.5559 9.00014 11.4549 10.1011 11.4549 11.4546C11.4549 12.8081 12.5559 13.9091 13.9094 13.9091H16.3639V16.3637ZM17.1821 12.6819C17.1821 12.9076 16.9987 13.091 16.773 13.091H13.9094C13.0069 13.091 12.273 12.3571 12.273 11.4546C12.273 10.5522 13.0069 9.81829 13.9094 9.81829H16.773C16.9987 9.81829 17.1821 10.0017 17.1821 10.2274V12.6819Z" fill="white" />
                                 <path d="M13.909 10.6365C13.458 10.6365 13.0908 11.0036 13.0908 11.4546C13.0908 11.9057 13.458 12.2728 13.909 12.2728C14.36 12.2728 14.7271 11.9057 14.7271 11.4546C14.7272 11.0036 14.36 10.6365 13.909 10.6365Z" fill="white" />
                              </g>
                              <defs>
                                 <clipPath id="clip0_25_471">
                                    <rect width="18" height="18" fill="white" />
                                 </clipPath>
                              </defs>
                           </svg>
                           {t("order.cash_on_delivery")}</button>

                     </label>
                     <label htmlFor="card">
                        <button id="card" name="payment" value="card">
                           <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                              <g clipPath="url(#clip0_24_1854)">
                                 <path d="M19.7083 3.66665H2.29165C1.0285 3.66665 0 4.69515 0 5.95834V16.0417C0 17.3048 1.0285 18.3333 2.29165 18.3333H19.7083C20.9715 18.3333 22 17.3048 22 16.0417V5.95834C22 4.69515 20.9715 3.66665 19.7083 3.66665ZM21.0833 16.0416C21.0833 16.7997 20.4664 17.4166 19.7083 17.4166H2.29165C1.53355 17.4166 0.916652 16.7997 0.916652 16.0416V5.95834C0.916652 5.20025 1.53355 4.58334 2.29165 4.58334H19.7083C20.4664 4.58334 21.0833 5.20025 21.0833 5.95834V16.0416H21.0833Z" fill="#111111" />
                                 <path d="M21.5417 6.41665H0.458348C0.205348 6.41665 0 6.622 0 6.875V9.625C0 9.878 0.205348 10.0833 0.458348 10.0833H21.5417C21.7947 10.0833 22 9.878 22 9.625V6.875C22 6.622 21.7947 6.41665 21.5417 6.41665ZM21.0833 9.16665H0.916652V7.3333H21.0833V9.16665H21.0833Z" fill="#111111" />
                                 <path d="M8.70835 12.8333H3.20835C2.95535 12.8333 2.75 13.0387 2.75 13.2917C2.75 13.5447 2.95535 13.75 3.20835 13.75H8.70835C8.96135 13.75 9.1667 13.5446 9.1667 13.2916C9.1667 13.0386 8.96135 12.8333 8.70835 12.8333Z" fill="#111111" />
                                 <path d="M8.70835 14.6667H3.20835C2.95535 14.6667 2.75 14.872 2.75 15.125C2.75 15.378 2.95535 15.5834 3.20835 15.5834H8.70835C8.96135 15.5834 9.1667 15.378 9.1667 15.125C9.16665 14.872 8.96135 14.6667 8.70835 14.6667Z" fill="#111111" />
                                 <path d="M17.8751 11.9167H16.9585C16.2004 11.9167 15.5835 12.5336 15.5835 13.2917V14.2083C15.5835 14.9664 16.2004 15.5833 16.9585 15.5833H17.8751C18.6332 15.5833 19.2501 14.9664 19.2501 14.2083V13.2917C19.2501 12.5336 18.6332 11.9167 17.8751 11.9167ZM18.3335 14.2084C18.3335 14.4614 18.1281 14.6667 17.8751 14.6667H16.9585C16.7055 14.6667 16.5001 14.4614 16.5001 14.2084V13.2917C16.5001 13.0387 16.7055 12.8334 16.9585 12.8334H17.8751C18.1281 12.8334 18.3335 13.0387 18.3335 13.2917V14.2084Z" fill="#111111" />
                              </g>
                              <defs>
                                 <clipPath id="clip0_24_1854">
                                    <rect width="22" height="22" fill="white" />
                                 </clipPath>
                              </defs>
                           </svg>
                           {t("order.card_payment")}</button>

                     </label>
                  </div>
                  <div className="form-group">
                     <label htmlFor="amount">{t("order.prepare_change_for")}</label>
                     <input type="text" id="amount" name="amount" placeholder={t("order.placeholder.amount")} />
                  </div>
                  <div className="form-group">
                     <textarea id="comment" name="comment" rows="1" placeholder={t("order.placeholder.order_comment")}></textarea>
                  </div>
                  <div className="form-group_counter">
                     <div id='counter' >
                        <h3>{t("order.chopsticks_and_sauce_holder")}</h3>
                        <button className='counter' onClick={() => setCounter(couter > 1 ? couter - 1 : 1)}>
                           <svg xmlns="http://www.w3.org/2000/svg" width="12" height="2" viewBox="0 0 12 2" fill="none">
                              <path d="M1 1L11 1" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
                           </svg>
                        </button>
                        <span>{couter}</span>
                        <button className='counter' onClick={() => setCounter(couter + 1)}>
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                              <ellipse cx="10.3602" cy="10.2589" rx="9.64029" ry="9.64029" transform="rotate(90 10.3602 10.2589)" fill="#F46D40" />
                              <path d="M10.3604 4.95679V15.0791" stroke="#F2F2F2" strokeWidth="2" strokeLinecap="round" />
                              <path d="M5.54004 9.77698L15.6623 9.77698" stroke="#F2F2F2" strokeWidth="2" strokeLinecap="round" />
                           </svg>
                        </button>

                     </div>
                     <div id='counter2' >
                        <h3>{t("order.chopsticks_and_sauce_holder")}</h3>
                        <button className='counter' onClick={() => setCounter2(couter2 > 1 ? couter2 - 1 : 1)}>
                           <svg xmlns="http://www.w3.org/2000/svg" width="12" height="2" viewBox="0 0 12 2" fill="none">
                              <path d="M1 1L11 1" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
                           </svg>
                        </button>
                        <span>{couter2}</span>
                        <button className='counter' onClick={() => setCounter2(couter2 + 1)}>
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                              <ellipse cx="10.3602" cy="10.2589" rx="9.64029" ry="9.64029" transform="rotate(90 10.3602 10.2589)" fill="#F46D40" />
                              <path d="M10.3604 4.95679V15.0791" stroke="#F2F2F2" strokeWidth="2" strokeLinecap="round" />
                              <path d="M5.54004 9.77698L15.6623 9.77698" stroke="#F2F2F2" strokeWidth="2" strokeLinecap="round" />
                           </svg>
                        </button>
                     </div>
                  </div>
                  <div className="form-group">
                     <input type="text" id="promo" name="promo" placeholder={t("order.placeholder.enter_promo_code")} />
                  </div>
               </div>
               <div className="half_form half_form_two">
                  <div className="form-group">
                     <button className="button_delivery color_button" name="delivery" >{t("order.courier_delivery")}</button>
                     <button className="button_delivery" name="delivery" >{t("order.self_pickup")}</button>
                  </div>
                  <div className="form-group place">
                     <div className="form-group_place_one">
                        <input type="text" className="place" name="street" placeholder={t("order.placeholder.street")} />
                        <input type="text" className="place" name="home" placeholder={t("order.placeholder.house")} />
                     </div>
                     <div className="form-group_place_two">
                        <input type="number" className="place" name="flat" placeholder={t("order.placeholder.apartment")} />
                        <input type="number" className="place" name="flat" placeholder={t("order.placeholder.entrance")} />
                        <input type="number" className="place" name="floor" placeholder={t("order.placeholder.floor")} />
                        <input type="number" className="place" name="code" placeholder={t("order.placeholder.code")} />
                     </div>

                  </div>
                  <div className="form-group">
                     <button className="button_time color_button" name="time">{t("order.immediate_delivery")}</button>
                     <button className="button_time" name="time" >{t("order.scheduled_delivery")}</button>
                  </div>
                  <div className="form-group">
                     <input type="mail" id="email" name="email" placeholder={t("order.placeholder.optional")} />
                  </div>
               </div>

               <button type="submit" id="order">{t("order.place_order")}</button>

            </form>
            <p id="offerta">
               {t("order.confirmation_message")} <a href="#"> {t("order.public_offert")}</a>
            </p>
         </div >
         <Basket />
      </div >
   )
}


export default Order;