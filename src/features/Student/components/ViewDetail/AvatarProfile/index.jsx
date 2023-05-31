import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button, Typography } from '@material-ui/core';
import './styles.scss'
import EditIcon from '@material-ui/icons/Edit';

const AvatarProfile = () => {
    return (
			<Box className='root-avt'>
				<div className='root-avt__avatar'></div>
				<Typography variant='h3' className='root-avt__name'>
					Aizawa Minami
				</Typography>
				<Typography variant='subtitle1' className='root-avt__title'>
					Senior Fullstack Developer
				</Typography>
				<Box className='header-avt__name__btn'>
					<Box className='header-avt__name__btn__content'>
						<div className='icon'>
							<EditIcon color='primary' />
						</div>
						<Typography variant='subtitle2' color='secondary' className='text'>
							Edit Profile
						</Typography>
					</Box>
				</Box>
			</Box>
		);
}
 
export default AvatarProfile;