import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import searchApi from "../../../api/searchApi";
import Footer from "../../../components/Footer";
import HeaderRecruiter from "../../../components/HeaderRecruiter";
import Loading from "../../../components/Loading";
import ListCandidates from "../components/ListCandidates/Card/ListCandidates";
import FilterFeature from "../components/ListCandidates/Filter/FilterFeature";
import InfoSearchCandidate from "../components/ListCandidates/InfoSearchCandidate/InfoSearchCandidate";
import SearchCandidate from "../components/ListCandidates/Search/SearchCandidate";
import CandidateSkeletonList from "../components/Skeleton/CandidateSkeletonList";

ViewCandidatesPage.propTypes = {};

const useStyles = makeStyles((theme) => ({
  search: {
    marginTop: theme.spacing(10),
    width: "65%",
    padding: 0,
  },
  filter: {
    display: "flex",
    // backgroundColor: "#0DAB42",
    marginTop: theme.spacing(3),
    borderRadius: theme.spacing(1.2),
    padding: 0,
    width: "65%",
  },

  candidate: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(20),
    padding: 0,
    width: "90%",
  },
  detailInfo: {
    marginTop: theme.spacing(4),
    padding: 0,
    width: "65%",
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    flexFlow: "row nowrap",
    marginTop: "10px",
  },
  first: {
    display: "flex",
    justifyContent: "flex-end",
    marginBottom: "-300px",
    marginTop: "75px",
  },
  second: {
    display: "flex",
    justifyContent: "flex-start",
    marginTop: "30%",
    marginBottom: "-45%",
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

function ViewCandidatesPage(props) {
  const classes = useStyles();
  const [candidate, setCandidate] = useState([]);
  const [filterCareer, setFilterCareer] = useState([]);
  const [filterLocation, setFilterLocation] = useState([]);
  const [filterEducation, setFilterEducation] = useState([]);
  const [filterLanguage, setFilterLanguage] = useState([]);
  const [filterCountry, setFilterCountry] = useState([]);
  const [filterGender, setFilterGender] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingSkeleton, setLoadingSkeleton] = useState(true);
  const [pagination, setPagination] = useState({
    limit: 12,
    total: 12,
    page: 1,
  });
  const [filter, setFilter] = useState({
    // page
    ["data.pageSize"]: 12,
    ["data.pageIndex"]: 1,
    // search
    ["data.query_name"]: "",
    // sort
    ["sort_option"]: "",
    // Filter
    ["data.startDateAge"]: "",
    ["data.endDateAge"]: "",
    ["filter.carrer"]: "",
    ["filter.location"]: "",
    ["filter.gender"]: "",
    ["filter.education"]: "",
    ["filter.language"]: "",
    ["filter.country"]: "",
  });

  const [filterOptions, setFilterOptions] = useState({
    // page
    ["data.pageSize"]: 60,
    ["data.pageIndex"]: 1,
  });

  useEffect(() => {
    (async () => {
      try {
        const { items, pagination } = await searchApi.searchCandidate(filter);
        // Set Option Career

        //----------------------------------------------
        setCandidate(items);
        setPagination(pagination);

        //-------------------------------------
        setLoading(false);
        setLoadingSkeleton(false);
      } catch (error) {
        setCandidate([]);
        setPagination({
          ...pagination,
          total: 0
        })
        setLoading(false);
        setLoadingSkeleton(false);
      }
    })();
  }, [filter]);

  useEffect(() => {
    (async () => {
      try {
        const { items } = await searchApi.searchCandidate(filterOptions);
        // Set Option Career
        const filterForCareer = items.map((item, index) => {
          let rObj = {};
          if (!item.jobtitle) {
            return;
          }
          rObj['label'] = item.jobtitle;
          rObj['value'] = index;
          return rObj;
        });
        const filterForCareerFilter = filterForCareer.filter((item, index) => {
          return item;
        });

        // console.log(filterForCareerFilter);
        filterForCareerFilter.unshift({ label: 'All', value: '' });
        // Set option location
        const filterForLocation = items.map((item, index) => {
          let rObj = {};
          if (!item.province_city) {
            return;
          }
          rObj['label'] = item.province_city;
          rObj['value'] = index;
          return rObj;
        });
        const filterForLocationFilter = filterForLocation.filter(
          (item, index) => {
            return item;
          }
        );
        filterForLocationFilter.unshift({ label: 'All', value: '' });
        // Set Option Education
        const filterForEducation = items.map((item, index) => {
          let rObj = {};
          if (!item.major) {
            return;
          }
          rObj['label'] = item.major[0];
          rObj['value'] = index;
          return rObj;
        });

        const filterForEducationFilter = filterForEducation.filter(
          (item, index) => {
            return item;
          }
        );
        filterForEducationFilter.unshift({ label: 'All', value: '' });

        // Set Option language
        const filterForLanguage = items.map((item, index) => {
          let rObj = {};
          if (!item.locale) {
            return;
          }
          rObj['label'] = item.locale[0];
          rObj['value'] = index;
          return rObj;
        });
        const filterForLanguageFilter = filterForLanguage.filter(
          (item, index) => {
            return item;
          }
        );
        filterForLanguageFilter.unshift({ label: 'All', value: '' });
        // Set option country
        const filterForCountry = items.map((item, index) => {
          let rObj = {};
          if (!item.nationallity) {
            return;
          }
          rObj['label'] = item.nationallity;
          rObj['value'] = index;
          return rObj;
        });

        const filterForCountryFilter = filterForCountry.filter(
          (item, index) => {
            return item;
          }
        );
        filterForLocationFilter.unshift({ label: 'All', value: '' });

        //----------------------------------------------

        // Set Option Filter
        setFilterCareer(filterForCareerFilter);
        setFilterLocation(filterForLocationFilter);
        setFilterEducation(filterForEducationFilter);
        setFilterLanguage(filterForLanguageFilter);
        setFilterCountry(filterForCountryFilter);
        //-------------------------------------
        setLoading(false);
        setLoadingSkeleton(false);
      } catch (error) {
        setLoading(false);
        setLoadingSkeleton(false);
      }
    })();
  }, []);


  const handlePageChange = (e, page) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      ["data.pageIndex"]: page,
    }));
    setLoadingSkeleton(true);
  };

  const handleSubmitSearch = (values) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      ["data.query_name"]: values.nameSearchCandidate,
      ["data.pageIndex"]: 1,
    }));
    setLoadingSkeleton(true);
  };

  const onChangeSort = (values) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      ["sort_option"]: values.value,
    }));
    setLoadingSkeleton(true);
  };

  const handleSubmitValueFilter = (values) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      ["data.startDateAge"]: values.fromAge,
      ["data.endDateAge"]: values.toAge,
      ["filter.carrer"]: values.career.label !== 'All' ? values.career.label : '',
      ["filter.location"]: values.location.label !== 'All' ? values.location.label : '',
      ["filter.gender"]: values.gender.value,
      ["filter.education"]: values.education.label !== 'All' ? values.education.label : '',
      ["filter.language"]: values.language.label !== 'All' ? values.language.label : '',
      ["filter.country"]: values.country.label !== 'All' ? values.country.label : '',
      ["data.pageIndex"]: 1,
    }));
    setLoadingSkeleton(true);
  };

  const handleReset = () => {
    for (const key in filter) {
      if (key == 'data.pageSize' || key == 'data.pageIndex' || filter[key]) {
        continue;
      }
      setFilter({
        // page
        ["data.pageSize"]: 12,
        ["data.pageIndex"]: 1,
        // search
        ["data.query_name"]: "",
        // sort
        ["sort_option"]: "",
        // Filter
        ["data.startDateAge"]: "",
        ["data.endDateAge"]: "",
        ["filter.carrer"]: "",
        ["filter.location"]: "",
        ["filter.gender"]: "",
        ["filter.education"]: "",
        ["filter.language"]: "",
        ["filter.country"]: "",
      }
      )
    }
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <HeaderRecruiter />
          <div className={classes.first}>
            <img src="/img2.png" alt="" />
          </div>
          {/* <div className={classes.second}>
            <svg
              width="131"
              height="270"
              viewBox="0 0 131 270"
              fill="none"
              xmlns="https://www.w3.org/2000/svg"
            >
              <circle
                cx="-4.42284"
                cy="135.019"
                r="108.261"
                transform="rotate(-165.499 -4.42284 135.019)"
                stroke="#404040"
                stroke-width="4"
              />
              <circle
                cx="91.0064"
                cy="72.0069"
                r="32.0112"
                transform="rotate(-165.499 91.0064 72.0069)"
                fill="#0DAB42"
              />
            </svg>
          </div> */}
          <Container className={classes.search}>
            <SearchCandidate handleSubmitSearch={handleSubmitSearch} />
          </Container>
          <Container className={classes.filter}>
            <FilterFeature
              onSubmit={handleSubmitValueFilter}
              filterCareer={filterCareer}
              filterLocation={filterLocation}
              filterCountry={filterCountry}
              filterEducation={filterEducation}
              filterLanguage={filterLanguage}
              onReset={handleReset}
            />
          </Container>
          <Container className={classes.detailInfo}>
            <InfoSearchCandidate
              count={pagination.total}
              onChangeSort={onChangeSort}
            />
          </Container>
          <Container className={classes.candidate}>
            {loadingSkeleton ? (
              <CandidateSkeletonList />
            ) : (
              <>
                {candidate.length > 0 ? (
                  <Grid container>
                    {candidate.map((item, index) => (
                      <Grid item xs={12} sm={6} md={4} lg={4}>
                        <ListCandidates candidate={item} />
                      </Grid>
                    ))}
                  </Grid>
                ) : (
                  <Container className={classes.textNotFound}>
                    <p> There is no candidate found!</p>
                    <img
                      style={{ width: "350px", marginTop: "50px" }}
                      src="/404.png"
                    />
                  </Container>
                )}
              </>
            )}
            {candidate.length > 0 ? (
              <Box className={classes.pagination}>
                <Pagination
                  color="primary"
                  shape="rounded"
                  count={Math.ceil(pagination.total / pagination.limit)}
                  page={pagination.page}
                  onChange={handlePageChange}
                />
              </Box>) : null}
          </Container>
          <Footer />
        </>
      )}
    </>
  );
}

export default ViewCandidatesPage;
