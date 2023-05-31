import React from "react";
import PropTypes from "prop-types";
import { Grid, makeStyles } from "@material-ui/core";
import CardInfo from "../../../../../components/Card/CardInfo";
import CardHashtag from "../../../../../components/Card/CardHastag";
import CardResume from "../../../../../components/Card/CardResume";
import CardExperience from "../../../../../components/Card/CardExperience";
import CardEducation from "../../../../../components/Card/CardEducation";
import CardCertificate from "../../../../../components/Card/CardCertificate";

InformationDetail.propTypes = {};

const useStyles = makeStyles((theme) => ({
  leftside: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

function InformationDetail({ canProfile }) {
  const classes = useStyles();

  return (
    <>
      <Grid container>
        <Grid item xs={12} sm={6} md={6} lg={6} className={classes.leftside}>
          <CardInfo info={canProfile.personal_Information} />
          <CardHashtag
            title="Skills"
            skills={canProfile.student_Profile_Skills}
          />
          <CardHashtag
            title="Languages"
            skills={canProfile.student_Profile_Languages}
          />
          <CardResume
            title="Another Resume"
            resume={canProfile.student_Profile_CVs}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} className={classes.leftside}>
          <CardExperience
            title="Experiences"
            experiences={canProfile.student_Profile_Experiences}
          />
          <CardEducation
            title="Educations"
            educations={canProfile.student_Profile_Educations}
          />
          <CardCertificate
            title="Certificates"
            certificates={canProfile.student_Profile_Certificates}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default InformationDetail;
