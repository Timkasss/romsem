import './style.scss';
import './style/fonts.scss'
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Basket from './components/Basket';
import Goods from './pages/Goods';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Menu />
      <Basket />
      <main className="main">
        {/* <Home /> */}
        <Goods />
      </main>

      <Footer />
    </div>
  );
}

export default App;
