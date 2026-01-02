import React from "react";
import {
  Heart,
  Sparkles,
  Gift,
  LampCeiling
} from "lucide-react";
import "./Anniversary.css";

export default function Anniversary() {
  return (
    <div className="anniversary-page">

      {/* ===== Header ===== */}
      <div className="anniversary-header">
        <h1>Anniversary Decoration</h1>
        <p>Romantic • Elegant • Memorable Moments</p>
      </div>

      {/* ===== Details Cards ===== */}
      <div className="anniversary-details">

        <div className="anniversary-card">
          <Heart size={30} />
          <h3>Romantic Theme Setup</h3>
          <p>Beautiful romantic decoration with candles & flowers.</p>
        </div>

        <div className="anniversary-card">
          <LampCeiling size={30} />
          <h3>Stage & Backdrop</h3>
          <p>Elegant stage setup with custom backdrops.</p>
        </div>

        <div className="anniversary-card">
          <Sparkles size={30} />
          <h3>Lighting Decoration</h3>
          <p>Warm lighting to create a lovely ambience.</p>
        </div>

        <div className="anniversary-card">
          <Gift size={30} />
          <h3>Table & Props Setup</h3>
          <p>Decorative tables, props and flower arrangements.</p>
        </div>

      </div>

      {/* ===== Footer Text ===== */}
      <div className="anniversary-footer">
        <p>
          Har anniversary ko ek pyaari yaad banane ke liye
          hum design aur quality par poora dhyan dete hain.
        </p>
      </div>

    </div>
  );
}
