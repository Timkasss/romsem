import { useState } from 'react';

import '../style/goods.scss';

import { goods } from '../data/sets';

import OrderInf from '../components/OrderInf';
import ItemSets from '../components/ItemSets';
import { useTranslation } from 'react-i18next';

function Goods() {
   const [filterOpen, setFilterOpen] = useState(false);
   function openfilter() {
      setFilterOpen(!filterOpen);
   }
   const { t } = useTranslation();
   const [defaultName, setDefaultName] = useState(t('sets.default'));

   function defaultOrder() {
      goods.sort((starts, end) => {
         let less = parseFloat(starts.id);
         let more = parseFloat(end.id);
         if (less > more) return 1;
         if (less === more) return 0;
         if (less < more) return -1;
         return 0;
      })
      setDefaultName(t('sets.default'))

   }
   function nameSort() {
      goods.sort((a, b) => a.name.localeCompare(b.name))
      setDefaultName(t('sets.title'))
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
      setDefaultName(t('sets.cheaper_first'))
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
      setDefaultName(t('sets.expensive_first'))
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
      setDefaultName(t('sets.pieces'))
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
      setDefaultName(t('sets.weight'))
   }


   return (
      <>
         <div className="goods">
            <div className="goods__container">
               <div className="goods_content">
                  <section className="goods__min_container">
                     <div className="goods_header_wrapper">
                        <h1 className='goods_title'>{t('sets.sets')}</h1>
                        <header className="goods_header">
                           <div className="goods_header_filter" onClick={openfilter}>
                              <h1 className='goods_filter_title'>{t('sets.sorting')}</h1>
                              <div className="goods_filter_burger">
                                 <div className="filter_burger ">
                                    <span></span>
                                 </div>
                              </div>
                              <button className="filter_but_active">{defaultName}</button>
                              {
                                 filterOpen && (
                                    <div className="goods_filter_button_close"  >
                                       <button className="goods_filter_button" onClick={defaultOrder}>{t('sets.default')}</button>
                                       <button className="goods_filter_button" onClick={nameSort}>{t('sets.title')}</button>
                                       <button className="goods_filter_button" onClick={firstCheap}>{t('sets.cheaper_first')}</button>
                                       <button className="goods_filter_button" onClick={firstExpensive}>{t('sets.expensive_first')}</button>
                                       <button className="goods_filter_button" onClick={quantitySort}>{t('sets.pieces')}</button>
                                       <button className="goods_filter_button" onClick={weightSort}>{t('sets.weight')}</button>
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
         </div>
      </>
   )
}

export default Goods;