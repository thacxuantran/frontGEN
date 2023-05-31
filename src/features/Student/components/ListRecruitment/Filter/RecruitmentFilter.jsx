import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { PHOTO_CATEGORY_OPTIONS } from '../../../../../constants/global';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core';
import OptionFilterFieldOnChange from '../../../../../components/form-control/OptionFilterFieldOnChange';

const useStyles = makeStyles((theme) => ({
	filter: {
		width: '18%',

		'& > div': {
			border: '1px solid #0DAB42',
			fontFamily: 'Samsung Sharp Sans Regular',
			borderRadius: '10px',
			fontSize: '14px',

			'&:hover': {
				border: '1px solid #0DAB42',
			},

			// '& > div:first-child': {

			// },
			'& > div:last-child': {
				'& > span': {
					display: 'none',
				},
				'& > div': {},
			},
		},
	},
}));
function RecruitmentFilter({ placeholder, typeFilter, handleChangeTypeOfJob, value }) {
	const classes = useStyles();
	const [typeOfJob, setTypeOfJob] = useState([]);
	console.log(typeFilter);

	const schema = Yup.object().shape({});

	const { handleSubmit, control, reset, formState } = useForm({
		defaultValues: {
			nameSearch: { value },
		},
		resolver: yupResolver(schema),
	});


	const onHandleChange = (e) => {
		if (handleChangeTypeOfJob) {
			handleChangeTypeOfJob(e);
		}
	};;

	return (
		<>
			<OptionFilterFieldOnChange
				name='locationSearch'
				placeholder={placeholder}
				options={typeFilter}
				control={control}
				className={classes.filter}
				value={value}
				onChangeFilter={onHandleChange}
			/>
		</>
	);
}

RecruitmentFilter.propTypes = {};

export default RecruitmentFilter;
