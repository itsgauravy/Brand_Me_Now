import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Header from './Header';
import Footer from './Footer';
import Divider from './Divider';


function App() {
  return (
    <>
    <Router>
    <Header/>
      <Routes>
          <Route path ='/' element={<Divider/>} ></Route>
         </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
