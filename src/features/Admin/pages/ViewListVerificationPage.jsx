import React, { useEffect } from "react";
import PropTypes from "prop-types";
import AdminHeader from "../components/AdminHeader";
import { Box, Container, makeStyles } from "@material-ui/core";
import AdminSideBar from "../components/AdminSideBar";
import ListVerification from "../components/ViewListVerification/ListVerificationCard/ListVerification";
import ViewDetailVerification from "../components/ViewDetailVerification/ViewDetailVerification";
import { useState } from "react";
import adminApi from "../../../api/adminApi";
import Loading from "../../../components/Loading";
import { useSnackbar } from "notistack";
import { useHistory } from "react-router-dom";

ViewListVerificationPage.propTypes = {};

const useStyles = makeStyles((theme) => ({
  adminContainter: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
  },
  adminLeftSide: {
    // width: "25%",
    flex: 2,
  },
  adminRightSide: {
    // width: "65%",
    flex: 4,
    paddingLeft: "50px",
  },
  verifyBodyContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    paddingTop: "4%",
  },
  verifyBodyView: {
    flex: 5,
  },
  verifyViewSideBar: {
    flex: 1,
    boxShadow: "-1px 0px 32px rgba(0, 0, 0, 0.12);",
  },
}));

function ViewListVerificationPage(props) {
  const [listVerification, setListVerification] = useState([]);
  const [loading, setLoading] = useState(true);
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const [defaultVerification, setDefaultVerification] = useState({});
  const [pagination, setPagination] = useState({
    pageIndex: 1,
    pageSize: 5,
    totalCount: 100,
  });
  const [reload, setReload] = useState(false);

  const [filter, setFilter] = useState({
    pageIndex: 1,
    pageSize: 5,
  });
  useEffect(() => {
    if (localStorage.getItem("admin") !== "admin") history.push("/admin");
  }, []);
  useEffect(() => {
    (async () => {
      try {
        await Promise.all([
          adminApi.getListVerificationRequest(
            filter.pageIndex,
            filter.pageSize
          ),
        ]).then((data) => {
          setListVerification(data[0].data.items);
          setPagination(data[0].data);
          setDefaultVerification(data[0].data.items[0]);
          setLoading(false);
          setReload(false);
        });
      } catch (error) {
        console.log("err", error);
      }
    })();
  }, [filter, reload]);

  const handlePageChange = (newPage) => {
    setFilter({ ...filter, pageIndex: newPage });
  };

  const handleVerificationChange = (index) => {
    setDefaultVerification(listVerification[index]);
    //setIndex(index);
  };

  const handleApproveVerification = async (recruiterId) => {
    try {
      adminApi.approveVerificationRequest(recruiterId);
      setPagination({ ...pagination, totalCount: pagination.totalCount - 1 });
      setReload(true);

      enqueueSnackbar("Approve verification request successfully!", {
        variant: "success",
      });
    } catch (error) {
      enqueueSnackbar("Approve verification request failed!", {
        variant: "error",
      });
      console.log(error);
    }
  };

  const handleRejectVerification = async (recruiterId) => {
    try {
      adminApi.rejectVerificationRequest(recruiterId);
      setPagination({ ...pagination, totalCount: pagination.totalCount - 1 });
      setReload(true);

      enqueueSnackbar("Reject verification request successfully!", {
        variant: "success",
      });
    } catch (error) {
      enqueueSnackbar("Reject verification request failed!", {
        variant: "error",
      });
      console.log(error);
    }
  };

  console.log("list verify", listVerification);

  const classes = useStyles();
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Box className={classes.adminContainter}>
            <Box className={classes.verifyViewSideBar}>
              <AdminSideBar />
            </Box>
            <Container className={classes.verifyBodyView}>
              <AdminHeader />
              <Container className={classes.verifyBodyContainer}>
                <Box className={classes.adminLeftSide}>
                  <ListVerification
                    listVerification={listVerification}
                    pagination={pagination}
                    onPageChange={handlePageChange}
                    onVerificationChange={handleVerificationChange}
                  />
                </Box>
                <Box className={classes.adminRightSide}>
                  <ViewDetailVerification
                    defaultVerification={
                      defaultVerification.recruiter_Information
                    }
                    onSubmitApprove={handleApproveVerification}
                    rId={defaultVerification.r_ProfileID}
                    onSubmitReject={handleRejectVerification}
                  />
                </Box>
              </Container>
            </Container>
          </Box>
        </>
      )}
    </>
  );
}

export default ViewListVerificationPage;
