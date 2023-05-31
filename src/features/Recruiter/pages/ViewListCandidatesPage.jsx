import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import OverviewDetailFeature from "../components/ViewListCandidates/Overview/OverviewDetailFeature";
import Tab from "../components/ViewListCandidates/Tab/Tab";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { useSnackbar } from "notistack";
import { Box, Container, makeStyles } from "@material-ui/core";
import ListCandidates from "../components/ViewListCandidates/ListCandidateCard/ListCandidates";
import OverviewFeature from "../components/ViewListCandidates/OverviewCan/OverviewFeature";
import InformationFeature from "../components/ViewListCandidates/Infomation/InformationFeature";
import ViewRecruitmentInDetailPage from "../pages/ViewRecruitmentInDetailPage";
import studentApi from "../../../api/studentApi";
import messageApi from "../../../api/messageApi";
import { useParams } from "react-router";
import Loading from "../../../components/Loading";
import axiosClient from "../../../api/axiosClient";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import HeaderRecruiter from "../../../components/HeaderRecruiter";

ViewListCandidatesPage.propTypes = {};

const useStyles = makeStyles((theme) => ({
  main: {
    "& .MuiContainer-root": {
      width: "95%",
    },
  },
  info: {
    marginTop: theme.spacing(10),
  },
  displayContainer: {
    display: "flex",
    justifyContent: "space-between",
    "& .MuiSvgIcon-colorPrimary": {
      color: "#0DAB42 !important",
    },
  },
  leftSide: {
    width: "28%",
  },
  rightSide: {
    marginTop: "2.8%",
    width: "70%",
    borderRadius: "10px",
    borderStyle: "none",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
    paddingBottom: "3%",
  },
  textNotFound: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop: "5%",
    borderRadius: "10px",
    boxShadow: "0px 4px 21px rgb(0 0 0 / 7%)",
    "& p": {
      textAlign: "center",
      marginBottom: "-8%",

      padding: "3% 0",
      fontSize: "20px",
      fontFamily: "Samsung Sharp Sans Regular",
      color: "#404040",
    },
  },
}));

function ViewListCandidatesPage(props) {
  const loggedInUser = useSelector((state) => state.user.current);

  const [listCandidate, setListCandidate] = useState({});
  const [loading, setLoading] = useState(true);
  const [defaultCan, setDefaultCan] = useState({});
  const [recruitment, setRecruitment] = useState({});
  const [index, setIndex] = useState(0);
  const [onDetail, setOnDetail] = useState(true);
  const history = useHistory();

  const { enqueueSnackbar } = useSnackbar();

  const [pagination, setPagination] = useState({
    pageIndex: 1,
    pageSize: 5,
    totalCount: 100,
  });

  const [filter, setFilter] = useState({
    pageIndex: 1,
    pageSize: 5,
  });

  const { recruitmentId } = useParams();
  useEffect(() => {
    (async () => {
      try {
        await studentApi.getListCandidate(
          recruitmentId,
          filter.pageIndex,
          filter.pageSize
        ).then((data) => {
          setListCandidate(data.data);
          setDefaultCan(data.data.items[0]);
          setPagination(data.data);
        });
        if (loading) {
          await studentApi.getRecruitmentInDetail(recruitmentId)
            .then((data) => {
              setRecruitment(data.data);
              setLoading(false);
            })
        }
      } catch (error) {
        console.log("err", error);
      }
    })();
  }, [filter, onDetail]);

  console.log(listCandidate);

  const handlePageChange = (newPage) => {
    setFilter({ ...filter, pageIndex: newPage });
  };

  const handleCandidateChange = (index) => {
    setDefaultCan(listCandidate.items[index]);
    setIndex(index);
  };

  const handleSubmitApprove = async () => {
    try {
      await Promise.all([
        axiosClient.post("/api/Application/approveCandidate", {
          s_profileID: defaultCan.student_Profile.s_ProfileID,
          recruitment_ID: recruitment.recruitments_ID,
        }),
        messageApi.sendMessage({
          Sender_Id: loggedInUser.userId,
          Receiver_Id: defaultCan.student_Profile.account_ID,
          Profile_Id: loggedInUser.profileId,
          role: loggedInUser.role,
          Title: "New update about your applied recruitment",
          Content: "Have approved your resume",
          device_token: defaultCan.student_Profile.account.device_Token,
          type: "STATUSOFRECRUITMENT",
          Link: "/student/dashboard",
        }),
      ]).then((data) => {
        const temp_list = listCandidate.items;
        const temp = { ...defaultCan, state: "Approved" };
        temp_list[index] = temp;
        setDefaultCan(temp);
        setListCandidate({ ...listCandidate, items: temp_list });
      });
      // send email for annoucing approve
      studentApi.sendEmail({
        toEmail: defaultCan.student_Profile.personal_Information.email,
        subject:
          "GEN - Annoucement about Job Application to " +
          " " +
          recruitment.authorName,
        body:
          "Dear " +
          defaultCan.student_Profile.personal_Information.first_Name +
          " " +
          defaultCan.student_Profile.personal_Information.last_Name +
          ",<br/><br/>" +
          "Thank you for taking the time to apply on the GEN website about the " +
          recruitment.position +
          " role at " +
          recruitment.authorName +
          "." +
          "<br/><br/>" +
          "Congratulations! We are delighted to inform you that " +
          recruitment.authorName +
          " has offered you the position of " +
          recruitment.position +
          "." +
          "<br/><br/>" +
          "I am happy to answer your questions if you would like any specific feedback about your application or interviews." +
          "<br/><br/>" +
          "Thanks again for your interest in " +
          recruitment.authorName +
          "  and best of luck with your job search." +
          "<br/><br/>" +
          "Regards," +
          "<br/><br/>" +
          "GEN Accquisition Team",
        attachments: null,
      });
      enqueueSnackbar("Approve candidate successfully!", {
        variant: "success",
      });
    } catch (error) {
      console.log("err", error);
    }
  };

  const handleSubmitReject = async (reason) => {
    try {
      await Promise.all([
        axiosClient.post("/api/Application/rejectCandidate", {
          s_profileID: defaultCan.student_Profile.s_ProfileID,
          recruitment_ID: recruitment.recruitments_ID,
        }),
        messageApi.sendMessage({
          Sender_Id: loggedInUser.userId,
          Receiver_Id: defaultCan.student_Profile.account_ID,
          Profile_Id: loggedInUser.profileId,
          role: loggedInUser.role,
          Title: "New update about your applied recruitment",
          Content: "have rejected your resume",
          device_token: defaultCan.student_Profile.account.device_Token,
          type: "STATUSOFRECRUITMENT",
          Link: "/student/dashboard",
        }),
      ]).then((data) => {
        const temp_list = listCandidate.items;
        const temp = { ...defaultCan, state: "Rejected" };
        temp_list[index] = temp;
        setDefaultCan(temp);
        setListCandidate({ ...listCandidate, items: temp_list });
        console.log("here is the reason", reason);
      });
      // send email for annoucing reject
      studentApi.sendEmail({
        toEmail: defaultCan.student_Profile.personal_Information.email,
        subject:
          "GEN - Annoucement about Job Application to" +
          " " +
          recruitment.authorName,
        body:
          "Dear " +
          defaultCan.student_Profile.personal_Information.first_Name +
          " " +
          defaultCan.student_Profile.personal_Information.last_Name +
          ",<br/><br/>" +
          "Thank you for taking the time to apply on the GEN website about the " +
          recruitment.position +
          " role at " +
          recruitment.authorName +
          "." +
          "<br/><br/>" +
          "Unfortunately, " +
          recruitment.authorName +
          " did not select you for further consideration with the reason: " +
          reason +
          "." +
          "<br/><br/>" +
          "I am happy to answer your questions if you would like any specific feedback about your application or interviews." +
          "<br/><br/>" +
          "Thanks again for your interest in " +
          recruitment.authorName +
          "  and best of luck with your job search." +
          "<br/><br/>" +
          "Regards," +
          "<br/><br/>" +
          "GEN Accquisition Team",
        attachments: null,
      });
      enqueueSnackbar("Reject candidate successfully!", {
        variant: "success",
      });
    } catch (error) {
      console.log("err", error);
    }
  };

  const handleSwitchChangeList = () => {
    setOnDetail(false);
  };
  const handleSwitchChangeRecruitment = () => {
    setOnDetail(true);
  };

  const handleRecruitmentClose = async () => {
    try {
      await studentApi
        .closeRecruitment(recruitment.recruitments_ID)
        .then((data) => {
          const recruitmentTemp = { ...recruitment, isClosed: true };
          setRecruitment(recruitmentTemp);
          return recruitment.recruitments_ID;
        })
        .then(async (data) => {
          await messageApi.sendMessageTopic(
            {
              Sender_Id: loggedInUser.userId,
              Title: "Recruiter close a recruitment",
              Profile_Id: loggedInUser.profileId,
              role: loggedInUser.role,
              Content: "close a recruitment",
              Type: "NEWSFROMRECRUITER",
              Link: "/student/listrecruitments/detail/" + data,
            },
            "SubcribeRecruitment" + data
          );
          enqueueSnackbar("Close recruitment successfully!", {
            variant: "success",
          });
        });

    } catch (error) {
      console.log("err", error);
    }
  };

  const handleRecruitmentDelete = async () => {
    try {
      await studentApi
        .deleteRecruitment(recruitment.recruitments_ID)
        .then((data) => {
          history.push("/recruiter/manage");
        });
      enqueueSnackbar("Delete recruitment successfully!", {
        variant: "success",
      });
    } catch (error) {
      console.log("err", error);
    }
  };

  console.log("default", defaultCan);

  const classes = useStyles();
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <HeaderRecruiter />
          <Box className={classes.main}>
            <Container>
              <OverviewDetailFeature
                recruitment={recruitment}
                onCloseChange={handleRecruitmentClose}
                onDeleteChange={handleRecruitmentDelete}
              />
            </Container>
            <Container>
              <Tab
                isDetail={onDetail}
                onSwitchChangeRecruitment={handleSwitchChangeRecruitment}
                onSwitchChangeList={handleSwitchChangeList}
              />
            </Container>
            {onDetail ? (
              <ViewRecruitmentInDetailPage
                recruitmentId={recruitmentId}
                authorId={loggedInUser.profileId}
              />
            ) : (
              <>
                {listCandidate.items.length <= 0 ? (
                  <Container className={classes.textNotFound}>
                    <p> There is no candidate found!</p>
                    <img
                      style={{ width: "350px", marginTop: "50px" }}
                      src="/404.png"
                    />
                  </Container>
                ) : (
                  <Container className={classes.displayContainer}>
                    <div className={classes.leftSide}>
                      <ListCandidates
                        listCandidate={listCandidate}
                        pagination={pagination}
                        onPageChange={handlePageChange}
                        onCandidateChange={handleCandidateChange}
                      />
                    </div>
                    <div className={classes.rightSide}>
                      <Container>
                        <OverviewFeature
                          canProfile={defaultCan.student_Profile}
                          appState={defaultCan.state}
                          recruitment={recruitment}
                          onSubmitApprove={handleSubmitApprove}
                          onSubmitReject={handleSubmitReject}
                        />
                      </Container>
                      <Container className={classes.info}>
                        <InformationFeature
                          canProfile={defaultCan.student_Profile}
                        />
                      </Container>
                    </div>
                  </Container>
                )}
              </>
            )}
          </Box>
          <Footer />
        </>
      )}
    </>
  );
}

export default ViewListCandidatesPage;
