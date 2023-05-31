import React from 'react';
import { Box, Button, Typography, Container } from '@material-ui/core';
import './styles.scss'
import EditIcon from '@material-ui/icons/Edit';
import SuggestAside from '../SuggestAside'
import FollowAside from '../FollowAside'



const Aside = (props) => {
    return (
        <Container className='root-aside'>
            <SuggestAside onApply={props.onApply} onSubmitUnSaveRercruitment={props.onSubmitUnSaveRercruitment} onSubmitSaveRercruitment={props.onSubmitSaveRercruitment} parent={props.parent} list={props.listSuggest} />
        </Container>
    );
}

export default Aside;