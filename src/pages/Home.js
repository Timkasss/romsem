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
import Slider from '../components/Slider';
import OrderInf from '../components/OrderInf';
import AdaptMenu from '../components/AdaptMenu';


function Home() {


   useEffect(() => {
      slider()
   });
   function slider() {

      let isDragging = false;
      let startPosition = 0;
      let currentTranslate = 0;

      const slider = document.querySelector('.sliders');
      const slide = document.querySelectorAll('.slider');
      function mouseClick(event) {
         isDragging = true;
         startPosition = event.clientX - slider.offsetLeft;
         currentTranslate = currentTranslate || 0;
         slider.style.cursor = 'grabbing';
      }
      function mouseMove(event) {
         if (!isDragging) return;

         let currentPosition = (event.clientX - slider.offsetLeft) - startPosition + currentTranslate;

         if (currentPosition <= 0) {
            slider.style.transform = `translate3d(${currentPosition}px, 0px,0px)`;
         }
         let end = (slide.length - 1) * slide[0].offsetWidth;
         if (Math.abs(currentPosition) >= end) {
            slider.style.transform = `translate3d(${-end}px, 0px,0px)`;
         }

      }


      slider.addEventListener('mousedown', mouseClick);

      slider.addEventListener('mousemove', mouseMove);

      slider.addEventListener('mouseup', (event) => {
         isDragging = false;
         slider.style.cursor = 'grab';
         currentTranslate += event.clientX - slider.offsetLeft - startPosition;
      });

      slider.addEventListener('mouseleave', (event) => {
         isDragging = false;
         slider.style.cursor = 'grab';
         currentTranslate += event.clientX - slider.offsetLeft - startPosition;
      });
      slider.ondragstart = function () {
         return false;
      }

   }


   return (
      <>
         <div className="main__container">
            <div className="main_content">
               <div className="main__min_container">
                  <div className="slider_wrapper">
                     <div className="sliders">
                        <div className="slider">
                           <div className="slider_name">
                              <div className="slider_title">Філадельфія і лосось</div>
                              <div className="slider_untitle">1260 грамм 36 кусочек</div>
                           </div>
                           <div className="slider_cena_wrapper">
                              <div className="slider_cena_sale">1599 COM</div>
                              <div className="slider_cena">599 COM</div>
                           </div>
                           <div className="slider_button_wrapper">
                              <button className="slider_button">Want!</button>
                           </div>
                        </div>
                        <div className="slider">
                           <div className="slider_name">
                              <div className="slider_title">Британія і лосось</div>
                              <div className="slider_untitle">1260 грамм 36 кусочек</div>
                           </div>
                           <div className="slider_cena_wrapper">
                              <div className="slider_cena_sale">1599 COM</div>
                              <div className="slider_cena">599 COM</div>
                           </div>
                           <div className="slider_button_wrapper">
                              <button className="slider_button">Want!</button>
                           </div>
                        </div>
                        <div className="slider">
                           <div className="slider_name">
                              <div className="slider_title">Кавказ і лосось</div>
                              <div className="slider_untitle">1260 грамм 36 кусочек</div>
                           </div>
                           <div className="slider_cena_wrapper">
                              <div className="slider_cena_sale">1599 COM</div>
                              <div className="slider_cena">599 COM</div>
                           </div>
                           <div className="slider_button_wrapper">
                              <button className="slider_button">Want!</button>
                           </div>
                        </div>
                     </div>
                     <div className="slider_active">
                        <span className="slider_acrive_point"></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                     </div>
                  </div>
                  <div className="menu_adaptive">
                     <div className="menu_item">
                        <img src={miniPizza} alt="background" />
                        <span className="menu_item_name">Пицца</span>
                        <span className="menu_item_events">скоро</span>
                     </div>
                     <div className="menu_item">
                        <img src={miniSetu} alt="background" />
                        <span className="menu_item_name">Сеты</span>
                        <span className="menu_item_events">скоро</span>
                     </div>
                     <div className="menu_item">
                        <img src={miniWok} alt="background" />
                        <span className="menu_item_name">WOK</span>
                        <span className="menu_item_events">скоро</span>
                     </div>
                     <div className="menu_item">
                        <img src={miniRolu} alt="background" />
                        <span className="menu_item_name">Роллы</span>
                        <span className="menu_item_events">скоро</span>
                     </div>
                     <div className="menu_item">
                        <img src={miniSywi} alt="background" />
                        <span className="menu_item_name">Суши</span>
                        <span className="menu_item_events">скоро</span>
                     </div>
                     <div className="menu_item">
                        <img src={miniSoup} alt="background" />
                        <span className="menu_item_name">Супы</span>
                        <span className="menu_item_events item_events_active">скоро</span>
                     </div>
                     <div className="menu_item">
                        <img src={miniSalade} alt="background" />
                        <span className="menu_item_name">Салаты</span>
                        <span className="menu_item_events item_events_active">скоро</span>
                     </div>
                     <div className="menu_item">
                        <img src={miniDrink} alt="background" />
                        <span className="menu_item_name">Напитки</span>
                        <span className="menu_item_events">скоро</span>
                     </div>
                  </div>
                  <div className="main_food">
                     <div className="main_food_chiken main_food_pos">
                        <img src={chiken} alt="chiken" />
                        <span className="main_food_name">Chiken</span>
                     </div>
                     <div className="main_food_pizza_min">
                        <div className="main_food_yger main_food_pos">
                           <img src={yger} alt="yger" />
                           <span className="main_food_name">With eel</span>
                        </div>
                        <div className="main_food_corn main_food_pos">
                           <img src={corn} alt="corn" />
                           <span className="main_food_name">Corn dog</span>
                        </div>
                     </div>
                     <div className="main_food_pizza main_food_pos">
                        <img src={pizza} alt="pizza" />
                        <span className="main_food_name">Pizza</span>
                     </div>
                     <div className="main_food_action main_food_pos">
                        <img src={action} alt="action" />
                        <span className="main_food_name">Action</span>
                     </div>

                  </div>
                  <div className="popular_new_food">
                     <div className="popular_new_food_switch">
                        <div className="popular_new swith_hov">New</div>
                        <div className="popular_popular swith_hov">Popular</div>
                     </div>
                     <Slider />
                  </div>
                  <OrderInf />
               </div>
            </div>
         </div>
         <AdaptMenu />
      </>
   );
}
export default Home;