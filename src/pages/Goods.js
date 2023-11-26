import '../style/goods.scss';


import OrderInf from '../components/OrderInf';

//import arrFilter from '../image/arr_filter.svg';
import AdaptMenu from '../components/AdaptMenu';
import Item from '../components/Item';

import { goods } from '../data/foods-item';

function Goods() {

   function filterOpen(event) {
      if (!event.target.closest('.filter_but_active')) return;
      const filter = document.querySelector('.goods_filter_button_close');
      if (filter.style.display === 'flex') {
         filter.style.display = 'none';
      } else {
         filter.style.display = 'flex';
      }

   }
   return (
      <div className="goods">
         <div className="goods__container">
            <div className="goods_content">
               <div className="goods__min_container">
                  <div className="goods_header_wrapper">
                     <div className="goods_header_title">
                        <svg xmlns="http://www.w3.org/2000/svg" width="41" height="43" viewBox="0 0 41 43" fill="none">
                           <circle cx="11.4666" cy="31.5332" r="10.9666" stroke="#A4ACAD" />
                           <circle cx="11.4666" cy="31.5332" r="2.86665" fill="#A4ACAD" />
                           <circle cx="28.6665" cy="11.4666" r="10.9666" stroke="#A4ACAD" />
                           <circle cx="28.6665" cy="11.4667" r="2.86665" fill="#A4ACAD" />
                           <circle cx="8.59995" cy="11.4667" r="5.2333" stroke="#A4ACAD" />
                           <circle cx="8.59993" cy="11.4665" r="1.43332" fill="#A4ACAD" />
                           <circle cx="31.5331" cy="34.3996" r="5.2333" stroke="#A4ACAD" />
                           <circle cx="31.5331" cy="34.3994" r="1.43332" fill="#A4ACAD" />
                        </svg>
                        <span className='goods_title'>Сеты</span>
                     </div>
                     <div className="goods_header_filter" onClick={filterOpen}>
                        <div className="goods_filter_burger">
                           <div className="filter_burger">
                              <span></span>
                           </div>
                        </div>
                        <span className='goods_filter_title'>Сортировка</span>

                        <button className="filter_but_active">По умолчанию</button>
                        {/* <img className='goods_arr' src={arrFilter} alt="arrow" /> */}
                        <div className="goods_filter_button_close">
                           <button className="goods_filter_button">По умолчанию</button>
                           <button className="goods_filter_button">Название</button>
                           <button className="goods_filter_button">Сначала дешевле</button>
                           <button className="goods_filter_button">Сначала дороже</button>
                           <button className="goods_filter_button">Количество кусочков</button>
                           <button className="goods_filter_button">Вес</button>
                        </div>

                     </div>
                  </div>
                  <div className="goods_items_wrapper">
                     {
                        goods.map(item => {
                           return (
                              <Item key={item.id} goods={item} />
                           )

                        })
                     }
                  </div>
                  <OrderInf />
               </div>
            </div>
         </div>
         <AdaptMenu />
      </div>
   )
}

export default Goods;