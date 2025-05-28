import React from "react";
import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";
import ActivityFeed from "./ActivityFeed";
import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";
import SimpleAppointmentCard from "./SimpleAppointmentCard"; 

const DashboardMainContent = () => {
  return (
    <div className="container-fluid py-4">
      <div className="row gx-4">
        {/* LEFT 50%: Anatomy + Health Status + Activity */}
        <div className="col-md-6">
          {/* Top: Anatomy + Health Status */}
          <div className="row">
            <div className="col-12 mb-3">
              <div className="row">
                <div className="col-6">
                  <AnatomySection />
                </div>
                <div className="col-6">
                  <HealthStatusCards />
                </div>
              </div>
            </div>

            {/* Bottom: Activity Feed */}
            <div className="col-12">
              <ActivityFeed />
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="p-3 h-100 d-flex flex-column justify-content-between">
            <div className="mb-4">
              <CalendarView />
            </div>

            {/* Upcoming Schedule */}
            <div className="mb-4">
              <UpcomingSchedule />
            </div>

       
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMainContent;
