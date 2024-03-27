import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Events from "./Pages/Events";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Success from "./Pages/Success";
import Contact from "./Pages/Contact";
import EventDetail from "./Pages/Detail";
import Speakers from "./Pages/Speakers";
import ScrollToTop from "./Components/ScrollToTop";
import SomeCom from "./Pages/SomeCom";
import Admin from "./Pages/Admin";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/register/:id" element={<Register />} />
        <Route path="/success" element={<Success />} />
        <Route path="/events/:id" element={<EventDetail />} />
        <Route path="/check" element={<SomeCom />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
