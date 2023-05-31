import { Container, makeStyles } from "@material-ui/core";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import studentApi from "../../../api/studentApi";
import Footer from "../../../components/Footer";
import HeaderRecruiter from "../../../components/HeaderRecruiter";
import Loading from "../../../components/Loading";
import InformationFeature from "../components/CandidateDetail/Infomation/InformationFeature";
import OverviewFeature from "../components/CandidateDetail/Overview/OverviewFeature";

ViewCandidateDetailPage.propTypes = {};

const useStyles = makeStyles((theme) => ({
  info: {
    marginTop: theme.spacing(10),
  },

  backgroundImg: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(10),
    "& > img": {
      margin: "auto",
    },
  },
}));

function ViewCandidateDetailPage(props) {
  const [studentProfile, setStudentProfile] = useState({});
  const { studentId } = useParams();
  const [loading, setLoading] = useState(true);
  const loggedInUser = useSelector((state) => state.user.current);
  const [listAvailableRecruitment, setListAvailableRecruitment] = useState({});
  const [options, setOptions] = useState([]);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    (async () => {
      try {
        await Promise.all([
          studentApi.getDetailStudent(studentId || props.studentId),
          studentApi.getAvailableRecruitmentForInviting(
            loggedInUser.profileId,
            studentId || props.studentId
          ),
        ]).then((data) => {
          setStudentProfile(data[0].data);
          setListAvailableRecruitment(data[1].data);
          setLoading(false);
          const optionfilter = data[1].data.map((item, index) => {
            let rObj = {};
            rObj["label"] = item.title;
            rObj["value"] = item.recruitments_ID;
            return rObj;
          });
          setOptions(optionfilter);
        });
      } catch (error) {
        console.log("err", error);
      }
    })();
  }, []);

  const handleSelectOption = (values) => {
    if (values.inviteStudent === "")
      enqueueSnackbar("Please choose one recruitment!", {
        variant: "error",
      });
    else {
      try {
        studentApi.inviteStudentToRecruitment(
          studentId || props.studentId,
          values.inviteStudent.value
        );
        var newOptions = [...options];
        var index = newOptions.findIndex(
          (obj) => obj.value === values.inviteStudent.value
        );
        console.log("index", index);
        if (index !== -1) {
          newOptions.splice(index, 1);
          console.log(newOptions);
          setOptions(newOptions);
        }
        enqueueSnackbar("Invite student successfully!", {
          variant: "success",
        });
      } catch (error) {
        enqueueSnackbar(
          "You have just invited this candidate to chosen recruitment!",
          {
            variant: "error",
          }
        );
      }
    }
  };

  const classes = useStyles();
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {!props.studentId ? <HeaderRecruiter /> : null}
          <Container>
            <OverviewFeature
              studentProfile={studentProfile}
              options={options}
              onSelectOption={handleSelectOption}
              isRecruiterView={!props.studentId}
            />
          </Container>
          <Container className={classes.info}>
            <InformationFeature studentProfile={studentProfile} />
          </Container>
          <Container className={classes.backgroundImg}>
            <img
              style={{ opacity: "20%" }}
              src="/sologan.png"
              alt="detail candidate page"
            />
          </Container>
          {!props.studentId ? <Footer /> : null}
        </>
      )}
    </>
  );
}

export default ViewCandidateDetailPage;
