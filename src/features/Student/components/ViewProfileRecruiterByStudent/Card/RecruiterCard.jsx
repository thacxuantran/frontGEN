import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AvatarMaterial from "@material-ui/core/Avatar";
import studentApi from "../../../../../api/studentApi";
import messageApi from "../../../../../api/messageApi";
import DialogMessage from "../../../../../components/Popup/DialogMessage";
import "./RecruiterCard.scss";
import { useSnackbar } from "notistack";

RecruiterCard.propTypes = {};
const useStyles = makeStyles((theme) => ({
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none !important",
    "&:hover": {
      backgroundColor: "#0DAB42",
    },
  },
  large: {
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
}));
function RecruiterCard({ recruiterProfile, isSubscription }) {
  const { enqueueSnackbar } = useSnackbar();
  const classes = useStyles();
  const loggedInUser = useSelector((state) => state.user.current);

  const [open, setOpen] = React.useState(false);
  const [subcribed, setSubcribed] = React.useState(isSubscription.data);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubcribed = () => {
    setSubcribed(true);
  };
  const handleUnsubcribed = () => {
    setSubcribed(false);
  };
  const handleSubmitSubcribe = () => {
    (async () => {
      try {
        await Promise.all([
          studentApi.subscribeRecruiter({
            s_ProfileID: loggedInUser.profileId,
            r_ProfileID: recruiterProfile.r_ProfileID,
          }),
          messageApi.subcribe({
            device_token: loggedInUser.device_token,
            receiver_id: loggedInUser.userId,
            topic:
              "SubcribeCompany" +
              recruiterProfile.recruiter_Information.recruiter_Profile
                .account_ID,
          }),
        ]).then((data) => {
          enqueueSnackbar('Subcribe Company Successfully', {
            variant: 'success',
          });
        });
      } catch (error) {
        console.log("err", error);
      }
    })();
    setOpen(false);
  };
  const handleSubmitUnsubscribe = () => {
    (async () => {
      console.log("recruiterProfile", recruiterProfile);
      //debugger;
      try {
        const response = await studentApi.unsubscribeRecruiter(
          loggedInUser.profileId,
          recruiterProfile.r_ProfileID
        );
        await messageApi.unSubcribe({
          device_token: loggedInUser.device_token,
          receiver_id: loggedInUser.userId,
          topic:
            "SubcribeCompany" +
            recruiterProfile.recruiter_Information.recruiter_Profile.account_ID,
        });
        enqueueSnackbar('Unsubcribe Company Successfully', {
          variant: 'success',
        });
      } catch (error) {
        console.log("err", error);
      }
    })();
    setOpen(false);
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
          {recruiterProfile.recruiter_Information.company_Industry}
        </Typography>
        <Typography variant="body2" style={{ marginTop: "10px" }}>
          {recruiterProfile.recruiter_Information.address}
        </Typography>
        <Box className="header__name__btn">
          {subcribed ? (
            <Box className="header__name__btn__content">
              <div className="icon">
                <img src="/subscribed-icon.png" className="icon__img" alt="" />
              </div>
              <Button className={classes.content} onClick={handleClickOpen}>
                <Typography
                  variant="subtitle2"
                  color="secondary"
                  className="text"
                >
                  Subscribed
                </Typography>
              </Button>
              <DialogMessage
                title="Unsubscribe Recruiter"
                message={` Do you want to unsubscribe ${recruiterProfile.recruiter_Information.company_Name} ?`}
                open={open}
                onClickOpen={handleClickOpen}
                onClickClose={handleClose}
                onSubmit={handleSubmitUnsubscribe}
                onSubcribed={handleUnsubcribed}
              />
            </Box>
          ) : (
            <Box className="header__name__btn__content">
              <div className="icon">
                <img src="/subscribeicon.png" className="icon__img" alt="" />
              </div>
              <Button className={classes.content} onClick={handleClickOpen}>
                <Typography
                  variant="subtitle2"
                  color="secondary"
                  className="text"
                >
                  Subscribe
                </Typography>
              </Button>
              <DialogMessage
                title="Subscribe Recruiter"
                message={` Do you want to subscribe ${recruiterProfile.recruiter_Information.company_Name} ?`}
                open={open}
                onClickOpen={handleClickOpen}
                onClickClose={handleClose}
                onSubmit={handleSubmitSubcribe}
                onSubcribed={handleSubcribed}
              />
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export default RecruiterCard;
