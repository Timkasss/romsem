import './style.scss';
import './style/fonts.scss'
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
