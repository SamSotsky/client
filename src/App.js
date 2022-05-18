import {BrowserRouter, Link, Route, Routes } from "react-router-dom"
import DisplayProd from "./views/DisplayProd";
import SingleDisplay from "./views/SingleDisplay";


function App() {
  return (
    <BrowserRouter>
    <h1> Product Manager FUllll</h1>
    
    <Routes>
      <Route path="" element={<DisplayProd />} />
      <Route path="/prods/:id" element={<SingleDisplay />} />
    </Routes>


    </BrowserRouter>
  );
}

export default App;
