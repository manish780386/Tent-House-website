import { PhoneCall, MessageCircle, MapPin, CalendarHeart } from "lucide-react";
import Logo from "../assets/Logo/logo.png";
import founder from "../assets/Logo/founder.jpg";
import address from  "../assets/Logo/address.jpg";

import "./Home.css";

export default function Home() {
  return (
    <div className="home">

      {/* ===== Logo Section ===== */}
      <div className="home-logo">
        <h1 className="logo-text-top">Maa Parvati Tent House</h1>
        <img src={Logo} alt="Maa Parvati Tent House Logo" />
        <p>Wedding • Events • Decoration</p>
      </div>

      {/* ===== Contact Card (NEW) ===== */}
      <div className="contact-card">
        <div className="contact-item">
          <CalendarHeart size={26} />
          <div>
            <h4>Wedding & Events Booking</h4>
            <p>Shaadi • Reception • Birthday • Party</p>
          </div>
        </div>

        <div className="contact-item">
          <PhoneCall size={24} />
          <div>
            <h4>Call Us</h4>
            <p>+91 98765 43210</p>
            <p>+91 98765 43210</p>

          </div>
        </div>

        <div className="contact-item">
          <MessageCircle size={24} />
          <div>
            <h4>WhatsApp</h4>
            <p>Quick Enquiry & Booking</p>
          </div>
        </div>
      </div>

      {/* ===== CTA Buttons ===== */}
      <div className="home-cta">
        <a
          href="tel:9876543210"
          className="btn call"
          target="_blank"
          rel="noopener noreferrer"
        >
          <PhoneCall size={18} /> Call Now
        </a>

        <a
          href="https://wa.me/qr/MXTXWQAJ35OOF1"
          className="btn whatsapp"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={18} /> WhatsApp
        </a>
      </div>


      <img src={address} alt="" />

      
      {/* ===== Founder Section ===== */}
      <div className="founder-section">
        <img src={founder} alt="Founder" />

        <div className="founder-content">
          <h2>Founder Mr. Manchit Gayakwad</h2>
          <p className="experience">10+ Years Experience</p>

          <p>
            “Hum pichhle 10 saalon se shaadi, birthday aur events
            ke liye best quality tent aur decoration services
            provide kar rahe hain. Hamara goal hai har event ko
            yaadgar banana.”
          </p>
        </div>
      </div>

      {/* ===== Address Section ===== */}
      <div className="address-card">
        <MapPin size={28} className="map-icon" />

        <div className="address-content">
          <h3>Our Address</h3>
          <p>
            Maa Parvati Tent House <br />
            Mateshawri Colony, Nandbag Main Road <br />
            Indore, M.P. – 452005
          </p>

          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="map-link"
          >
            View on Google Map
          </a>
        </div>
      </div>

    </div>
  );
}
