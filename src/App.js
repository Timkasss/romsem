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

import { useState } from 'react';

import {
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import AdaptMenu from './components/AdaptMenu';

import { ProductContext } from './components/context';
function App() {
  const location = useLocation();
  const showOnlyOrder = location.pathname === '/order';

  const [arrBasket, setArrBasket] = useState([])
  return (
    <ProductContext.Provider value={{ arrBasket, setArrBasket }}>
      <div className="wrapper">
        {showOnlyOrder ? (
          <Order />
        ) : (
          <>
            <Header />
            <Menu />
            <Basket />
            <main className="main">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/goods" element={<Goods />} />
                <Route path="/reviews" element={<Reviews />} />
                <Route path="/set/:id" element={<ProductItem />} />
              </Routes>
              <AdaptMenu />
            </main>

            <Footer />
          </>
        )
        }

      </div>
    </ProductContext.Provider >
  );
}

export default App;
