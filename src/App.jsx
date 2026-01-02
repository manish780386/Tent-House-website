import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Booking from "./pages/Booking.jsx";
import Events from "./pages/Events.jsx";


import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Wedding from "./events/Wedding.jsx"
import Birthday from "./events/Birthday.jsx"
import Anniversary from "./events/Anniversary.jsx"
import  Engagement from "./events/Engagement.jsx"
import  Reception from "./events/Reception.jsx"
import  Haldi from "./events/Haldi.jsx"
import  Mehndi from "./events/Mehndi.jsx"
import  Sunderkand from "./events/Sunderkand.jsx"
import  Corporate from "./events/Corporate.jsx"
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/events" element={<Events />} />
        
         <Route path="/events/wedding" element={<Wedding/>} />
         <Route path="/events/birthday" element={<Birthday/>} />
         <Route path="/events/anniversary" element={<Anniversary/>} />
         <Route path="/events/engagement" element={<Engagement/>} />
         <Route path="/events/reception" element={<Reception/>} />
         <Route path="/events/haldi" element={<Haldi/>} />
         <Route path="/events/mehndi" element={<Mehndi/>} />
          <Route path="/events/sunderkand" element={<Sunderkand/>} />
          <Route path="/events/corporate" element={<Corporate/>} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
