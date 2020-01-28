import React from "react";

const SocialMediaInfo = ({ link, icon, description }) => {
  return (
    <div className="social-media-links">
      <a target="_blank" rel="noopener noreferrer" href={link}>
        <img className="social-media-icons" src={icon} alt={description} />
      </a>
      <p>
        <a href={link} rel="noopener noreferrer">
          {description}
        </a>
      </p>
    </div>
  );
};
export default SocialMediaInfo;
