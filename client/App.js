import{ Routes,Route} from 'react-router-dom';
import './App.css';

import HomePage from '../client/src/pages/HomePage';
import About from '../client/src/pages/About';
import Policy from '../client/src/pages/Policy';
import Pagenotfound from '../client/src/pages/Pagenotfound';
import Contact from '../client/src/pages/Contact';
import Register from '../client/src/pages/Auth/Register';
import Login from '../client/src/pages/Auth/Login';
import Dashborad from '../client/src/pages/Auth/Dashborad';
import Reset from '../client/src/pages/Auth/Reset';
import ResetNewPassword from '../client/src/pages/Auth/ResetNewPassword';
import Category from '../client/src/pages/Category';

import ProductGrid from '../client/src/pages/ProductGrid';

function App() {
  return (

   <Routes>
    <Route path='/' element = {<HomePage />} />
    <Route path='/about' element = {<About />} />
    <Route path='/register' element = {<Register />} />
    <Route path='/product' element = {<ProductGrid />} />
    <Route path='/login' element = {<Login />} />
    <Route path='/login/reset' element = {<Reset />} />
    <Route path='/login/reset-password' element = {<ResetNewPassword />} />
    <Route path='/contact' element = {<Contact />} />
    <Route path='/dashborad' element = {<Dashborad />} />
    <Route path='/category' element = {<Category />} />
    <Route path='/policy' element = {<Policy />} />
    <Route path='*' element = {<Pagenotfound />} />
   </Routes>
  );
}

export default App;
