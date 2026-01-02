import React from "react";
import { CalendarCheck, User, Phone, MapPin } from "lucide-react";
import "./Booking.css";

export default function Booking() {
  return (
    <div className="booking-page">
      <div className="booking-card">
        <h1>
          <CalendarCheck size={28} /> Event Booking
        </h1>
        <p className="subtitle">
          Apne special event ke liye booking kare
        </p>

        <form className="booking-form">
          {/* Name */}
          <div className="form-group">
            <User size={18} />
            <input type="text" placeholder="Your Name" required />
          </div>

          {/* Phone */}
          <div className="form-group">
            <Phone size={18} />
            <input type="tel" placeholder="Mobile Number" required />
          </div>

          {/* Event Type */}
          <div className="form-group">
            <select required>
              <option value="">Select Event Type</option>
              <option>Wedding</option>
              <option>Birthday</option>
              <option>Engagement</option>
              <option>Reception</option>
              <option>Haldi / Mehndi</option>
              <option>Corporate Event</option>
            </select>
          </div>

          {/* Date */}
          <div className="form-group">
            <input type="date" required />
          </div>

          {/* Address */}
          <div className="form-group">
            <MapPin size={18} />
            <input type="text" placeholder="Event Address" required />
          </div>

          {/* Button */}
          <button type="submit" className="book-btn">
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
}
