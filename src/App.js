import './style.scss';
import './style/fonts.scss'
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Basket from './components/Basket';
import Goods from './pages/Goods';
import ProductItem from './pages/ProductItem';
import Reviews from './components/Reviews';
import Order from './pages/Order';

function App() {
  return (
    <div className="wrapper">
      {/* <Header />
      <Menu />
      <Basket /> */}
      <main className="main">
        <Order />
        {/* <Home /> */}
        {/* <Goods /> */}
        {/* <ProductItem /> */}
        {/* <Reviews /> */}
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
