import '../style/adaptMenu.scss'

function AdaptMenu() {
   return (
      <nav className='adaptive_block_wrapper'>
         <ul className="adaptive_block">
            <li className="adaptive_block_menu adapt_item">
               <a href="#" className='adaptive_block_menu_link style_text'>Menu</a>
            </li>
            <li className="adaptive_block_basket adapt_item">
               <a href="#" className='adaptive_block_basket_link style_text'>Basket</a>
            </li>
            <li className="adaptive_block_reviews adapt_item">
               <a href="#" className="adaptive_block_reviews_link style_text">Reviews</a>
            </li>
         </ul>
      </nav>
   )
}

export default AdaptMenu;