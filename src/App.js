import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import PlanetList from "./components/planetList";
import CreatePlanet from "./components/createPlanetCard";

function App() {
  return (
    <>

    <BrowserRouter>
    <Routes>
    {/* <Navbar /> */}

      {/* <div className="container"> */}
        <Route path="/" exact element={<PlanetList />} />
        <Route path="/create" element={<CreatePlanet />} />
        {/* <Route path="/update/:id" element={<EditReview />} /> */}
      {/* </div> */}
      </Routes>
    </BrowserRouter>
    </>

  );
}

export default App;
