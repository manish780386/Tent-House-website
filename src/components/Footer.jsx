import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left */}
        <div className="footer-section">
          <h2>Maa Parvati Tent House</h2>
          <p>
            Wedding | Birthday | Party | Corporate Events <br />
            Best Tent & Decoration Services
          </p>
        </div>

        {/* Center */}
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p><Phone size={16} /> +91 9827531832</p>
          <p><Mail size={16} /> maaparvatitent@gmail.com</p>
          <p><MapPin size={16} /> Indore, India</p>
        </div>

        {/* Right */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" aria-label="Facebook">
              <Facebook />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram />
            </a>
            <a href="mailto:maaparvatitent@gmail.com" aria-label="Email">
              <Mail />
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © 2025 Maa Parvati Tent House | All Rights Reserved
      </div>
    </footer>
  );
}
