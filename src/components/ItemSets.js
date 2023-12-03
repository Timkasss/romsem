import { NavLink } from 'react-router-dom';
import { forwardRef } from 'react';

import '../style/itemSets.scss';

import Button from './small-components/Button';

export default forwardRef(

   function ItemSets(props, ref) {
      return (
         <article className="goods_item item_block" ref={ref} id={props.index === props.slid ? 'act' : ''}>
            <div className="goods_item_img item_block_img">
               <NavLink to={`/set/${props.index}`}>
                  <img className='item_img' src={props.goods.img} alt="food" />
               </NavLink>
            </div>
            <div className="goods_item_detail item_detail">
               <NavLink to={`/set/${props.index}`}>
                  <h1 className="goods_item_name item_block_name">{props.goods.name}</h1>
               </NavLink>
               <p className="goods_item_quantity item_block_quantity"><span>{props.goods.weight}</span>{props.goods.quantity}</p>
               <div className="goods_item_buy item_block_buy">
                  <p className="goods_item_buy_cena item_block_cena">{props.goods.cost}</p>
                  <div className="goods_item_buy_button item_block_button">
                     <Button />
                  </div>
               </div>
            </div>
         </article>
      )
   }
);
