import React from "react";
import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";
import ActivityFeed from "./ActivityFeed";

const DashboardOverview = () => {
  return (
    <div className="container py-5">
      <div className="row">
        {/* Anatomy Image */}
        <div className="col-md-4 d-flex justify-content-center mb-4">
          <AnatomySection />
        </div>

        {/* Health Cards */}
        <div className="col-md-4 d-flex flex-column align-items-center mb-4">
          <HealthStatusCards />
        </div>

        {/* Activity Feed */}
        <div className="col-md-4">
          <ActivityFeed />
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
