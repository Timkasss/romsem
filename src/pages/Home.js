import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Slider from '../components/home-components/Slider';
import OrderInf from '../components/OrderInf';
//import Button from '../components/small-components/Button';

import '../style/main.scss';
import '../style/basket.scss';

import chiken from '../image/chiken.jpg';
import pizza from '../image/pizza.jpg';
import yger from '../image/ygr.jpg';
import corn from '../image/corn_dog.jpg';
import action from '../image/sale.jpg';
import miniPizza from '../image/mobile_img/pizza.jpg';
import miniSetu from '../image/mobile_img/setu.jpg';
import miniWok from '../image/mobile_img/wok.jpg';
import miniRolu from '../image/mobile_img/rolu.jpg';
import miniSywi from '../image/mobile_img/sywi.jpg';
import miniSoup from '../image/mobile_img/soup.jpg';
import miniSalade from '../image/mobile_img/salade.jpg';
import miniDrink from '../image/mobile_img/drink.jpg';

import Swiper from 'swiper';
import 'swiper/css';


function Home() {
   const { t } = useTranslation();
   useEffect(() => {
      const swiper = new Swiper('.swiper', {
         loop: true,
         simulateTouch: true,
         grabCursor: true,
         slideToClickedSlide: true,
      });
   }, []);

   return (
      <>
         <div className="main__container">
            <div className="main_content">
               <div className="main__min_container">
                  <div className="slider_wrapper swiper">
                     <div className="sliders swiper-wrapper">
                        <article className="slider swiper-slide">
                           <div className="slider_name">
                              <h1 className="slider_title">{t("home.Philadelphia_salmon")}</h1>
                              <p className="slider_untitle"><span>1260</span> {t("home.gram")} <span>36</span> {t("home.piece")}</p>
                           </div>
                           <div className="slider_cena_wrapper">
                              <p className="food_price">
                                 <span className="slider_cena_sale">1599 COM</span>
                                 <span className="slider_cena">120 COM</span>
                              </p>
                           </div>
                           <div className="slider_button_wrapper">
                              <button className="slider_button">{t("button.button")}</button>
                              {/* <Button cls={slider_button}/> */}
                           </div>
                        </article>
                        <article className="slider swiper-slide">
                           <div className="slider_name">
                              <h1 className="slider_title">{t("home.Britain_salmon")}</h1>
                              <p className="slider_untitle"><span>1260</span> {t("home.gram")} <span>36</span> {t("home.piece")}</p>
                           </div>
                           <div className="slider_cena_wrapper">
                              <p className="food_price">
                                 <span className="slider_cena_sale">1599 COM</span>
                                 <span className="slider_cena">599 COM</span>
                              </p>
                           </div>
                           <div className="slider_button_wrapper">
                              <button className="slider_button">{t("button.button")}</button>
                           </div>
                        </article>
                        <article className="slider swiper-slide">
                           <div className="slider_name">
                              <h1 className="slider_title">{t("home.Caucasus_salmon")}</h1>
                              <p className="slider_untitle"><span>1260</span> {t("home.gram")} <span>36</span> {t("home.piece")}</p>
                           </div>
                           <div className="slider_cena_wrapper">
                              <p className="food_price">
                                 <span className="slider_cena_sale">1599 COM</span>
                                 <span className="slider_cena">599 COM</span>
                              </p>
                           </div>
                           <div className="slider_button_wrapper">
                              <button className="slider_button">{t("button.button")}</button>
                           </div>
                        </article>
                     </div>
                     <div className="slider_active">
                        <span className="slider_acrive_point"></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                     </div>
                  </div>
                  <nav className="menu_adaptive_wrapper">
                     <ul className="menu_adaptive">
                        <li className="menu_item">
                           <Link to={'/goods'} className="menu_item_link">
                              <img src={miniPizza} alt="background" />
                              <h1 className="menu_item_name">{t("menu.pizza")}</h1>
                              <span className="menu_item_events">{t("home.soon")}</span>
                           </Link>
                        </li>
                        <li className="menu_item">
                           <Link to={'/goods'}>
                              <img src={miniSetu} alt="background" />
                              <h1 className="menu_item_name">{t("menu.sets")}</h1>
                              <span className="menu_item_events">{t("home.soon")}</span>
                           </Link>
                        </li>
                        <li className="menu_item">
                           <Link to={'/goods'}>
                              <img src={miniWok} alt="background" />
                              <h1 className="menu_item_name">{t("menu.wok")}</h1>
                              <span className="menu_item_events">{t("home.soon")}</span>
                           </Link>
                        </li>
                        <li className="menu_item">
                           <Link to={'/goods'}>
                              <img src={miniRolu} alt="background" />
                              <h1 className="menu_item_name">{t("menu.rolls")}</h1>
                              <span className="menu_item_events">{t("home.soon")}</span>
                           </Link>
                        </li>
                        <li className="menu_item">
                           <Link to={'/goods'}>
                              <img src={miniSywi} alt="background" />
                              <h1 className="menu_item_name">{t("menu.sushi")}</h1>
                              <span className="menu_item_events">{t("home.soon")}</span>
                           </Link>
                        </li>
                        <li className="menu_item">
                           <Link to={'/goods'}>
                              <img src={miniSoup} alt="background" />
                              <h1 className="menu_item_name">{t("menu.soups")}</h1>
                              <span className="menu_item_events item_events_active">{t("home.soon")}</span>
                           </Link>
                        </li>
                        <li className="menu_item">
                           <Link to={'/goods'}>
                              <img src={miniSalade} alt="background" />
                              <h1 className="menu_item_name">{t("menu.salads")}</h1>
                              <span className="menu_item_events item_events_active">{t("home.soon")}</span>
                           </Link>

                        </li>
                        <li className="menu_item">
                           <Link to={'/goods'}>
                              <img src={miniDrink} alt="background" />
                              <h1 className="menu_item_name">{t("menu.drinks")}</h1>
                              <span className="menu_item_events">{t("home.soon")}</span>
                           </Link>
                        </li>
                     </ul>
                  </nav>

                  <div className="main_food">
                     <a href="#">
                        <article className="main_food_chiken main_food_pos">
                           <img src={chiken} alt="chiken" />
                           <h1 className="main_food_name">{t("home.Chicken")}</h1>
                        </article>
                     </a>

                     <div className="main_food_pizza_min">
                        <a href="#">
                           <article className="main_food_yger main_food_pos">
                              <img src={yger} alt="yger" />
                              <h1 className="main_food_name">{t("home.With_eel")}</h1>
                           </article>
                        </a>
                        <a href="#">
                           <article className="main_food_corn main_food_pos">
                              <img src={corn} alt="corn" />
                              <h1 className="main_food_name">{t("home.Corn_dog")}</h1>
                           </article>
                        </a>
                     </div>
                     <a href="#">
                        <article className="main_food_pizza main_food_pos">
                           <img src={pizza} alt="pizza" />
                           <h1 className="main_food_name">{t("home.Pizza")}</h1>
                        </article>
                     </a>
                     <a href="#">
                        <article className="main_food_action main_food_pos">
                           <img src={action} alt="action" />
                           <h1 className="main_food_name">{t("home.Action")}</h1>
                        </article>
                     </a>
                  </div>
                  <div className="popular_new_food_wrapper">
                     <header className='popular_new_food_header'>
                        <nav className="popular_new_food">
                           <ul className="popular_new_food_switch">
                              <li className="popular_new "><button className='swith_hov'>{t("home.New")}</button></li>
                              <li className="popular_popular "><button className='swith_hov'>{t("home.Popular")}</button></li>
                           </ul>
                        </nav>
                     </header>
                     <Slider />
                  </div>
                  <OrderInf />
               </div>
            </div>
         </div >
      </>
   );
}
export default Home;