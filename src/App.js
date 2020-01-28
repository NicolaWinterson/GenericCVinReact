import React from "react";
import "./styles.css";
import ResumeItem from "./ResumeItem";
import TimeRangeBlock from "./TimeRangeBlock";
import SkillBar from "./SkillBar";
import DisplayAchievementsBlock from "./DisplayAchievements";
import {
  achievements,
  experience,
  education,
  socialMediaData
} from "./PersonalData";
import SocialMediaInfo from "./SocialMediaInfo";

export default function App() {
  return (
    <div className="container">
      <header />
      <aside className="container__left">
        <section className="contact-info">
          <img
            className="profile-image"
            src="https://pixiepunkpix.files.wordpress.com/2014/05/tumblr_static_black-and-white-camera-cute-photography-favim-com-273178.jpg"
            alt="Fake Profile"
          />
          <h1 className="contact-info--header">Person Personsson</h1>
          <dl className="contact-info__grid">
            <dt>D.O.B:</dt>
            <dd>1st January 1900</dd>
            <dt>Address:</dt>
            <dd>
              <span>123 Street Name,</span>
              <p>Malmö,</p>
              <p>Skåne, Sweden,</p>
              <p>PostCode</p>
            </dd>
          </dl>
          <dl className="contact-info__inline">
            <dt>Phone:</dt>
            <dd>0707070707</dd>
            <dt>Email:</dt>
            <dd>name.surname@gmail.com</dd>
            <dt>Website</dt>
            <dd>
              <a
                href="http://website.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.personwebsite.com
              </a>
            </dd>
          </dl>
        </section>
        <div>
          {socialMediaData.map(item => (
            <SocialMediaInfo {...item} />
          ))}
        </div>
      </aside>
      <main className="container__right">
        <ResumeItem title="About Me">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </ResumeItem>
        <ResumeItem title="Experience">
          {experience.map(item => (
            <TimeRangeBlock {...item} />
          ))}
        </ResumeItem>
        <ResumeItem title="Education">
          {education.map(item => (
            <TimeRangeBlock {...item} />
          ))}
        </ResumeItem>
        <ResumeItem title="Skills">
          <div className="skills">
            <SkillBar title="HTML5" value={5} />
            <SkillBar title="CSS" value={5} />
            <SkillBar title="JavaScript" value={3} />
            <SkillBar title="Twinery" value={2} />
            <SkillBar title="React" value={3} />
            <SkillBar title="Java" value={1} />
            <SkillBar title="Python" value={1} />
            <SkillBar title="Life" value={5} />
          </div>
        </ResumeItem>
        <ResumeItem title="Achievements">
          {achievements.map(item => (
            <DisplayAchievementsBlock {...item} />
          ))}
        </ResumeItem>
      </main>
      <footer />
    </div>
  );
}
