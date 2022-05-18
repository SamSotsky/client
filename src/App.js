import {BrowserRouter, Link, Route, Routes } from "react-router-dom"
import DisplayProd from "./views/DisplayProd";
import SingleDisplay from "./views/SingleDisplay";
import Edit from "./views/Edit"


function App() {
  return (
    <BrowserRouter>
    <h1> Product Manager FUllll</h1>
    
    <Routes>
      <Route path="" element={<DisplayProd />} />
      <Route path="/prods/:id" element={<SingleDisplay />} />
      <Route path="/prods/:id/edit" element={<Edit />} />
    </Routes>


    </BrowserRouter>
  );
}

export default App;
