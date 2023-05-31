import { Box, Button, makeStyles } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import InputSearchField from '../../../../../components/form-control/InputSearchField';
import OptionFilterField from '../../../../../components/form-control/OptionFilterField';

const useStyles = makeStyles((theme) => ({
	form: {
		display: 'flex',
		justifyContent: 'center',
		border: '0.2px solid #0DAB42',
		borderRadius: '10px',

		'& > .recruitmentSearchPage': {
			width: '75%',
			border: 'none',

			margin: 'auto',
			borderRight: '1px solid #0DAB42',

			'& > div > input': {
				color: 'green',
			},

			'& > div': {
				fontFamily: 'Samsung Sharp Sans Regular',
				'&::before': {
					content: 'none',
				},
				'&::after': {
					content: 'none',
				},
			},
		},

		'& > .locationSearchRecruitmentPage': {
			width: '15%',
			border: 'none',

			'& > div': {
				border: 'none',
				boxShadow: 'none',
				fontFamily: 'Samsung Sharp Sans',

				'& > div:first-child': {},
				'& > div:last-child': {
					'& > span': {
						backgroundColor: '#0DAB42',
					},
					'& > div': {},
				},
			},
		},

		'& > button': {
			padding: 0,
			width: '58px',
			background: '#0DAB42',
			borderRadius: '10px',

			'&:hover': {
				background: '#0DAB42',
			},
		},
	},
}));

function RecruitmentSearch({ locationFilter, onSubmitSearchValue }) {
	const classes = useStyles();
	console.log(locationFilter);
	const schema = Yup.object().shape({});

	const { handleSubmit, control, reset, formState } = useForm({
		defaultValues: {
			nameRecruitmentSearch: '',
			locationRecruitmentSearch: '',
		},

	});

	const handleSearch = (values) => {
		console.log("values", values);
		if (onSubmitSearchValue) {
			onSubmitSearchValue(values);
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit(handleSearch)}>
				<Box className={classes.form}>
					<InputSearchField
						name='nameRecruitmentSearch'
						placeholder='Search for job titles, companies and keywords'
						control={control}
						className='recruitmentSearchPage'
						required={false}
					/>
					<OptionFilterField
						name='locationRecruitmentSearch'
						placeholder='Location'
						options={locationFilter}
						control={control}
						className='locationSearchRecruitmentPage'
					/>
					<Button type='submit'>
						<SearchIcon color='secondary' />
					</Button>
				</Box>
			</form>
		</>
	);
}

RecruitmentSearch.propTypes = {};

export default RecruitmentSearch;
