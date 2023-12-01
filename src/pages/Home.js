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


import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Slider from '../components/Slider';
import OrderInf from '../components/OrderInf';
import AdaptMenu from '../components/AdaptMenu';

import Swiper from 'swiper';
import 'swiper/css';

function Home() {
   useEffect(() => {
      const swiper = new Swiper('.swiper', {
         loop: true,
         simulateTouch: true,
         grabCursor: true,
         slideToClickedSlide: true,
      });
   }, []);

   // useEffect(() => {
   //    slider()
   // });
   // function slider() {

   //    let isDragging = false;
   //    let startPosition = 0;
   //    let currentTranslate = 0;

   //    const slider = document.querySelector('.sliders');
   //    const slide = document.querySelectorAll('.slider');
   //    function mouseClick(event) {
   //       isDragging = true;
   //       startPosition = event.clientX - slider.offsetLeft;
   //       currentTranslate = currentTranslate || 0;
   //       slider.style.cursor = 'grabbing';
   //    }
   //    function mouseMove(event) {
   //       if (!isDragging) return;

   //       let currentPosition = (event.clientX - slider.offsetLeft) - startPosition + currentTranslate;

   //       if (currentPosition <= 0) {
   //          slider.style.transform = `translate3d(${currentPosition}px, 0px,0px)`;
   //       }
   //       let end = (slide.length - 1) * slide[0].offsetWidth;
   //       if (Math.abs(currentPosition) >= end) {
   //          slider.style.transform = `translate3d(${-end}px, 0px,0px)`;
   //       }

   //    }


   //    slider.addEventListener('mousedown', mouseClick);

   //    slider.addEventListener('mousemove', mouseMove);

   //    slider.addEventListener('mouseup', (event) => {
   //       isDragging = false;
   //       slider.style.cursor = 'grab';
   //       currentTranslate += event.clientX - slider.offsetLeft - startPosition;
   //    });

   //    slider.addEventListener('mouseleave', (event) => {
   //       isDragging = false;
   //       slider.style.cursor = 'grab';
   //       currentTranslate += event.clientX - slider.offsetLeft - startPosition;
   //    });
   //    slider.ondragstart = function () {
   //       return false;
   //    }

   // }

   return (
      <>
         <div className="main__container">
            <div className="main_content">
               <div className="main__min_container">
                  <div className="slider_wrapper swiper">
                     <div className="sliders swiper-wrapper">
                        <article className="slider swiper-slide">
                           <div className="slider_name">
                              <h1 className="slider_title">Філадельфія і лосось</h1>
                              <p className="slider_untitle"><span>1260</span> грамм <span>36</span> кусочек</p>
                           </div>
                           <div className="slider_cena_wrapper">
                              <p className="food_price">
                                 <span className="slider_cena_sale">1599 COM</span>
                                 <span className="slider_cena">120 COM</span>
                              </p>
                           </div>
                           <div className="slider_button_wrapper">
                              <button className="slider_button" >Want!</button>
                           </div>
                        </article>
                        <article className="slider swiper-slide">
                           <div className="slider_name">
                              <h1 className="slider_title">Британія і лосось</h1>
                              <p className="slider_untitle"><span>1260</span> грамм <span>36</span> кусочек</p>
                           </div>
                           <div className="slider_cena_wrapper">
                              <p className="food_price">
                                 <span className="slider_cena_sale">1599 COM</span>
                                 <span className="slider_cena">599 COM</span>
                              </p>
                           </div>
                           <div className="slider_button_wrapper">
                              <button className="slider_button">Want!</button>
                           </div>
                        </article>
                        <article className="slider swiper-slide">
                           <div className="slider_name">
                              <h1 className="slider_title">Кавказ і лосось</h1>
                              <p className="slider_untitle"><span>1260</span> грамм <span>36</span> кусочек</p>
                           </div>
                           <div className="slider_cena_wrapper">
                              <p className="food_price">
                                 <span className="slider_cena_sale">1599 COM</span>
                                 <span className="slider_cena">599 COM</span>
                              </p>
                           </div>
                           <div className="slider_button_wrapper">
                              <button className="slider_button">Want!</button>
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
                              <h1 className="menu_item_name">Пицца</h1>
                              <span className="menu_item_events">скоро</span>
                           </Link>
                        </li>
                        <li className="menu_item">
                           <Link to={'/goods'}>
                              <img src={miniSetu} alt="background" />
                              <h1 className="menu_item_name">Сеты</h1>
                              <span className="menu_item_events">скоро</span>
                           </Link>
                        </li>
                        <li className="menu_item">
                           <Link to={'/goods'}>
                              <img src={miniWok} alt="background" />
                              <h1 className="menu_item_name">WOK</h1>
                              <span className="menu_item_events">скоро</span>
                           </Link>
                        </li>
                        <li className="menu_item">
                           <Link to={'/goods'}>
                              <img src={miniRolu} alt="background" />
                              <h1 className="menu_item_name">Роллы</h1>
                              <span className="menu_item_events">скоро</span>
                           </Link>
                        </li>
                        <li className="menu_item">
                           <Link to={'/goods'}>
                              <img src={miniSywi} alt="background" />
                              <h1 className="menu_item_name">Суши</h1>
                              <span className="menu_item_events">скоро</span>
                           </Link>
                        </li>
                        <li className="menu_item">
                           <Link to={'/goods'}>
                              <img src={miniSoup} alt="background" />
                              <h1 className="menu_item_name">Супы</h1>
                              <span className="menu_item_events item_events_active">скоро</span>
                           </Link>
                        </li>
                        <li className="menu_item">
                           <Link to={'/goods'}>
                              <img src={miniSalade} alt="background" />
                              <h1 className="menu_item_name">Салаты</h1>
                              <span className="menu_item_events item_events_active">скоро</span>
                           </Link>

                        </li>
                        <li className="menu_item">
                           <Link to={'/goods'}>
                              <img src={miniDrink} alt="background" />
                              <h1 className="menu_item_name">Напитки</h1>
                              <span className="menu_item_events">скоро</span>
                           </Link>
                        </li>
                     </ul>
                  </nav>

                  <div className="main_food">
                     <article className="main_food_chiken main_food_pos">
                        <img src={chiken} alt="chiken" />
                        <h1 className="main_food_name">Chiken</h1>
                     </article>
                     <div className="main_food_pizza_min">
                        <article className="main_food_yger main_food_pos">
                           <img src={yger} alt="yger" />
                           <h1 className="main_food_name">With eel</h1>
                        </article>
                        <article className="main_food_corn main_food_pos">
                           <img src={corn} alt="corn" />
                           <h1 className="main_food_name">Corn dog</h1>
                        </article>
                     </div>
                     <article className="main_food_pizza main_food_pos">
                        <img src={pizza} alt="pizza" />
                        <h1 className="main_food_name">Pizza</h1>
                     </article>
                     <article className="main_food_action main_food_pos">
                        <img src={action} alt="action" />
                        <h1 className="main_food_name">Action</h1>
                     </article>
                  </div>
                  <div className="popular_new_food_wrapper">
                     <header className='popular_new_food_header'>
                        <nav className="popular_new_food">
                           <ul className="popular_new_food_switch">
                              <li className="popular_new "><button className='swith_hov'>New</button></li>
                              <li className="popular_popular "><button className='swith_hov'>Popular</button></li>
                           </ul>
                        </nav>
                     </header>
                     <Slider />
                  </div>
                  <OrderInf />
               </div>
            </div>
         </div >
         <AdaptMenu />
      </>
   );
}
export default Home;