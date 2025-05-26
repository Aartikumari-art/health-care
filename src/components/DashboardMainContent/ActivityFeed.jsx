import React from "react";
import "../../styles/activity.css"; // Import the CSS below

const days = [
  { day: "Mon", count: 1, color: "#FF6384" },
  { day: "Tue", count: 2, color: "#36A2EB" },
  { day: "Wed", count: 0, color: "#FFCE56" },
  { day: "Thu", count: 4, color: "#4BC0C0" },
  { day: "Fri", count: 3, color: "#9966FF" },
  { day: "Sat", count: 1, color: "#FF9F40" },
  { day: "Sun", count: 2, color: "#E7E9ED" },
];

export default function ActivityFeed() {
  return (
    <div
      className="activity-card card mt-4 p-2 shadow-lg"
      style={{ maxWidth: "700px" }}
    >
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h5 className="fw-bold mb-0">Activity</h5>
        <span className="text-muted small">This Week</span>
      </div>

      <p className="text-muted mb-4 small">3 appointments this week</p>

      <div className="d-flex justify-content-between align-items-end activity-graph">
        {days.map(({ day, count, color }) => (
          <div key={day} className="activity-bar text-center">
            <div
              className="bar"
              style={{
                height: `${count * 25}px`,
                backgroundColor: color,
              }}
            />
            <small className="day-label text-muted">{day}</small>
          </div>
        ))}
      </div>
    </div>
  );
}
