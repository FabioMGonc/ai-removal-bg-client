
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Result from "./pages/Result.tsx";
import BuyCredit from "./pages/BuyCredit.tsx";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";

const App = () => {

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
          <Route path="/buy" element={<BuyCredit />} />
        </Routes>
      <Footer />
    </div>
  )
}

export default App;
