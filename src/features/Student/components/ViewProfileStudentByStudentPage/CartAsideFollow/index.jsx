import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Typography,Container, Divider } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ImageComponent from  '../ImageComponent';
import PersonIcon from '@material-ui/icons/Person';
import './styles.scss';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

const CartAsideFollow = () => {
    return ( 
        <Container className='root-card-aside'>
            <Container className="root-card-aside__wrapper-header">
                <FavoriteBorderIcon style={{ color: '#0DAB42',fontSize: 30,marginLeft:15}} />
            </Container>
            <Container className="root-card-aside__wrapper-body-follow">
                <div className="root-card-aside__wrapper-body-follow__upper">
                    <ImageComponent/>
                    <div className="root-card-aside__wrapper-body-follow__upper__left">
                        <p className="root-card-aside__wrapper-body-follow__upper__left__title">FPT Software</p>
                        <div className="">
                            <LocationOnOutlinedIcon style={{ color: '#0DAB42',fontSize: 25,marginRight:5}}/>
                            <span className="root-card-aside__wrapper-body-follow__upper__left__title__location">Da Nang, Viet Nam</span>
                        </div>
                        <p className="root-card-aside__wrapper-body-follow__upper__left__title__job">14 Jobs Available</p>
                    </div>
                </div>
            </Container>
		</Container>
     );
}
 
export default CartAsideFollow;