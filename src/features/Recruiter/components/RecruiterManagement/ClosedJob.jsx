import { Box, Button, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Loading from "../../../../components/Loading";
import DialogMessage from "../../../../components/Popup/DialogMessage";
import "./style.scss";
import { useSnackbar } from "notistack";
import studentApi from "../../../../api/studentApi";

ClosedJob.propTypes = {};
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
      fontSize: "11px",
      textAlign: "center",
      borderRadius: "10px",
      fontWeight: "bold",
      lineHeight: "17px",
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
function ClosedJob({ data, onDeleteChange }) {
  const classes = useStyles();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  // useEffect(() => {
  // 	setLoading(true);
  // 	setTimeout(() => {
  // 		setLoading(false);
  // 	}, 1500);
  // }, []);
  const switchDetailRecruitment = (value) => {
    // history.push()
    history.push(`/recruiter/viewrecruitmentindetail/${value}`);
  };
  let calculateDay = (date) => {
    const date1 = new Date(date);
    const date2 = new Date();
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays == 1) {
      return diffDays + " day ago";
    }
    return diffDays + " days ago";
  };
  const handleClickOpen = () => {
    setOpen(true);
    console.log(data);
  };

  const handleRecruitmentDelete = (value) => {
    onDeleteChange(value);
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <Box className="Available_Job">
          {data.map((recruitment) => (
            <Box className="Available_Job_items_closed">
              <Box className="Available_Job_items_title">
                <p className="Available_Job_items_title_main ">
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
                <Box className="Available_Job_items_sub_1_closed">
                  <Box className="Available_Job_items_sub_location">
                    <img
                      className="Available_Job_items_sub_img_location"
                      src="/icon_location.png"
                      alt="icon_location"
                    />
                    <p className="Available_Job_items_sub_p_location">
                      {recruitment.city.name}
                    </p>
                  </Box>
                  <Box className="Available_Job_items_sub_salary">
                    <img
                      className="Available_Job_items_sub_img_salary"
                      src="/icon_money.png"
                      alt="icon_money"
                    />
                    <p className="Available_Job_items_sub_p_salary">
                      {recruitment.min_Salary} USD - {recruitment.max_Salary}{" "}
                      USD
                    </p>
                  </Box>
                </Box>
                <Box className="Available_Job_items_sub_2_closed">
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
                <Box className="Available_Job_items_sub_3_closed">
                  <Button
                    color="primary"
                    variant="contained"
                    className="Available_Job_items_sub_3_button"
                    style={{ borderRadius: "20px", textTransform: "none" }}
                    onClick={() =>
                      switchDetailRecruitment(recruitment.recruitments_ID)
                    }
                  >
                    View
                  </Button>
                  <Button
                    color="black"
                    variant="contained"
                    className="Available_Job_items_sub_3_button_del"
                    style={{
                      width: "40px",
                      borderRadius: "20px",
                      textTransform: "none",
                      marginTop: "10px",
                    }}
                    onClick={handleClickOpen}
                  >
                    Delete
                  </Button>
                  <DialogMessage
                    title="Delete recruitment"
                    message={`Are you sure you want to delete this recruitment?`}
                    open={open}
                    //onClickOpen={handleClickOpen}
                    onClickClose={handleClose}
                    onSubmit={() =>
                      handleRecruitmentDelete(recruitment.recruitments_ID)
                    }
                  />
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      )}
    </div>
  );
}

export default ClosedJob;
