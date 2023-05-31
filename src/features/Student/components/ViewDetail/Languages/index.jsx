import React from "react";
import "./styles.scss";
import SelectDot from "../SelectDot";
import Divider from "@material-ui/core/Divider";
import BorderColorOutlinedIcon from "@material-ui/icons/BorderColorOutlined";

const Languages = ({ items, handleClickOpen }) => {
  return (
    <div className="languages-wrapper">
      <div className="languages-container">
        <span style={{ fontSize: "20px" }} className="languages-wrapper__title">
          Languages
        </span>
        <BorderColorOutlinedIcon
          onClick={handleClickOpen}
          style={{ color: "#0DAB42", fontSize: 25, cursor: 'pointer' }}
          className='hover-Class'
        />
      </div>
      <Divider />
      <div className="languages-content">
        <div className="languages-content__wrapper">
          <div className="languages-content__item">
            {items.map((item, index) => {
              return (
                <p className="languages-content__item__name">
                  {item.language.locale}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Languages;
