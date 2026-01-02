import React from "react";
import {
  Briefcase,
  Building2,
  Mic,
  Lightbulb
} from "lucide-react";
import "./Corporate.css";

export default function Corporate() {
  return (
    <div className="corporate-page">

      {/* ===== Header ===== */}
      <div className="corporate-header">
        <h1>Corporate Event Decoration</h1>
        <p>Professional • Elegant • Premium Setup</p>
      </div>

      {/* ===== Details Cards ===== */}
      <div className="corporate-details">

        <div className="corporate-card">
          <Building2 size={32} />
          <h3>Conference & Seminar Setup</h3>
          <p>
            Stage, seating arrangement aur branding ke
            saath professional conference setup.
          </p>
        </div>

        <div className="corporate-card">
          <Mic size={32} />
          <h3>Product Launch Events</h3>
          <p>
            Product launch ke liye premium stage,
            backdrop aur lighting arrangement.
          </p>
        </div>

        <div className="corporate-card">
          <Lightbulb size={32} />
          <h3>Lighting & Branding</h3>
          <p>
            Corporate theme ke according modern lighting
            aur brand focused decoration.
          </p>
        </div>

        <div className="corporate-card">
          <Briefcase size={32} />
          <h3>Office & Business Events</h3>
          <p>
            Office functions, meetings aur annual
            programs ke liye classy decoration.
          </p>
        </div>

      </div>

      {/* ===== Footer Text ===== */}
      <div className="corporate-footer">
        <p>
          Corporate events me professionalism sabse
          important hota hai. Hum aapke business
          events ko classy aur well-organized banate hain.
        </p>
      </div>

    </div>
  );
}
