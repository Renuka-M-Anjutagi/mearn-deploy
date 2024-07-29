import{ Routes,Route} from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

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
//import Category from '../src/pages/Categories';
import RecordList from './src/components/layout/recordList';
import ProductGrid from '../client/src/pages/ProductGrid';
import { Categories } from '../client/src/pages/Categories';
import AllCategory from './src/components/layout/category/AllCategory';
import { useDispatch } from 'react-redux';

function App() {

 

  return (

   <Routes>
    <Route path='/' element = {<HomePage />} />
    <Route exact path="/category/all" element={<AllCategory />} />

    <Route path='/about' element = {<About />} />
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
