import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import recruitmentApi from "../../../api/RecruitmentApi";
import studentApi from "../../../api/studentApi";
import messageApi from '../../../api/messageApi';
import Footer from "../../../components/Footer";
import HeaderRecruiter from "../../../components/HeaderRecruiter";
import Loading from "../../../components/Loading";
import UpdateRecruitment from "../components/UpdateRecruitment/UpdateRecruitment";
UpdateRecruitmentPage.propTypes = {};

function UpdateRecruitmentPage(props) {
  const [recruitment, setRecruitment] = useState({});
  const history = useHistory();

  const [loading, setLoading] = useState(true);
  const { enqueueSnackbar } = useSnackbar();
  const loggedInUser = useSelector((state) => state.user.current);
  const profileId = loggedInUser.profileId;
  const { recruitmentId } = useParams();
  // const [hashTag, setHashTag] = useState([]);
  // const [typeJob, setTypeJob] = useState();
  // const [jobcategory, setJobCategory] = useState("");
  // const handleHashtag = (val) => {
  //   setHashTag(val);
  //   console.log("hashtag:", val.Tags);
  // };
  // const handleSubmitTypeJob = (val) => {
  //   setTypeJob(val);
  //   console.log("Tyoe Job:", val);

  //   return val;
  // };
  // const handleSubmitJobCategory = (val) => {
  //   setJobCategory(val);
  //   console.log("Job Category:", val);
  //   return val;
  // };
  const handleSubmit = async (val) => {
    console.log("Chuan bi dua vao  update:", val);
    const result = {
      profileId: profileId,
      title: val.title,
      isFullTime: val.typeJob,
      position: val.position,
      job_Category: val.jobCategory,
      city_ID: val.cityID,
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

    console.log("Chuan bi update:", result);

    try {
      await recruitmentApi.updateRecruitment(recruitment.recruitments_ID, result);
      await messageApi.sendMessageTopic({
        Sender_Id: loggedInUser.userId,
        Title: "Recruiter update a recruitment",
        Profile_Id: loggedInUser.profileId,
        role: loggedInUser.role,
        Content: "update a recruitment",
        Type: "NEWSFROMRECRUITER",
        Link: '/student/listrecruitments/detail/' + recruitment.recruitments_ID,
      }, "SubcribeRecruitment" + recruitment.recruitments_ID)

      enqueueSnackbar("Update recruitment successfully!", {
        variant: "success",
      });
      history.push(`/recruiter/viewrecruitmentindetail/${recruitmentId}`);
    } catch (error) {
      console.log("err", error);
    }
    // return result;
  };
  //console.log(recruitmentId, profileId);
  useEffect(() => {
    (async () => {
      try {
        const response = await studentApi.getRecruitmentInDetailForUpdate(
          profileId,
          recruitmentId
        );
        //console.log("response", response);
        setRecruitment(response.data);
        setLoading(false);
      } catch (error) {
        console.log("err", error);
      }
    })();
  }, []);

  console.log("result recruitment: ", recruitment);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <HeaderRecruiter />
          <UpdateRecruitment
            data={recruitment}
            onSubmit={handleSubmit}
            item={recruitment.recruitmentTags}
          // onSubmitSkills={handleHashtag}
          // onSubmitTypeJob={handleSubmitTypeJob}
          // onSubmitJobCategory={handleSubmitJobCategory}
          />
          <Footer />
        </>
      )}
    </>
  );
}

export default UpdateRecruitmentPage;
