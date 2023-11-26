import '../style/basketList.scss'

import miniImg from '../image/fil.png';

function BasketList() {
   return (
      <div className="basket_list_wrapper">
         <div className="baslet_list_button">
            <button className="basket_button">Кошик</button>
         </div>
         <div className="basket_list">
            <figure className="basket_list_img">
               <img src={miniImg} alt="food" />
            </figure>
            <section className="basket_list_content">
               <h2 className="basket_list_content_name">Самая большая Филадельфия</h2>
               <div className="basket_list_content_cena">
                  <div className="basket_list_content_count">
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
                  <div className="basket_list_content_suma">
                     170 COM
                  </div>
               </div>
            </section>
         </div>
         <div className="basket_list_infa">
            <div className="basket_list_infa_count basket_infa">
               <h1 className="basket_list_infa_count_name">1 товар</h1>
               <h1 className="basket_list_infa_count_meaning">170 СОМ</h1>
            </div>
            <div className="basket_list_infa_sale basket_infa">
               <h1 className="basket_list_infa_count_name">Скидка</h1>
               <h1 className="basket_list_infa_count_meaning">0 СОМ</h1>
            </div>
            <div className="basket_list_infa_delivery basket_infa">
               <h1 className="basket_list_infa_count_name">Доставка</h1>
               <h1 className="basket_list_infa_count_meaning">Бесплатно</h1>
            </div>
            <div className="basket_list_infa_total basket_infa">
               <h1 className="basket_list_infa_count_name col">Итого</h1>
               <h1 className="basket_list_infa_count_meaning col">170 СОМ</h1>
            </div>
         </div>
      </div>
   )
}

export default BasketList;