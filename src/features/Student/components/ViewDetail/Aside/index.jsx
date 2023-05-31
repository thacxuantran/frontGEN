import React from "react";
import { Box, Button, Typography, Container } from "@material-ui/core";
import "./styles.scss";
import EditIcon from "@material-ui/icons/Edit";

const Aside = ({ isProfile, onSetIsProfile }) => {
  return (
    <>
      <div className="aside-profile">
        <ul>
          <li
            onClick={() => onSetIsProfile(true)}
            className={isProfile ? "active" : ""}
          >
            Profile
          </li>
          <hr className={isProfile ? "active" : ""} />
          <li
            onClick={() => onSetIsProfile(false)}
            className={!isProfile ? "active" : ""}
          >
            Resume
          </li>
          <hr className={!isProfile ? "active" : ""} />
        </ul>

        <img
          style={{ width: "300px", height: "300px" }}
          src="/Resume-pana.png"
        />
        <div className="eclip">
          <svg
            width="126"
            height="231"
            viewBox="0 0 126 231"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              r="87"
              transform="matrix(-1 0 0 1 23 142)"
              stroke="#404040"
              stroke-width="4"
            />
            <circle r="89" transform="matrix(-1 0 0 1 9 89)" fill="#A3EABB" />
            <circle
              r="26"
              transform="matrix(-1 0 0 1 100 184)"
              fill="#0DAB42"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Aside;
