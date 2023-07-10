import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Apifetch from "../src/pages/Apifetch";
import Mynavsbar from "./pages/header/Mynavsbar";
import { Routes,BrowserRouter as Router, Route, useParams, Link, Outlet } from "react-router-dom";
import Errorpagerouter from'../src/Errorpagerouter';
import "bootstrap/dist/css/bootstrap.min.css";
import Singleproduct from './pages/Singleproduct';

import Footer from './footer/Footer';
import Cart from './Cartfolder/Cart';

import Checkout from './forms/Checkout';

function App() {
  return (
    <div>

<Router>
      <Mynavsbar />
   
      
      <Routes>
        <Route path="/" element={<Apifetch />} />
        <Route path="/home" element={<Apifetch />} />
        <Route path="*" element={<Errorpagerouter />} />
        <Route path="/product"   element={<Singleproduct />}/>
        <Route path="/cartshopping"   element={<Cart />}/>
        <Route path="/fromsingletohome"   element={<Apifetch />}/>
        <Route path="/goform"   element={<Checkout />}/>
        <Route path="/form"   element={<Checkout />}/>

      </Routes>

    </Router>

   <Footer/>
    </div>
   
  );
}

export default App;


