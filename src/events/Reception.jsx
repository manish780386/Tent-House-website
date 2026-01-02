import React from "react";
import {
  PartyPopper,
  Sparkles,
  Balloon,
  Lightbulb
} from "lucide-react";
import "./Reception.css";

export default function Reception() {
  return (
    <div className="reception-page">

      {/* ===== Header ===== */}
      <div className="reception-header">
        <h1>Reception Decoration</h1>
        <p>Elegant • Grand • Memorable Celebration</p>
      </div>

      {/* ===== Details Cards ===== */}
      <div className="reception-details">

        <div className="reception-card">
          <PartyPopper size={30} />
          <h3>Stage & Backdrop</h3>
          <p>Grand stage with elegant backdrop and props.</p>
        </div>

        <div className="reception-card">
          <Balloon size={30} />
          <h3>Decorative Balloons</h3>
          <p>Beautiful balloon decoration for party vibes.</p>
        </div>

        <div className="reception-card">
          <Lightbulb size={30} />
          <h3>Lighting Setup</h3>
          <p>Designer lighting to highlight the celebration.</p>
        </div>

        <div className="reception-card">
          <Sparkles size={30} />
          <h3>Tables & Props</h3>
          <p>Decorative tables and props for a premium feel.</p>
        </div>

      </div>

      {/* ===== Footer Text ===== */}
      <div className="reception-footer">
        <p>
          Reception ek special event hota hai, aur hum usse
          grand aur yaadgaar banane ke liye best decoration provide karte hain.
        </p>
      </div>

    </div>
  );
}
