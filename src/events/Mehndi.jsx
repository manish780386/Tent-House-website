import React from "react";
import {
  Leaf,
  Flower2,
  Sparkles,
  Palette
} from "lucide-react";
import "./Mehndi.css";

export default function Mehndi() {
  return (
    <div className="mehndi-page">

      {/* ===== Header ===== */}
      <div className="mehndi-header">
        <h1>Mehndi Ceremony</h1>
        <p>Green Vibes • Floral Decor • Celebration</p>
      </div>

      {/* ===== Details Cards ===== */}
      <div className="mehndi-details">

        <div className="mehndi-card">
          <Leaf size={30} />
          <h3>Green Theme Decor</h3>
          <p>Traditional green based mehndi decoration setup.</p>
        </div>

        <div className="mehndi-card">
          <Flower2 size={30} />
          <h3>Floral Decoration</h3>
          <p>Fresh flowers and marigold arrangements.</p>
        </div>

        <div className="mehndi-card">
          <Palette size={30} />
          <h3>Colorful Seating</h3>
          <p>Comfortable and colorful seating for guests.</p>
        </div>

        <div className="mehndi-card">
          <Sparkles size={30} />
          <h3>Stage & Backdrop</h3>
          <p>Designer backdrop for mehndi moments.</p>
        </div>

      </div>

      {/* ===== Footer Text ===== */}
      <div className="mehndi-footer">
        <p>
          Mehndi ceremony wedding ka sabse colorful aur joyful part hota hai,
          aur hum isse lively aur yaadgaar banate hain.
        </p>
      </div>

    </div>
  );
}
