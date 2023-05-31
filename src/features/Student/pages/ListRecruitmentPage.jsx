import { Box, Container, makeStyles } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import React, { useEffect, useState } from 'react';
import searchApi from '../../../api/searchApi';
import Footer from '../../../components/Footer';
import Header from '../../../components/Header';
import Loading from '../../../components/Loading';
import ChipFilters from '../components/ListRecruitment/ChipFilters';
import RecruitmentFilter from '../components/ListRecruitment/Filter/RecruitmentFilter';
import InfoDetail from '../components/ListRecruitment/InfoDetail/InfoDetail';
import ListRecruitment from '../components/ListRecruitment/Recruitment/ListRecruitment';
import RecruitmentSearch from '../components/ListRecruitment/Search/RecruitmentSearch';
import SkeletonRecruitment from '../components/ListRecruitment/Skeleton/SkeletonRecruitment';
import SliderFilter from '../components/ListRecruitment/SliderFilter';

const useStyles = makeStyles((theme) => ({
	search: {
		marginTop: theme.spacing(10),
	},
	filterMain: {
		display: 'flex',
		justifyContent: 'space-between',
		marginTop: theme.spacing(6),
		marginBottom: theme.spacing(6),
	},

	detailInfo: {
		marginTop: theme.spacing(4),
	},

	popularSkill: {
		marginTop: theme.spacing(7.5),
	},

	pagination: {
		display: 'flex',
		justifyContent: 'center',
		flexFlow: 'row nowrap',
		marginTop: '10px',
	},
	textNotFound: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		marginTop: '5%',
		borderRadius: '10px',
		boxShadow: '0px 4px 21px rgb(0 0 0 / 7%)',
		'& p': {
			textAlign: 'center',
			marginBottom: '-8%',

			padding: '3% 0',
			fontSize: '20px',
			fontFamily: 'Samsung Sharp Sans Regular',
			color: '#404040',
		},
	},
}));

function ListRecruitmentPage(props) {
	const classes = useStyles();
	const [recruitment, setRecruitment] = useState([]);
	const [pagination, setPagination] = useState({
		limit: 12,
		total: 12,
		page: 1,
	});
	const [filter, setFilter] = useState({
		['data.pageSize']: 12,
		['data.pageIndex']: 1,
		['data.location']: '',
		['filter.query']: '',
		['filter.rank_facet']: '',
		['filter.extra_facet']: '',
		['data.query']: '',
		['sort_option']: '',
	});

	const [chips, setChips] = useState([
		{ key: 'carrer', value: '' },
		{ key: 'job', value: '' },
		{ key: 'salary', value: [0, 0] },
		{ key: 'extra', value: '' },
	]);

	const [loading, setLoading] = useState(true);
	const [loadingSkeleton, setLoadingSkeleton] = useState(true);
	const [optionFilter, setOptionFilter] = useState([]);
	const [optionFilterTypeOfJob, setOptionFilterTypeOfJob] = useState([]);
	const [optionFilterBenefits, setOptionFilterBenefits] = useState([]);
	const [optionFilterLocation, setOptionFilterLocation] = useState([]);
	const [optionFilterSalary, setOptionFilterSalary] = useState({});
	const maxSalary = React.useRef(0);
	const minSalary = React.useRef(0);

	const [currentTypeOfJobValue, setTypeOfJobValue] = useState({
		label: 'All of Career',
		value: 'All of Career',
	});
	const [currentBenefitValue, setBenefitValue] = useState({
		label: 'All Extra',
		value: 'All Extra',
	});
	useEffect(() => {
		(async () => {
			try {
				var { items, pagination } = await searchApi.searchRecruitment(filter);
			} catch (err) {
				console.error(err);
				setRecruitment(null);
				setPagination(null);
				setLoading(false);
				setLoadingSkeleton(false);
				return;
			}

			setRecruitment(items);
			setPagination(pagination);
			setLoading(false);
			setLoadingSkeleton(false);
		})();
	}, [filter]);

	useEffect(() => {
		setLoadingSkeleton(true);
		(async () => {
			const { optionFilter, pagination } = await searchApi.searchRecruitment(
				filter
			);
			const filterTypeOfJob = optionFilter[3].facetLabels.map((item, index) => {
				let rObj = {};
				rObj['label'] = item.label;
				rObj['value'] = item.label;
				return rObj;
			});
			filterTypeOfJob.unshift({
				label: 'All of Career',
				value: 'All of Career',
			});

			const filterBenefit = optionFilter[1].facetLabels.map((item, index) => {
				let rObj = {};
				rObj['label'] = item.label;
				rObj['value'] = item.label;
				return rObj;
			});
			filterBenefit.unshift({ label: 'All Extra', value: 'All Extra' });

			const filterSalary = [
				optionFilter[2].facetLabel,
				optionFilter[0].facetLabel,
			];

			const filterLocation = optionFilter[4].facetLabels.map((item, index) => {
				let rObj = {};
				rObj['label'] = item.label;
				rObj['value'] = item.label;
				return rObj;
			});

			minSalary.current = optionFilter[2].facetLabel;
			maxSalary.current = optionFilter[0].facetLabel;

			filterLocation.unshift({ label: 'All', value: '' });

			setChips((prevChip) => {
				let cloneChips = [...prevChip];
				cloneChips = cloneChips.map((chip) => {
					if (chip.key === 'salary') {
						chip.value[0] = minSalary.current;
						chip.value[1] = maxSalary.current;
					}
					return chip;
				});
				return cloneChips;
			});
			setOptionFilterSalary(filterSalary);
			setOptionFilterTypeOfJob(filterTypeOfJob);
			setOptionFilterBenefits(filterBenefit);
			setPagination(pagination);
			setOptionFilter(optionFilter);
			setOptionFilterLocation(filterLocation);
			setLoading(false);
			setLoadingSkeleton(false);

			console.log(filterTypeOfJob, filterLocation);
		})();
	}, []);
	const handlePageChange = (e, page) => {
		setFilter((prevFilter) => ({
			...prevFilter,
			['data.pageIndex']: page,
		}));
		setLoadingSkeleton(true);
	};

	const onSubmitSearchValue = (values) => {
		console.log("values2", values)
		if (
			values.locationRecruitmentSearch.label === 'All' &&
			values.nameRecruitmentSearch === ''
		) {
			setFilter((prevFilter) => ({
				...prevFilter,
				['data.location']: '',
				['data.pageIndex']: 1,
				['data.query']: ''
			}));
			setLoadingSkeleton(true);
		} else {
			setFilter((prevFilter) => ({
				...prevFilter,
				['data.location']: values.locationRecruitmentSearch.label === 'All' ? '' : values.locationRecruitmentSearch.label,
				['data.pageIndex']: 1,
				['data.query']: values.nameRecruitmentSearch,
			}));
			setLoadingSkeleton(true);
		}

		console.log(values);
	};

	const handleChangeTypeOfJob = (e) => {
		if (e !== currentTypeOfJobValue) {
			setLoadingSkeleton(true);
			setTypeOfJobValue(e);
			setFilter((prevFilter) => ({
				...prevFilter,
				['filter.rank_facet']: e.label === 'All of Career' ? '' : e.label,
				['data.pageIndex']: 1,
			}));
			setChips((prevChip) => {
				let cloneChips = [...prevChip];
				cloneChips = cloneChips.map((chip) => {
					if (chip.key === 'job') {
						chip.value = e.label === 'All of Career' ? '' : e.label;
					}
					return chip;
				});
				return cloneChips;
			});
		}
	};

	const handleChangeBenefits = (e) => {
		if (e !== currentBenefitValue) {
			setLoadingSkeleton(true);
			setBenefitValue(e);
			setFilter((prevFilter) => ({
				...prevFilter,
				['filter.extra_facet']: e.label === 'All Extra' ? '' : e.label,
				['data.pageIndex']: 1,
			}));
			setChips((prevChip) => {
				let cloneChips = [...prevChip];
				cloneChips = cloneChips.map((chip) => {
					if (chip.key === 'extra') {
						chip.value = e.label === 'All Extra' ? '' : e.label;
					}
					return chip;
				});
				return cloneChips;
			});
		}
	};

	const handleDeleteChips = (chipToDelete) => {
		switch (chipToDelete.key) {
			case 'extra': {
				setLoadingSkeleton(true);
				setBenefitValue('All Extra');
				setFilter((prevFilter) => ({
					...prevFilter,
					['filter.extra_facet']: '',
					['data.pageIndex']: 1,
				}));
				break;
			}
			case 'job': {
				setLoadingSkeleton(true);
				setTypeOfJobValue('All of Career');
				setFilter((prevFilter) => ({
					...prevFilter,
					['filter.rank_facet']: '',
					['data.pageIndex']: 1,
				}));
				break;
			}
			case 'salary': {
				setLoadingSkeleton(true);
				setOptionFilterSalary([minSalary.current, maxSalary.current]);
				setFilter((prevFilter) => ({
					...prevFilter,
					['filter.min_salary']: minSalary.current,
					['filter.max_salary']: maxSalary.current,
					['data.pageIndex']: 1,
				}));
				break;
			}
		}

		let cloneChipData = [...chips];
		cloneChipData = cloneChipData.map((chip) => {
			if (chip.key === chipToDelete.key && chip.key !== 'salary') {
				chip.value = '';
			} else if (chip.key === chipToDelete.key && chip.key === 'salary') {
				chip.value = [minSalary.current, maxSalary.current];
			}
			return chip;
		});
		setChips(cloneChipData);
	};

	const onChangeSort = (values) => {
		setFilter((prevFilter) => ({
			...prevFilter,
			['sort_option']: values.value,
		}));
		setLoadingSkeleton(true);
	};

	const handleChangeSlider = (valueSlide) => {
		setLoadingSkeleton(true);
		setOptionFilterSalary(valueSlide);
		setFilter((prevFilter) => ({
			...prevFilter,
			['filter.max_salary']: valueSlide[1],
			['filter.min_salary']: valueSlide[0],
			['data.pageIndex']: 1,
		}));
		setChips((prevChip) => {
			let cloneChips = [...prevChip];
			cloneChips = cloneChips.map((chip) => {
				if (chip.key === 'salary') {
					console.log('Chipvalue', chip.value);
					console.log('Chipvaluesssss', valueSlide);
					chip.value[0] = valueSlide[0];
					chip.value[1] = valueSlide[1];
				}
				return chip;
			});
			return cloneChips;
		});
	};
	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<>
					<Header />
					<Container className={classes.search}>
						<RecruitmentSearch
							onSubmitSearchValue={onSubmitSearchValue}
							locationFilter={optionFilterLocation}
						/>
					</Container>
					{/* <Container className={classes.popularSkill}>
						<PopularSkill />
					</Container> */}
					<Container className={classes.detailInfo}>
						<InfoDetail
							onChangeSort={onChangeSort}
							count={pagination ? pagination.total : 0}
						/>
					</Container>
					<Container className={classes.filterMain}>
						<RecruitmentFilter placeholder='All of type job' />
						<RecruitmentFilter
							value={currentTypeOfJobValue}
							placeholder='All of Career'
							typeFilter={optionFilterTypeOfJob}
							handleChangeTypeOfJob={handleChangeTypeOfJob}
						/>
						<SliderFilter
							maxSalary={maxSalary.current}
							minSalary={minSalary.current}
							onChange={handleChangeSlider}
							value={optionFilterSalary}
							placeholder='All of Salary'
						/>
						<RecruitmentFilter
							placeholder='All Extra'
							value={currentBenefitValue}
							typeFilter={optionFilterBenefits}
							handleChangeTypeOfJob={handleChangeBenefits}
						/>
					</Container>
					<Container>
						<ChipFilters
							maxSalary={maxSalary.current}
							minSalary={minSalary.current}
							chipData={chips}
							handleChipData={handleDeleteChips}
						/>
					</Container>
					<Container>
						{loadingSkeleton ? (
							<SkeletonRecruitment length={12} />
						) : recruitment != null && pagination != null ? (
							<ListRecruitment data={recruitment} />
						) : (
							<Container className={classes.textNotFound}>
								<p> There is no recruitment found!</p>
								<img
									style={{ width: '350px', marginTop: '50px' }}
									src='/404.png'
								/>
							</Container>
						)}
						{recruitment != null && pagination != null ? (
							<Box className={classes.pagination}>
								<Pagination
									color='primary'
									shape='rounded'
									count={Math.ceil(pagination.total / pagination.limit)}
									page={pagination.page}
									onChange={handlePageChange}
								/>
							</Box>
						) : null}
					</Container>
					<Footer />
				</>
			)}
		</>
	);
}

export default ListRecruitmentPage;
