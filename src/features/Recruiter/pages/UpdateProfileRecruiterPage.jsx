import { Box, Container } from "@material-ui/core";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useParams } from "react-router-dom";
import {
  default as axiosRecruiter,
  default as recruiterApi,
} from "../../../api/axiosRecruiter";
import uploadApi from "../../../api/imageUploadApi";
import Footer from "../../../components/Footer";
import HeaderRecruiter from "../../../components/HeaderRecruiter";
import Loading from "../../../components/Loading";
import Avatar from "../components/UpdateProfileRecruiter/Avatar/Avatar";
import Information from "../components/UpdateProfileRecruiter/Information/Information";
import Overall from "../components/UpdateProfileRecruiter/Overall/Overall";
import { useDispatch, useSelector } from 'react-redux';
import { uploadAvatar } from '../../Auth/userSlice';

const useStyles = makeStyles((theme) => ({
	mainroot: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
	},
	mainroot_child: {
		width: '65%',
	},
	root: {
		display: 'flex',
		'& > *': {
			margin: theme.spacing(1),
		},
		alignItems: 'center',
		justifyContent: 'center',
	},
}));

UpdateProfileRecruiterPage.propTypes = {};
function UpdateProfileRecruiterPage(props) {
	const classes = useStyles();
	const [recruiterProfile, setRecruiterProfile] = useState({});
	const [loading, setLoading] = useState(true);
	const { RecruiterId } = useParams();
	const { enqueueSnackbar } = useSnackbar();
	const dispatch = useDispatch();
	const loggedInUser = useSelector((state) => state.user.current);
	useEffect(() => {
		(async () => {
			try {
				await Promise.all([
					axiosRecruiter.getRecruiterProfileDetail(RecruiterId),
				]).then((data) => {
					setRecruiterProfile(data[0].data);
					console.log('data of recruiterProfile:', data);
					console.log('recruiterProfile', recruiterProfile);
					setLoading(false);
				});
			} catch (error) {
				console.log('err', error);
				// setLoading(false);
			}
		})();
	}, []);

	const handleSubmitedInformation = (val) => {
		console.log('infochange:', val);
		const value = {
			company_Name: val.companyName,
			phone_Number: val.phoneNumber,
			address: val.location,
			company_Size: val.companySize,
			contact_Email: val.emailContact,
			company_Industry: val.companyIndustry,
			tax_code: val.taxCode,
		};
		try {
			recruiterApi
				.updateRecruiterInfomartion(loggedInUser.profileId, value)
				.then((data) => {
					var temp = { ...recruiterProfile, recruiter_Information: value };
					setRecruiterProfile(temp);
				});
			enqueueSnackbar('Update recruiter profile successfully!', {
				variant: 'success',
			});
		} catch (e) {
			console.log(e.message);
		}
	};

	const handChangeOverall = async (values) => {
		try {
			await recruiterApi
				.updateOverall(loggedInUser.profileId, values)
				.then((data) => {
					var temp = { ...recruiterProfile, description: values.overall };
					setRecruiterProfile(temp);
				});
			enqueueSnackbar('Update Overall successfully!', {
				variant: 'success',
			});
		} catch (e) {
			console.log(e.message);
		}
	};

	const handleUpdateImage = async (file) => {
		var upload = await uploadApi.upload(file);
		var url = upload.data.url;
		var temp = { ...recruiterProfile };
		temp.logo_Image_Link = url;
		setRecruiterProfile(temp);
		var data = {
			ProfileName: temp.profileName,
			Description: temp.descriptionm,
			Logo_Image_Link: temp.logo_Image_Link,
			Verify: temp.verify,
		};
		await recruiterApi
			.updateProfile(loggedInUser.profileId, temp)
			.then((data) => {
				enqueueSnackbar('Update Overall successfully!', {
					variant: 'success',
				});
			});
		const avatarRedux = {
			linkAva: url,
		};
		dispatch(uploadAvatar(avatarRedux));
	};
	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<>
					<HeaderRecruiter />
					<Box className={classes.mainroot}>
						<Box className={classes.mainroot_child}>
							<Container className={classes.root}>
								<Avatar
									recruiterProfile={recruiterProfile}
									onChangeImage={handleUpdateImage}
								/>
							</Container>
							<Container>
								<Information
									recruiterProfile={recruiterProfile}
									onSubmit={handleSubmitedInformation}
								/>
							</Container>
							<Container>
								<Overall
									recruiterProfile={recruiterProfile}
									onChangeOverall={handChangeOverall}
								/>
							</Container>
						</Box>
					</Box>

					<Footer />
				</>
			)}
		</>
	);
}

export default UpdateProfileRecruiterPage;
