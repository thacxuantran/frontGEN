import { Container, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Loading from "../../../components/Loading";
import InformationFeature from "../components/ViewRecruitmentInDetail/Information/InformationFeature";
import DescriptionFeature from "../components/ViewRecruitmentInDetail/JobDescription/DescriptionFeature";
import LocationFeature from "../components/ViewRecruitmentInDetail/Location/LocationFeature";
import studentApi from "../../../api/studentApi";
import { useSnackbar } from "notistack";
import JobTag from "../components/ViewRecruitmentInDetail/JobTag/JobTag";

ViewRecruitmentInDetailPage.propTypes = {};

function ViewRecruitmentInDetailPage({ recruitmentId, authorId }) {
  const [recruitment, setRecruitment] = useState({});
  const [loading, setLoading] = useState(true);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    (async () => {
      try {
        const response = await studentApi.getRecruitmentInDetailForAuthor(
          authorId,
          recruitmentId
        );
        setRecruitment(response.data);
        setLoading(false);
      } catch (error) {
        console.log("err", error);
      }
    })();
  }, []);

  return (
    <>
      {loading ? (
        <div class="overlay">
          <div class="overlay__inner">
            <div class="overlay__content"><span class="spinner"></span></div>
          </div>
        </div>
      ) : (
        <>
          <Container>
            <InformationFeature recruitment={recruitment} />
          </Container>
          <Container>
            <DescriptionFeature recruitment={recruitment} />
          </Container>
          <Container>
            <LocationFeature recruitment={recruitment} />
          </Container>
          <Container>
            <JobTag recruitment={recruitment} />
          </Container>
        </>
      )}
    </>
  );
}

export default React.memo(ViewRecruitmentInDetailPage, (prevProps, nextProps) => {
  console.log("prevProps", prevProps)
  console.log("nextProps", nextProps)

  if (prevProps === nextProps) return true
  return false
});
