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

function Menu() {
   return (
      <aside className="aside_menu_wrapper">
         <div className="aside_logo">
            <img src={AsLogo} alt="logo" />
         </div>
         <nav className="aside_menu">
            <ul className="aside_menu_list">
               <li className="aside_menu_item">
                  <img src={AsIcon1} alt="icon" />
                  <a href="#" className="aside_menu_link">Пицца</a></li>
               <li className="aside_menu_item">
                  <img src={AsIcon2} alt="icon" />
                  <a href="#" className="aside_menu_link">Сеты</a></li>
               <li className="aside_menu_item">
                  <img src={AsIcon3} alt="icon" />
                  <a href="#" className="aside_menu_link">WOK</a></li>
               <li className="aside_menu_item">
                  <img src={AsIcon4} alt="icon" />
                  <a href="#" className="aside_menu_link">Роллы</a></li>
               <li className="aside_menu_item">
                  <img src={AsIcon5} alt="icon" />
                  <a href="#" className="aside_menu_link">Суши</a></li>
               <li className="aside_menu_item">
                  <img src={AsIcon6} alt="icon" />
                  <a href="#" className="aside_menu_link">Салаты</a></li>
               <li className="aside_menu_item">
                  <img src={AsIcon7} alt="icon" />
                  <a href="#" className="aside_menu_link">Супы</a></li>
               <li className="aside_menu_item">
                  <img src={AsIcon8} alt="icon" />
                  <a href="#" className="aside_menu_link">Корн доги</a></li>
               <li className="aside_menu_item">
                  <img src={AsIcon9} alt="icon" />
                  <a href="#" className="aside_menu_link">Напитки</a></li>
               <li className="aside_menu_item">
                  <img src={AsIcon10} alt="icon" />
                  <a href="#" className="aside_menu_link">Акции</a></li>
            </ul>
         </nav>
      </aside>
   )
}

export default Menu;