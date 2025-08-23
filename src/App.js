import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Aboutus from './pages/Aboutus';
import Contactus from './pages/Contactus';
import Donatenow from './pages/Donatenow';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div >
      <ScrollToTop />
      <div>
        <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route  path='/gallery' element={<Gallery/>}/>
        <Route path="/about" element={<Aboutus/>}/>
        <Route path='/contact' element={<Contactus/>}/>
        <Route path="/donate" element={<Donatenow/>}/>



      </Routes>
      <div>
        <Footer/>
      </div>
     
    </div>
  );
}

export default App;
