import { useState } from 'react';

import '../style/goods.scss';

import { goods } from '../data/sets';

import OrderInf from '../components/OrderInf';
import AdaptMenu from '../components/AdaptMenu';
import ItemSets from '../components/ItemSets';





function Goods() {
   const [filterOpen, setFilterOpen] = useState(false);
   function openfilter() {
      setFilterOpen(!filterOpen);
   }
   const [defaultName, setDefaultName] = useState('По умолчанию');

   function defaultOrder() {
      goods.sort((starts, end) => {
         let less = parseFloat(starts.id);
         let more = parseFloat(end.id);
         if (less > more) return 1;
         if (less === more) return 0;
         if (less < more) return -1;
         return 0;
      })
      setDefaultName('По умолчанию')

   }
   function nameSort() {
      goods.sort((a, b) => a.name.localeCompare(b.name))
      setDefaultName('Название')
   }
   function firstCheap() {
      goods.sort((starts, end) => {
         let less = parseFloat(starts.cost);
         let more = parseFloat(end.cost);
         if (less > more) return 1;
         if (less === more) return 0;
         if (less < more) return -1;
         return 0;
      })
      setDefaultName('Сначала дешевле')
   }
   function firstExpensive() {
      goods.sort((starts, end) => {
         let less = parseFloat(starts.cost);
         let more = parseFloat(end.cost);
         if (less > more) return -1;
         if (less === more) return 0;
         if (less < more) return 1;
         return 0;
      })
      setDefaultName('Сначала дороже')
   }
   function quantitySort() {
      goods.sort((starts, end) => {
         let less = parseFloat(starts.quantity);
         let more = parseFloat(end.quantity);
         if (less > more) return 1;
         if (less === more) return 0;
         if (less < more) return -1;
         return 0;
      })
      setDefaultName('Количество')
   }
   function weightSort() {
      goods.sort((starts, end) => {
         let less = parseFloat(starts.weight);
         let more = parseFloat(end.weight);
         if (less > more) return 1;
         if (less === more) return 0;
         if (less < more) return -1;
         return 0;
      })
      setDefaultName('Вес')
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
                              <div className="filter_burger ">
                                 <span></span>
                              </div>
                           </div>
                           <button className="filter_but_active">{defaultName}</button>
                           {
                              filterOpen && (
                                 <div className="goods_filter_button_close"  >
                                    <button className="goods_filter_button" onClick={defaultOrder}>По умолчанию</button>
                                    <button className="goods_filter_button" onClick={nameSort}>Название</button>
                                    <button className="goods_filter_button" onClick={firstCheap}>Сначала дешевле</button>
                                    <button className="goods_filter_button" onClick={firstExpensive}>Сначала дороже</button>
                                    <button className="goods_filter_button" onClick={quantitySort}>Количество кусочков</button>
                                    <button className="goods_filter_button" onClick={weightSort}>Вес</button>
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