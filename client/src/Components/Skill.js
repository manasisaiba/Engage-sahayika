import React from "react";
import "./Candidate.css";
import womanImg from "../img/woman3.jpg";
import locationImg from "../img/location.png";
import timeImg from "../img/time.png";

function renderContact(contactArray) {
  if (contactArray.length === 2) {
    return (
      <p className="text-sm">
                &#x2709; {contactArray[1]}
      </p>
    );
  }
}

const Skill = ({ skill }) => (
          <div className="skill">
            <div className="items-center">
              <img className="profileImg1" src={womanImg} alt={skill.name} />
            </div>
            <div className="ml-51">
              <h2 className="text-lg font-bold inline mr-1">
                {skill.name}, {skill.age}
              </h2>
              {skill.experienced ? (
                <span className="text-sm bg-red-400 rounded-full m-2 pl-2 pr-2 uppercase">
                  experienced
                  <br />
                </span>
              ) : (
                <br />
              )}
              <img className="cardInfo" src={timeImg} alt="time-icon" />
              <p className="cardInfo text-sm">
                {skill.timeAvailability}, {skill.dayAvailability}
              </p>
              <br />
              <img className="cardInfo" src={locationImg} alt="location-icon" />
              <p className="cardInfo text-sm">
                {skill.locationCity}, {skill.locationState}
              </p>
              <br />
              {renderContact(skill.contact)}
              <button className="btn1 btn-smart1">Send SMS</button>

            </div>
            <div className="skillclass1">
              {skill.skills
                ? skill.skills.map((skills) => (
                    <span className="btn12 btn-smart12">
                      {skills}
                    </span>
                  ))
                : ""}
            </div>
          </div>
);

export default Skill;
