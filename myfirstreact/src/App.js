import './App.css';

// import First from './First';
// import Read from './Read';
// import './box.css';
//import Form from './Form';
// import Boxshad from './Boxshad';
//import LDmode from './LDmode';

import Nav from './Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
//import Status from './Status';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Contact from './Contact';

import Category from './Category';
// import Signup from './Signup';
//import Signup from './Signup';
import Btn from './Btn';
import SearchItem from './SearchItem';
import SearchItem1 from './SearchItem1';
import SearchItem2 from './SearchItem2';
import CheckHotelPage from './CheckHotelPage';
import Footer from './Footer';
import About from './About/About';
import Signup from './Reg/Signup'
import Login from './Reg/Login';
import Adminlogin from './Adminlogin';

import AddRoom from './Admin/Page/AddRoom';
import Update from './Admin/Page/Update';
import Add from './Admin/Page/Add';
import TotalRoom from './Admin/Page/TotalRoom';
import UpdateRoom from './Admin/Page/UpdateRoom';

function App() {
  return (
<>

    <BrowserRouter>
       <Nav/>   
      <Routes>
         {/* <Route path='/' element={<Nav />}></Route> 
         <Route path="/" element={<Home />} />
        <Route path="/Category" element={<Category/>} /> */}
        
          <Route path="/" element={<Home />} />
        <Route path="/Category" element={<Category/>} /> 
         <Route path="/Btn" element={<Btn />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/Signup" element={<Signup/>} />
          <Route path="/Adminlogin" element={<Adminlogin />} /> 
          
          <Route path="/SearchItem" element={<SearchItem />} />
          <Route path="/SearchItem1" element={<SearchItem1 />} />
          <Route path="/SearchItem2" element={<SearchItem2 />} />
        <Route path="/CheckHotelPage" element={<CheckHotelPage />} />  

  <Route path="/AddRoom" exact element={<AddRoom/>}></Route>
  <Route path="/updateRoom/:id" exact element={<UpdateRoom/>}></Route>
  <Route path="/TotalRoom" exact element={<TotalRoom/>}></Route> 
  {/* <Route path="/add" exact element={<Add/>}></Route>  */}

        
 {/* <Route path="/" exact element={<Dashboard/>}></Route>
  <Route path="/update" exact element={<Update/>}></Route>
  <Route path="/add" exact element={<Add/>}></Route> */}

      </Routes>
         {/* <Footer />    */}
    </BrowserRouter>
        </>
 );
}

export default App;


