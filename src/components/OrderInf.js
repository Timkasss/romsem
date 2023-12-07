import { useState } from "react";
import { useTranslation } from 'react-i18next';
function OrderInf() {

   const [showText, setShowText] = useState(false);
   function showDetails() {
      setShowText(!showText);
   }
   const { t } = useTranslation();
   return (
      <section className={`order_details ${showText ? '' : 'details-shadow'}`}>
         <h1 className="order_details_title">{t('infa.order')}</h1>
         <p className="order_details_text">{t('infa.restaurant_info')}</p>
         <p className="order_details_text"> {t('infa.menu_types')}</p>
         <ul className="order_details_text_list">
            <li className="order_details_text_item">{t('infa.classic_sushi')}</li>
            <li className="order_details_text_item">{t('infa.exotic_sushi')}</li>
            <li className="order_details_text_item">{t('infa.spicy_sushi')}</li>
         </ul>
         <p className="order_details_text">{t('infa.specialty_items')} </p>
         {showText && (
            <>
               <p className="order_details_text">{t('infa.specialty_items')}</p>
               <p className="order_details_text">{t('infa.specialty_items')}</p>
               <p className="order_details_text">{t('infa.specialty_items')}</p>
               <p className="order_details_text">{t('infa.specialty_items')}</p>
            </>
         )
         }
         <div onClick={showDetails} className="order_details_button_wrapper">
            <span className={showText ? 'order_details_button' : 'arrow_rotate'}>{t('infa.details')}</span>
         </div>
      </section>
   )
}

export default OrderInf;