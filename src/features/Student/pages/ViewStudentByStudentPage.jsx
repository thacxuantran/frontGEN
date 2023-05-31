import {
	Box,
	Container,
	Grid,
	IconButton,
	makeStyles,
} from '@material-ui/core';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import studentApi from '../../../api/studentApi';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import Loading from '../../../components/Loading';
import ListRecruitment from '../components/ViewProfileRecruiterByStudent/Job/ListRecruitment';
import InformationFeature from '../components/ViewStudentByStudentPage/Infomation/InformationFeature';
import OverviewFeature from '../components/ViewStudentByStudentPage/Overview/OverviewFeature';

ViewStudentByStudentPage.propTypes = {};

const useStyles = makeStyles((theme) => ({
	info: {
		marginTop: theme.spacing(10),
	},

	backgroundImg: {
		marginTop: theme.spacing(8),
		marginBottom: theme.spacing(10),
		'& > img': {
			margin: 'auto',
		},
	},
}));

function ViewStudentByStudentPage() {
	const [studentProfile, setStudentProfile] = useState({});
	const classes = useStyles();
	const { Id } = useParams();
	const [loading1, setLoading1] = useState(true);
	const [loading2, setLoading2] = useState(true);
	const [options, setOptions] = useState([]);
	const [listRecruitments, setListRecruitments] = useState({});
	const [pagination, setPagination] = useState({
		pageIndex: 1,
		pageSize: 3,
		totalCount: 100,
	});
	const [filter, setFilter] = useState({
		pageIndex: 1,
		pageSize: 3,
	});
	const handlePageChange = (newPage) => {
		setFilter({ ...filter, pageIndex: newPage });
	};
	const totalPage = Math.ceil(pagination.totalCount / pagination.pageSize);
	useEffect(() => {
		(async () => {
			try {
				await studentApi.getDetailStudent(Id).then((data) => {
					setStudentProfile(data.data);
					setLoading1(false);
				});
			} catch (error) {
				console.log('err', error);
			}
		})();
	}, []);
	useEffect(() => {
		(async () => {
			try {
				await studentApi
					.getListRecruitmentForAuthor(Id, filter.pageIndex, filter.pageSize)
					.then((data) => {
						console.log('data', data);
						setListRecruitments(data.data);
						setPagination(data.data);
						setLoading2(false);
					});
			} catch (error) {
				console.log('err', error);
			}
		})();
	}, [filter]);

	// const handleSelectOption = (values) => {
	//     if (values.inviteStudent === "")
	//         enqueueSnackbar("Please choose one recruitment!", {
	//             variant: "error",
	//         });
	//     else {
	//         try {
	//             studentApi.inviteStudentToRecruitment(
	//                 studentId || props.studentId,
	//                 values.inviteStudent.value
	//             );
	//             var newOptions = [...options];
	//             var index = newOptions.findIndex(
	//                 (obj) => obj.value === values.inviteStudent.value
	//             );
	//             console.log("index", index);
	//             if (index !== -1) {
	//                 newOptions.splice(index, 1);
	//                 console.log(newOptions);
	//                 setOptions(newOptions);
	//             }
	//             enqueueSnackbar("Invite student successfully!", {
	//                 variant: "success",
	//             });
	//         } catch (error) {
	//             enqueueSnackbar(
	//                 "You have just invited this candidate to chosen recruitment!",
	//                 {
	//                     variant: "error",
	//                 }
	//             );
	//         }
	//     }
	// };

	return (
		<>
			{loading1 || loading2 ? (
				<Loading />
			) : (
				<>
					<Header />
					<Container>
						<OverviewFeature
							studentProfile={studentProfile}
							options={options}
							// onSelectOption={handleSelectOption}
							//isRecruiterView={!props.studentId}
						/>
					</Container>
					<Container className={classes.info}>
						<InformationFeature studentProfile={studentProfile} />
					</Container>
					<Container className={classes.backgroundImg}>
						<img
							style={{ opacity: '20%' }}
							src='/sologan.png'
							alt='detail candidate page'
						/>
					</Container>
					<Grid
						container
						style={{ marginBottom: '30px', justifyContent: 'center' }}>
						{listRecruitments.items.map((item, index) => (
							<Grid key={index} item xs={12} sm={6} md={3} lg={4}>
								<ListRecruitment
									recruiment={item}
									nameCompany={studentProfile.profileName}
									avt={studentProfile.logo_Image_Link}
								/>
							</Grid>
						))}
					</Grid>
					<Box className='paging'>
						<IconButton
							onClick={() => handlePageChange(pagination.pageIndex - 1)}
							disabled={pagination.pageIndex <= 1}
							size='medium'>
							<NavigateBeforeIcon
								fontSize='inherit'
								style={
									pagination.pageIndex > 1
										? { color: '#0DAB42', fontSize: 25 }
										: {}
								}
							/>
						</IconButton>
						<Box>
							{pagination.pageIndex}/{totalPage}
						</Box>
						<IconButton
							onClick={() => handlePageChange(pagination.pageIndex + 1)}
							disabled={pagination.pageIndex === totalPage}
							size='medium'>
							<NavigateNextIcon
								style={
									pagination.pageIndex !== totalPage
										? { color: '#0DAB42', fontSize: 25 }
										: {}
								}
								fontSize='inherit'
							/>
						</IconButton>
					</Box>
					<Footer />
				</>
			)}
		</>
	);
}

export default ViewStudentByStudentPage;
