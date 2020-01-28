import React from "react";

const ResumeItem = ({ title, children }) => {
  return (
    <section className="resume-item">
      <ul>
        <li>
          <h2 className="resume-item__title">{title}</h2>
        </li>
        <li className="resume-item__content">{children}</li>
      </ul>
    </section>
  );
};

export default ResumeItem;
