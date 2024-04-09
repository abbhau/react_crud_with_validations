import {BrowserRouter, Route, Routes} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import About from './Components/Pages/About.js';
import Contact from './Components/Pages/Contact';
import Home from './Components/Pages/Home.js';
import NavBar from './Components/Layout/NavBar.js';
import AddUser from './Components/Pages/User/AddUser';
import ShowUser from './Components/Pages/User/ShowUser';
import UpdateUser from './Components/Pages/User/UpdateUser';
import DeleteUser from './Components/Pages/User/DeleteUser';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
          <Routes>
             <Route path='/home' element={<Home/>}/>
             <Route path='/about' element={<About/>}/>
             <Route path='/contact' element={<Contact/>}></Route>
             <Route path='/user/add' element={<AddUser/>}></Route>
             <Route path='/user/show' element={<ShowUser/>}></Route>
             <Route path='/user/update/:userId' element={<UpdateUser/>}></Route>
             <Route path='/user/delete/:userId' element={<DeleteUser/>}></Route>
          </Routes>
      </BrowserRouter>
    </div>
   
  );
}

export default App;
