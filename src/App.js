import Log from "./components/Log";
import "./styles.css";
import Home from "./components/Home";
import Prod from "./components/Prod";
import User from "./components/User";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Log />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/User" element={<User />} />
          <Route path="/Prod" element={<Prod />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
