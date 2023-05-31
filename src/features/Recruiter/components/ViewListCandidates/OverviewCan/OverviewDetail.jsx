import React from "react";
import { Avatar, Box, Button, makeStyles, Typography } from "@material-ui/core";
import "./overview.scss";
import DialogMessage from "../../../../../components/Popup/DialogMessage";
import FormDialog from "../../../../../components/Popup/FormDialogMessage";
OverviewDetail.propTypes = {};

const useStyles = makeStyles((theme) => ({
  image: {
    width: "18%",
    height: "150px",
    borderRadius: "50%",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
}));

function OverviewDetail({
  canProfile,
  appState,
  onSubmitApprove,
  recruitment,
  onSubmitReject,
}) {
  const [open, setOpen] = React.useState(false);
  const [openReject, setOpenReject] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleApproved = () => {
    onSubmitApprove();
    setOpen(false);
  };
  //  handle click on Reject button
  const handleRejectClickOpen = () => {
    setOpenReject(true);
  };

  const handleRejectClose = () => {
    setOpenReject(false);
  };

  const classes = useStyles();
  return (
    <Box className="rootOverviewCan">
      {/* <div className={`${classes.image} rootOverviewCan__avatar`}></div> */}
      <Avatar
        src={canProfile.avatar_link}
        style={{ width: "130px", height: "130px" }}
      />
      <Typography variant="h3" className="rootOverviewCan__name">
        {canProfile.profileName}
      </Typography>
      <Typography variant="body2" className="rootOverviewCan__title">
        {canProfile.jobTitle}
      </Typography>
      {appState === "Rejected" ? (
        <Box className="rootOverviewCan__btn">
          <Button
            color="primary"
            variant="contained"
            className="rootOverviewCan__btn__item"
            disabled="true"
          >
            Approve
          </Button>
          <Button
            color="default"
            variant="contained"
            className="rootOverviewCan__btn__item buttonDisableColor"
            disabled="true"
          >
            Rejected
          </Button>
        </Box>
      ) : appState === "Approved" ? (
        <Box className="rootOverviewCan__btn">
          <Button
            color="primary"
            variant="contained"
            className="rootOverviewCan__btn__item buttonDisableColor"
            disabled="true"
          >
            Approved
          </Button>
          <Button
            color="default"
            variant="contained"
            className="rootOverviewCan__btn__item"
            disabled="true"
          >
            Reject
          </Button>
        </Box>
      ) : (!recruitment.isClosed ?
        <Box className="rootOverviewCan__btn">
          <Button
            color="primary"
            variant="contained"
            className="rootOverviewCan__btn__item"
            onClick={handleClickOpen}
          >
            Approve
          </Button>
          <DialogMessage
            title="Approve Candidate Profile"
            message={` Do you want to approve profile of ${canProfile.profileName} ?`}
            open={open}
            //onClickOpen={handleClickOpen}
            onClickClose={handleClose}
            onSubmit={() => handleApproved()}
          />
          <Button
            color="default"
            variant="contained"
            className="rootOverviewCan__btn__item"
            onClick={handleRejectClickOpen}
          >
            Reject
          </Button>
          <FormDialog
            title="Reject Candidate Profile"
            message={` Do you want to reject profile of ${canProfile.profileName} ?`}
            open={openReject}
            //onClickOpen={handleRejectClickOpen}
            onClickClose={handleRejectClose}
            onSubmitReject={onSubmitReject}
          />
        </Box>
        :
        null
      )}
      <Box className="rootOverviewCan__overview">
        <Typography variant="h3" className="rootOverviewCan_overview__heading">
          Overview<span>.</span>
        </Typography>
        <Typography variant="body2" className="rootOverviewCan_overview__desc">
          {canProfile.overView}
        </Typography>
      </Box>
    </Box>
  );
}

export default OverviewDetail;
