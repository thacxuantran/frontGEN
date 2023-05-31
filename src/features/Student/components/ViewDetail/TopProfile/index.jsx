import React from "react";
import "./styles.scss";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import { withStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { Box, Button, Typography } from "@material-ui/core";
import DialogViewAsRecruiter from "../DialogViewAsRecruiter"
import loading from "../../../../../assets/gif/Spinner-1.5s-200px.gif";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
    borderColor: "red",
    marginLeft: "auto",
    marginRight: "20px",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  input: {
    display: "none",
  },
}));
const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    margin: theme.spacing(1),
  },

  switchBase: {
    padding: 1,
    "&$checked": {
      transform: "translateX(16px)",
      color: theme.palette.common.white,
      "& + $track": {
        backgroundColor: "#52d869",
        opacity: 1,
        border: "none",
      },
    },
    "&$focusVisible $thumb": {
      color: "#52d869",
      border: "6px solid #fff",
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(["background-color", "border"]),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});
const Container = ({ studentDetail, onUpdateStatus, onChangeImage, loadingAvatar }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [state, setState] = React.useState(studentDetail.open_For_Job);
  const handleChangeToggle = (event) => {
    setState(event.currentTarget.checked);
    onUpdateStatus(event.target.checked);
  };
  const classes = useStyles();
  const [age, setAge] = React.useState(0);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleChangeFile = (event) => {
    const file = event.target.files[0];
    if (file) {
      onChangeImage(file);
    }
  };
  return (
    <div className="main-profile_top">
      <input
        className={classes.input}
        id="icon-button-file"
        type="file"
        onChange={handleChangeFile}
      />
      {!loadingAvatar ?
        <label htmlFor="icon-button-file">
          <Avatar
            htmlFor="icon-button-file"
            className="avatar"
            alt="main img"
            src={studentDetail.avatar_link}
          ></Avatar>

        </label> :
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: '50%'
          }}
          className="avatar"
        >
          <img
            style={{ width: "50px", height: "50px" }}
            src={loading}
          ></img>
        </div>}
      <div class="information-profile">
        <span class="title">
          {studentDetail.personal_Information.first_Name}{" "}
          {studentDetail.personal_Information.last_Name}
        </span>
        <span class="position">{studentDetail.jobTitle}</span>
        <div>
          <span style={{ fontSize: "15px" }}>Open Job</span>
          <FormControlLabel
            control={
              <IOSSwitch
                checked={state}
                onChange={handleChangeToggle}
                name="stateopen"
              />
            }
          />
        </div>
      </div>
      <FormControl variant="outlined" className={classes.formControl}>
        {/* <InputLabel id="demo-simple-select-outlined-label">View As</InputLabel> */}
        {/* <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange}
          label="View as"
        >
          <MenuItem checked value="0">
            Yourself
          </MenuItem>
          <MenuItem value="1">Rercruiter</MenuItem>
        </Select> */}
        <Button
          color="primary"
          variant="contained"
          onClick={handleClickOpen}
        >
          View as Recruiter
        </Button>
      </FormControl>
      <DialogViewAsRecruiter open={open} handleClickOpen={handleClickOpen} handleClose={handleClose} pId={studentDetail.s_ProfileID} />
    </div>
  );
};

export default Container;
