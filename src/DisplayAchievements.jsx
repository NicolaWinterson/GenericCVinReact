import React from "react";

const DisplayAchievementsBlock = ({ title, children }) => {
  return (
    <div className="achievements__display">
      <div className="achievements__display--flex">
        <p className="achievements__subheading">{title}</p>
        <p className="resume-item__content">{children}</p>
      </div>
    </div>
  );
};

export default DisplayAchievementsBlock;
