import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

function SearchProduct({ item }) {
   const { t } = useTranslation();
   return (
      <NavLink to={`/set/${item.id}`} className="search_hover">
         <article className='result_found'>
            <img className='result_img' src={item.img} alt="food" />
            <div className="result_found_content">
               <h1 className="result_found_name">{t(`goods.${item.id}.name`, { defaultValue: item.name })}</h1>
               <p className="result_found_weight"><span>{t(`goods.${item.id}.weight`, { defaultValue: item.weight })}</span>{t(`goods.${item.id}.quantity`, { defaultValue: item.quantity })}</p>
               <p className="result_found_cost">{item.cost}</p>
            </div>
            <button className='buy'>Want!</button>
         </article>
      </NavLink>
   )
}
export default SearchProduct;