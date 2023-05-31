import React from "react";
import "./styles.scss";
import PersonalInformation from "../PersonalInformation";
import Overview from "../Overview";
import Experiences from "../Experiences";
import Educations from "../Educations";
import Skills from "../Skills";
import Languages from "../Languages";
import Certificates from "../Certificates";
import DialogPerson from "../DialogPerson";
import DialogOverView from "../DialogOverView";
import DialogExperiences from "../DialogExperiences";
import DialogEducations from "../DialogEducations";
import DialogCert from "../DialogCert";
import DialogTag from "../DialogTag";
import DialogTagLanguages from "../DialogTagLanguages";
import Divider from "@material-ui/core/Divider";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import BorderColorOutlinedIcon from "@material-ui/icons/BorderColorOutlined";
import SelectDot from "../SelectDot";

const Container = ({
  onUpdateCertificate,
  onUpdateEducation,
  onUpdateExperience,
  onDeleteCertificate,
  onDeleteEducation,
  onDeleteExperience,
  studentDetail,
  onSubmitPersonalInformation,
  onSubmitOverview,
  onSubmitExperience,
  onSubmitEducation,
  onSubmitCert,
  onSubmitSkills,
  onSubmitLanguages,
}) => {
  const [openPersonalDiaLog, setOpenPersonalDiaLog] = React.useState(false);
  const [openTagDiaLog, setOpenTagDiaLog] = React.useState(false);
  const [openLanguageDiaLog, setOpenLanguageDiaLog] = React.useState(false);
  const [openOVDiaLog, setOpenOVDiaLog] = React.useState(false);
  const [openExDiaLog, setOpenExDiaLog] = React.useState(false);
  const [openEduDiaLog, setOpenEduDiaLog] = React.useState(false);
  const [openCertDiaLog, setOpenCertDiaLog] = React.useState(false);

  const handleClickOpenTagDiaLog = () => {
    setOpenTagDiaLog(true);
  };

  const handleCloseTagDiaLog = () => {
    setOpenTagDiaLog(false);
  };

  const handleClickOpenPersonalDiaLog = () => {
    setOpenPersonalDiaLog(true);
  };

  const handleClosePersonalDiaLog = () => {
    setOpenPersonalDiaLog(false);
  };
  const handleClickOpenOVDiaLog = () => {
    setOpenOVDiaLog(true);
  };

  const handleCloseOVDiaLog = () => {
    setOpenOVDiaLog(false);
  };
  const handleClickOpenExDiaLog = () => {
    setOpenExDiaLog(true);
  };

  const handleCloseExDiaLog = () => {
    setOpenExDiaLog(false);
  };
  const handleClickOpenEduDiaLog = () => {
    setOpenEduDiaLog(true);
  };

  const handleCloseEduDiaLog = () => {
    setOpenEduDiaLog(false);
  };
  const handleClickOpenCertDiaLog = () => {
    setOpenCertDiaLog(true);
  };

  const handleCloseCertDiaLog = () => {
    setOpenCertDiaLog(false);
  };
  const handleClickOpenLanguageDiaLog = () => {
    setOpenLanguageDiaLog(true);
  };

  const handleCloseLanguagetDiaLog = () => {
    setOpenLanguageDiaLog(false);
  };

  return (
    <div className="main-profile_bottom">
      <div className="personal-wrapper">
        <div className="personal-container">
          <span
            style={{ fontSize: "20px" }}
            className="personal-wrapper__title"
          >
            Personal Information
          </span>
          <BorderColorOutlinedIcon
            onClick={handleClickOpenPersonalDiaLog}
            style={{ color: "#0DAB42", fontSize: 25, cursor: 'pointer' }}
            className='hover-Class'
          />
        </div>
        <Divider />
        <PersonalInformation info={studentDetail.personal_Information} />
      </div>
      <div className="overview-wrapper">
        <div className="overview-container">
          <span
            style={{ fontSize: "20px" }}
            className="overview-wrapper__title"
          >
            Overview
          </span>
          <BorderColorOutlinedIcon
            onClick={handleClickOpenOVDiaLog}
            style={{ color: "#0DAB42", fontSize: 25, cursor: 'pointer' }}
            className='hover-Class'

          />
        </div>
        <Divider />
        <Overview overview={studentDetail.overView} />
      </div>
      <div className="experiences-wrapper">
        <div className="experiences-container">
          <span
            style={{ fontSize: "20px" }}
            className="experiences-wrapper__title"
          >
            Experiences
          </span>
          <ControlPointIcon
            onClick={handleClickOpenExDiaLog}
            style={{ color: "#0DAB42", fontSize: 28, cursor: 'pointer' }}
            className='hover-Class'

          />
        </div>
        <Divider />
        <div className="experiences-content">
          <div className="experiences-content__wrapper">
            {studentDetail.student_Profile_Experiences.map((item, index) => {
              return (
                <Experiences
                  index={index}
                  onUpdateExperience={onUpdateExperience}
                  onDeleteExperience={onDeleteExperience}
                  key={index}
                  item={item}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div className="educations-wrapper">
        <div className="educations-container">
          <span
            style={{ fontSize: "20px" }}
            className="educations-wrapper__title"
          >
            Educations
          </span>
          <ControlPointIcon
            onClick={handleClickOpenEduDiaLog}
            style={{ color: "#0DAB42", fontSize: 28, cursor: 'pointer' }}
            className='hover-Class'

          />
        </div>
        <Divider />
        <div className="educations-content">
          <div className="educations-content__wrapper">
            {studentDetail.student_Profile_Educations.map((item, index) => {
              return (
                <Educations
                  index={index}
                  onUpdateEducation={onUpdateEducation}
                  onDeleteEducation={onDeleteEducation}
                  key={index}
                  item={item}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Skills
        open={openTagDiaLog}
        handleClickOpen={handleClickOpenTagDiaLog}
        handleClose={handleCloseTagDiaLog}
        items={studentDetail.student_Profile_Skills}
      />
      <div className="certificates-wrapper">
        <div className="certificates-container">
          <span
            style={{ fontSize: "20px" }}
            className="certificates-wrapper__title"
          >
            Certificates
          </span>
          <ControlPointIcon
            onClick={handleClickOpenCertDiaLog}
            style={{ color: "#0DAB42", fontSize: 28, cursor: 'pointer' }}
            className='hover-Class'

          />
        </div>
        <Divider />
        <div className="certificates-content">
          <div className="certificates-content__wrapper">
            {studentDetail.student_Profile_Certificates.map((item, index) => {
              return (
                <Certificates
                  index={index}
                  onUpdateCertificate={onUpdateCertificate}
                  onDeleteCertificate={onDeleteCertificate}
                  key={index}
                  item={item}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Languages
        open={openLanguageDiaLog}
        handleClickOpen={handleClickOpenLanguageDiaLog}
        handleClose={handleCloseLanguagetDiaLog}
        items={studentDetail.student_Profile_Languages}
      />
      <DialogPerson
        studentId={studentDetail.s_ProfileID}
        onSubmitPersonalInformation={onSubmitPersonalInformation}
        jobTitle={studentDetail.jobTitle}
        info={studentDetail.personal_Information}
        open={openPersonalDiaLog}
        handleClickOpen={handleClickOpenPersonalDiaLog}
        handleClose={handleClosePersonalDiaLog}
      />
      <DialogTag
        onSubmitSkills={onSubmitSkills}
        items={studentDetail.student_Profile_Skills}
        open={openTagDiaLog}
        handleClickOpen={handleClickOpenTagDiaLog}
        handleClose={handleCloseTagDiaLog}
      ></DialogTag>
      <DialogOverView
        onSubmitOverview={onSubmitOverview}
        overviewDefault={studentDetail.overView}
        open={openOVDiaLog}
        handleClickOpen={handleClickOpenOVDiaLog}
        handleClose={handleCloseOVDiaLog}
      />
      <DialogTagLanguages
        onSubmitLanguages={onSubmitLanguages}
        items={studentDetail.student_Profile_Languages}
        open={openLanguageDiaLog}
        handleClickOpen={handleClickOpenLanguageDiaLog}
        handleClose={handleCloseLanguagetDiaLog}
      />
      <DialogExperiences
        studentId={studentDetail.s_ProfileID}
        onSubmitExperience={onSubmitExperience}
        open={openExDiaLog}
        handleClickOpen={handleClickOpenExDiaLog}
        handleClose={handleCloseExDiaLog}
      />
      <DialogEducations
        studentId={studentDetail.s_ProfileID}
        onSubmitEducation={onSubmitEducation}
        open={openEduDiaLog}
        handleClickOpen={handleClickOpenEduDiaLog}
        handleClose={handleCloseEduDiaLog}
      />
      <DialogCert
        onSubmitCert={onSubmitCert}
        studentId={studentDetail.s_ProfileID}
        open={openCertDiaLog}
        handleClickOpen={handleClickOpenCertDiaLog}
        handleClose={handleCloseCertDiaLog}
      />
    </div>
  );
};

export default Container;
