import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Typography, Container, Divider, makeStyles } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ImageComponent from '../ImageComponent';
import PersonIcon from '@material-ui/icons/Person';
import './styles.scss';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import ApartmentIcon from '@material-ui/icons/Apartment';
import WarningRoundedIcon from '@material-ui/icons/WarningRounded';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SettingsIcon from '@material-ui/icons/Settings';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneIcon from '@material-ui/icons/Phone';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';

const useStyles = makeStyles((theme) => ({
    hashtag: {
        position: 'relative',
        paddingBottom: '10px',
        display: 'flex',
        '& span': {
            height: '17px',
            backgroundColor: '#A3EABB',
            marginRight: theme.spacing(1),
            marginTop: theme.spacing(1.5),
            display: 'inline-block',
            width: '25%',
            fontSize: '10px',
            textAlign: 'center',
            borderRadius: '10px',
            fontWeight: 'bold',
            lineHeight: '17px',
        },
    },
}));
var calculateDay = (date) => {
    const date1 = new Date(date);
    const date2 = new Date();
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays == 1) {
        return diffDays + " day ago"
    }
    return diffDays + " days ago";
}
function _usfTruncate(str, size = 100, description_words = '...') {
    if (!str)
        return "";
    if (str.length && str.length <= size)
        return str;
    return str.slice(0, size) + description_words
}



const CartMainMiddle = (props) => {
    React.useEffect(() => {
        console.log("item", props.item)
    }, [props.item]);

    const { item, parent } = props;

    const Like = () => (
        <div className="root-card-main-aside__wrapper-header">
            <FavoriteIcon style={{ color: '#0DAB42', fontSize: 30, marginLeft: 15 }} />
        </div>
    )

    return (
        <div>
            <div className='root-card-main-aside'>
                <div className="root-card-main-aside__wrapper-body">
                    <ImageComponent className="root-card-main-aside__wrapper-body__image" />
                    <Like />
                    <div>
                        <span className="root-card-main-aside__wrapper-body__title">{_usfTruncate(parent.recruiter_Information.company_Name, 30)}</span>
                        {/* <div className="root-card-main-aside__wrapper-body__down-up">
                                    <MonetizationOnIcon style={{ color: '#0DAB42', fontSize: 25, marginRight: 15 }} />
                                    <span className="root-card-main-aside__wrapper-body__down-up__text">{item.min_Salary}USD - {item.max_Salary}USD</span>
                                </div> */}
                        <div className="root-card-main-aside__wrapper-body__down down_top">
                            <div className="root-card-main-aside__wrapper-body__down__wrapper">
                                <LocationOnOutlinedIcon style={{ color: '#0DAB42', fontSize: 25, marginRight: 15 }} />
                                <span className="root-card-main-aside__wrapper-body__down__wrapper__text">{parent.recruiter_Information.address}</span>
                            </div>
                        </div>
                        <div className="root-card-main-aside__wrapper-body__down down_top">
                            <div className="root-card-main-aside__wrapper-body__down__wrapper">
                                <SettingsIcon style={{ color: '#0DAB42', fontSize: 20, marginRight: 10 }} />
                                <span className="root-card-main-aside__wrapper-body__down__wrapper__text">{parent.recruiter_Information.company_Industry}</span>
                            </div>
                            <div className="root-card-main-aside__wrapper-body__down__wrapper">
                                <MailOutlineIcon style={{ color: '#0DAB42', fontSize: 20, marginRight: 10 }} />
                                <span className="root-card-main-aside__wrapper-body__down__wrapper__text">{parent.recruiter_Information.contact_Email}</span>
                            </div>
                            <div className="root-card-main-aside__wrapper-body__down__wrapper">
                                <PhoneIcon style={{ color: '#0DAB42', fontSize: 20, marginRight: 10 }} />
                                <span className="root-card-main-aside__wrapper-body__down__wrapper__text">{parent.recruiter_Information.phone_Number}</span>
                            </div>
                            <div className="root-card-main-aside__wrapper-body__down__wrapper">
                                <PeopleAltIcon style={{ color: '#0DAB42', fontSize: 20, marginRight: 10 }} />
                                <span className="root-card-main-aside__wrapper-body__down__wrapper__text">{parent.recruiter_Information.company_Size}</span>
                            </div>
                        </div>
                        <p className="root-card-aside__wrapper-body-follow__upper__left__title__job">{parent.recruitments.length} Jobs Available</p>

                    </div>
                </div>
            </div>

        </div>
    );
}

export default CartMainMiddle;