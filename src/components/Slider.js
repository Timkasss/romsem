import '../style/slider.scss'


import { goods } from '../data/sets';
import Slide from './Slide';


function Slider() {

   return (
      <div className="slider_food_wrapper">
         <div className="slider_food">
            <div className="slider_food_items">
               {
                  goods.map(item => {
                     return (
                        <Slide key={item.id} goods={item} />
                     )
                  })
               }
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