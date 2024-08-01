import {  HashRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/home/Home";


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
