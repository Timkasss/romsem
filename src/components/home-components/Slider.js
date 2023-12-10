import { useRef } from 'react';

import ItemSets from "../ItemSets";

import '../../style/slider.scss'
import { goods } from '../../data/sets';

function Slider() {
   const clickRef = useRef(null);

   let scrollSlide = 0;
   function nextSlide() {
      let nextSlide = (clickRef.current.clientWidth + 40) / 3;
      let allWidth = nextSlide * (clickRef.current.children.length - 3);
      if (nextSlide && scrollSlide < allWidth) {
         scrollSlide = scrollSlide + nextSlide;
         clickRef.current.style.transform = `translate3d(${-scrollSlide}px, 0px, 0px)`;
      }
   }

   function preSlide() {
      let nextSlide = (clickRef.current.clientWidth + 40) / 3;
      if (nextSlide && scrollSlide > 0) {
         scrollSlide = scrollSlide - nextSlide;
         clickRef.current.style.transform = `translate3d(${-scrollSlide}px, 0px, 0px)`;
      }

   }


   return (
      <div className="slider_food_wrapper">
         <div className="slider_food ">
            <div className="slider_food_items" ref={clickRef}>
               {
                  goods.map((item, index) => {
                     return (
                        <ItemSets key={item.id} goods={item} index={index} />
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