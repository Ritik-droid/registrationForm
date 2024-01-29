import "./App.css";
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
