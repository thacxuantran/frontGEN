import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./style.scss";
import { Avatar, Box, Container, Link, makeStyles } from "@material-ui/core";
import { Button } from "@material-ui/core";
import AvailableJob from "./AvailableJob";
import ClosedJob from "./ClosedJob";
import recruitmentApi from "../../../../api/RecruitmentApi";
import { Pagination } from "@material-ui/lab";
import { useSelector } from "react-redux";
import recruiterApi from "../../../../api/axiosRecruiter";
import studentApi from "../../../../api/studentApi";
import { useSnackbar } from "notistack";
import { useHistory } from "react-router-dom";
import Loading from "../../../../components/Loading";
RecruiterManagement.propTypes = {};
const useStyles = makeStyles((theme) => ({
  pagination: {
    display: "flex",
    justifyContent: "center",
    flexFlow: "row nowrap",
    marginTop: "10px",
  },
}));
function RecruiterManagement(props) {
  const classes = useStyles();
  const [pagination, setPagination] = useState({
    limit: 5,
    total: 12,
    page: 1,
  });
  const [paginationClose, setPaginationClose] = useState({
    limit: 5,
    total: 12,
    page: 1,
  });
  const [filter, setFilter] = useState({
    PageIndex: 1,
    PageSize: 5,
  });
  const [filterClosed, setFilterClosed] = useState({
    PageIndex: 1,
    PageSize: 5,
  });
  const [numberOfApplicants, setNumberOfApplicants] = useState(0);
  const [recruitment, setRecruitment] = useState([]);
  const [closedrecruitment, setClosedRecruitment] = useState([]);
  const string = "6c526c8a-1ecc-5285-ea58-5feba856b5c4";

  const [clickStateLeftA, setClickStateLeftA] = useState(
    "recruiter_management_left_a_click"
  );
  const [clickStateLeftButton, setClickStateLeftButton] = useState(
    "recruiter_management_left_button_click"
  );
  const [clickStateRightA, setClickStateRightA] = useState(
    "recruiter_management_right_a_unclick"
  );
  const [clickStateRightButton, setClickStateRightButton] = useState(
    "recruiter_management_Right_button_unclick"
  );
  const [colorLeft, setColorLeft] = useState("primary");
  const [colorRight, setColorRight] = useState("black");
  const [change, setChange] = useState(true);
  var changeClass = "";
  const [loading, setLoading] = useState(true);
  const [firstLoad, setFirstLoading] = useState(true);
  const loggedInUser = useSelector((state) => state.user.current);
  const profileId = loggedInUser.profileId;
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  //const profileId = "73e4947c-6848-2878-5e69-eab3c948e915";
  const Role = loggedInUser.role;
  //Call API User
  const [user, setUser] = useState({});
  const [verify, setVerify] = useState(false);
  const [avt, setAvt] = useState("");
  useEffect(() => {
    (async () => {
      if (Role === "STUDENT") {
        const userfake1 = await studentApi.getStudentProfileDetail(profileId);
        setUser(userfake1.data);
        setAvt(userfake1.data.avatar_link);
      } else {
        const userfake2 = await recruiterApi.getRecruiterProfileDetail(
          profileId
        );
        setVerify(userfake2.data.verify);
        setAvt(userfake2.data.logo_Image_Link);
        setUser(userfake2.data.recruiter_Information);
      }
    })();
  }, []);
  //Call API Available Job
  useEffect(() => {
    (async () => {
      setLoading(true)
      if (change) {
        await recruitmentApi.getAvailableJob(
          profileId,
          filter
        ).then(({ items, pagination }) => {
          console.log({ items, pagination });
          setRecruitment(items);
          setPagination(pagination);
          setLoading(false);
        });
      }
    })();
  }, [filter, change]);

  //Call APi Closed Recruitment
  useEffect(() => {
    (async () => {
      if (!change || firstLoad) {
        setLoading(true)
        await recruitmentApi.getClosedJob(
          profileId,
          filterClosed
        ).then(({ items, pagination }) => {
          console.log({ items, pagination });
          setClosedRecruitment(items);
          setPaginationClose(pagination);
          setLoading(false);
          setFirstLoading(false);
        });
      }
    })();
  }, [filterClosed, change]);
  //call API get Number of Applicants
  useEffect(() => {
    (async () => {
      await recruitmentApi
        .getApplicants(profileId)
        .then((number) => {
          setNumberOfApplicants(number.data);
        });
    })();
  }, []);
  const handlePageChange = (e, page) => {
    if (clickStateLeftA === "recruiter_management_left_a_click") {
      setFilter((prevFilter) => ({
        ...prevFilter,
        PageIndex: page,
      }));
    }
    if (clickStateRightA === "recruiter_management_right_a_click") {
      setFilterClosed((prevFilter) => ({
        ...prevFilter,
        PageIndex: page,
      }));
    }
  };

  const changestageLeft = () => {
    if (clickStateLeftA === "recruiter_management_left_a_unclick") {
      setClickStateLeftA("recruiter_management_left_a_click");
      setClickStateLeftButton("recruiter_management_left_button_click");
      setColorLeft("primary");
      setClickStateRightA("recruiter_management_right_a_unclick");
      setClickStateRightButton("recruiter_management_right_button_unclick");
      setColorRight("black");
      setChange(true);
    }
  };
  const changestageRight = () => {
    if (clickStateRightA === "recruiter_management_right_a_unclick") {
      setClickStateRightA("recruiter_management_right_a_click");
      setClickStateRightButton("recruiter_management_right_button_click");
      setColorRight("primary");
      setClickStateLeftA("recruiter_management_left_a_unclick");
      setClickStateLeftButton("recruiter_management_left_button_unclick");
      setColorLeft("black");
      setChange(false);
    }
  };

  const onDeleteChange = async (value) => {
    try {
      await studentApi.deleteRecruitment(value).then((data) => {
        history.push("/recruiter/manage");
      });
      setFilterClosed((prevFilter) => ({
        ...prevFilter,
      }));
      enqueueSnackbar("Delete recruitment successfully!", {
        variant: "success",
      });
    } catch (error) {
      console.log("err", error);
    }
  };

  return (
    <div className="recruiter_management">
      <div className="recruiter_management_header">
        <div className="recruiter_management_header_info">
          <div className="recruiter_management_header_info_avt">
            {/* {avt !== '' ? (
							<img src={avt} alt='' />
						) : (
							<img src='/logo.png' alt='' />
						)} */}
            <Avatar src={avt} />
          </div>
          <div>
            <div className="recruiter_management_header_info_name">
              <p style={{ fontSize: "18px" }}>
                {Role === "STUDENT" ? user.profileName : user.company_Name}
              </p>
              {verify ? (
                <img
                  style={{ width: "15px", height: "15px", marginLeft: "8px" }}
                  src="/VerifyIcon.png"
                  alt=""
                />
              ) : null}
            </div>
            <p
              style={{
                fontSize: "16px",
                fontFamily: "Samsung Sharp Sans Regular",
                marginTop: "10px",
              }}
            >
              {Role === "STUDENT" ? user.jobTitle : user.company_Industry}
            </p>
          </div>
        </div>
        <div className="recruiter_management_header_vailable_jobs">
          <p
            style={{
              fontSize: "36px",

              color: "#0dab42",
            }}
          >
            {!loading ? pagination.total : 0}
          </p>
          <p
            style={{
              fontSize: "14px",
              fontFamily: "Samsung Sharp Sans Regular",
              marginTop: "10px",
            }}
          >
            Available Jobs
          </p>
        </div>
        <div className="recruiter_management_header_applicants">
          <p
            style={{
              fontSize: "36px",

              color: "#0dab42",
            }}
          >
            {!loading ? numberOfApplicants : 0}
          </p>
          <p
            style={{
              fontSize: "14px",
              fontFamily: "Samsung Sharp Sans Regular",
              marginTop: "10px",
            }}
          >
            Applicants
          </p>
        </div>
        <div className="recruiter_management_header_closed">
          <p
            style={{
              fontSize: "36px",

              color: "#0dab42",
            }}
          >
            {!loading ? paginationClose.total : 0}
          </p>
          <p
            style={{
              fontSize: "14px",
              fontFamily: "Samsung Sharp Sans Regular",
              marginTop: "10px",
            }}
          >
            Closed
          </p>
        </div>
        <div
          className="recruiter_management_header_create"
          usemap="#header_create"
        >
          <a
            href="/recruiter/createRecruitment"
            className="recruiter_management_header_create_img"
          >
            {" "}
            <img
              href="/recruiter/createRecruitment"
              src="/add_icon.png"
              alt="add_icon"
            />
          </a>

          <a href="/recruiter/createRecruitment">Create Recruitment</a>
        </div>
      </div>
      <div className="recruiter_management_body">
        <div className="recruiter_management_left">
          <a className={clickStateLeftA} onClick={changestageLeft}>
            <Button
              className={clickStateLeftButton}
              style={{
                textTransform: "none",
                fontSize: "18px",
                marginBottom: "-5px",
              }}
              color={colorLeft}
            >
              Available Jobs
            </Button>
          </a>
          <a className={clickStateRightA} onClick={changestageRight}>
            <Button
              className={clickStateRightButton}
              style={{
                textTransform: "none",
                fontSize: "18px",
                marginBottom: "-5px",
              }}
              color={colorRight}
            >
              Closed Recruitment
            </Button>
          </a>
          <img
            style={{ width: "303px", height: "298px" }}
            src="/create.png"
            alt="create.png"
          />
        </div>
        <div className="recruiter_management_body_space"></div>
        <div className="recruiter_management_right">
          {!loading ? (change ? (recruitment.length > 0 ?
            <>
              <AvailableJob data={recruitment} view={profileId} />
              <Box className="Available_Job_items_paging">
                <Box className={classes.pagination}>
                  <Pagination
                    color="primary"
                    shape="rounded"
                    count={Math.ceil(pagination.total / pagination.limit)}
                    page={pagination.page}
                    onChange={handlePageChange}
                  ></Pagination>
                </Box>
              </Box>
            </> : <img src="/404.png" style={{ width: "303px", height: "298px", margin: '0 auto', opacity: 0.9 }} />
          ) : (closedrecruitment.length > 0 ?
            <>
              <ClosedJob
                onDeleteChange={onDeleteChange}
                data={closedrecruitment}
                view={profileId}
              />
              <Box className="Available_Job_items_paging">
                <Box className={classes.pagination}>
                  <Pagination
                    color="primary"
                    shape="rounded"
                    count={Math.ceil(
                      paginationClose.total / paginationClose.limit
                    )}
                    page={paginationClose.page}
                    onChange={handlePageChange}
                  ></Pagination>
                </Box>
              </Box>
            </> : <img src="/404.png" style={{ width: "303px", height: "298px", margin: '0 auto', opacity: 0.9 }} />
          )
          ) : <Loading />}

        </div>
      </div>
    </div>
  );
}

export default RecruiterManagement;
