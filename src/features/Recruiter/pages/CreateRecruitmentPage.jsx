import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import recruiterApi from "../../../api/axiosRecruiter";
import messageApi from "../../../api/messageApi";
import Footer from "../../../components/Footer";
import HeaderRecruiter from "../../../components/HeaderRecruiter";
import CreateRecruitment from "../components/Create_Recruitment/CreateRecruitment";
import { useSnackbar } from "notistack";
import { useHistory } from "react-router";
import studentApi from "../../../api/studentApi";
import Loading from "../../../components/Loading";

CreateRecruitmentPage.propTypes = {};

function CreateRecruitmentPage(props) {
  const [hashTag, setHashTag] = useState([]);
  const [loading, setLoading] = useState(true);
  const { enqueueSnackbar } = useSnackbar();
  const history = useHistory();
  const handleHashtag = (val) => {
    setHashTag(val.Tags);
    console.log("hashtag:", val.Tags);
  };
  const loggedInUser = useSelector((state) => state.user.current);
  const profileId = loggedInUser.profileId;

  useEffect(() => {
    (async () => {
      try {
        await studentApi
          .checkConditionBeforeCreating(
            loggedInUser.role,
            loggedInUser.profileId
          )
          .then((data) => {
            if (data.data !== true) {
              history.push(`/recruiter/manage`);
              enqueueSnackbar(
                "Student and Unverify Recruiter cannot create more than 3 available recruitment!",
                {
                  variant: "error",
                }
              );
              setLoading(true);
            } else {
              setLoading(false);
            }
          });
      } catch (error) {
        console.log("err", error);
      }
    })();
  }, []);

  const handleSubmitValue = async (val) => {
    const result = {
      profileId: profileId,
      title: val.title,
      isFullTime: val.isFullTime.value,
      position: val.position,
      job_Category: val.job_Category.value,
      city_ID: val.city_ID.value,
      location: val.location,
      description: val.description,
      requirement: val.requirement,
      min_Salary: parseInt(val.min_Salary),
      max_Salary: parseInt(val.max_Salary),
      benefits: val.benefits,
      end_Date: val.end_Date,
      // hashTags: val.hashTags,
      recruitmentTags: null,
      hashTags: val.Tags,
    };
    console.log("Chuan bi import:", result);

    // console.log(val);

    try {
      // axiosClient.post("/api/Recruitment/CreateNewRecruitment", {
      //   profileId: "6c526c8a-1ecc-5285-ea58-5feba856b5c4",
      //   title: val.title,
      //   isFullTime: val.isFullTime.value,
      //   position: "string",
      //   job_Category: val.job_Category.value,
      //   city_ID: val.city_ID.value,
      //   location: val.location,
      //   description: val.description,
      //   requirement: val.requirement,
      //   min_Salary: parseInt(val.min_Salary),
      //   max_Salary: parseInt(val.max_Salary),
      //   benefits: val.benefits,
      //   end_Date: val.end_Date,
      //   // hashTags: val.hashTags,
      //   recruitmentTags: null,
      //   hashTags: val.hashTags,
      // });
      await recruiterApi
        .createRecruitment(result)
        .then((data) => {
          enqueueSnackbar("Create recruitment successfully 💟💟💟", {
            variant: "success",
          });
          history.push("/recruiter/manage");
          return data.data;
        })
        .then(async (data) => {
          await messageApi.sendMessageTopic(
            {
              Sender_Id: loggedInUser.userId,
              Title: "Recruiter Create a new recruitment",
              Profile_Id: loggedInUser.profileId,
              role: loggedInUser.role,
              Content: "create a new recruitment",
              Type: "NEWSFROMRECRUITER",
              Link: "/student/listrecruitments/detail/" + data.data,
            },
            "SubcribeCompany" + loggedInUser.userId
          );
        });
    } catch (e) {
      console.log(e.message);
      enqueueSnackbar(
        "Create recruitment failed, please check the form again!",
        { variant: "error" }
      );
    }
    return result;
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <HeaderRecruiter />
          <CreateRecruitment onSubmit={handleSubmitValue} />
          <Footer />
        </>
      )}
    </>
  );
}

export default CreateRecruitmentPage;
