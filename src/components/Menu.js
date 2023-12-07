import '../style/menu.scss'

import AsLogo from '../image/logo.png'
import { useTranslation } from 'react-i18next';

import { NavLink } from 'react-router-dom'

function Menu() {
   const { t } = useTranslation();
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
                  <NavLink className="aside_menu_link mIcon_1" to='/nogoods'>{t('menu.pizza')}</NavLink >
               </li>
               <li className="aside_menu_item">
                  <NavLink className="aside_menu_link mIcon_2" to='/goods'>{t('menu.sets')}</NavLink >
               </li>
               <li className="aside_menu_item">
                  <NavLink className="aside_menu_link mIcon_3" to='/goods'>{t('menu.wok')}</NavLink >
               </li>
               <li className="aside_menu_item">
                  <NavLink className="aside_menu_link mIcon_4" to='/goods'>{t('menu.rolls')}</NavLink >
               </li>
               <li className="aside_menu_item">
                  <NavLink className="aside_menu_link mIcon_5" to='/goods'>{t('menu.sushi')}</NavLink >
               </li>
               <li className="aside_menu_item">
                  <NavLink className="aside_menu_link mIcon_6" to='/goods'>{t('menu.salads')}</NavLink >
               </li>
               <li className="aside_menu_item">
                  <NavLink className="aside_menu_link mIcon_7" to='/goods'>{t('menu.soups')}</NavLink >
               </li>
               <li className="aside_menu_item">
                  <NavLink className="aside_menu_link mIcon_8" to='/goods'>{t('menu.cornDogs')}</NavLink >
               </li>
               <li className="aside_menu_item">
                  <NavLink className="aside_menu_link mIcon_9" to='/goods'>{t('menu.drinks')}</NavLink >
               </li>
               <li className="aside_menu_item">
                  <NavLink className="aside_menu_link mIcon_10" to='/goods'>{t('menu.promotions')}</NavLink >
               </li>
            </ul>
         </nav>
      </div>
   )
}

export default Menu;