import React from "react";
import { useNavigate } from "react-router-dom";
import { Calendar } from "lucide-react";
import "./Events.css";

// ===== Events Array =====
const eventsData = [
  { id: 1, title: "Wedding", page: "/events/wedding" },
  { id: 2, title: "Birthday", page: "/events/birthday" },
  { id: 3, title: "Corporate", page: "/events/corporate" },
  { id: 4, title: "Anniversary", page: "/events/anniversary" },
  { id: 5, title: "Engagement", page: "/events/engagement" },
  { id: 6, title: "Reception", page: "/events/reception" },
  { id: 7, title: "Haldi", page: "/events/haldi" },
  { id: 8, title: "Mehndi", page: "/events/mehndi" },
  { id: 9, title: "Sunderkand", page: "/events/sunderkand" },
  { id: 10, title: "Sunderkand", page: "/events/sunderkand" },
  { id: 11, title: "Sunderkand", page: "/events/sunderkand" },
  ];

// ===== Event Card Component =====
function EventCard({ event, onCardClick }) {
  return (
    <div className="event-card" onClick={() => onCardClick(event.page)}>
      <div className="event-title">{event.title}</div>
      <Calendar size={20} className="event-icon" />
    </div>
  );
}

// ===== Main Events Page =====
export default function Events() {
  const navigate = useNavigate();

  // Function to handle card click
  const handleCardClick = (path) => {
    navigate(path);
  };

  return (
    <div className="events-page">
      <h1>Our Events</h1>
      <p>Check out some of our premium decorated events</p>

      <div className="events-grid">
        {eventsData.map((ev) => (
          <EventCard
            key={ev.id}
            event={ev}
            onCardClick={handleCardClick} // pass correct function
          />
        ))}
      </div>
    </div>
  );
}
