
function Home() {
   return (
      <main className="main">
         <div className="main__container">
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
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
               </div>
            </div>
         </div>
      </main>

   );
}
export default Home;