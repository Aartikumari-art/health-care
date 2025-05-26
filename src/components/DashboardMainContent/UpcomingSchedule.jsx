import React from "react";
import SimpleAppointmentCard from "./SimpleAppointmentCard";

const scheduleData = [
  {
    day: "On Thursday",
    appointments: [
      { title: "Health checkup complete", time: "11:00 AM", icon: "🩺" },
      { title: "Ophthalmologist", time: "1:00 PM", icon: "👁️" },
    ],
  },
  {
    day: "On Saturday",
    appointments: [
      { title: "Cardiologist", time: "12:00 AM", icon: "❤️" },
      { title: "Neurologist", time: "4:00 PM", icon: "🧠" },
    ],
  },
];

const UpcomingSchedule = () => {
  return (
    <div className="card p-4 shadow-sm mt-4">
      <h5 className="mb-3 fw-bold">The Upcoming Schedule</h5>
      {scheduleData.map(({ day, appointments }, idx) => (
        <div key={idx} className="mb-3">
          <h6 className="fw-semibold text-secondary">{day}</h6>
          {appointments.map(({ title, time, icon }, i) => (
            <SimpleAppointmentCard
              key={i}
              title={title}
              time={time}
              icon={icon}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default UpcomingSchedule;
