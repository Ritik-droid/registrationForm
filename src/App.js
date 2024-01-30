import "./App.css";
import Home from "./pages/Home";
import LogIN from "./pages/logIN";
import Register from "./pages/register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Register />} />
          <Route exact path="/logIN" element={<LogIN />} />
          <Route exact path="/Home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
