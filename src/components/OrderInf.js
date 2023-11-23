function OrderInf() {
   function showeDetails() {
      const shadow = document.querySelectorAll('.order_details_text');
      const hidden = document.querySelectorAll('.details-shadow-none');
      const button = document.querySelector('.order_details_button');

      shadow.forEach(item => {
         if (item.classList.contains('details-shadow')) {
            item.classList.remove('details-shadow')
         }
      });

      hidden.forEach(item => {
         item.style.display = "block";
      })
      button.style.display = "none"
   }
   return (
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


         <div onClick={showeDetails} className="order_details_button">
            Подробнее
            <svg width="17" height="9" viewBox="0 0 17 9" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M16 1L8.5 8L1 0.999999" stroke="#F46D40" strokeLinecap="round" />
            </svg>

         </div>
      </div>
   )
}

export default OrderInf;