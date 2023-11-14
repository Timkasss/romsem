import '../style/main.scss'
import chiken from '../image/chiken.jpg';
import pizza from '../image/pizza.jpg';
import yger from '../image/ygr.jpg';
import corn from '../image/corn_dog.jpg';
import action from '../image/sale.jpg';
import salomon from '../image/salomon.png';
import filadelfia from '../image/filadelfia.png';
import themostbigfil from '../image/the_most_big_fil.png';


function Home() {
   return (
      <main className="main">
         <div className="main__container">
            <div className="main_content">
               <div className="main__min_container">
                  <div className="slider_wrapper">
                     <div className="sliders">
                        <div className="slider">
                           <div className="slider_name">
                              <div className="slider_title">Філадельфія і лосось</div>
                              <div className="slider_untitle">1260 грамм 36 кусочек</div>
                           </div>
                           <div className="slider_cena_wrapper">
                              <div className="slider_cena_sale">1599 COM</div>
                              <div className="slider_cena">599 COM</div>
                           </div>
                           <div className="slider_button_wrapper">
                              <button className="slider_button">Want!</button>
                           </div>
                        </div>
                     </div>
                     <div className="slider_active">
                        <span className="slider_acrive_point"></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                     </div>
                  </div>
                  <div className="main_food">
                     <div className="main_food_chiken main_food_pos">
                        <img src={chiken} alt="chiken" />
                        <span className="main_food_name">Chiken</span>
                     </div>
                     <div className="main_food_pizza_min">
                        <div className="main_food_yger main_food_pos">
                           <img src={yger} alt="yger" />
                           <span className="main_food_name">With eel</span>
                        </div>
                        <div className="main_food_corn main_food_pos">
                           <img src={corn} alt="corn" />
                           <span className="main_food_name">Corn dog</span>
                        </div>
                     </div>
                     <div className="main_food_pizza main_food_pos">
                        <img src={pizza} alt="pizza" />
                        <span className="main_food_name">Pizza</span>
                     </div>
                     <div className="main_food_action main_food_pos">
                        <img src={action} alt="action" />
                        <span className="main_food_name">Action</span>
                     </div>

                  </div>
                  <div className="popular_new_food">
                     <div className="popular_new_food_switch">
                        <div className="popular_new swith_hov">New</div>
                        <div className="popular_popular swith_hov">Popular</div>
                     </div>
                     <div className="slider_food_items">
                        <div className="slider_food_item">
                           <div className="slider_food_item_img">
                              <img src={salomon} alt="food" />
                           </div>
                           <div className="slider_food_item_name">Саломон сет</div>
                           <div className="slider_food_item_quantity">1050 грамм, 30 кусочков</div>
                           <div className="slider_food_item_buy">
                              <div className="slider_food_item_buy_cena">1500 COM</div>
                              <div className="slider_food_item_buy_button">
                                 <button className="slider_item_button">Want!</button>
                              </div>
                           </div>
                        </div>
                        <div className="slider_food_item">
                           <div className="slider_food_item_img">
                              <img src={filadelfia} alt="food" />
                           </div>
                           <div className="slider_food_item_name">Филадельфия и лосось сет</div>
                           <div className="slider_food_item_quantity">1260 грамм, 36 кусочков</div>
                           <div className="slider_food_item_buy">
                              <div className="slider_food_item_buy_cena">1150 COM</div>
                              <div className="slider_food_item_buy_button">
                                 <button className="slider_item_button">Want!</button>
                              </div>
                           </div>
                        </div>
                        <div className="slider_food_item">
                           <div className="slider_food_item_img">
                              <img src={themostbigfil} alt="food" />
                           </div>
                           <div className="slider_food_item_name">Самая большая Филадельфия</div>
                           <div className="slider_food_item_quantity">2050 грамм, 45 кусочков</div>
                           <div className="slider_food_item_buy">
                              <div className="slider_food_item_buy_cena">2100 COM</div>
                              <div className="slider_food_item_buy_button">
                                 <button className="slider_item_button">Want!</button>
                              </div>
                           </div>
                        </div>

                     </div>
                  </div>
                  <div className="order_details">
                     <h1 className="order_details_title">Заказать суши в Бишкеке</h1>
                     <p className="order_details_text">Ресторан “Суши и Лапша” предлагаем своим клиентам самые вкусные суши с доставкой на дом, приготовленные по классическим и адаптированным к европейской аудитории рецептам, а также собственным наработкам наших поваров. Мы ценим время наших клиентов, поэтому вы можете заказать суши в Харькове с доставкой на дом или в офис.</p>
                     <h2 className="order_details_text"> В нашем меню более 20 видов суши: </h2>
                     <ul className="order_details_text_list">
                        <li className="order_details_text_item">Классические с сырым лососем, тунцом, окунем.</li>
                        <li className="order_details_text_item">Экзотические с тигровой креветкой, морским гребешком.</li>
                        <li className="order_details_text_item">Пикантные с копченым лососем, угрем.</li>
                     </ul>
                     <p className="order_details_text details-shadow"> В меню также представлены гунканы: с начинкой из красной икры и тобико, а также феликсы, где японский майонез сочетается с рыбой, морепродуктами, угрем. Любители острых блюд могут купить суши с соусом спайси. Популярные начинки — копченая курица, снежный краб, креветки, гребешки, тунец, лосось и окунь.</p>
                     <p className="order_details_text details-shadow-none"> В меню также представлены гунканы: с начинкой из красной икры и тобико, а также феликсы, где японский майонез сочетается с рыбой, морепродуктами, угрем. Любители острых блюд могут купить суши с соусом спайси. Популярные начинки — копченая курица, снежный краб, креветки, гребешки, тунец, лосось и окунь.</p>
                     <p className="order_details_text details-shadow-none"> В меню также представлены гунканы: с начинкой из красной икры и тобико, а также феликсы, где японский майонез сочетается с рыбой, морепродуктами, угрем. Любители острых блюд могут купить суши с соусом спайси. Популярные начинки — копченая курица, снежный краб, креветки, гребешки, тунец, лосось и окунь.</p>
                     <p className="order_details_text details-shadow-none"> В меню также представлены гунканы: с начинкой из красной икры и тобико, а также феликсы, где японский майонез сочетается с рыбой, морепродуктами, угрем. Любители острых блюд могут купить суши с соусом спайси. Популярные начинки — копченая курица, снежный краб, креветки, гребешки, тунец, лосось и окунь.</p>
                     <p className="order_details_text details-shadow-none"> В меню также представлены гунканы: с начинкой из красной икры и тобико, а также феликсы, где японский майонез сочетается с рыбой, морепродуктами, угрем. Любители острых блюд могут купить суши с соусом спайси. Популярные начинки — копченая курица, снежный краб, креветки, гребешки, тунец, лосось и окунь.</p>


                     <div className="order_details_button">
                        Подробнее
                        <svg width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M16 1L8.5 8L1 0.999999" stroke="#F46D40" strokeLinecap="round" />
                        </svg>

                     </div>
                  </div>
               </div>
            </div>
         </div>
      </main>

   );
}
export default Home;