import{ Routes,Route} from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import About from './pages/About';
import Policy from './pages/Policy';
import Pagenotfound from './pages/Pagenotfound';
import Contact from './pages/Contact';
import Register from './pages/Auth/Register';
import Login from './pages/Auth/Login';
import Dashborad from './pages/Auth/Dashborad';
import Reset from './pages/Auth/Reset';
import ResetNewPassword from '../src/components/layout/ResetNewPassword';
import ProductGrid from './pages/ProductGrid';

import AllCategory from './components/layout/category/AllCategory';

function App() {
  return (

   <Routes>
    <Route path='/' element = {<HomePage />} />
    <Route path='/about' element = {<About />} />
    <Route exact path="/category/all" element={<AllCategory />} />
    <Route path='/register' element = {<Register />} />
    <Route path='/product' element = {<ProductGrid />} />
    <Route path='/login' element = {<Login />} />
    <Route path='/login/reset' element = {<Reset />} />
    <Route path='/login/reset-password' element = {<ResetNewPassword />} />
    <Route path='/contact' element = {<Contact />} />
    <Route path='/dashborad' element = {<Dashborad />} />
    <Route path='/logout' element = {<Dashborad />} />
    
    <Route path='/policy' element = {<Policy />} />
    <Route path='*' element = {<Pagenotfound />} />
   </Routes>
  );
}

export default App;
