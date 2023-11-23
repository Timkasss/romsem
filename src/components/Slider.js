import '../style/slider.scss'
import { useEffect } from 'react';

import salomon from '../image/salomon.png';
import filadelfia from '../image/filadelfia.png';
import themostbigfil from '../image/the_most_big_fil.png';






function Slider() {
   useEffect(() => {
      sliderFood()
   });

   function sliderFood() {
      let sliders = document.querySelector('.slider_food_items');
      const slide = document.querySelector('.slider_food_item');
      const slideQuantity = document.querySelectorAll('.slider_food_item');
      let pre = document.querySelector('.slider_controller_pre');
      let next = document.querySelector('.slider_controller_next');
      let adaptivWidth = document.querySelector('.main__min_container');


      let slidersGap = getComputedStyle(sliders);
      let countSlide = slideQuantity.length - 3;

      let activeSlide = 0;

      let slideWidth = slide.offsetWidth + parseFloat(slidersGap.gap);

      let scrollWidth = 0;

      pre.addEventListener('click', () => {
         if (activeSlide <= 0) return;
         activeSlide--;
         scrollWidth = scrollWidth + slideWidth;
         sliders.style.transform = `translate3d(${scrollWidth}px, 0px, 0px)`
      });

      next.addEventListener('click', () => {
         if (activeSlide >= countSlide) return;
         if (adaptivWidth.offsetWidth < 980) {
            countSlide = slideQuantity.length - 2;
         }
         scrollWidth = scrollWidth - slideWidth;
         activeSlide++;
         sliders.style.transform = `translate3d(${scrollWidth}px, 0px, 0px)`
      })

   }
   return (
      <div className="slider_food_wrapper">
         <div className="slider_food">
            <div className="slider_food_items">
               <div className="slider_food_item">
                  <div className="slider_food_item_img">
                     <img src={salomon} alt="food" />
                  </div>
                  <div className="slider_food_item_name">Саломон сет</div>
                  <div className="slider_food_item_quantity">1050 грамм, 30 кусочков</div>
                  <div className="slider_food_item_buy">
                     <div className="slider_food_item_buy_cena">1500 COM</div>
                     <div className="slider_food_item_buy_button">
                        <button className="slider_item_button">Want!</button>
                     </div>
                  </div>
               </div>
               <div className="slider_food_item">
                  <div className="slider_food_item_img">
                     <img src={filadelfia} alt="food" />
                  </div>
                  <div className="slider_food_item_name">Филадельфия и лосось сет</div>
                  <div className="slider_food_item_quantity">1260 грамм, 36 кусочков</div>
                  <div className="slider_food_item_buy">
                     <div className="slider_food_item_buy_cena">1150 COM</div>
                     <div className="slider_food_item_buy_button">
                        <button className="slider_item_button">Want!</button>
                     </div>
                  </div>
               </div>
               <div className="slider_food_item">
                  <div className="slider_food_item_img">
                     <img src={themostbigfil} alt="food" />
                  </div>
                  <div className="slider_food_item_name">Самая большая Филадельфия</div>
                  <div className="slider_food_item_quantity">2050 грамм, 45 кусочков</div>
                  <div className="slider_food_item_buy">
                     <div className="slider_food_item_buy_cena">2100 COM</div>
                     <div className="slider_food_item_buy_button">
                        <button className="slider_item_button">Want!</button>
                     </div>
                  </div>
               </div>
               <div className="slider_food_item">
                  <div className="slider_food_item_img">
                     <img src={themostbigfil} alt="food" />
                  </div>
                  <div className="slider_food_item_name">Самая большая Филадельфия</div>
                  <div className="slider_food_item_quantity">2050 грамм, 45 кусочков</div>
                  <div className="slider_food_item_buy">
                     <div className="slider_food_item_buy_cena">2100 COM</div>
                     <div className="slider_food_item_buy_button">
                        <button className="slider_item_button">Want!</button>
                     </div>
                  </div>
               </div>
               <div className="slider_food_item">
                  <div className="slider_food_item_img">
                     <img src={themostbigfil} alt="food" />
                  </div>
                  <div className="slider_food_item_name">Самая большая Филадельфия</div>
                  <div className="slider_food_item_quantity">2050 грамм, 45 кусочков</div>
                  <div className="slider_food_item_buy">
                     <div className="slider_food_item_buy_cena">2100 COM</div>
                     <div className="slider_food_item_buy_button">
                        <button className="slider_item_button">Want!</button>
                     </div>
                  </div>
               </div>
               <div className="slider_food_item">
                  <div className="slider_food_item_img">
                     <img src={themostbigfil} alt="food" />
                  </div>
                  <div className="slider_food_item_name">Самая большая Филадельфия</div>
                  <div className="slider_food_item_quantity">2050 грамм, 45 кусочков</div>
                  <div className="slider_food_item_buy">
                     <div className="slider_food_item_buy_cena">2100 COM</div>
                     <div className="slider_food_item_buy_button">
                        <button className="slider_item_button">Want!</button>
                     </div>
                  </div>
               </div>
            </div>
            <div className="slider_food_controls">
               <div className="slider_controller_pre">
                  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                     <ellipse cx="30" cy="30" rx="30" ry="30" transform="rotate(90 30 30)" fill="#111111" />
                     <path d="M36 15L23 28.5L36 42" stroke="#F2F2F2" strokeLinecap="round" />
                  </svg>
               </div>
               <div className="slider_controller_next">
                  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                     <ellipse cx="30" cy="30" rx="30" ry="30" transform="rotate(90 30 30)" fill="#111111" />
                     <path d="M23 15L36 28.5L23 42" stroke="#F2F2F2" strokeLinecap="round" />
                  </svg>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Slider;