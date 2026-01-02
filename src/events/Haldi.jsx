import React from "react";
import {
  Sun,
  Flower,
  Sparkles,
  Lamp
} from "lucide-react";
import "./Haldi.css";

export default function Haldi() {
  return (
    <div className="haldi-page">

      {/* ===== Header ===== */}
      <div className="haldi-header">
        <h1>Haldi Ceremony</h1>
        <p>Traditional • Vibrant • Joyful Moments</p>
      </div>

      {/* ===== Details Cards ===== */}
      <div className="haldi-details">

        <div className="haldi-card">
          <Sun size={30} />
          <h3>Traditional Decor</h3>
          <p>Bright and cheerful decor for Haldi ceremony.</p>
        </div>

        <div className="haldi-card">
          <Flower size={30} />
          <h3>Floral Arrangement</h3>
          <p>Fresh marigold and flower decorations.</p>
        </div>

        <div className="haldi-card">
          <Lamp size={30} />
          <h3>Lighting & Ambience</h3>
          <p>Soft lighting to enhance traditional vibes.</p>
        </div>

        <div className="haldi-card">
          <Sparkles size={30} />
          <h3>Stage & Setup</h3>
          <p>Special Haldi stage with vibrant props.</p>
        </div>

      </div>

      {/* ===== Footer Text ===== */}
      <div className="haldi-footer">
        <p>
          Haldi ceremony ek joyful event hota hai, aur hum
          isse vibrant aur yaadgaar banane ke liye best decoration provide karte hain.
        </p>
      </div>

    </div>
  );
}
