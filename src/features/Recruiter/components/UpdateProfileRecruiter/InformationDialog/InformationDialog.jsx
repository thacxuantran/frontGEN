import { Checkbox, makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogActions from "@material-ui/core/DialogActions";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import InputFieldNormal from "./InputFieldNormal";
import React from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "./InformationDialog.scss";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});
const useStyles = makeStyles((theme) => ({
  dialogInfo: {
    "& .MuiDialog-paperWidthSm ": {
      width: 707,
      height: 900,
      background: "#FFFFFF",
      maxWidth: "unset !important",
      alignItems: "center",
      padding: 25,
    },
  },
}));
const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs({
  open,
  handleClose,
  defaultRecruiter,
  onSubmit,
}) {
  const classes = useStyles();
  const schema = Yup.object().shape({});
  console.log("defaultrecruiter: ", defaultRecruiter);
  const { handleSubmit, control, reset } = useForm({
    defaultValues: {
      companyName: defaultRecruiter.recruiter_Information.company_Name,
      location: defaultRecruiter.recruiter_Information.address,
      phoneNumber: defaultRecruiter.recruiter_Information.phone_Number,
      companyIndustry: defaultRecruiter.recruiter_Information.company_Industry,
      companySize: defaultRecruiter.recruiter_Information.company_Size,
      emailContact: defaultRecruiter.recruiter_Information.contact_Email,
      taxCode: defaultRecruiter.recruiter_Information.tax_code,
    },
    resolver: yupResolver(schema),
  });
  const handleSubmitted = (val) => {
    if (onSubmit) {
      onSubmit(val);
    }
    handleClose();
  };
  return (
    <div>
      <Dialog
        className={classes.dialogInfo}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Update Company Info.
        </DialogTitle>
        <DialogContent className="Infor-Dialog">
          <form
            className="Infor-Dialog__root"
            onSubmit={handleSubmit(handleSubmitted)}
          >
            <div className="Infor-Dialog__root__child">
              <Typography color="primary">Name Company</Typography>
              <InputFieldNormal
                require={true}
                name="companyName"
                className="input-field"
                control={control}
                type="text"
                required={false}

              />
            </div>
            <div className="Infor-Dialog__root__child">
              <Typography color="primary">Location</Typography>
              <InputFieldNormal
                require={true}
                name="location"
                className="input-field"
                type="text"
                control={control}
                required={false}

              />
            </div>
            <div className="Infor-Dialog__root__child">
              <Typography color="primary">Phone Number</Typography>
              <InputFieldNormal
                require={true}
                name="phoneNumber"
                className="input-field"
                type="text"
                control={control}
                required={false}

              />
            </div>
            <div className="Infor-Dialog__root__child">
              <Typography color="primary">Email Contact</Typography>
              <InputFieldNormal
                require={true}
                name="emailContact"
                className="input-field"
                type="text"
                control={control}
                required={false}

              />
            </div>
            <div className="Infor-Dialog__root__child">
              <Typography color="primary">Company Industry</Typography>
              <InputFieldNormal
                require={true}
                name="companyIndustry"
                className="input-field"
                type="text"
                control={control}
                required={false}
              />
            </div>
            <div className="Infor-Dialog__root__child">
              <Typography color="primary">Company Size</Typography>
              <InputFieldNormal
                require={true}
                name="companySize"
                className="input-field"
                type="number"
                control={control}
                required={false}

              />
            </div>
            <Typography
              color="primary"
              style={{ textAlign: "center", margin: "20px 0" }}
            >
              Verify Option
            </Typography>
            {!defaultRecruiter.verify ? (
              <div className="Infor-Dialog__root__child">
                <Typography color="primary">Tax Code</Typography>
                <InputFieldNormal
                  require={false}
                  name="taxCode"
                  className="input-field"
                  type="text"
                  control={control}
                required={false}

                />
              </div>
            ) : (
              <div className="Infor-Dialog__root__child">
                <Typography color="primary">Tax Code</Typography>
                <input
                  disabled
                  className="input-field"
                  type="text"
                  value={`${defaultRecruiter.recruiter_Information.tax_code}`}
                />
              </div>
            )}
            <DialogActions className="Infor-Dialog__root__btnUpdate">
              <Button autoFocus type="submit" color="primary">
                Update
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
