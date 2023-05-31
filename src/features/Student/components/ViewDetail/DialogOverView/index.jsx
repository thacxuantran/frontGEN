import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, Grid, makeStyles } from "@material-ui/core";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

export default function DialogOverView({
  overviewDefault,
  open,
  handleClickOpen,
  handleClose,
  onSubmitOverview,
}) {
  const useStyles = makeStyles((theme) => ({
    dialog: {
      "& .MuiDialog-paperWidthXs": {
        width: 1000,
        maxWidth: "unset !important",
      },
      "& .MuiTypography-h6": {
        color: "#0DAB42;",
        fontFamily: "Samsung Sharp Sans",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "30px",
        lineHeight: "38px",
        textAlign: "center",
      },
      "& textarea": {
        width: "100%",
        fontFamily: "Samsung Sharp Sans Regular",
        fontSize: "15px",
        background: "#FFFFFF",
        border: "1px solid #0DAB42",
      },
      "& .MuiDialogActions-root": {
        justifyContent: "center",
      },
      "& .paper__form": {
        marginTop: "auto !important",
      },
      "& h3": {
        fontFamily: "Samsung Sharp Sans",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "20px",
        lineHeight: "38px",
        marginTop: "20px",
        textAlign: "center",
        "& > span": {
          color: "#0DAB42",
          fontSize: "44px",
        },
      },
    },
    dialogcontent: {
      "& textarea": {},
    },
  }));
  const [overview, setOverview] = React.useState(overviewDefault);

  const classes = useStyles();

  const handleSubmited = (event) => {
    event.preventDefault();
    onSubmitOverview({ overview: overview });
    handleClose();
  };
  const handleChange = (event) => {
    setOverview(event.target.value);
  };
  return (
    <div>
      <Dialog
        className={classes.dialog}
        maxWidth="xs"
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <h3>
          Update Overview <span>.</span>
        </h3>
        <form className="paper__form" onSubmit={handleSubmited}>
          <DialogContent className={classes.dialogcontent}>
            <TextareaAutosize
              rowsMin={20}
              aria-label="maximum height"
              placeholder="Maximum 4 rows"
              name="overview"
              onChange={handleChange}
              defaultValue={overview}
            />
          </DialogContent>
          <DialogActions>
            <Button type="submit" color="primary">
              Update
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
