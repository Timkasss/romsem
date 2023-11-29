import '../style/productItem.scss'

import OrderInf from '../components/OrderInf';
import AdaptMenu from '../components/AdaptMenu';
import { goods } from '../data/sets';

import { useParams } from 'react-router-dom';
import AdditiveSet from '../components/AdditiveSet';
import { additives } from '../data/additives';

import { NavLink } from 'react-router-dom';
function ProductItem() {

   const { id } = useParams();
   const set = goods[id];

   return (
      <div className="product_item_wrapper">
         <div className="product_item__container">
            <div className="product_item_content">
               <header className="product_item_controls_wrapper">
                  <nav className='product_item_controls'>
                     <ul className='product_item_controls_list'>
                        <li className='product_item_controls_item'>
                           <NavLink className='product_item_controls_link control_pre' to="/goods">Back</NavLink>
                        </li>
                        <li className='product_item_controls_item'>
                           <NavLink className='product_item_controls_link control_next' to={`/set/${set.id}`}>Next</NavLink>
                        </li>
                     </ul>
                  </nav>
               </header>
               <article className="product_item">
                  <div className="product_item_img">
                     <img src={set.img} alt="food" />
                  </div>
                  <section className="product_item_info">
                     <h2 className="product_item_name">{set.name}</h2>
                     <p className="product_item_weight">{set.quantity}</p>
                     <div className="product_price_count">
                        <p className="product_item_price">{set.cost}</p>
                        <div className="product_item_count">
                           <button className="product_counter_button">
                              <svg xmlns="http://www.w3.org/2000/svg" width="23" height="2" viewBox="0 0 23 2" fill="none">
                                 <path d="M1 1L22 0.999999" stroke="#111111" strokeWidth="2" strokeLinecap="round" />
                              </svg>
                           </button>
                           <span id='quantity'>10</span>
                           <button className="product_counter_button">
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
                     <button className="product_buy_button">Want!</button>
                  </section>
               </article>
               <section className="product_slider_wrapper">
                  <h3 className="product_slider_title">Рекомендуем к этому товару</h3>
                  <header className="product_slider_control_wrapper">
                     <nav className='product_slider_control'>
                        <ul className='product_slider_control_list'>
                           <li className='product_slider_control_item'>
                              <a className='product_slider_control_link' href="#">
                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" fill="none">
                                    <ellipse cx="30" cy="30" rx="30" ry="30" transform="rotate(90 30 30)" fill="#111111" />
                                    <path d="M36 15L23 28.5L36 42" stroke="#F2F2F2" strokeLinecap="round" />
                                 </svg>
                              </a>
                           </li>
                           <li className='product_slider_control_item'>
                              <a className='product_slider_control_link' href="#">
                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" fill="none">
                                    <ellipse cx="30" cy="30" rx="30" ry="30" transform="rotate(90 30 30)" fill="#111111" />
                                    <path d="M23 15L36 28.5L23 42" stroke="#F2F2F2" strokeLinecap="round" />
                                 </svg>
                              </a>
                           </li>
                        </ul>
                     </nav>
                  </header>
                  <div className="product_slider">
                     <div className="product_sliders">
                        {
                           additives.map(additive => {
                              return (
                                 <AdditiveSet key={additive.id} additives={additive} />
                              )
                           })
                        }
                     </div>
                  </div>
               </section>
               <div id="add_inf">
                  <OrderInf />
               </div>
            </div>
         </div>
         <AdaptMenu />
      </div>
   )
}

export default ProductItem;