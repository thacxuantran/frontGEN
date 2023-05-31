import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Typography,Container } from '@material-ui/core';
import './styles.scss'
import FavoriteIcon from '@material-ui/icons/Favorite';
import CartAsideFollow from '../CartAsideFollow';

const FollowAside = () => {
    return ( 
        <Container className='root-suggest-follow'>
            <Container className='root-suggest-follow__wrapper'>
                <FavoriteIcon style={{ color: '#0DAB42',marginRight:'10px',fontSize: 35}} />
                <Typography className='root__name root-suggest-follow__wrapper__follow'>
                    Company Followed
                </Typography>

            </Container>
            <Container className="root-suggest-follow__wrapper-card">
                <CartAsideFollow/>
            </Container>
		</Container>
     );
}
 
export default FollowAside;