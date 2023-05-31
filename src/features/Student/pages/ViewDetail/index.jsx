import { Container, makeStyles } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import axios from '../../../../api/axiosClient';
import uploadApi from '../../../../api/imageUploadApi';
import studentApi from '../../../../api/studentApi';
import Footer from '../../../../components/Footer';
import Header from '../../../../components/Header';
import HeaderRecruiter from '../../../../components/HeaderRecruiter';
import Loading from '../../../../components/Loading';
import { uploadAvatar } from '../../../Auth/userSlice';
import Aside from '../../components/ViewDetail/Aside';
import Main from '../../components/ViewDetail/Main';
import MainUploadCV from '../../components/ViewDetail/MainUploadCV';

const useStyles = makeStyles((theme) => ({
	container: {},
	wrapper: {
		display: 'flex',
		marginTop: '30px',
		width: '75%',
		padding: '20px 50px',
	},
}));

function ViewDetail(props) {
	const loggedInUser = useSelector((state) => state.user.current);
	const location = useLocation();
	const [studentDetail, setStudentDetail] = useState({});
	const [loading, setLoading] = useState(true);
	const [isProfile, setIsProfile] = useState(true);
	const [loadingAvatar, setLoadingAvatar] = useState(false);
	const classes = useStyles();
	const dispatch = useDispatch();

	const { enqueueSnackbar } = useSnackbar();

	useEffect(() => {
		(async () => {
			try {
				await studentApi
					.getDetailStudent(loggedInUser.profileId)
					.then((data) => {
						setStudentDetail(data.data);
						setLoading(false);
					});
			} catch (error) {
				console.log('err', error);
				// setLoading(false);
			}
		})();
	}, []);
	const handleSubmitPersonInformation = (values) => {
		studentApi
			.updatePersonalInformation(values)
			.then((data) => {
				var tmp_student = { ...studentDetail };
				tmp_student.personal_Information = data.data.data;
				tmp_student.jobTitle = values.Jobtitle;
				tmp_student.profileName = values.First_Name + ' ' + values.Last_Name;
				setStudentDetail(tmp_student);
				enqueueSnackbar('Update Information Successfully!', {
					variant: 'success',
				});
			})
			.catch((err) => {
				enqueueSnackbar('Error happening', {
					variant: 'error',
				});
			});
	};
	const handleSubmitOverview = (values) => {
		values = {
			...values,
			studentId: loggedInUser.profileId,
		};
		studentApi
			.updateOverview(values)
			.then((data) => {
				var tmp_student = { ...studentDetail };
				tmp_student.overView = values.overview;
				setStudentDetail(tmp_student);
				enqueueSnackbar('Update Overview Successfully!', {
					variant: 'success',
				});
			})
			.catch((err) => {
				enqueueSnackbar('Error happening', {
					variant: 'error',
				});
			});
	};

	const handleSubmitExperience = (values) => {
		values = {
			...values,
			studentId: loggedInUser.profileId,
		};
		studentApi
			.createExperience(values)
			.then((data) => {
				var tmp_student = { ...studentDetail };
				console.log(data.data.data);
				var tmp_ex = {
					experience: data.data.data,
				};
				tmp_student.student_Profile_Experiences.push(tmp_ex);
				setStudentDetail(tmp_student);
				enqueueSnackbar('Create Experience Successfully!', {
					variant: 'success',
				});
			})
			.catch((err) => {
				enqueueSnackbar('Error happening', {
					variant: 'error',
				});
			});
	};

	const handleSubmitEducation = (values) => {
		values = {
			...values,
			studentId: loggedInUser.profileId,
		};
		studentApi
			.createEducation(values)
			.then((data) => {
				var tmp_student = { ...studentDetail };
				console.log(data.data.data);
				var tmp_ex = {
					education: data.data.data,
				};
				tmp_student.student_Profile_Educations.push(tmp_ex);
				setStudentDetail(tmp_student);
				enqueueSnackbar('Create Education Successfully!', {
					variant: 'success',
				});
			})
			.catch((err) => {
				enqueueSnackbar('Error happening', {
					variant: 'error',
				});
			});
	};

	const handleSubmitCert = (values) => {
		values = {
			...values,
			studentId: loggedInUser.profileId,
		};
		studentApi
			.createCertificate(values)
			.then((data) => {
				var tmp_student = { ...studentDetail };
				console.log(data.data.data);
				var tmp_ex = {
					certificate: data.data.data,
				};
				tmp_student.student_Profile_Certificates.push(tmp_ex);
				setStudentDetail(tmp_student);
				enqueueSnackbar('Create Education Successfully!', {
					variant: 'success',
				});
			})
			.catch((err) => {
				enqueueSnackbar('Error happening', {
					variant: 'error',
				});
			});
	};

	const handleSubmitSkills = (values) => {
		values = {
			...values,
			studentId: loggedInUser.profileId,
		};
		studentApi
			.createSkills(values)
			.then((data) => {
				var tmp_student = { ...studentDetail };
				tmp_student.student_Profile_Skills = [];
				data.data.data.forEach((item) => {
					let tmp_ex = {
						skill: item,
					};
					tmp_student.student_Profile_Skills.push(tmp_ex);
				});
				console.log('skills', tmp_student.student_Profile_Skills);
				setStudentDetail(tmp_student);
				enqueueSnackbar('Update Skill Successfully!', {
					variant: 'success',
				});
			})
			.catch((err) => {
				enqueueSnackbar('Error happening', {
					variant: 'error',
				});
			});
	};

	const handleSubmitLanguages = (values) => {
		values = {
			...values,
			studentId: loggedInUser.profileId,
		};
		studentApi
			.createLanguages(values)
			.then((data) => {
				var tmp_student = { ...studentDetail };
				tmp_student.student_Profile_Languages = [];
				data.data.data.forEach((item) => {
					let tmp_ex = {
						language: item,
					};
					tmp_student.student_Profile_Languages.push(tmp_ex);
				});
				setStudentDetail(tmp_student);
				enqueueSnackbar('Update Language Successfully!', {
					variant: 'success',
				});
			})
			.catch((err) => {
				enqueueSnackbar('Error happening', {
					variant: 'error',
				});
			});
	};
	const handleDeleteExperience = (id) => {
		studentApi
			.deleteExperience(loggedInUser.profileId, id)
			.then((data) => {
				var tmp_student = { ...studentDetail };
				var tmp_arr = tmp_student.student_Profile_Experiences.filter(
					(x) => x.experience.experience_ID !== id
				);
				tmp_student.student_Profile_Experiences = tmp_arr;
				setStudentDetail(tmp_student);
				enqueueSnackbar('Delete Experience Successfully!', {
					variant: 'success',
				});
			})
			.catch((err) => {
				enqueueSnackbar('Error happening', {
					variant: 'error',
				});
			});
	};

	const handleDeleteEducation = (id) => {
		debugger;
		studentApi
			.deleteEducation(loggedInUser.profileId, id)
			.then((data) => {
				var tmp_student = { ...studentDetail };
				var tmp_arr = tmp_student.student_Profile_Educations.filter(
					(x) => x.education.education_ID !== id
				);
				tmp_student.student_Profile_Educations = tmp_arr;
				setStudentDetail(tmp_student);
				enqueueSnackbar('Delete Education Successfully!', {
					variant: 'success',
				});
			})
			.catch((err) => {
				enqueueSnackbar('Error happening', {
					variant: 'error',
				});
			});
	};

	const handleDeleteCertificate = (id) => {
		studentApi
			.deleteCertificate(loggedInUser.profileId, id)
			.then((data) => {
				var tmp_student = { ...studentDetail };
				var tmp_arr = tmp_student.student_Profile_Certificates.filter(
					(x) => x.certificate.certificate_ID !== id
				);
				tmp_student.student_Profile_Certificates = tmp_arr;
				setStudentDetail(tmp_student);
				enqueueSnackbar('Delete Experience Successfully!', {
					variant: 'success',
				});
			})
			.catch((err) => {
				enqueueSnackbar(err, {
					variant: 'success',
				});
			})
			.catch((err) => {
				enqueueSnackbar('Error happening', {
					variant: 'error',
				});
			});
	};

	const handleUpdateExperience = (values, index) => {
		values = {
			...values,
		};
		studentApi
			.updateExperience(values)
			.then((data) => {
				var tmp_student = { ...studentDetail };
				tmp_student.student_Profile_Experiences[index].experience =
					data.data.data;
				setStudentDetail(tmp_student);
				enqueueSnackbar('Update Experience Successfully!', {
					variant: 'success',
				});
			})
			.catch((err) => {
				enqueueSnackbar('Error happening', {
					variant: 'error',
				});
			});
	};

	const handleUpdateEducation = (values, index) => {
		values = {
			...values,
		};
		studentApi
			.updateEducation(values)
			.then((data) => {
				var tmp_student = { ...studentDetail };
				tmp_student.student_Profile_Educations[index].education =
					data.data.data;
				setStudentDetail(tmp_student);
				enqueueSnackbar('Update Education Successfully!', {
					variant: 'success',
				});
			})
			.catch((err) => {
				enqueueSnackbar('Error happening', {
					variant: 'error',
				});
			});
	};

	const handleUpdateCertificate = (values, index) => {
		values = {
			...values,
		};
		studentApi
			.updateCertificate(values)
			.then((data) => {
				var tmp_student = { ...studentDetail };
				tmp_student.student_Profile_Certificates[index].certificate =
					data.data.data;
				setStudentDetail(tmp_student);
				enqueueSnackbar('Update Certificate Successfully!', {
					variant: 'success',
				});
			})
			.catch((err) => {
				enqueueSnackbar('Error happening', {
					variant: 'error',
				});
			});
	};

	const handleUpdateStatusOpenJob = (values) => {
		values = {
			studentId: loggedInUser.profileId,
			Open_For_Job: values,
		};
		studentApi
			.updateStatus(values)
			.then((data) => {
				var tmp_student = { ...studentDetail };
				tmp_student.open_For_Job = values;
				setStudentDetail(tmp_student);
				enqueueSnackbar('Update Status Successfully!', {
					variant: 'success',
				});
			})
			.catch((err) => {
				enqueueSnackbar('Error happening', {
					variant: 'error',
				});
			});
	};

	const handleSetIsProfile = (value) => {
		setIsProfile(value);
	};

	const handleUploadCVs = (values, callback) => {
		axios
			.post(
				'https://genhiring.online:57010/v1/api/Student/uploadresume',
				values,
				{}
			)
			.then((data) => {
				var tmp_ex = {
					cv: data.data,
				};
				var tmp_student = { ...studentDetail };
				tmp_student.student_Profile_CVs.push(tmp_ex);
				setStudentDetail(tmp_student);
				callback(false);
				enqueueSnackbar('Upload CV Successfully!', {
					variant: 'success',
				});
			})
			.catch((err) => {
				enqueueSnackbar('Error happening', {
					variant: 'error',
				});
			});
	};

	const handleDeleteCV = async (id) => {
		await studentApi
			.deleteCV(id, loggedInUser.profileId)
			.then((data) => {
				var tmp_student = { ...studentDetail };
				console.log(
					'CVs',
					tmp_student.student_Profile_CVs.filter((x) => x.cV_ID !== id)
				);
				tmp_student.student_Profile_CVs =
					tmp_student.student_Profile_CVs.filter((x) => x.cv.cV_ID !== id);
				setStudentDetail(tmp_student);
				enqueueSnackbar(data.data, {
					variant: 'success',
				});
			})
			.catch((err) => {
				enqueueSnackbar('Error happening', {
					variant: 'error',
				});
			});
	};

	const handleUpdateImage = async (file) => {
		setLoadingAvatar(true);
		var upload = await uploadApi.upload(file);
		var url = upload.data.url;
		var tmp_student = { ...studentDetail };
		console.log('studentDetail', tmp_student);
		tmp_student.avatar_link = url;
		await studentApi
			.uploadProfile(tmp_student)
			.then((data) => {
				setStudentDetail(tmp_student);
				setLoadingAvatar(false);
				enqueueSnackbar('Update Information Successfully!', {
					variant: 'success',
				});
			})
			.catch((err) => {
				enqueueSnackbar('Error happening', {
					variant: 'error',
				});
			});
		const updateAvaRedux = {
			linkAva: url,
		};

		dispatch(uploadAvatar(updateAvaRedux));
	};
	console.log(location);
	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<>
					{location.pathname === '/recruiter/profile' ? (
						<HeaderRecruiter />
					) : (
						<Header />
					)}

					<Container className={classes.wrapper + ' wrapperOutSide'}>
						<Aside isProfile={isProfile} onSetIsProfile={handleSetIsProfile} />
						{isProfile ? (
							<Main
								loadingAvatar={loadingAvatar}
								onChangeImage={handleUpdateImage}
								onUpdateStatus={handleUpdateStatusOpenJob}
								onUpdateCertificate={handleUpdateCertificate}
								onUpdateEducation={handleUpdateEducation}
								onUpdateExperience={handleUpdateExperience}
								onDeleteCertificate={handleDeleteCertificate}
								onDeleteEducation={handleDeleteEducation}
								onDeleteExperience={handleDeleteExperience}
								onSubmitLanguages={handleSubmitLanguages}
								onSubmitSkills={handleSubmitSkills}
								onSubmitCert={handleSubmitCert}
								onSubmitEducation={handleSubmitEducation}
								onSubmitExperience={handleSubmitExperience}
								onSubmitOverview={handleSubmitOverview}
								onSubmitPersonalInformation={handleSubmitPersonInformation}
								studentDetail={studentDetail}
							/>
						) : (
							<MainUploadCV
								loadingAvatar={loadingAvatar}
								onDeleteCV={handleDeleteCV}
								onChangeImage={handleUpdateImage}
								onUpdateStatus={handleUpdateStatusOpenJob}
								onUploadCV={handleUploadCVs}
								onUpdateCertificate={handleUpdateCertificate}
								onUpdateEducation={handleUpdateEducation}
								onUpdateExperience={handleUpdateExperience}
								onDeleteCertificate={handleDeleteCertificate}
								onDeleteEducation={handleDeleteEducation}
								onDeleteExperience={handleDeleteExperience}
								onSubmitLanguages={handleSubmitLanguages}
								onSubmitSkills={handleSubmitSkills}
								onSubmitCert={handleSubmitCert}
								onSubmitEducation={handleSubmitEducation}
								onSubmitExperience={handleSubmitExperience}
								onSubmitOverview={handleSubmitOverview}
								onSubmitPersonalInformation={handleSubmitPersonInformation}
								studentDetail={studentDetail}
							/>
						)}
					</Container>
					<Footer />
				</>
			)}
		</>
	);
}

ViewDetail.propTypes = {};

export default ViewDetail;
