import './style.scss';
import './style/fonts.scss'
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Basket from './components/Basket';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Menu />
      <Basket />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
