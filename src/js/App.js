import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/home";
import Personaje from "./component/Personaje";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route
            path="/Personaje/:id"
            element={<Personaje></Personaje>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;