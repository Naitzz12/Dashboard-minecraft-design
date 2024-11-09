import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Navbar from "./components/Navbar";
import Dash from "./pages/Dash";
import Server from "./pages/Server";
import Sett from "./pages/Sett";
import Acc from "./pages/Acc";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/dash" element={<Dash />} />
          <Route path="/server" element={<Server />} />
          <Route path="/sett" element={<Sett />} />
          <Route path="/acc" element={<Acc />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
