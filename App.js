import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header1 from './Component/Header1';
import Index from './Pages/Index';
import Footer from './Component/Footer';
import Header2 from './Component/Header2';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Faq from './Pages/Faq';
import Product from './Pages/Product';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signup from './Pages/Sign-up';
import Signin from './Pages/Sign-in';
import Story from './Pages/Story';
import Sidebar from './Component/Sidebar';
function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element ={<><Sidebar/><Footer/></>}></Route>
        <Route path="/" element={<> <Header1 /><Index/><Footer /> </>}></Route>
        <Route path="/about" element={<> <Header2 /><About /><Footer /> </>}></Route>
        <Route path="/contact" element={<> <Header2 /><Contact /><Footer /> </>}></Route>
        <Route path="/faq" element={<> <Header2 /><Faq /><Footer /> </>}></Route>
        <Route path="/signup" element={<> <Header2 /><Signup /><Footer /> </>}></Route>
        <Route path="/signin" element={<> <Header2 /><Signin /><Footer /> </>}></Route>
        <Route path="/product" element={<> <Header2 /><Product/><Footer /> </>}></Route>
        <Route path="*" element={<> <Header2 /><Story /><Footer /> </>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
