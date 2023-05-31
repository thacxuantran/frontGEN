import {
  Box,
  Container,
  Grid,
  IconButton,
  makeStyles,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import studentApi from "../../../api/studentApi";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Loading from "../../../components/Loading";
import RecruiterCard from "../components/ViewProfileRecruiterByStudent/Card/RecruiterCard";
import CompanyInformation from "../components/ViewProfileRecruiterByStudent/Company_Information/CompanyInformation";
import ListRecruitment from "../components/ViewProfileRecruiterByStudent/Job/ListRecruitment";
import ProfileBody from "../components/ViewProfileRecruiterByStudent/Profile_Body/ProfileBody";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { useSelector } from "react-redux";
const useStyles = makeStyles((theme) => ({
  listCard: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "4%",
    marginBottom: "6%",
    flexDirection: "column",
  },
  main: {
    "& .MuiContainer-root": {
      width: "70%",
    },
  },
}));
function ViewProfileRecruiterByStudentPage(props) {
  const classes = useStyles();
  const loggedInUser = useSelector((state) => state.user.current);
  const [recruiterProfile, setRecruiterProfile] = useState({});
  const [listRecruitments, setListRecruitments] = useState({});
  const [isSubscription, setIsSubscription] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [pagination, setPagination] = useState({
    pageIndex: 1,
    pageSize: 3,
    totalCount: 100,
  });
  const [filter, setFilter] = useState({
    pageIndex: 1,
    pageSize: 3,
  });
  const handlePageChange = (newPage) => {
    setFilter({ ...filter, pageIndex: newPage });
  };
  const totalPage = Math.ceil(pagination.totalCount / pagination.pageSize);
  console.log(id);

  useEffect(() => {
    (async () => {
      try {
        await Promise.all([
          studentApi.getRecruiterProfileDetail(id),
          studentApi.getListRecruitmentForAuthor(
            id,
            filter.pageIndex,
            filter.pageSize
          ),
          studentApi.checkSubcription(loggedInUser.profileId, id),
        ]).then((data) => {
          console.log("data 1: ", data);
          setRecruiterProfile(data[0].data);
          setListRecruitments(data[1].data);
          setIsSubscription(data[2].data);
          setPagination(data[1].data);
          setLoading(false);
          console.log(data);
        });
      } catch (error) {
        console.log("err", error);
        // setLoading(false);
      }
    })();
  }, [filter]);
  // console.log("result recruiter: ", recruiterProfile);
  // console.log("List recruiment", listRecruitments);
  // console.log("subcription:", isSubscription);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <Box className={classes.main}>
            <Container>
              <RecruiterCard
                recruiterProfile={recruiterProfile}
                isSubscription={isSubscription}
              />
            </Container>
            <Container>
              <CompanyInformation recruiterProfile={recruiterProfile} />
            </Container>
            <Container>
              <ProfileBody recruiterProfile={recruiterProfile} />
            </Container>
            <Container className={classes.listCard}>
              <Grid container style={{ marginBottom: '30px' }}>
                {listRecruitments.items.map((item, index) => (
                  <Grid key={index} item xs={12} sm={6} md={3} lg={4}>
                    <ListRecruitment
                      recruiment={item}
                      nameCompany={
                        recruiterProfile.recruiter_Information.company_Name
                      }
                      avt={recruiterProfile.logo_Image_Link}
                    />
                  </Grid>
                ))}
              </Grid>
              <Box className="paging">
                <IconButton
                  onClick={() => handlePageChange(pagination.pageIndex - 1)}
                  disabled={pagination.pageIndex <= 1}
                  size="medium"
                >
                  <NavigateBeforeIcon
                    fontSize="inherit"
                    style={
                      pagination.pageIndex > 1
                        ? { color: "#0DAB42", fontSize: 25 }
                        : {}
                    }
                  />
                </IconButton>
                <Box>
                  {pagination.pageIndex}/{totalPage}
                </Box>
                <IconButton
                  onClick={() => handlePageChange(pagination.pageIndex + 1)}
                  disabled={pagination.pageIndex === totalPage}
                  size="medium"
                >
                  <NavigateNextIcon
                    style={
                      pagination.pageIndex !== totalPage
                        ? { color: "#0DAB42", fontSize: 25 }
                        : {}
                    }
                    fontSize="inherit"
                  />
                </IconButton>
              </Box>
            </Container>
          </Box>
          <Footer />
        </>
      )}
    </>
  );
}

ViewProfileRecruiterByStudentPage.propTypes = {};

export default ViewProfileRecruiterByStudentPage;
