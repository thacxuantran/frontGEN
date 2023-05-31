import { yupResolver } from "@hookform/resolvers/yup";
import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import * as Yup from "yup";
import Footer from "../../../../components/Footer";
import Loading from "../../../../components/Loading";
import HeaderAuth from "../Header";
import RecruiterIcon from "./icon/RecuiterIcon";
import StudentIcon from "./icon/StudentIcon";
import "./SelectRole.scss";

const useStyles = makeStyles((theme) => ({
  left: {
    width: "50%",
  },

  right: {
    // flex: '1 1 0',

    width: "50%",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    boxSizing: "border-box",
    marginTop: "5%",
  },
  google: {
    boxShadow: "none !important",
  },

  text: {
    display: "inline-block",
    marginLeft: "1.4rem",
    fontSize: "20px",
    color: "#0DAB42",
    fontWeight: "bold",
  },
}));

function SelectRoleUI({ onSubmit, onHandleResponseGoogle }) {
  const classes = useStyles();
  const { option } = useParams();
  const [loading, setLoading] = useState(false);
  const switchHeader = "selectrole";
  const history = useHistory();
  //const {handleSubmit} = useForm()

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const handleRoleRecruiter = () => {
    history.push(`/auth/${option}/RECRUITER`);
  };

  const handleRoleStudent = () => {
    history.push(`/auth/${option}/STUDENT`);
  };

  return (
    <Box>
      {loading ? (
        <Loading />
      ) : (
        <div className="containerSelectRole">
          <HeaderAuth switchHeader={switchHeader} />
          <Box className="selectRole">
            <Container component="main">
              <img src="/img2.png" alt="" className="selectRole__img" />
              <Grid
                container
                spacing={2}
                classes={{
                  container: classes.container, // class name, e.g. `classes-nesting-root-x`
                }}
              >
                <Grid
                  item
                  className="selectRole__boxAnimation"
                  onClick={handleRoleRecruiter}
                >
                  <div className="imageSelectRole">
                    <Box className="imageSelectRole__roleOption">
                      <RecruiterIcon />
                      <Typography variant="body1" className={classes.text}>
                        Recruiter
                      </Typography>
                    </Box>
                    <img
                      src="/selectrole/recruiter.png"
                      alt="recruiter"
                      className="imageSelectRole__img"
                    />
                  </div>
                </Grid>
                <Grid
                  item
                  className="selectRole__boxAnimation"
                  onClick={handleRoleStudent}
                >
                  <Box className="imageSelectRole__roleOption">
                    <StudentIcon />
                    <Typography variant="body1" className={classes.text}>
                      Job Seeker
                    </Typography>
                  </Box>
                  <div className="imageSelectRole">
                    <img
                      src="/selectrole/student.png"
                      alt="student"
                      className="imageSelectRole__img1"
                    />
                  </div>
                </Grid>
              </Grid>
            </Container>
          </Box>
          <Footer />
        </div>
      )}
    </Box>
  );
}

export default SelectRoleUI;
