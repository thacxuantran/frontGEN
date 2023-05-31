import { makeStyles } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { React, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './styles.scss';
const useStyles = makeStyles((theme) => ({
	dialog: {
		'& .MuiDialog-paperWidthXs': {
			width: 707,
			height: 989,
			background: '#FFFFFF',
			maxWidth: 'unset !important',
			alignItems: 'center',
			padding: 25,
		},
		'& h3': {
			fontFamily: 'Samsung Sharp Sans',
			fontStyle: 'normal',
			fontWeight: 'bold',
			fontSize: '20px',
			lineHeight: '38px',
			marginBottom: 30,
			textAlign: 'center',
			'& > span': {
				color: '#0DAB42',
				fontSize: '44px',
			},
		},
	},
}));
const formatDate = (str) => {
	let date = new Date(str);
	return (
		(date.getDate() > 9 ? date.getDate() : '0' + date.getDate()) +
		'/' +
		(date.getMonth() > 8 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)) +
		'/' +
		date.getFullYear()
	);
};
export default function DialogPerson({
	studentId,
	open,
	handleClickOpen,
	handleClose,
	info,
	jobTitle,
	onSubmitPersonalInformation,
}) {
	const classes = useStyles();
	const [defaultValues, setDefaultValues] = useState({
		Gender: info.gender ? 'True' : 'False',
		Date_Of_Birth:
			!info.date_Of_Birth === '0001-01-01T00:00:00'
				? new Date(info.date_Of_Birth)
				: new Date(),
		First_Name: info.first_Name,
		Last_Name: info.last_Name,
		Jobtitle: jobTitle,
		Email: info.email,
		Address: info.address,
		Province: info.province_City,
		Country: info.country,
		Nationallity: info.nationallity,
		Ceil_number: info.ceil_number,
	});

	return (
		<div>
			<Dialog
				className={classes.dialog}
				maxWidth='xs'
				open={open}
				onClose={handleClose}
				aria-labelledby='form-dialog-title'>
				<h3>
					Update Personal Info <span>.</span>
				</h3>

				<Formik
					enableReinitialize
					initialValues={defaultValues}
					validate={(values) => {
						const errors = {};
						if (!values.Email) {
							errors.Email = 'Required';
						} else if (
							!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.Email)
						) {
							errors.Email = 'Invalid email address';
						}
						return errors;
					}}
					onSubmit={(values, { setSubmitting }) => {
						setTimeout(() => {
							var tmp = {
								...values,
								personalId: info.personal_Information_ID,
								StudentId: studentId,
							};
							onSubmitPersonalInformation(tmp);
							setDefaultValues(values);
							setSubmitting(false);
							handleClose();
						}, 400);
					}}>
					{({ isSubmitting, values, setFieldValue }) => (
						<Form className='form-root'>
							<div className='input-wrapper-two'>
								<div className='wrapper-half right'>
									<span className='input-title'>First Name</span>
									<Field className='half-input' name='First_Name' />
									<ErrorMessage name='First_Name' component='div' />
								</div>
								<div className='wrapper-half left'>
									<span className='input-title'>Last Name</span>
									<Field className='half-input' name='Last_Name' />
									<ErrorMessage name='Last_Name' component='div' />
								</div>
							</div>
							<div className='input-wrapper'>
								<span className='input-title'>Job title</span>
								<Field className='full-input' name='Jobtitle' />
								<ErrorMessage name='Jobtitle' component='div' />
							</div>
							<div className='input-wrapper'>
								<span className='input-title'>Email</span>
								<Field className='full-input' type='email' name='Email' />
								<ErrorMessage name='Email' component='div' />
							</div>
							<div className='input-wrapper'>
								<span className='input-title'>Address</span>
								<Field className='full-input' name='Address' />
								<ErrorMessage name='Address' component='div' />
							</div>
							<div className='input-wrapper-two'>
								<div className='wrapper-half right'>
									<span className='input-title'>Province</span>
									<Field className='half-input' name='Province' />
									<ErrorMessage name='Province' component='div' />
								</div>
								<div className='wrapper-half left'>
									<span className='input-title'>Country</span>
									<Field className='half-input' name='Country' />
									<ErrorMessage name='Country' component='div' />
								</div>
							</div>
							<div className='input-wrapper-two'>
								<div className='wrapper-half right'>
									<span className='input-title'>Date Of Birth</span>
									<DatePicker
										selected={values.Date_Of_Birth}
										className='half-input'
										name='Date_Of_Birth'
										dateFormat='dd/MM/yyyy'
										onChange={(val) => setFieldValue('Date_Of_Birth', val)}
									/>
								</div>
								<div className='wrapper-half left'>
									<span className='input-title'>Nationallity</span>
									<Field className='half-input' name='Nationallity' />
									<ErrorMessage name='Nationallity' component='div' />
								</div>
							</div>
							<div className='input-wrapper'>
								<span className='input-title'>Ceil Number</span>
								<Field className='full-input' name='Ceil_number' />
								<ErrorMessage name='Ceil_number' component='div' />
							</div>
							<div className='input-wrapper'>
								<span className='input-title'>Gender</span>
								{/* <Field className="full-input" name="gender" />
                                <ErrorMessage name="gender" component="div" /> */}
								<div role='group' aria-labelledby='my-radio-group'>
									<label className='checkbox-input'>
										<Field type='radio' name='Gender' value='True' />
										Male
									</label>
									<label className='checkbox-input'>
										<Field type='radio' name='Gender' value='False' />
										Female
									</label>
								</div>
							</div>
							<div className='wrap-btn'>
								<button
									className='btn-submit'
									type='submit'
									disabled={isSubmitting}>
									Submit
								</button>
							</div>
						</Form>
					)}
				</Formik>
			</Dialog>
		</div>
	);
}
