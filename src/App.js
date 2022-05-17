import './App.css';
import Navbar from './components/navbar';
import Categories from './components/categories';
import Carousel from './components/carousel';

function App() {
  return (
   <>
    <div> <Navbar /></div>
    <div><Categories /></div>
    <div><img src='../../images/carousel.png' width="100%"/></div>
    <div></div>
   </>
  );
}

export default App;
