import '../style/order.scss'

function Order() {
   return (
      <div className="order">
         <div className="header_contact_phone">
            <h1 className="header_contact_title">Us phone</h1>
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
               <div className="header_work_time">работаем с 10:00 до 00:00</div>
            </div>
         </div>
         <form className="order-form">
            <h2>Ваші дані</h2>
            <div className="form-group">
               <input type="tel" id="phone" name="phone" required placeholder='Телефон' />
               <input type="text" id="name" name="name" required placeholder="Ім'я" />
            </div>
            <div className="form-group">
               <label htmlFor="cash">
                  <input type="radio" id="cash" name="payment" value="cash" /> Наложка
               </label>
               <label htmlFor="card">
                  <input type="radio" id="card" name="payment" value="card" /> Карта
               </label>
            </div>
            <div className="form-group">
               <label htmlFor="amount">Підготувати здачу з</label>
               <input type="text" id="amount" name="amount" placeholder='Сума' />
            </div>
            <div className="form-group">
               <textarea id="comment" name="comment" rows="1" placeholder='Коментар до замовлення'></textarea>
            </div>
            <div className="form-group_counter">
               <div id='counter'>
                  <h3>Палички + соусник звичайні</h3>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="2" viewBox="0 0 12 2" fill="none">
                     <path d="M1 1L11 1" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <span>10</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                     <ellipse cx="10.3602" cy="10.2589" rx="9.64029" ry="9.64029" transform="rotate(90 10.3602 10.2589)" fill="#F46D40" />
                     <path d="M10.3604 4.95679V15.0791" stroke="#F2F2F2" strokeWidth="2" strokeLinecap="round" />
                     <path d="M5.54004 9.77698L15.6623 9.77698" stroke="#F2F2F2" strokeWidth="2" strokeLinecap="round" />
                  </svg>
               </div>
               <div id='counter2'>
                  <h3>Палички + соусник звичайні</h3>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="2" viewBox="0 0 12 2" fill="none">
                     <path d="M1 1L11 1" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <span>10</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                     <ellipse cx="10.3602" cy="10.2589" rx="9.64029" ry="9.64029" transform="rotate(90 10.3602 10.2589)" fill="#F46D40" />
                     <path d="M10.3604 4.95679V15.0791" stroke="#F2F2F2" strokeWidth="2" strokeLinecap="round" />
                     <path d="M5.54004 9.77698L15.6623 9.77698" stroke="#F2F2F2" strokeWidth="2" strokeLinecap="round" />
                  </svg>
               </div>
            </div>
            <div className="form-group">
               <input type="text" id="promo" name="promo" placeholder='Введіть промокод' />
            </div>
            <button type="submit">Отправить заказ</button>
         </form>



      </div>
   )
}


export default Order;