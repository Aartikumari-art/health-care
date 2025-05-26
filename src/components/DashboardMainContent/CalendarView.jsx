import React from "react";

const appointments = {
  26: [
    {
      title: "Dentist",
      time: "09:00",
      doctor: "Dr. Cameron Williamson",
      icon: "🦷",
    },
  ],
  29: [
    {
      title: "Physiotherapy Appointment",
      time: "11:00",
      doctor: "Dr. Kevin Djones",
      icon: "🧘‍♂️",
    },
  ],
};

const CalendarView = () => {
  const firstDayIndex = 5; // October 1, 2021 is a Friday
  const totalDays = 31;
  const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const calendarCells = [];
  for (let i = 0; i < firstDayIndex; i++) calendarCells.push(null);
  for (let i = 1; i <= totalDays; i++) calendarCells.push(i);
  while (calendarCells.length % 7 !== 0) calendarCells.push(null);

  return (
    <div className="card p-4 shadow-sm">
      <h5 className="mb-3 fw-bold">October 2021</h5>

      <div className="d-flex justify-content-between text-center mb-2">
        {daysOfWeek.map((day) => (
          <div
            key={day}
            style={{ width: 40 }}
            className="fw-semibold text-muted"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="d-flex flex-wrap">
        {calendarCells.map((day, idx) => (
          <div
            key={idx}
            className="border text-center"
            style={{
              width: 40,
              height: 60,
              backgroundColor: day ? "#f4f6fc" : "transparent",
              position: "relative",
              margin: 1,
              borderRadius: 6,
            }}
          >
            {day && <div className="fw-semibold">{day}</div>}
            {day &&
              appointments[day]?.map((a, i) => (
                <div
                  key={i}
                  style={{
                    fontSize: "0.6rem",
                    color: "#0d6efd",
                    position: "absolute",
                    bottom: 2,
                    left: 2,
                    right: 2,
                  }}
                >
                  {a.time}
                </div>
              ))}
          </div>
        ))}
      </div>

      {/* Static appointment cards below */}
      <div className="mt-4">
        {appointments[26]?.map((a, i) => (
          <div
            key={i}
            className="p-3 mb-2 rounded text-white"
            style={{ backgroundColor: "#4e5baa" }}
          >
            <div className="fw-bold">
              {a.icon} {a.title}
            </div>
            <small>
              {a.time} - {a.doctor}
            </small>
          </div>
        ))}
        {appointments[29]?.map((a, i) => (
          <div
            key={i}
            className="p-3 mb-2 rounded"
            style={{ backgroundColor: "#dbe2f7" }}
          >
            <div className="fw-bold">
              {a.icon} {a.title}
            </div>
            <small>
              {a.time} - {a.doctor}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
