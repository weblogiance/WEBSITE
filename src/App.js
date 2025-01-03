
import { Routes,Route } from 'react-router-dom';
import Navbar from './similarComponets/Navbar';
import Footer from './similarComponets/Footer';
import Contactus from './components/Contactus';
import Home from './page/Home';

function App() {
  return (
    <div >
        <Navbar/>
        <Routes>
             <Route path='/' element={<Home/>} />
            <Route path="/ContactUs" element={<Contactus/>} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
