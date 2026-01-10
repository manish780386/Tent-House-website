import React from "react";
import {
  Flower,
  Sparkles,
  LampCeiling,
  Image
} from "lucide-react";
import "./Wedding.css";
import wedding1 from "../assets/pdf/wedding1.png";
import wedding2 from "../assets/pdf/wedding2.mp4";
import wedding3 from "../assets/pdf/wedding3.mp4";

export default function Wedding() {
  return (
    <div className="wedding-page">

      {/* ===== Header ===== */}
      <div className="wedding-header">
        <h1>Wedding Decoration</h1>
        <p>Traditional • Royal • Elegant Setup</p>
      </div>

      {/* ===== Details Section ===== */}
      <div className="wedding-details">

        <div className="wedding-card">
          <Flower size={30} />
          <h3>Mandap Decoration</h3>
          <p>Traditional & modern mandap with flowers and fabric design.</p>
        </div>

        <div className="wedding-card">
          <LampCeiling size={30} />
          <h3>Stage Decoration</h3>
          <p>Royal stage setup with lighting and backdrop themes.</p>
        </div>

        <div className="wedding-card">
          <Sparkles size={30} />
          <h3>Lighting Decoration</h3>
          <p>Warm lights, fairy lights and designer illumination.</p>
        </div>

        <div className="wedding-card">
          <Image size={30} />
          <h3>Flower Decoration</h3>
          <p>Fresh flower arrangements with premium color themes.</p>
        </div>

      </div>


      <div>
        {/* ===== Image Section ===== */}
        <div className="wedding-image-section">
          <img
            src={wedding1}
            alt="Wedding Decoration"
            className="wedding-image"
          />
        </div>

      </div>

      <div>
        {/* === video Section ===== */}
        <div className="wedding-video-section">
          <video
            src={wedding2}
            controls
            className="wedding-video"
          />
        </div>

        <div>
          <video
            src={wedding3}
            controls
            className="wedding-video"
          />
        </div>
      </div>

      {/* ===== Bottom Text ===== */}
      <div className="wedding-footer">
        <p>
          Hum har shaadi ko ek yaadgaar pal banane ke liye
          design, quality aur perfection par focus karte hain.
        </p>
      </div>

    </div>
  );
}
