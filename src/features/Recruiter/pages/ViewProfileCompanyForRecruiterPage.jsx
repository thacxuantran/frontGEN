import { Box, Container, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosRecruiter from "../../../api/axiosRecruiter";
import Footer from "../../../components/Footer";
import HeaderRecruiter from "../../../components/HeaderRecruiter";
import Loading from "../../../components/Loading";
import RecruiterCard from "../components/ViewProfileCompanyForRecruiter/Card/RecruiterCard";
import CompanyInformation from "../components/ViewProfileCompanyForRecruiter/Company_Information/CompanyInformation";
import ProfileBody from "../components/ViewProfileCompanyForRecruiter/Profile_Body/ProfileBody";

ViewProfileCompanyForRecruiterPage.propTypes = {};
const useStyles = makeStyles((theme) => ({
  main: {
    "& .MuiContainer-root": {
      width: "70%",
    },
  },
}));
function ViewProfileCompanyForRecruiterPage(props) {
  const classes = useStyles();
  const { RecruiterId } = useParams();
  const [recruiterProfile, setRecruiterProfile] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      try {
        await Promise.all([
          axiosRecruiter.getRecruiterProfileDetail(RecruiterId),
        ]).then((data) => {
          setRecruiterProfile(data[0].data);
          console.log("data of recruiterProfile:", data);
          console.log("recruiterProfile", recruiterProfile);
          setLoading(false);
        });
      } catch (error) {
        console.log("err", error);
        // setLoading(false);
      }
    })();
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <HeaderRecruiter />
          <Box className={classes.main}>
            <Container>
              <RecruiterCard recruiterProfile={recruiterProfile} />
            </Container>
            <Container>
              <CompanyInformation recruiterProfile={recruiterProfile} />
            </Container>
            <Container>
              <ProfileBody recruiterProfile={recruiterProfile} />
            </Container>
          </Box>
          <Footer />
        </>
      )}
    </>
  );
}

export default ViewProfileCompanyForRecruiterPage;
