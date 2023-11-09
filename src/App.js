import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
import Divider from './Divider';
import Collections from './comp/Collections';
import Navbar from './comp/Navbar';
import Aboutus from './comp/Aboutus';
import Bundle from './comp/Bundle';
import Contact from './comp/Contact';
import Filter from './comp/Filter';
import Projects2 from './comp/Products2';
import Signup from './comp/Signup';
import Account from './comp/Account';
import Login from './comp/Login';
import FandQ from './comp/FandQ';


import { Contextapi } from './comp/Contextapi';



function App() {
  return (
    <>
    <Router>
      <Contextapi.Provider >
      <Navbar/>
      <Routes>
        <Route path ='/header' element={<Header/>} ></Route>
          <Route path ='/' element={<Divider/>} ></Route>
          <Route path ='/collections' element={<Collections/>} ></Route>
          <Route path ='/about' element={<Aboutus/>} ></Route>
          <Route path ='/bundle' element={<Bundle/>} ></Route>
          <Route path ='/contact' element={<Contact/>} ></Route>
          <Route path ='/products' element={<Projects2/>} ></Route>
          <Route path ='/filter' element={<Filter/>} ></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/account' element={<Account/>}> </Route>
        
         </Routes>
      <FandQ/>   
      <Footer/>
      </Contextapi.Provider>
    </Router>
    </>
  );
}

export default App;
