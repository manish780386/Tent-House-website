import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Home,
  CalendarCheck,
  PartyPopper,
  ArrowLeft,
  Menu
} from "lucide-react";
import "./Navbar.css";
import logo from "../assets/Logo/logo.png";

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* Back Icon */}
      <div className="back-btn" onClick={() => navigate(-1)}>
        <ArrowLeft size={22} />
      </div>

      {/* Logo */}
      <div className="logo-section">
        <img src={logo} alt="Logo" />
        <div className="logo">Maa Parvati Tent House</div>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <Menu size={26} />
      </div>

      {/* Menu */}
      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <NavLink to="/" className="nav-item" onClick={() => setMenuOpen(false)}>
          <Home size={18} /> Home
        </NavLink>

        <NavLink to="/events" className="nav-item" onClick={() => setMenuOpen(false)}>
          <PartyPopper size={18} /> Events
        </NavLink>

        <NavLink to="/booking" className="nav-item" onClick={() => setMenuOpen(false)}>
          <CalendarCheck size={18} /> Booking
        </NavLink>
      </div>
    </nav>
  );
}
