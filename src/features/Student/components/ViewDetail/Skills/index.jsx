import React from "react";
import "./styles.scss";
import SelectDot from "../SelectDot";
import Divider from "@material-ui/core/Divider";
import BorderColorOutlinedIcon from "@material-ui/icons/BorderColorOutlined";

const Skills = ({ items, open, handleClickOpen, handleClose }) => {
  return (
    <div className="skills-wrapper">
      <div className="skills-container">
        <span style={{ fontSize: "20px" }} className="skills-wrapper__title">
          Skills
        </span>
        <BorderColorOutlinedIcon
          onClick={handleClickOpen}
          style={{ color: "#0DAB42", fontSize: 25, cursor: 'pointer' }}
          className='hover-Class'
        />
      </div>
      <Divider />
      <div className="skills-content">
        <div className="skills-content__wrapper">
          <div className="skills-content__item">
            {items.map((item, index) => {
              return (
                <p key={index} className="skills-content__item__name">
                  {item.skill.skill_Name}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
