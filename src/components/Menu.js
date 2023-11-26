import '../style/menu.scss'

import AsLogo from '../image/logo.png'
import AsIcon1 from '../image/pizza.svg'
import AsIcon2 from '../image/set.svg'
import AsIcon3 from '../image/wok.svg'
import AsIcon4 from '../image/rol.svg'
import AsIcon5 from '../image/syw.svg'
import AsIcon6 from '../image/salate.svg'
import AsIcon7 from '../image/soup.svg'
import AsIcon8 from '../image/corn.svg'
import AsIcon9 from '../image/drink.svg'
import AsIcon10 from '../image/action.svg'

import { NavLink } from 'react-router-dom'

function Menu() {
   return (
      <aside className="aside_menu_wrapper">
         <div className="aside_logo">
            <NavLink to="/">
               <img src={AsLogo} alt="logo" />
            </NavLink>

         </div>
         <nav className="aside_menu">
            <ul className="aside_menu_list">
               <li className="aside_menu_item">
                  <img src={AsIcon1} alt="icon" />
                  <NavLink className="aside_menu_link" to='/goods'>Пицца</NavLink >
               </li>
               <li className="aside_menu_item">
                  <img src={AsIcon2} alt="icon" />
                  <NavLink className="aside_menu_link" to='/goods'>Сеты</NavLink >
               </li>
               <li className="aside_menu_item">
                  <img src={AsIcon3} alt="icon" />
                  <NavLink className="aside_menu_link" to='/goods'>WOK</NavLink >
               </li>
               <li className="aside_menu_item">
                  <img src={AsIcon4} alt="icon" />
                  <NavLink className="aside_menu_link" to='/goods'>Роллы</NavLink >
               </li>
               <li className="aside_menu_item">
                  <img src={AsIcon5} alt="icon" />
                  <NavLink className="aside_menu_link" to='/goods'>Суши</NavLink >
               </li>
               <li className="aside_menu_item">
                  <img src={AsIcon6} alt="icon" />
                  <NavLink className="aside_menu_link" to='/goods'>Салаты</NavLink >
               </li>
               <li className="aside_menu_item">
                  <img src={AsIcon7} alt="icon" />
                  <NavLink className="aside_menu_link" to='/goods'>Супы</NavLink >
               </li>
               <li className="aside_menu_item">
                  <img src={AsIcon8} alt="icon" />
                  <NavLink className="aside_menu_link" to='/goods'>Корн доги</NavLink >
               </li>
               <li className="aside_menu_item">
                  <img src={AsIcon9} alt="icon" />
                  <NavLink className="aside_menu_link" to='/goods'>Напитки</NavLink >
               </li>
               <li className="aside_menu_item">
                  <img src={AsIcon10} alt="icon" />
                  <NavLink className="aside_menu_link" to='/goods'>Акции</NavLink >
               </li>
            </ul>
         </nav>
      </aside>
   )
}

export default Menu;