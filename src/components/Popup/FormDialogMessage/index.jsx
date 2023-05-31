import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  inputfield: {
    "& div textarea": {
      fontFamily: "Samsung Sharp Sans Regular",
      fontSize: "14px",
    },
  },
}));
function FormDialog({ message, title, open, onClickClose, onSubmitReject }) {
  const [textInput, setTextInput] = React.useState("");
  const classes = useStyles();
  const handleClose = () => {
    onClickClose();
  };

  const handleOnClick = () => {
    if (onSubmitReject) onSubmitReject(textInput);
    onClickClose();
  };
  const handleInputChange = (event) => {
    setTextInput(event.target.value);
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText
            style={{
              fontSize: "15px",
              fontFamily: "Samsung Sharp Sans Regular",
            }}
          >
            {message}
          </DialogContentText>
          <TextField
            autoFocus
            className={classes.inputfield}
            margin="dense"
            multiline
            rows={5}
            id="reason"
            label="Reason for refusal"
            type="text"
            value={textInput}
            onChange={handleInputChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={() => handleOnClick()} color="primary">
            Reject
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default FormDialog;
