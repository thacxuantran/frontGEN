import React from "react";
import "./styles.scss";
import Resume from "../Resume";
import SinglePage from "../SinglePage";
import Divider from "@material-ui/core/Divider";
import { useMemo } from "react";
import BorderColorOutlinedIcon from "@material-ui/icons/BorderColorOutlined";
import loading from "../../../../../assets/gif/Rolling-1.4s-200px.gif";
import { useState } from "react";
const Container = ({ onUploadCV, studentDetail, onDeleteCV }) => {
  const [loadingAdd, setLoadingAdd] = useState(false);

  const handleUploadCV = (data) => {
    setLoadingAdd(true)
    onUploadCV(data, setLoadingAdd);
  }
  return (
    <div className="main-profile_bottom">
      <div className="resume-wrapper">
        <div className="resume-container">
          <span style={{ fontSize: "20px" }} className="resume-wrapper__title">
            Manage Resume
          </span>
          <BorderColorOutlinedIcon style={{ color: "#0DAB42", fontSize: 25 }} />
        </div>
        <Divider />
        <div className="resume-wrapper__inner">
          {studentDetail.student_Profile_CVs.map((item, index) => {
            return <SinglePage key={item.cv.cV_ID} id={item.cv.cV_ID} onDeleteCV={onDeleteCV} title={item.cv.title} pdf={item.cv.data} />;
          })}
          {loadingAdd ?
            <div
              style={{
                width: "180px",
                height: "231px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                style={{ width: "30px", height: "30px" }}
                src={loading}
              ></img>
            </div> : null
          }
          <Resume
            onUploadCV={handleUploadCV}
            studentDetail={studentDetail}
            info={studentDetail.student_Profile_CVs}
          />
        </div>
      </div>
    </div>
  );
};

export default Container;
