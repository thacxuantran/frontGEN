import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Loading from "../../../../components/Loading";
import {
  Box,
  Typography,
  makeStyles,
  Button,
  Container,
} from "@material-ui/core";
import "./style.scss";
import { Pagination } from "@material-ui/lab";
import { Link, useHistory } from "react-router-dom";

import SkeletonRecruitment from "../../../Student/components/ListRecruitment/Skeleton/SkeletonRecruitment";
import recruitmentApi from "../../../../api/RecruitmentApi";
import { useSelector } from "react-redux";
AvailableJob.propTypes = {};
const useStyles = makeStyles((theme) => ({
  hashtag: {
    position: "relative",
    "& span": {
      width: "100px",
      height: "17px",
      backgroundColor: "#A3EABB",
      marginRight: theme.spacing(1),
      marginTop: theme.spacing(1.5),
      display: "inline-block",
      fontSize: "10px",
      textAlign: "center",
      borderRadius: "10px",
      fontWeight: "bold",
      lineHeight: "17px",
    },
    pagination: {
      display: "flex",
      justifyContent: "center",
      flexFlow: "row nowrap",
      marginTop: "10px",
    },
  },
}));
function _usfTruncate(str, size = 100, description_words = '...') {
  if (!str)
    return "";
  if (str.length && str.length <= size)
    return str;
  return str.slice(0, size) + description_words
}
function AvailableJob({ data, view }) {
  const classes = useStyles();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  console.log({ data, view });
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1500);
  // }, []);
  var calculateDay = (create_date, end_Date) => {
    const date1 = new Date(create_date);
    const date2 = new Date(end_Date);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays == 1) {
      return diffDays + " day ago";
    }
    return diffDays + " days ago";
  };

  console.log(
    "time",
    calculateDay(new Date("2021/06/18"), new Date("2021/06/19"))
  );

  const switchDetailRecruitment = (value) => {
    // history.push()
    history.push(`/recruiter/viewrecruitmentindetail/${value}`);
  };

  return (
    <div>
      <Container>
        {loading ? (
          <Loading />
        ) : (
          <Box className="Available_Job">
            {data.map((recruitment) => (
              <Box className="Available_Job_items">
                <Box className="Available_Job_items_title">
                  <p
                    className="Available_Job_items_title_main"
                    onClick={() =>
                      switchDetailRecruitment(recruitment.recruitments_ID)
                    }
                  >
                    {recruitment.title}
                  </p>
                  <p
                    style={{ color: "#0dab42" }}
                    className="Available_Job_items_title_date"
                  >
                    {recruitment.daysLeft} days left
                  </p>
                </Box>
                <Box className="Available_Job_items_sub">
                  <Box className="Available_Job_items_sub_1">
                    <Box className="Available_Job_items_sub_location">
                      <img
                        alt=""
                        className="Available_Job_items_sub_img_location"
                        src="/icon_location.png"
                      />
                      <p className="Available_Job_items_sub_p_location">
                        {recruitment.city.name}
                      </p>
                    </Box>
                    <Box className="Available_Job_items_sub_salary">
                      <img
                        alt=""
                        className="Available_Job_items_sub_img_salary"
                        src="/icon_money.png"
                      />
                      <p className="Available_Job_items_sub_p_salary">
                        {recruitment.min_Salary} USD - {recruitment.max_Salary}{" "}
                        USD
                      </p>
                    </Box>
                  </Box>
                  <Box className="Available_Job_items_sub_2">
                    <Box className="Available_Job_items_sub_applicant">
                      <p className="Available_Job_items_sub_p_applicant">
                        Applicants:{" "}
                      </p>
                      <p className="Available_Job_items_sub_p_applicant_number">
                        {recruitment.applications.length}
                      </p>
                    </Box>
                    <Box className={classes.hashtag}>
                      {recruitment.recruitmentTags.map((tag, index) =>
                        index <= 2 ? (
                          <span>{_usfTruncate(tag.hashTag.hashTag_Name, 10, '..')}</span>
                        ) : null
                      )}
                    </Box>
                  </Box>
                  <Box className="Available_Job_items_sub_3">
                    <Button
                      color="primary"
                      variant="contained"
                      className="Available_Job_items_sub_3_button"
                      style={{ borderRadius: "20px", textTransform: "none" }}
                    >
                      <Link
                        to={`viewrecruitmentindetail/${recruitment.recruitments_ID}`}
                        className="Available_Job_items_sub_3_button__link"
                      >
                        View
                      </Link>
                    </Button>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        )}
      </Container>
    </div>
  );
}

export default AvailableJob;
