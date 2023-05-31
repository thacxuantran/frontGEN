import React from "react";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";
import "./Avatar.scss";
import { makeStyles } from '@material-ui/core/styles';
import AvatarMaterial from '@material-ui/core/Avatar';
import img from '../../../../../assets/img/fpt-software.jpg';
import Button from '@material-ui/core/Button';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

Avatar.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(23),
    height: theme.spacing(23),
  },
  icon: {
    position: "absolute",
    bottom: 0,
    right: 0
  },
  input: {
    display: 'none',
  }
}));

function Avatar({ onChangeImage, recruiterProfile }) {
  const classes = useStyles();
  const handleChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log(file);
      onChangeImage(file);
    }
  }
  return (
    <Box className="avatar-recruiter">
      {/* <div className="avatar__logo"></div> */}
      <AvatarMaterial alt="Remy Sharp" src={recruiterProfile.logo_Image_Link} className={classes.large + ' avatar-recruiter__logo'} >
      </AvatarMaterial>
      <div className={classes.root + ' middle'}>
        {/* <input
          accept="image/*"
          className={classes.input}
          id="contained-button-file"
          multiple
          type="file"
        /> */}
        <input className={classes.input} id="icon-button-file" type="file" onChange={handleChange} />
        <label htmlFor="icon-button-file">
          <IconButton color="primary" aria-label="upload picture" component="span">
            <PhotoCamera />
          </IconButton>
        </label>
      </div>
    </Box>
  );
}

export default Avatar;
