import React from "react";
import PropTypes from "prop-types";
import { Grid, makeStyles } from "@material-ui/core";
import CardInfo from "../../../../../components/Card/CardInfo";
import CardHashtag from "../../../../../components/Card/CardHastag";
import CardResume from "../../../../../components/Card/CardResume";
import CardExperience from "../../../../../components/Card/CardExperience";
import CardEducation from "../../../../../components/Card/CardEducation";
import CardCertificate from "../../../../../components/Card/CardCertificate";

InformationDetail.propTypes = {
  skill: PropTypes.array,
  language: PropTypes.array,
  resume: PropTypes.array,
};

const useStyles = makeStyles((theme) => ({
  leftside: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

function InformationDetail({ studentProfile }) {
  const classes = useStyles();
  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={6} md={6} lg={6} className={classes.leftside}>
          <CardInfo info={studentProfile.personal_Information} />
          <CardHashtag
            title="Skills"
            skills={studentProfile.student_Profile_Skills}
          />
          <CardHashtag
            title="Languages"
            skills={studentProfile.student_Profile_Languages}
          />
          <CardResume
            title="Another Resume"
            resume={studentProfile.student_Profile_CVs}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} className={classes.leftside}>
          <CardExperience
            title="Experiences"
            experiences={studentProfile.student_Profile_Experiences}
          />
          <CardEducation
            title="Educations"
            educations={studentProfile.student_Profile_Educations}
          />
          <CardCertificate
            title="Certificates"
            certificates={studentProfile.student_Profile_Certificates}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default InformationDetail;
