import React, { useState } from "react";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import img from "../../../../../assets/img/fpt-software.jpg";
import "./styles.scss";

const SmallAvatar = withStyles((theme) => ({
  root: {
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  },
}))(Avatar);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "inline-flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function ImageComponent(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Badge
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        overlap="circle"
        badgeContent={<SmallAvatar alt="Remy Sharp" src="/VerifyIcon.png" />}
      >
        <Avatar
          className={"img-avt " + props.className}
          alt={props.profileName}
          src={props.imageSrc}
        />
      </Badge>
    </div>
  );
}
