import '../style/slide.scss';
import { useEffect } from 'react';

function Slide({ goods }) {
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
      <article className="slider_food_item">
         <div className="slider_food_item_img">
            <img src={goods.img} alt="food" />
         </div>
         <h1 className="slider_food_item_name">{goods.name}</h1>
         <p className="slider_food_item_quantity">{goods.quantity}</p>
         <div className="slider_food_item_buy">
            <p className="slider_food_item_buy_cena">{goods.cost}</p>
            <div className="slider_food_item_buy_button">
               <button className="slider_item_button">Want!</button>
            </div>
         </div>
      </article>
   )
}
export default Slide;