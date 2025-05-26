import React from "react";

const SimpleAppointmentCard = ({ title, time, icon }) => {
  return (
    <div
      className="p-3 rounded shadow-sm d-flex justify-content-between align-items-center mb-2"
      style={{ backgroundColor: "#f1f3f9" }}
    >
      <div className="d-flex align-items-center">
        <span style={{ fontSize: "1.4rem", marginRight: 10 }}>{icon}</span>
        <span className="fw-semibold">{title}</span>
      </div>
      <small className="text-muted">{time}</small>
    </div>
  );
};

export default SimpleAppointmentCard;
