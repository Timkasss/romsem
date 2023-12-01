import '../style/header.scss'

import logoTablet from '../image/logo_tablet.png';

import { NavLink } from 'react-router-dom';

function Header() {
   return (
      <div className="header">
         <div className="header__container">
            <header className="header_content">
               <div className="tablet_logo">
                  <img src={logoTablet} alt="logo" className="tablet_logo_img" />
               </div>
               <div className="header_content_contact_inf">
                  <address className="header_contact">
                     <div className="header_contact_phone">
                        <h1 className="header_contact_title">Us phone</h1>
                        <a href="tel: +996705188955">+996 705 188 955</a>
                        <a href="tel: +996555188955">+996 555 188 955</a>
                     </div>

                     <div className="header_work_time_wrapper">
                        <p className="header_work_time">работаем с 10:00 до 00:00</p>
                     </div>
                  </address>
                  <section className="header_content_contact_inf_city">
                     <h1 className="header_city">City</h1>
                     <p className="header_city_name">New York</p>
                  </section>
               </div>
               <nav className="header_work_information_nav">
                  <ul className="header_work_information_list">
                     <li className='header_work_information_item'>
                        <NavLink to="/reviews" className="header_work_information_link">Reviews</NavLink>
                     </li>
                     <li className='header_work_information_item'>
                        <a href="#" className="header_work_information_link">Shipping and payment</a>
                     </li>
                  </ul>
                  <div className="header_work_information_search">
                     <svg className="find" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_4_29)">
                           <path d="M29.8169 28.9331L20.6888 19.805C22.5848 17.6999 23.75 14.9244 23.75 11.875C23.75 5.32717 18.4229 0 11.875 0C5.32717 0 0 5.32717 0 11.875C0 18.4229 5.32717 23.75 11.875 23.75C14.9244 23.75 17.6999 22.5848 19.805 20.6888L28.9331 29.8169C29.0552 29.9389 29.2151 30 29.375 30C29.5349 30 29.6948 29.9389 29.817 29.8169C30.0611 29.5727 30.0611 29.1772 29.8169 28.9331ZM11.875 22.5C6.01688 22.5 1.25004 17.7337 1.25004 11.875C1.25004 6.01629 6.01688 1.24998 11.875 1.24998C17.7332 1.24998 22.5 6.01623 22.5 11.875C22.5 17.7338 17.7332 22.5 11.875 22.5Z" fill="#A4ACAD" />
                        </g>
                        <defs>
                           <clipPath id="clip0_4_29">
                              <rect width="30" height="30" fill="white" />
                           </clipPath>
                        </defs>
                     </svg>
                  </div>
               </nav>
            </header>
         </div>
      </div>
   );
}

export default Header;