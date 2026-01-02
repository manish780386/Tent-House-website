import React from "react";
import {
  Cake,
  Balloon,
  PartyPopper,
  Sparkles
} from "lucide-react";
import "./Birthday.css";

export default function Birthday() {
  return (
    <div className="birthday-page">

      {/* ===== Header ===== */}
      <div className="birthday-header">
        <h1>Birthday Party Decoration</h1>
        <p>Kids • Adults • Theme Based Parties</p>
      </div>

      {/* ===== Details Cards ===== */}
      <div className="birthday-details">

        <div className="birthday-card">
          <Cake size={32} />
          <h3>Cake Table Decoration</h3>
          <p>Designer cake table setup with matching themes.</p>
        </div>

        <div className="birthday-card">
          <Balloon size={32} />
          <h3>Balloon Decoration</h3>
          <p>Colorful balloon arches and creative balloon designs.</p>
        </div>

        <div className="birthday-card">
          <PartyPopper size={32} />
          <h3>Theme Decoration</h3>
          <p>Cartoon, superhero, princess & custom themes.</p>
        </div>

        <div className="birthday-card">
          <Sparkles size={32} />
          <h3>Lighting & Props</h3>
          <p>LED lights, props and decorative elements.</p>
        </div>

      </div>

      {/* ===== Footer Text ===== */}
      <div className="birthday-footer">
        <p>
          Har birthday ko special aur colorful banane ke liye
          hum best quality decoration provide karte hain.
        </p>
      </div>

    </div>
  );
}
