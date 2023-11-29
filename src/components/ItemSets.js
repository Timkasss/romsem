import { NavLink } from 'react-router-dom';

import '../style/itemSets.scss';

function Item({ goods, index }) {
   return (
      <article className="goods_item item_block">
         <div className="goods_item_img item_block_img">
            <NavLink to={`/set/${index}`}>
               <img className='item_img' src={goods.img} alt="food" />
            </NavLink>
         </div>
         <div className="goods_item_detail item_detail">
            <NavLink to={`/set/${index}`}>
               <h1 className="goods_item_name item_block_name">{goods.name}</h1>
            </NavLink>
            <p className="goods_item_quantity item_block_quantity">{goods.quantity}</p>
            <div className="goods_item_buy item_block_buy">
               <p className="goods_item_buy_cena item_block_cena">{goods.cost}</p>
               <div className="goods_item_buy_button item_block_button">
                  <button className="goods_item_button item_button">Want!</button>
               </div>
            </div>
         </div>
      </article>
   )
}
export default Item;