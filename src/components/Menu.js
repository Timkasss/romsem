import '../style/menu.scss'

import AsLogo from '../image/logo.png'

import { NavLink } from 'react-router-dom'

function Menu() {
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
                  <NavLink className="aside_menu_link mIcon_1" to='/goods'>Пицца</NavLink >
               </li>
               <li className="aside_menu_item">
                  <NavLink className="aside_menu_link mIcon_2" to='/goods'>Сеты</NavLink >
               </li>
               <li className="aside_menu_item">
                  <NavLink className="aside_menu_link mIcon_3" to='/goods'>WOK</NavLink >
               </li>
               <li className="aside_menu_item">
                  <NavLink className="aside_menu_link mIcon_4" to='/goods'>Роллы</NavLink >
               </li>
               <li className="aside_menu_item">
                  <NavLink className="aside_menu_link mIcon_5" to='/goods'>Суши</NavLink >
               </li>
               <li className="aside_menu_item">
                  <NavLink className="aside_menu_link mIcon_6" to='/goods'>Салаты</NavLink >
               </li>
               <li className="aside_menu_item">
                  <NavLink className="aside_menu_link mIcon_7" to='/goods'>Супы</NavLink >
               </li>
               <li className="aside_menu_item">
                  <NavLink className="aside_menu_link mIcon_8" to='/goods'>Корн доги</NavLink >
               </li>
               <li className="aside_menu_item">
                  <NavLink className="aside_menu_link mIcon_9" to='/goods'>Напитки</NavLink >
               </li>
               <li className="aside_menu_item">
                  <NavLink className="aside_menu_link mIcon_10" to='/goods'>Акции</NavLink >
               </li>
            </ul>
         </nav>
      </div>
   )
}

export default Menu;