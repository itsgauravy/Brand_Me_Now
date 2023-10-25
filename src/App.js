import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
import Divider from './Divider';
import Collections from './comp/Collections';
import Navbar from './comp/Navbar';
import Aboutus from './comp/Aboutus';



function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path ='/header' element={<Header/>} ></Route>
          <Route path ='/' element={<Divider/>} ></Route>
          <Route path ='/collections' element={<Collections/>} ></Route>
          <Route path ='/about' element={<Aboutus/>} ></Route>
        
         </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
