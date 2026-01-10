import React from "react";
import {
  BookOpen,
  Flower2,
  Flame,
  Music
} from "lucide-react";
import "./Sunderkand.css";
import sunder1 from "../assets/pdf/sunder1.mp4";

export default function Sunderkand() {
  return (
    <div className="sunderkand-page">

      {/* ===== Header ===== */}
      <div className="sunderkand-header">
        <h1>Sunderkand Path</h1>
        <p>Bhakti • Shanti • Mangalmay Vatavaran</p>
      </div>

      {/* ===== Cards Section ===== */}
      <div className="sunderkand-cards">

        <div className="sunderkand-card">
          <BookOpen size={32} />
          <h3>Sunderkand Path</h3>
          <p>
            Vidhi-vidhan ke saath poorn Sunderkand path.
          </p>
        </div>

        <div className="sunderkand-card">
          <Music size={32} />
          <h3>Bhajan & Kirtan</h3>
          <p>
            Bhajan mandali ke saath madhur kirtan.
          </p>
        </div>

        <div className="sunderkand-card">
          <Flower2 size={32} />
          <h3>Puja Decoration</h3>
          <p>
            Phool, rangoli aur mandir style decoration.
          </p>
        </div>

        <div className="sunderkand-card">
          <Flame size={32} />
          <h3>Deep & Lighting</h3>
          <p>
            Traditional deep aur shanti dene wali lighting.
          </p>
        </div>

      </div>

      <div>
        {/* ===== video Section ===== */}
        <div className="sunderkand-video-section">
          <video
            src={sunder1}
            controls
            className="sunderkand-video"
          />
        </div>
      </div>

      {/* ===== Footer ===== */}
      <div className="sunderkand-footer">
        <p>
          Sunderkand path ghar aur parivaar me shanti,
          sukh aur sakaratmak urja lata hai.
        </p>
      </div>

    </div>
  );
}
