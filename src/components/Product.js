import React, { useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useParams } from 'react-router-dom';
import Button from './small-components/Button';
import { goods } from '../data/sets';

import { ProductContext } from './context';
const Product = ({ set }) => {
   const { arrBasket, setArrBasket } = useContext(ProductContext)

   const [quantityInBasket, setQuantityInBasket] = useState(set.count);


   const decrement = (indexCount) => {
      if (quantityInBasket > 1) {
         setQuantityInBasket(prevQuantity => prevQuantity - 1);
      }
      setArrBasket(prevArr => {
         return prevArr.map((item) => {
            if (indexCount === item.id && item.count > 1) {
               return { ...item, count: quantityInBasket - 1 };

            }
            return item;
         })
      })
   };
   const increment = (indexCount) => {
      setQuantityInBasket(prevQuantity => prevQuantity + 1)
      setArrBasket(prevArr => {
         return prevArr.map(item => {
            if (indexCount === item.id) {
               return { ...item, count: quantityInBasket + 1 };
            }
            return item;
         })
      })

   };


   const { t } = useTranslation();

   const { id } = useParams();

   function addBasket(ind) {
      let compare = arrBasket.find((item) => item.id === goods[ind].id);
      if (!compare) {
         setArrBasket(prevArr => [...prevArr, goods[ind]]);
      }
   }

   return (
      <article className="product_item">
         <div className="product_item_img">
            <img src={set.img} alt="food" />
         </div>
         <section className="product_item_info">
            <h2 className="product_item_name">{t(`goods.${id}.name`, { defaultValue: set.name })}</h2>
            <p className="product_item_weight">{t(`goods.${id}.quantity`, { defaultValue: set.quantity })}</p>
            <div className="product_price_count">
               <p className="product_item_price">{set.cost}</p>
               <div className="product_item_count">
                  <button className="product_counter_button" onClick={() => decrement(set.id)}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="23" height="2" viewBox="0 0 23 2" fill="none">
                        <path d="M1 1L22 0.999999" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
                     </svg>
                  </button>
                  <span id='quantity'>{quantityInBasket}</span>
                  <button className="product_counter_button" onClick={() => increment(set.id)}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <ellipse cx="20" cy="20" rx="20" ry="20" transform="rotate(90 20 20)" fill="#F46D40" />
                        <path d="M20 9V30" stroke="#F2F2F2" strokeWidth="2" strokeLinecap="round" />
                        <path d="M10 19L31 19" stroke="#F2F2F2" strokeWidth="2" strokeLinecap="round" />
                     </svg>
                  </button>
               </div>
            </div>
            <p className="product_item_composition_title">Состав</p>
            <p className="product_item_composition_details">
               Лосось, сыр "Филадельфия", огурец, авокадо
            </p>
            <Button index={set.id} addBasket={addBasket} cls={'product_buy_button'} />
         </section>
      </article>
   );
};

export default Product;
