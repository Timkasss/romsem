import '../style/goods.scss';

import OrderInf from '../components/OrderInf';

//import arrFilter from '../image/arr_filter.svg';
import AdaptMenu from '../components/AdaptMenu';
import ItemSets from '../components/ItemSets';

import { goods } from '../data/sets';

import { useState } from 'react';

function Goods() {
   const [filterOpen, setFilterOpen] = useState(false);
   function openfilter() {
      setFilterOpen(!filterOpen);
   }
   return (
      <div className="goods">
         <div className="goods__container">
            <div className="goods_content">
               <section className="goods__min_container">
                  <div className="goods_header_wrapper">
                     <h1 className='goods_title'>Сеты</h1>
                     <header className="goods_header">
                        <div className="goods_header_filter" onClick={openfilter}>
                           <h1 className='goods_filter_title'>Сортировка</h1>
                           <div className="goods_filter_burger">
                              <div className="filter_burger">
                                 <span></span>
                              </div>
                           </div>
                           <button className="filter_but_active">По умолчанию</button>
                           {
                              filterOpen && (
                                 <div className="goods_filter_button_close">
                                    <button className="goods_filter_button">По умолчанию</button>
                                    <button className="goods_filter_button">Название</button>
                                    <button className="goods_filter_button">Сначала дешевле</button>
                                    <button className="goods_filter_button">Сначала дороже</button>
                                    <button className="goods_filter_button">Количество кусочков</button>
                                    <button className="goods_filter_button">Вес</button>
                                 </div>
                              )
                           }

                        </div>
                     </header>
                  </div>
                  <div className="goods_items_wrapper">
                     {
                        goods.map((item, index) => {
                           return (
                              <ItemSets key={item.id} goods={item} index={index} />
                           )

                        })
                     }
                  </div>
                  <OrderInf />
               </section>
            </div>
         </div>
         <AdaptMenu />
      </div>
   )
}

export default Goods;