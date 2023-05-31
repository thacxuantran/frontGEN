import { Button, Container, Typography } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import PersonIcon from "@material-ui/icons/Person";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import ImageComponent from "../ImageComponent";
import "./styles.scss";

var calculateDay = (date) => {
  const date1 = new Date(date);
  const date2 = new Date();
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  if (diffDays == 1) {
    return diffDays + " day ago";
  }
  return diffDays + " days ago";
};
function _usfTruncate(str, size = 100, description_words = "...") {
  if (!str) return "";
  if (str.length && str.length <= size) return str;
  return str.slice(0, size) + description_words;
}
const CardAside = (props) => {
  const {
    parent,
    item,
    id,
    onSubmitSaveRercruitment,
    onSubmitUnSaveRercruitment,
    onApply,
  } = props;
  const loggedInUser = useSelector((state) => state.user.current);

  const history = useHistory();
  const isSaved = () => {
    var a = item.applications.find(
      (x) => x.s_ProfileID === loggedInUser.profileId
    );
    if (a) {
      return a.isSaved;
    } else {
      return false;
    }
  };
  React.useEffect(() => {
    setSave(isSaved());
  }, [isSaved()]);
  const [save, setSave] = React.useState(isSaved());

  const handleSave = () => {
    var tmp = !save;
    setSave(tmp);
    onSubmitSaveRercruitment(id);
  };
  const handleUnSave = () => {
    var tmp = !save;
    setSave(tmp);
    onSubmitUnSaveRercruitment(id);
  };
  //test
  item.max_candidate = 300;

  // Switch page
  console.log(item);
  const handleViewDetail = () => {
    history.push(`/student/listrecruitments/detail/${item.recruitments_ID}`);
  };

  const handleViewDetailCompany = () => {
    //history.push(`/student/viewRecruiterProfile/${item.r_ProfileID}`);
    if (item.r_ProfileID) {
      const win = window.open(
        `/student/viewRecruiterProfile/${item.r_ProfileID}`,
        "_blank"
      );
      win.focus();
    } else {
      const win = window.open(
        `/student/viewStudentProfile/${item.s_ProfileID}`,
        "_blank"
      );
      win.focus();
    }
  };
  return (
    <Container className="root-card-aside">
      <Container className="root-card-aside__wrapper-header">
        <Typography className="root-card-aside__text">
          {calculateDay(item.create_Date)}
        </Typography>
        {!save ? (
          <FavoriteBorderIcon
            onClick={() => handleSave()}
            style={{ color: "#0DAB42", fontSize: 25, marginLeft: 15 }}
          />
        ) : (
          <FavoriteIcon
            onClick={() => handleUnSave()}
            style={{ color: "#0DAB42", fontSize: 25, marginLeft: 15 }}
          />
        )}
      </Container>
      <Container className="root-card-aside__wrapper-body">
        <div className="root-card-aside__wrapper-body__upper">
          <ImageComponent imageSrc={item.authorImage} />
          <div className="root-card-aside__wrapper-body__upper__infor">
            <p
              className="root-card-aside__wrapper-body__upper__infor__title"
              onClick={handleViewDetail}
            >
              {_usfTruncate(item.title, 20)}
            </p>
            <div className="root-card-aside__wrapper-body__upper__infor__text-info">
              <span
                onClick={handleViewDetailCompany}
                className="root-card-aside__wrapper-body__upper__infor__text-info__title"
              >
                {item.authorName}
              </span>
              <div className="root-card-aside__wrapper-body__upper__infor__text-info__number">
                <PersonIcon />
                <span>
                  {item.max_candidate && item.min_candidate
                    ? item.max_candidate + "-" + item.min_candidate
                    : item.min_candidate || item.max_candidate}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="root-card-aside__wrapper-bod`y__down">
          <div className="root-card-aside__wrapper-body__down__flex">
            <MonetizationOnIcon
              style={{ color: "#0DAB42", fontSize: 20, marginRight: 15 }}
            />
            <span className="root-card-aside__wrapper-body__down__flex__text">
              {item.min_Salary} USD - {item.max_Salary} USD
            </span>
          </div>
          <div className="root-card-aside__wrapper-body__down__flex">
            <LocationOnOutlinedIcon
              style={{ color: "#0DAB42", fontSize: 20, marginRight: 15 }}
            />
            <span className="root-card-aside__wrapper-body__down__flex__text">
              {item.city.name}, Viet Nam
            </span>
          </div>
        </div>
        <div className="root-card-aside__wrapper-body__footer">
          <Button
            onClick={() => onApply(id)}
            className="root-card-aside__wrapper-body__footer__button"
          >
            Apply
          </Button>
        </div>
      </Container>
    </Container>
  );
};

export default CardAside;
