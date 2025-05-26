import React from "react";
import "../../styles/anatonySection.css"; // Make sure this has .badge-heart and .badge-leg styles

const AnatomySection = () => {
  return (
    <div className="w-100 d-flex justify-content-center">
      <div
        className="position-relative anatomy-container"
        style={{ maxWidth: "300px" }}
      >
        <img
          src="/assets/anotomy.jpg"
          alt="Human Body"
          className="img-fluid w-100"
        />

        {/* Healthy Heart Badge */}
        <div
          className="badge-heart position-absolute"
          style={{ top: "22%", left: "60%" }}
        >
          <div className="bg-primary text-white small px-2 py-1 rounded-pill shadow">
            ❤️ Healthy Heart
          </div>
        </div>

        {/* Healthy Leg Badge */}
        <div
          className="badge-leg position-absolute"
          style={{ bottom: "12%", left: "25%" }}
        >
          <div className="bg-info text-white small px-2 py-1 rounded-pill shadow">
            🦵 Healthy Leg
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnatomySection;
