import React from "react";
import PropTypes from "prop-types";
import { Box, Button, Typography } from "@material-ui/core";
import "./RecruiterCard.scss";
import { makeStyles } from "@material-ui/core";
import AvatarMaterial from "@material-ui/core/Avatar";
import EditIcon from "@material-ui/icons/Edit";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
RecruiterCard.propTypes = {};
const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
}));
function RecruiterCard({ recruiterProfile }) {
  const history = useHistory();
  const loggedInUser = useSelector((state) => state.user.current);
  const classes = useStyles();
  const handleEditProfilePage = () => {
    history.push(`/recruiter/update/profile/${loggedInUser.profileId}`);
  };
  return (
    <Box className="header">
      <AvatarMaterial
        className={classes.large + " avatar-recruiter__logo"}
        alt="Remy Sharp"
        src={recruiterProfile.logo_Image_Link}
      ></AvatarMaterial>

      <Box className="header__name">
        <Box className="header__name__verify">
          <Box className="header__name__verify__contents">
            <Typography variant="h5">
              {recruiterProfile.recruiter_Information.company_Name}
            </Typography>
            {recruiterProfile.verify ? (
              <Box className="verifyicons">
                <img src="/VerifyIcon.png" alt="" />
              </Box>
            ) : (
              <Box></Box>
            )}
          </Box>
        </Box>
        <Typography variant="body1" style={{ marginTop: "10px" }}>
          {" "}
          {recruiterProfile.recruiter_Information.company_Industry}
        </Typography>
        <Typography variant="body2" style={{ marginTop: "10px" }}>
          {recruiterProfile.recruiter_Information.address}
        </Typography>
        <Box className="header__name__btn">
          <Box className="header__name__btn__content">
            <div className="icon">
              <EditIcon style={{ fontSize: 20 }} color="primary" />
            </div>
            <Button onClick={handleEditProfilePage}>
              <Typography
                variant="subtitle2"
                color="secondary"
                className="text"
              >
                Edit Profile
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default RecruiterCard;
