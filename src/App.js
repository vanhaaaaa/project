import {  HashRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/home/Home";

import 'bootstrap/dist/css/bootstrap.min.css';

import Product from "./pages/products/Product";

import ProdDetail from "./pages/productDetail/ProdDetail";
import Cart from "./pages/cart/Cart";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Checkout from "./pages/cart/Checkout";
import FinalCheckout from "./components/checkout/FinalCheckout";

import LoginPage from "./pages/user/LoginPage";
import RegisterPage from "./pages/user/RegisterPage";


function App() {
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged(setUser);
  //   return () => unsubscribe();
  // }, []);
  return (
    <>

      <HashRouter>

<Routes>
  <Route index element={<Home />}></Route>
  <Route path="/products" element={<Product />}></Route>
  <Route path="/detail/:id/:brand" element={<ProdDetail />}></Route>
  <Route path="/cart" element={<Cart />}></Route>
  <Route path="/contact" element={<Contact />}></Route>
  <Route path="/About" element={<About />}></Route>
  <Route path="/checkout" element={<Checkout />}></Route>
  <Route path="/finalcheckout" element={<FinalCheckout />}></Route>
  <Route path="/login" element={<LoginPage />}></Route>
  <Route path="/register" element={<RegisterPage />}></Route>
</Routes>

      </HashRouter>


    </>
  );
}

export default App;
