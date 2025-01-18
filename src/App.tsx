import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Countries from "./pages/Countries";
import About from "./pages/About";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navigation />

      <Routes>
        {/* Definerar path för countries, sätter type och RegionName som params. Kräver båda för att Countries-komponenten ska renderas. Type för att kunna använvda både region och subregion för att få den uppdelning jag vill ha (kontinenter). North- och South America hämtas med subregion från API:et.*/}
        <Route path="/countries/:type/:regionName" element={<Countries />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
