import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./layout/Header";
import Command from "./pages/Command";
import Donation from "./pages/Donation";
import Help from "./pages/Help";

function App() {
  return <BrowserRouter>
  <div className="min-h-screen w-full relative">
  <Header/>
    <Routes>

    <Route path="/" element={<Command />} />
    <Route path="/donation" element={<Donation />} />
    <Route path="/help" element={<Help />} />

    </Routes>
  </div>
  </BrowserRouter>;
}

export default App;
