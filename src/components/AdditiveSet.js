import '../style/additiveSet.scss';
import { forwardRef } from 'react';


export default forwardRef(
   function AdditiveSet(props, ref) {
      return (
         <article className="product_slide" ref={ref}>
            <h3 className="product_slide_name">{props.additives.name}</h3>
            <div className="product_slide_img">
               <img src={props.additives.image} alt="food" />
            </div>
            <div className="product_slide_cena">
               <p className="product_slide_price">{props.additives.cost}</p>
               <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                  <ellipse cx="13" cy="13" rx="13" ry="13" transform="rotate(90 13 13)" fill="#F46D40" />
                  <path d="M13 5.84998V19.5" stroke="#F2F2F2" strokeWidth="2" strokeLinecap="round" />
                  <path d="M6.5 12.35L20.15 12.35" stroke="#F2F2F2" strokeWidth="2" strokeLinecap="round" />
               </svg>
            </div>
         </article>
      )
   }
);
