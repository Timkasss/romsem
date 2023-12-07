import "../small-components/button.scss";
import { useTranslation } from 'react-i18next';


function Button({ cls, id }) {
   function addinBasket() {
      alert(id)
   }

   const { t } = useTranslation();

   return (
      <button className={`item_button ${cls ? cls : ''}`} onClick={addinBasket}>{t('button.button')}</button>
   )
}
export default Button;