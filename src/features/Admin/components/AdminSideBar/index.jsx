import { Box, Button } from '@material-ui/core';
import React from 'react';
import './AdminSideBar.scss';

function AdminSideBar(props) {
	return (
		<Box className='admin-sidebar-root'>
			<Box className='admin-sidebar-root__logo'>
				<img src='/logo.png' alt='' />
			</Box>
			<Box className='admin-sidebar-root__btn-group'>
				<Box className='admin-sidebar-root__btn-group__dashboard'>
					<Button color='primary' variant='contained'>
						Dashboard
					</Button>
				</Box>
				<Box className='admin-sidebar-root__btn-group__verify'>
					<Box className='admin-sidebar-root__btn-group__verify__shit'></Box>
					<Button color='primary' variant='contained'>
						Verifiability
					</Button>
				</Box>
			</Box>
		</Box>
	);
}

export default AdminSideBar;
