import {  HashRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/home/Home";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "reactstrap";
import Product from "./pages/products/Product";

function App() {
  return (
    <>

      <HashRouter>

<Routes>
  <Route index element={<Home />}></Route>
  <Route path="/products" element={<Product />}></Route>
</Routes>

      </HashRouter>

  
    </>
  );
}

export default App;
