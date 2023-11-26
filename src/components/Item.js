
import '../style/item.scss';

function Item({ goods }) {
   return (
      <article className="goods_item item_block">
         <div className="goods_item_img item_block_img">
            <img className='item_img' src={goods.img} alt="food" />
         </div>
         <div className="goods_item_detail item_detail">
            <div className="goods_item_name item_block_name">{goods.name}</div>
            <div className="goods_item_quantity item_block_quantity">{goods.quantity}</div>
            <div className="goods_item_buy item_block_buy">
               <div className="goods_item_buy_cena item_block_cena">{goods.cost}</div>
               <div className="goods_item_buy_button item_block_button">
                  <button className="goods_item_button item_button">Want!</button>
               </div>
            </div>
         </div>
      </article>
   )
}
export default Item;