import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, Grid, makeStyles } from "@material-ui/core";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import DropZone from "../Dropzone";
import "./styles.scss";

export default function DialogUploadCV({
  overviewDefault,
  onUploadCV,
  open,
  handleClickOpen,
  handleClose,
  studentDetail,
}) {
  const useStyles = makeStyles((theme) => ({
    dialog: {
      "& .MuiDialog-paperWidthXs": {
        width: 1000,
        maxWidth: "unset !important",
      },
      "& .MuiTypography-h6": {
        color: "black;",
        fontFamily: "Samsung Sharp Sans",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "25px",
        lineHeight: "38px",
        textAlign: "center",
      },

      "& textarea": {
        width: "100%",
        background: "#FFFFFF",
        border: "1px solid #0DAB42",
      },
      "& .MuiDialogActions-root": {
        justifyContent: "center",
      },
      "& .paper__form": {
        marginTop: "auto !important",
      },
    },
    dot: {
      color: "#0DAB42",
      fontFamily: "Samsung Sharp Sans",
      fontStyle: "normal",
      fontWeight: "bold",
      fontSize: "50px",
    },
  }));
  const classes = useStyles();

  return (
    <div>
      <Dialog
        className={classes.dialog}
        maxWidth="xs"
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Upload your resume<span className={classes.dot}>.</span>
        </DialogTitle>
        <div className="wrapper-cv">
          <div className="content">
            <DropZone
              handleClose={handleClose}
              onUploadCV={onUploadCV}
              studentDetail={studentDetail}
            />
          </div>
        </div>
      </Dialog>
    </div>
  );
}
