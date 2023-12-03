import "../small-components/button.scss";



function Button({ cls }) {
   function test() {
      alert('hello')
   }
   return (
      <button className={`item_button ${cls ? cls : ''}`} onClick={test}>Want!</button>
   )
}
export default Button;