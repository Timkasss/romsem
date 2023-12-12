import { useState, useRef, useEffect } from 'react';
import { flushSync } from 'react-dom';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import OrderInf from '../components/OrderInf';
import AdditiveSet from '../components/AdditiveSet';
import Product from '../components/Product';


import '../style/productItem.scss';

import { goods } from '../data/sets';
import { additives } from '../data/additives';

import Swiper from 'swiper';
import 'swiper/css';

function ProductItem() {

   const { id } = useParams();
   const set = goods[id];

   const [activeSlide, setActiveSlide] = useState(0);
   const visibleSlides = 3;
   const refSlide = useRef(null);

   function preSlide() {
      flushSync(() => {
         if (activeSlide > 0) {
            setActiveSlide(Math.max(activeSlide - visibleSlides, 0));
         } else {
            setActiveSlide(0)
         }
      })

      refSlide.current.scrollIntoView({
         behavior: 'smooth',
         block: 'nearest',
         inline: 'center'
      }
      )
   }
   function nextSlide() {
      flushSync(() => {
         if (activeSlide < additives.length - visibleSlides) {
            setActiveSlide(activeSlide + visibleSlides);
         } else {
            setActiveSlide(additives.length - 1)
         }
      })

      refSlide.current.scrollIntoView({
         behavior: 'smooth',
         block: 'nearest',
         inline: 'center'
      }
      )
   }

   const nextProduct = () => {
      let result = id;
      if (set.id < goods.length - 1) {
         result++
      }
      return result;
   }
   let nextId = nextProduct()

   //Знаю, вийшов колхоз зі слайдером у верстці
   useEffect(() => {
      const swiper = new Swiper('.swiper', {
         slidesPerView: 3,
         simulateTouch: true,
         grabCursor: true,
         slideToClickedSlide: true,
         breakpoints: {
            320: {
               slidesPerView: 2,
            },
            528: {
               slidesPerView: 2,
            },
            928: {
               slidesPerView: 3,
            },
         },
      });
   }, []);


   return (
      <div className="product_item_wrapper">
         <div className="product_item__container">
            <div className="product_item_content">
               <header className="product_item_controls_wrapper">
                  <nav className='product_item_controls'>
                     <ul className='product_item_controls_list'>
                        <li className='product_item_controls_item'>
                           <NavLink className='product_item_controls_link control_pre' to="/goods">Back</NavLink>
                        </li>
                        <li className='product_item_controls_item'>
                           <NavLink className='product_item_controls_link control_next' to={`/set/${nextId}`}>Next</NavLink>
                        </li>
                     </ul>
                  </nav>
               </header>
               <Product set={set} />
               <section className="product_slider_wrapper">
                  <h3 className="product_slider_title">Рекомендуємо до цього товару</h3>
                  <header className="product_slider_control_wrapper">
                     <nav className='product_slider_control'>
                        <ul className='product_slider_control_list'>
                           <li className='product_slider_control_item'>
                              <button className='product_slider_control_link' onClick={preSlide}>
                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" fill="none">
                                    <ellipse cx="30" cy="30" rx="30" ry="30" transform="rotate(90 30 30)" fill="#111111" />
                                    <path d="M36 15L23 28.5L36 42" stroke="#F2F2F2" strokeLinecap="round" />
                                 </svg>
                              </button>
                           </li>
                           <li className='product_slider_control_item'>
                              <button className='product_slider_control_link' onClick={nextSlide}>
                                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" fill="none">
                                    <ellipse cx="30" cy="30" rx="30" ry="30" transform="rotate(90 30 30)" fill="#111111" />
                                    <path d="M23 15L36 28.5L23 42" stroke="#F2F2F2" strokeLinecap="round" />
                                 </svg>
                              </button>
                           </li>
                        </ul>
                     </nav>
                  </header>
                  <div className="product_slider swiper">
                     <div className="product_sliders swiper-wrapper">
                        {
                           additives.map((additive, index) => {
                              return (
                                 <AdditiveSet key={additive.id} additives={additive} ref={activeSlide === index ? refSlide : null} />
                              )
                           })
                        }
                     </div>
                  </div>
               </section>
               <div id="add_inf">
                  <OrderInf />
               </div>
            </div>
         </div>
      </div>
   )
}

export default ProductItem;