import { Button } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import Alert from '@material-ui/lab/Alert';
import React, { useRef, useState } from 'react';
import './styles.scss';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		maxWidth: 752,
	},
	demo: {
		backgroundColor: theme.palette.background.paper,
	},
	title: {
		//  margin: theme.spacing(4, 0, 2),
	},
}));

function isEmpty(obj) {
	for (var prop in obj) {
		if (obj.hasOwnProperty(prop)) {
			return false;
		}
	}

	return JSON.stringify(obj) === JSON.stringify({});
}

const DropZone = ({ onUploadCV, handleClose, studentDetail }) => {
	const classes = useStyles();
	const [dense, setDense] = React.useState(false);

	const [secondary, setSecondary] = React.useState(false);
	const [selectedFile, setSelectedFile] = useState(null);
	const [errorMessage, setErrorMessage] = useState('');
	const [title, setTitle] = useState('');
	const fileInputRef = useRef();

	const handleClickDelete = () => {
		setSelectedFile(null);
	};

	const fileInputClicked = () => {
		fileInputRef.current.click();
	};

	const filesSelected = () => {
		if (fileInputRef.current.files.length) {
			handleFiles(fileInputRef.current.files);
		}
	};

	const handleFiles = (files) => {
		if (validateFile(files[0])) {
			setSelectedFile(files[0]);
			setErrorMessage('');
		} else {
			setSelectedFile(files[0]);
			setErrorMessage('File type not permitted');
		}
	};
	const dragOver = (e) => {
		e.preventDefault();
	};

	const dragEnter = (e) => {
		e.preventDefault();
	};

	const dragLeave = (e) => {
		e.preventDefault();
	};

	const fileDrop = (e) => {
		e.preventDefault();
		const files = e.dataTransfer.files;
		if (files.length) {
			handleFiles(files);
		}
	};
	const validateFile = (file) => {
		const validTypes = ['text/plain', 'application/pdf'];
		if (
			validTypes.indexOf(file.type) === -1 &&
			file.name.indexOf('docx') === -1
		) {
			return false;
		}
		return true;
	};

	const uploadFiles = () => {
		const formData = new FormData();
		if (!selectedFile) {
			setErrorMessage('Select file to upload');
			return;
		} else if (!title) {
			setErrorMessage('Title is required');
			return;
		}
		formData.append('file', selectedFile);
		formData.append('title', title);
		formData.append('studentId', studentDetail.s_ProfileID);
		onUploadCV(formData);
		handleClose();
	};
	const handleChange = (event) => {
		setTitle(event.target.value);
		if (event.target.value) {
			setErrorMessage('');
		} else {
			setErrorMessage('Title is required');
		}
	};
	return (
		<>
			<div className='container-dropzone'>
				<p className='title-top'>Title</p>
				<input onChange={handleChange} value={title} className='input-title' />
				{errorMessage ? <Alert severity='error'>{errorMessage}</Alert> : null}
				<p className='support-file'>
					Support file types are: PDF, DOCX, DOC and TXT
				</p>
				{!selectedFile ? (
					<div
						className='drop-container'
						onDragOver={dragOver}
						onDragEnter={dragEnter}
						onDragLeave={dragLeave}
						onDrop={fileDrop}
						onClick={fileInputClicked}>
						<div className='drop-message'>
							<svg
								width='129'
								height='129'
								viewBox='0 0 129 129'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M76.7854 107.5H89.0711C92.3295 107.5 95.4544 106.206 97.7585 103.902C100.062 101.598 101.357 98.4727 101.357 95.2143V46.0714L76.7854 21.5H39.9283C36.6699 21.5 33.545 22.7944 31.241 25.0984C28.937 27.4024 27.6426 30.5273 27.6426 33.7857V95.2143C27.6426 98.4727 28.937 101.598 31.241 103.902C33.545 106.206 36.6699 107.5 39.9283 107.5H52.214'
									stroke='#0DAB42'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
								<path
									d='M46.0703 64.5001L64.4989 46.0715L82.9275 64.5001'
									stroke='#0DAB42'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
								<path
									d='M64.5 46.0715V113.643'
									stroke='#0DAB42'
									stroke-linecap='round'
									stroke-linejoin='round'
								/>
							</svg>
							<p className='dragdrop'>Drag & Drop files here to upload</p>
							<input
								ref={fileInputRef}
								type='file'
								multiple
								onChange={filesSelected}
								className='choosfile-none'
							/>
							<p className='choosfile'>Choose a File to Upload</p>
						</div>
					</div>
				) : (
					<Grid item className='selected-container'>
						{/* <Typography variant="h6" className={classes.title}>
                            Upload File
                        </Typography> */}
						<div className={classes.demo}>
							<List dense={dense}>
								<ListItem>
									<ListItemAvatar>
										<PictureAsPdfIcon />
									</ListItemAvatar>
									<ListItemText
										primary={selectedFile.name}
										secondary={secondary ? 'Secondary text' : null}
									/>
									<ListItemSecondaryAction>
										<IconButton edge='end' aria-label='delete'>
											<DeleteIcon onClick={handleClickDelete} />
										</IconButton>
									</ListItemSecondaryAction>
								</ListItem>
								,
							</List>
						</div>
					</Grid>
				)}
				{!errorMessage ? (
					<div className='button-bottom'>
						<Button
							style={{ marginBottom: '22px' }}
							onClick={() => uploadFiles()}
							color='primary'>
							Upload
						</Button>
					</div>
				) : null}
			</div>
		</>
	);
};
export default DropZone;
