import {  HashRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/home/Home";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "reactstrap";

function App() {
  return (
    <>

      <HashRouter>

<Routes>
  <Route index element={<Home />}></Route>

</Routes>

      </HashRouter>

  
    </>
  );
}

export default App;
