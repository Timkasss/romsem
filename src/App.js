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


import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';




function App() {
  return (
    <div className="wrapper">
      <Router>

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
          {/* <Order /> */}

        </main>

        <Footer />

      </Router>

    </div>
  );
}

export default App;
