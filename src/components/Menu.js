import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import '../style/menu.scss'
import AsLogo from '../image/logo.png'


function Menu() {
   const { t } = useTranslation();
   const { pathname } = useLocation()

   useEffect(() => {
      window.scrollTo(0, 0);
   }, [pathname])
   return (
      <div className="aside_menu_wrapper">
         <header className="aside_logo">
            <NavLink to="/">
               <img src={AsLogo} alt="logo" />
            </NavLink>

         </header>
         <nav className="aside_menu">
            <ul className="aside_menu_list">
               <li className="aside_menu_item">
                  <NavLink className="aside_menu_link mIcon_1" to='/goods'>{t('menu.pizza')}</NavLink >
                  <span className='aside_menu_link_events'>{t('home.soon')}</span>
               </li>
               <li className="aside_menu_item">
                  <NavLink className="aside_menu_link mIcon_2" to='/goods'>{t('menu.sets')}</NavLink >
                  <span className='aside_menu_link_events'>{t('home.soon')}</span>
               </li>
               <li className="aside_menu_item">
                  <NavLink className="aside_menu_link mIcon_3" to='/goods'>{t('menu.wok')}</NavLink >
                  <span className='aside_menu_link_events'>{t('home.soon')}</span>
               </li>
               <li className="aside_menu_item">
                  <NavLink className="aside_menu_link mIcon_4" to='/goods'>{t('menu.rolls')}</NavLink >
                  <span className='aside_menu_link_events'>{t('home.soon')}</span>
               </li>
               <li className="aside_menu_item">
                  <NavLink className="aside_menu_link mIcon_5" to='/goods'>{t('menu.sushi')}</NavLink >
                  <span className='aside_menu_link_events'>{t('home.soon')}</span>
               </li>
               <li className="aside_menu_item">
                  <NavLink className="aside_menu_link mIcon_6" to='/goods'>{t('menu.salads')}</NavLink >
                  <span className='aside_menu_link_events events_active'>{t('home.soon')}</span>
               </li>
               <li className="aside_menu_item">
                  <NavLink className="aside_menu_link mIcon_7" to='/goods'>{t('menu.soups')}</NavLink >
                  <span className='aside_menu_link_events events_active'>{t('home.soon')}</span>
               </li>
               <li className="aside_menu_item">
                  <NavLink className="aside_menu_link mIcon_8" to='/goods'>{t('menu.cornDogs')}</NavLink >
                  <span className='aside_menu_link_events'>{t('home.soon')}</span>
               </li>
               <li className="aside_menu_item">
                  <NavLink className="aside_menu_link mIcon_9" to='/goods'>{t('menu.drinks')}</NavLink >
                  <span className='aside_menu_link_events'>{t('home.soon')}</span>
               </li>
               <li className="aside_menu_item">
                  <NavLink className="aside_menu_link mIcon_10" to='/goods'>{t('menu.promotions')}</NavLink >
                  <span className='aside_menu_link_events'>{t('home.soon')}</span>
               </li>
            </ul>
         </nav>
      </div>
   )
}

export default Menu;