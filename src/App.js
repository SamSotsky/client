import {BrowserRouter, Link, Route, Routes } from "react-router-dom"
// import DisplayProd from "./views/DisplayProd";
import CreateProd from "./components/CreateProd"

function App() {
  return (
    <BrowserRouter>
    <h1> Product Manager FUllll</h1>
    <Link to="/prods">DOES IT WOEK??</Link>
    
    <Routes>
      <Route path="/" element={<CreateProd />} />
    </Routes>


    </BrowserRouter>
  );
}

export default App;
