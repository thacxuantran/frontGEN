import React from "react";
import PropTypes from "prop-types";
import "./OverviewDetail.scss";
import { Avatar, Box, Button, Typography } from "@material-ui/core";
import DialogMessage from "../../../../../components/Popup/DialogMessage";
import { useHistory, useParams } from "react-router-dom";
OverviewDetail.propTypes = {};

function OverviewDetail({ recruitment, onCloseChange, onDeleteChange }) {
  const { recruitmentId } = useParams();
  console.log(recruitmentId);
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseRecruitment = () => {
    onCloseChange();
    setOpen(false);
  };

  const handleDeleteRecruitment = () => {
    onDeleteChange();
    setOpen(false);
  };

  const handleClickSwitchPageEdit = () => {
    history.push(`/recruiter/updateRecruitment/${recruitmentId}`);
  };
  return (
    <Box className="main-overview">
      <div className="main-overview__wrapper">
        <Avatar
          // className="main-overview__logo"
          style={{
            width: "130px",
            height: "130px",
            marginLeft: "3%",
          }}
          src={recruitment.authorImage}
        />
        <div className="main-overview__info">
          <p
            style={{
              fontSize: "20px",
              color: "#404040",
              fontFamily: "Samsung Sharp Sans",
            }}
          >
            {recruitment.title}
          </p>
          <p
            style={{
              fontSize: "1rem",
              marginTop: "15px",
              color: "#404040",
              fontFamily: "Samsung Sharp Sans Regular",
            }}
          >
            {recruitment.authorName}
          </p>
          <p
            style={{
              fontSize: "1rem",
              marginTop: "15px",
              color: "#404040",
              fontFamily: "Samsung Sharp Sans Regular",
            }}
          >
            {recruitment.city.name}
          </p>
          <p
            style={{
              fontSize: "1rem",
              marginTop: "15px",
              color: "#404040",
              fontFamily: "Samsung Sharp Sans Regular",
            }}
          >
            $ {recruitment.min_Salary} - $ {recruitment.max_Salary}
          </p>
        </div>
        <div className="main-overview__group-button">
          <Button
            color="primary"
            variant="contained"
            onClick={handleClickSwitchPageEdit}
          >
            Edit
          </Button>
          {recruitment.isClosed === false ? (
            <>
              <Button
                color="primary"
                variant="contained"
                onClick={handleClickOpen}
              >
                Close
              </Button>
              <DialogMessage
                title="Close recruitment"
                message={`Are you sure you want to close this recruitment?`}
                open={open}
                //onClickOpen={handleClickOpen}
                onClickClose={handleClose}
                onSubmit={() => handleCloseRecruitment()}
              />
            </>
          ) : (
            <>
              <Button
                color="primary"
                variant="contained"
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
                onSubmit={() => handleDeleteRecruitment()}
              />
            </>
          )}
        </div>
      </div>
    </Box>
  );
}

export default OverviewDetail;
