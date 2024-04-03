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
import SpeakerReg from "./Components/SpeakerReg";
import SponsorReg from "./Components/SponsorReg";
import ScheduleReg from "./Components/ScheduleReg";
import EventReg from "./Pages/EventReg";
import StreamRoom from "./Pages/StreamRoom";
import Lobby from "./Pages/Lobby";
import EventSuccess from "./Pages/EventSuccess";
import CountCard from "./Components/Admin/CountCard";
import RoomLogin from "./Pages/RoomLogin";

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
        <Route path="/speaker/:id" element={<SpeakerReg />} />
        <Route path="/sponsor/:id" element={<SponsorReg />} />
        <Route path="/schedule/:id" element={<ScheduleReg />} />
        <Route path="/eventreg" element={<EventReg />} />
        <Route path="/eventsucces" element={<EventSuccess />} />
        <Route path="/room" element={<StreamRoom hidefooter={true} />} />
        <Route path="/lobby" element={<Lobby />} />
        <Route path="/cards" element={<CountCard />} />
        <Route path="/roomlogin/:id" element={<RoomLogin />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
