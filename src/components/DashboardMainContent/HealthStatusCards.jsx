import React from "react";

const statusData = [
  {
    name: "Lungs",
    icon: "🫁",
    date: "26 Okt 2021",
    progress: 20,
    color: "#dc3545", // red
  },
  {
    name: "Teeth",
    icon: "🦷",
    date: "26 Okt 2021",
    progress: 70,
    color: "#17a2b8", // cyan
  },
  {
    name: "Bone",
    icon: "🦴",
    date: "26 Okt 2021",
    progress: 45,
    color: "#fd7e14", // orange
  },
];

const HealthStatusCards = () => {
  return (
    <div className="d-flex flex-column gap-4 align-items-start">
      {statusData.map((item, index) => (
        <div
          key={index}
          className="bg-white p-3 rounded shadow-lg w-80"
          style={{ maxWidth: "260px", borderRadius: "50px" }}
        >
          <h6 className="mb-2 d-flex align-items-center gap-2">
            <span style={{ fontSize: "1.7rem" }}>{item.icon}</span> {item.name}
          </h6>
          <p className="text-muted mb-2" style={{ fontSize: "1rem" }}>
            Date: {item.date}
          </p>
          <div className="progress" style={{ height: "6px", backgroundColor: "#eee" }}>
            <div
              style={{
                width: `${item.progress}%`,
                backgroundColor: item.color,
                height: "100%",
                borderRadius: "8px",
              }}
              role="progressbar"
              aria-valuenow={item.progress}
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;
