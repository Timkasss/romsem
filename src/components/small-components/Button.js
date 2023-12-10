import "../small-components/button.scss";
import { useTranslation } from 'react-i18next';


function Button({ cls, index, addBasket }) {

   const { t } = useTranslation();


   return (
      <button className={`item_button ${cls ? cls : ''}`} onClick={() => addBasket(index)}>{t('button.button')}</button>
   )
}
export default Button;