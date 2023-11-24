import '../style/goods.scss';

import set1 from '../image/setu/set1.png';
import set2 from '../image/setu/set2.png';
import set3 from '../image/setu/set3.png';
import set4 from '../image/setu/set4.png';
import set5 from '../image/setu/set5.png';
import set6 from '../image/setu/set6.png';
import set7 from '../image/setu/set7.png';
import set8 from '../image/setu/set8.png';
import set9 from '../image/setu/set9.png';
import OrderInf from '../components/OrderInf';

import arrFilter from '../image/arr_filter.svg';
import AdaptMenu from '../components/AdaptMenu';


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
                     <article className="goods_item item_block">
                        <div className="goods_item_img item_block_img">
                           <img className='item_img' src={set1} alt="food" />
                        </div>
                        <div className="goods_item_detail item_detail">
                           <div className="goods_item_name item_block_name">Саломон сет</div>
                           <div className="goods_item_quantity item_block_quantity">2050 грамм, 45 кусочков</div>
                           <div className="goods_item_buy item_block_buy">
                              <div className="goods_item_buy_cena item_block_cena">2100 COM</div>
                              <div className="goods_item_buy_button item_block_button">
                                 <button className="goods_item_button item_button">Want!</button>
                              </div>
                           </div>
                        </div>
                     </article>
                     <article className="goods_item item_block">
                        <div className="goods_item_img item_block_img">
                           <img className='item_img' src={set2} alt="food" />
                        </div>
                        <div className="goods_item_detail item_detail">
                           <div className="goods_item_name item_block_name">Сет "5 Филадельфий"</div>
                           <div className="goods_item_quantity item_block_quantity">2050 грамм, 45 кусочков</div>
                           <div className="goods_item_buy item_block_buy">
                              <div className="goods_item_buy_cena item_block_cena">2100 COM</div>
                              <div className="goods_item_buy_button item_block_button">
                                 <button className="goods_item_button item_button">Want!</button>
                              </div>
                           </div>
                        </div>
                     </article>
                     <article className="goods_item item_block">
                        <div className="goods_item_img item_block_img">
                           <img className='item_img' src={set3} alt="food" />
                        </div>
                        <div className="goods_item_detail item_detail">
                           <div className="goods_item_name item_block_name">Филадельфия и лосось сет</div>
                           <div className="goods_item_quantity item_block_quantity">2050 грамм, 45 кусочков</div>
                           <div className="goods_item_buy item_block_buy">
                              <div className="goods_item_buy_cena item_block_cena">2100 COM</div>
                              <div className="goods_item_buy_button item_block_button">
                                 <button className="goods_item_button item_button">Want!</button>
                              </div>
                           </div>
                        </div>
                     </article>
                     <article className="goods_item item_block">
                        <div className="goods_item_img item_block_img">
                           <img className='item_img' src={set4} alt="food" />
                        </div>
                        <div className="goods_item_detail item_detail">
                           <div className="goods_item_name item_block_name">Сет "6 Филадельфий"</div>
                           <div className="goods_item_quantity item_block_quantity">2050 грамм, 45 кусочков</div>
                           <div className="goods_item_buy item_block_buy">
                              <div className="goods_item_buy_cena item_block_cena">2100 COM</div>
                              <div className="goods_item_buy_button item_block_button">
                                 <button className="goods_item_button item_button">Want!</button>
                              </div>
                           </div>
                        </div>
                     </article>
                     <article className="goods_item item_block">
                        <div className="goods_item_img item_block_img">
                           <img className='item_img' src={set5} alt="food" />
                        </div>
                        <div className="goods_item_detail item_detail">
                           <div className="goods_item_name item_block_name">Топовый сет</div>
                           <div className="goods_item_quantity item_block_quantity">2050 грамм, 45 кусочков</div>
                           <div className="goods_item_buy item_block_buy">
                              <div className="goods_item_buy_cena item_block_cena">2100 COM</div>
                              <div className="goods_item_buy_button item_block_button">
                                 <button className="goods_item_button item_button">Want!</button>
                              </div>
                           </div>
                        </div>
                     </article>
                     <article className="goods_item item_block">
                        <div className="goods_item_img item_block_img">
                           <img className='item_img' src={set6} alt="food" />
                        </div>
                        <div className="goods_item_detail item_detail">
                           <div className="goods_item_name item_block_name">Камикадзе сет</div>
                           <div className="goods_item_quantity item_block_quantity">2050 грамм, 45 кусочков</div>
                           <div className="goods_item_buy item_block_buy">
                              <div className="goods_item_buy_cena item_block_cena">2100 COM</div>
                              <div className="goods_item_buy_button item_block_button">
                                 <button className="goods_item_button item_button">Want!</button>
                              </div>
                           </div>
                        </div>
                     </article>
                     <article className="goods_item item_block">
                        <div className="goods_item_img item_block_img">
                           <img className='item_img' src={set7} alt="food" />
                        </div>
                        <div className="goods_item_detail item_detail">
                           <div className="goods_item_name item_block_name">Сет "4 Филадельфии"</div>
                           <div className="goods_item_quantity item_block_quantity">2050 грамм, 45 кусочков</div>
                           <div className="goods_item_buy item_block_buy">
                              <div className="goods_item_buy_cena item_block_cena">2100 COM</div>
                              <div className="goods_item_buy_button item_block_button">
                                 <button className="goods_item_button item_button">Want!</button>
                              </div>
                           </div>
                        </div>
                     </article>
                     <article className="goods_item item_block">
                        <div className="goods_item_img item_block_img">
                           <img className='item_img' src={set8} alt="food" />
                        </div>
                        <div className="goods_item_detail item_detail">
                           <div className="goods_item_name item_block_name">Филадельфия LOVE сет</div>
                           <div className="goods_item_quantity item_block_quantity">2050 грамм, 45 кусочков</div>
                           <div className="goods_item_buy item_block_buy">
                              <div className="goods_item_buy_cena item_block_cena">2100 COM</div>
                              <div className="goods_item_buy_button item_block_button">
                                 <button className="goods_item_button item_button">Want!</button>
                              </div>
                           </div>
                        </div>
                     </article>
                     <article className="goods_item item_block">
                        <div className="goods_item_img item_block_img">
                           <img className='item_img' src={set9} alt="food" />
                        </div>
                        <div className="goods_item_detail item_detail">
                           <div className="goods_item_name item_block_name">Якудза сет</div>
                           <div className="goods_item_quantity item_block_quantity">2050 грамм, 45 кусочков</div>
                           <div className="goods_item_buy item_block_buy">
                              <div className="goods_item_buy_cena item_block_cena">2100 COM</div>
                              <div className="goods_item_buy_button item_block_button">
                                 <button className="goods_item_button item_button">Want!</button>
                              </div>
                           </div>
                        </div>
                     </article>
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