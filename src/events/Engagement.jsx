import React from "react";
import {
  
  Sparkles,
  Flower,
  LampCeiling
} from "lucide-react";
import "./Engagement.css";

export default function Engagement() {
  return (
    <div className="engagement-page">

      {/* ===== Header ===== */}
      <div className="engagement-header">
        <h1>Engagement Decoration</h1>
        <p>Elegant • Royal • Beautiful Moments</p>
      </div>

      {/* ===== Details Cards ===== */}
      <div className="engagement-details">

        <div className="engagement-card">
         
          <h3>Ring Ceremony Stage</h3>
          <p>Elegant stage decoration for ring ceremony moments.</p>
        </div>

        <div className="engagement-card">
          <Flower size={30} />
          <h3>Floral Decoration</h3>
          <p>Fresh flower decoration with soft color themes.</p>
        </div>

        <div className="engagement-card">
          <LampCeiling size={30} />
          <h3>Lighting Setup</h3>
          <p>Designer lighting to create a romantic ambience.</p>
        </div>

        <div className="engagement-card">
          <Sparkles size={30} />
          <h3>Backdrop & Props</h3>
          <p>Stylish backdrops and decorative props.</p>
        </div>

      </div>

      {/* ===== Footer Text ===== */}
      <div className="engagement-footer">
        <p>
          Engagement ek special moment hota hai, aur hum usse
          elegant aur yaadgaar banane ke liye best decoration
          provide karte hain.
        </p>
      </div>

    </div>
  );
}
