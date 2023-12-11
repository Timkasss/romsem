import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Basket from '../Basket';


import '../../style/adaptMenu.scss'



function AdaptMenu() {

   const [modelBasket, setModelBasket] = useState(false);


   function openModelBaslet() {
      setModelBasket(!modelBasket)
   }
   function openMenu() {
      const menu = document.querySelector('.footer_menu_wrapper');
      menu.classList.toggle('f_menu_active')
   }

   const { t } = useTranslation();
   return (

      <>
         {modelBasket &&
            <div className="basket_wrapper">
               <Basket />
            </div>
         }
         <nav className='adaptive_block_wrapper' >
            <ul className="adaptive_block">
               <li className="adaptive_block_menu adapt_item">
                  <a onClick={openMenu} className='adaptive_block_menu_link style_text'>{t('menuAdapt.menu')}</a>
               </li>
               <li className="adaptive_block_basket adapt_item">
                  <a onClick={openModelBaslet} className='adaptive_block_basket_link style_text'>{t('menuAdapt.basket')}</a>
               </li>
               <li className="adaptive_block_reviews adapt_item">
                  <NavLink to={'/reviews'} className="adaptive_block_reviews_link style_text">{t('menuAdapt.reviews')}</NavLink>
               </li>
            </ul>
         </nav>
      </>
   )
}

export default AdaptMenu;