import '../style/slider.scss'
import { useEffect, useState, useRef } from 'react';
import { flushSync } from 'react-dom';

import { goods } from '../data/sets';

import ItemSets from "./ItemSets";

function Slider() {
   // useEffect(() => {
   //    sliderFood()
   // });

   // function sliderFood() {
   //    let sliders = document.querySelector('.slider_food_items');
   //    const slide = document.querySelector('.goods_item');
   //    const slideQuantity = document.querySelectorAll('.goods_item');
   //    let pre = document.querySelector('.slider_controller_pre');
   //    let next = document.querySelector('.slider_controller_next');
   //    let adaptivWidth = document.querySelector('.main__min_container');


   //    let slidersGap = getComputedStyle(sliders);
   //    let countSlide = slideQuantity.length - 3;

   //    let activeSlide = 0;

   //    let slideWidth = slide.offsetWidth + parseFloat(slidersGap.gap);

   //    let scrollWidth = 0;

   //    pre.addEventListener('click', () => {
   //       if (activeSlide <= 0) return;
   //       activeSlide--;
   //       scrollWidth = scrollWidth + slideWidth;
   //       sliders.style.transform = `translate3d(${scrollWidth}px, 0px, 0px)`
   //    });

   //    next.addEventListener('click', () => {
   //       if (activeSlide >= countSlide) return;
   //       if (adaptivWidth.offsetWidth < 980) {
   //          countSlide = slideQuantity.length - 2;
   //       }
   //       scrollWidth = scrollWidth - slideWidth;
   //       activeSlide++;
   //       sliders.style.transform = `translate3d(${scrollWidth}px, 0px, 0px)`
   //    })

   // }

   const [slide, setSlide] = useState(0);
   const clickRef = useRef(null)

   function nextSlide() {
      flushSync(() => {
         if (slide < goods.length - 1) {
            setSlide(slide + 1);
         } else {
            setSlide(goods.length - 1)
         }
      })
      clickRef.current.scrollIntoView({
         behavior: 'smooth',
         block: 'nearest',
         inline: 'center'
      });

   }

   function preSlide() {
      flushSync(() => {
         if (slide > 0) {
            setSlide(slide - 1);
         } else {
            setSlide(0)
         }
      })
      clickRef.current.scrollIntoView({
         behavior: 'smooth',
         block: 'nearest',
         inline: 'nearest'
      });

   }
   return (
      <div className="slider_food_wrapper">
         <div className="slider_food">
            <div className="slider_food_items">
               {
                  goods.map((item, index) => {
                     return (
                        <ItemSets key={item.id} goods={item} index={index} ref={index === slide ? clickRef : null} slid={slide} />
                     )
                  })
               }
            </div>
            <div className="slider_food_controls">
               <div className="slider_controller_pre" onClick={preSlide}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                     <ellipse cx="30" cy="30" rx="30" ry="30" transform="rotate(90 30 30)" fill="#111111" />
                     <path d="M36 15L23 28.5L36 42" stroke="#F2F2F2" strokeLinecap="round" />
                  </svg>
               </div>
               <div className="slider_controller_next" onClick={nextSlide}>
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