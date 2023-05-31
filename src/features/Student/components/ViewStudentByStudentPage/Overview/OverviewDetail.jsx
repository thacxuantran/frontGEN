import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Avatar, Box, Button, makeStyles, Typography } from "@material-ui/core";
import "./overview.scss";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import OptionFilterField from "../../../../../components/form-control/OptionFilterField";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./overview.scss";
OverviewDetail.propTypes = {};

const useStyles = makeStyles((theme) => ({
  dialogSelect: {
    "& .MuiDialog-paperWidthSm ": {
      width: "auto",
      height: 500,
      background: "#FFFFFF",
      maxWidth: "unset !important",
      alignItems: "center",
    },
  },
  avatar: {
    width: "170px",
    height: "170px",
  },
  job_title: {
    marginTop: "1%",
  },
  overview: {
    marginTop: "5%",
  },
  overview_title: {
    marginTop: "4%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
}));

function OverviewDetail({ studentProfile, options, onSelectOption, isRecruiterView }) {
  const [avt, setAvt] = useState("");
  useEffect(() => {
    console.log("pro", studentProfile.avatar_link);
    setAvt(studentProfile.avatar_link);
  }, []);
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const schema = Yup.object().shape({});

  const { handleSubmit, control, reset, formState } = useForm({
    defaultValues: {
      inviteStudent: "",
    },
    resolver: yupResolver(schema),
  });

  const handleSelect = (values) => {
    if (onSelectOption) onSelectOption(values);
    reset();
    setOpen(false);
  };
  const classes = useStyles();
  return (
    <Box className="viewDetailCandidate__root">
      <div>
        <Avatar
          style={{ width: "170px", height: "170px", marginTop: "50px" }}
          src={avt}
        />
      </div>

      <Typography variant="h3" className="viewDetailCandidate__root__name">
        {studentProfile.profileName}
      </Typography>
      <p
        style={{ fontSize: "18px", fontFamily: "Samsung Sharp Sans Regular" }}
        className={classes.job_title}
      >
        {studentProfile.jobTitle}
      </p>
      <Box className="viewDetailCandidate__root__btn">
        <form>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            className={classes.dialogSelect}
          >
            <DialogTitle id="alert-dialog-title">
              {"Invite student to recruitment News"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Please, Choose your available recruitment below!
              </DialogContentText>

              <OptionFilterField
                name="inviteStudent"
                placeholder="Choose one recruitment"
                options={options}
                control={control}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button
                onClick={handleSubmit(handleSelect)}
                color="primary"
                autoFocus
              >
                OK
              </Button>
            </DialogActions>
          </Dialog>
        </form>
      </Box>
      <Box className={classes.overview_title}>
        <svg
          width="128"
          height="21"
          viewBox="0 0 128 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.48 20.24C14.472 20.24 18.456 16.232 18.456 11.24C18.456 6.272 14.472 2.24 9.48 2.24C4.488 2.24 0.528 6.272 0.528 11.24C0.528 16.232 4.488 20.24 9.48 20.24ZM9.48 17.024C6.288 17.024 3.768 14.432 3.768 11.24C3.768 8.048 6.288 5.456 9.48 5.456C12.672 5.456 15.216 8.048 15.216 11.24C15.216 14.432 12.672 17.024 9.48 17.024ZM24.6461 20H27.9101L33.1901 5.96H29.8541L26.3021 15.848L22.6781 5.96H19.2941L24.6461 20ZM40.2632 20.288C43.4312 20.288 45.5912 18.776 46.8152 16.496L44.1512 14.96C43.4792 16.472 42.0872 17.432 40.2632 17.432C37.9592 17.432 36.3992 16.112 35.9432 14.12H47.3672V12.896C47.3672 8.744 44.3192 5.672 40.1432 5.672C36.0392 5.672 32.8472 8.912 32.8472 13.016C32.8472 17.072 35.8472 20.288 40.2632 20.288ZM40.1432 8.528C42.1592 8.528 43.5992 9.512 44.0792 11.408H36.1112C36.6872 9.68 38.1992 8.528 40.1432 8.528ZM48.8188 20H52.0588V12.512C52.0588 10.088 53.0428 9.08 54.9388 9.08C55.8748 9.08 56.4028 9.32 56.8828 9.632L58.1068 6.56C57.4588 6.2 56.6668 5.96 55.6348 5.96C53.8828 5.96 52.6828 6.656 52.0348 8.048V5.96H48.8188V20ZM63.9039 20H67.1679L72.4479 5.96H69.1119L65.5599 15.848L61.9359 5.96H58.5519L63.9039 20ZM73.6391 20H76.9031V5.96H73.6391V20ZM73.2311 2.528C73.2311 3.752 73.9511 4.544 75.2711 4.544C76.5431 4.544 77.3111 3.752 77.3111 2.528C77.3111 1.304 76.5431 0.487999 75.2711 0.487999C74.0231 0.487999 73.2311 1.304 73.2311 2.528ZM85.7319 20.288C88.8999 20.288 91.0599 18.776 92.2839 16.496L89.6199 14.96C88.9479 16.472 87.5559 17.432 85.7319 17.432C83.4279 17.432 81.8679 16.112 81.4119 14.12H92.8359V12.896C92.8359 8.744 89.7879 5.672 85.6119 5.672C81.5079 5.672 78.3159 8.912 78.3159 13.016C78.3159 17.072 81.3159 20.288 85.7319 20.288ZM85.6119 8.528C87.6279 8.528 89.0679 9.512 89.5479 11.408H81.5799C82.1559 9.68 83.6679 8.528 85.6119 8.528ZM97.3854 20H100.577L104.225 10.28L107.777 20H110.897L115.817 5.96H112.529L109.313 15.656L105.857 5.96H102.641L99.1134 15.632L96.0174 5.96H92.7054L97.3854 20Z"
            fill="black"
          />
          <path
            d="M117.564 15.584C117.564 18.656 119.484 20.768 122.748 20.768C126.012 20.768 127.996 18.656 127.996 15.584C127.996 12.448 126.076 10.336 122.812 10.336C119.548 10.336 117.564 12.448 117.564 15.584Z"
            fill="#0DAB42"
          />
        </svg>

        <Typography variant="body2" className={classes.overview}>
          {studentProfile.overView}
        </Typography>
      </Box>
    </Box>
  );
}

export default OverviewDetail;
