import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from '@material-ui/core';
import React from 'react';

DialogMessage.propTypes = {};

function DialogMessage(props) {
	const {
		message,
		title,
		open,
		onSubcribed = null,
		onClickClose,
		onSubmit,
	} = props;

	const handleClose = () => {
		onClickClose();
	};
	const handleSubmit = () => {
		if (onSubmit) onSubmit();
		if (onSubcribed) onSubcribed();
	};
	return (
		<Dialog
			open={open}
			onClose={() => handleClose()}
			aria-labelledby='alert-dialog-title'
			aria-describedby='alert-dialog-description'>
			<DialogTitle id='alert-dialog-title'>{title}</DialogTitle>
			<DialogContent>
				<DialogContentText id='alert-dialog-description'>
					{message}
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={() => handleClose()} color='primary'>
					Cancel
				</Button>
				<Button onClick={() => handleSubmit()} color='primary' autoFocus>
					Ok
				</Button>
			</DialogActions>
		</Dialog>
	);
}

export default DialogMessage;
