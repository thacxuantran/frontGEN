import { yupResolver } from '@hookform/resolvers/yup';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import City from './City';
import DatePicker from './DatePicker';
import InputFieldNormal from './InputFieldNormal';
import MultilineField from './MultilineField';
import ReactSelectExample from './ReactSelectExample';
import SalaryField from './SalaryField';
import TagInput from './TagInput';
import TypeOfCategory from './TypeOfCategory';
import './update_recruitment.scss';

UpdateRecruitment.propTypes = {
	onSubmit: PropTypes.func,
};

function UpdateRecruitment({ onSubmit, data, item }) {
	const [recruitment, setRecruitment] = useState(data);
	const schema = Yup.object().shape({
		title: Yup.string().required('Please enter your title.'),
		max_Salary: Yup.number().moreThan(
			Yup.ref('min_Salary'),
			'Max Salary must higher min salary'
		),
	});

	const defaut_value = [];
	item.map((value) => {
		defaut_value.push({
			label: value.hashTag.hashTag_Name,
			value: value.hashTag_ID,
		});
	});
	const getNameSkills = (items) => {
		let arr = [];
		items.forEach((item) => {
			arr.push(item.label);
		});
		return arr;
	};
	console.log('oke oke chưa?:', getNameSkills(defaut_value));
	const [tags, setTags] = React.useState(getNameSkills(defaut_value));
	const [typeJob, setTypeJob] = React.useState(recruitment.isFullTime);
	const [jobCategory, setJobCategory] = React.useState(
		recruitment.job_Category
	);
	const [city, setCity] = React.useState(recruitment.city_ID);
	const form = useForm({
		defaultValues: {
			title: recruitment.title,
			isFullTime: '',
			job_Category: '',
			position: recruitment.position,
			city_ID: city,
			location: recruitment.location,
			description: recruitment.description,
			requirement: recruitment.requirement,
			min_Salary: recruitment.min_Salary,
			max_Salary: recruitment.max_Salary,
			benefits: recruitment.benefits,
			end_Date: recruitment.end_Date,
			recruitmentTags: '',
			hashTags: getNameSkills(defaut_value),
		},
		reValidateMode: 'onSubmit',
		resolver: yupResolver(schema),
	});
	const handleSubmitted = (val) => {
		val = {
			...val,
			Tags: tags,
			typeJob: typeJob,
			jobCategory: jobCategory,
			Tags: tags,
			cityID: city,
		};
		if (onSubmit) {
			onSubmit(val);
			console.log('ok ok:', val);
		}
	};

	const handleSetTags = (tags) => {
		setTags(tags);
	};
	const handleCategoryChange = (val) => {
		setJobCategory(val);
		console.log('Cateogy :', val);
	};
	const handleJobChange = (val) => {
		setTypeJob(val);
		console.log('hoi hoi :', val);
	};
	const handleCityChange = (val) => {
		setCity(val);
		console.log('City ne may cu:', val);
	};

	return (
		<div className='main'>
			<div className='create-title'>
				<div className='title'>
					<img
						src='/create_job.png'
						style={{ marginRight: '8px' }}
						alt='create_icon'
						weight='30px'
						height='30px'
					/>
					<Typography color='primary' variant='h5'>
						Update Recruitment
					</Typography>
				</div>
			</div>
			<div className='form'>
				<form onSubmit={form.handleSubmit(handleSubmitted)} className='child'>
					<div className='child_box'>
						<div>
							<Typography color='primary'>Job Title</Typography>
							<InputFieldNormal
								name='title'
								className='input-field'
								form={form}
							/>
						</div>
						<div>
							<Typography color='primary'>Position</Typography>
							<InputFieldNormal
								name='position'
								className='input-field-position'
								form={form}
							/>
						</div>
						<div>
							<Typography color='primary'>Type of Job</Typography>

							<ReactSelectExample
								name='isFullTime'
								className='reactselect'
								control={form.control}
								defaultValue={recruitment.isFullTime}
								onSetJobType={handleJobChange}
							/>
						</div>
						<div>
							<Typography color='primary'>
								<p>Job Category</p>
							</Typography>
							<TypeOfCategory
								name='job_Category'
								defaultValue={recruitment.job_Category}
								control={form.control}
								className='jobofcategory'
								onSetJobCategory={handleCategoryChange}
							/>
						</div>
						<div>
							<Typography color='primary'>Location</Typography>
							<div className='location'>
								<InputFieldNormal
									name='location'
									label={recruitment.location}
									className='input-field2'
									form={form}
								/>
								<City
									name='city_ID'
									className='cityselect'
									control={form.control}
									defaultValue={city}
									onSetCityID={handleCityChange}
								/>
							</div>
						</div>

						<div>
							<Typography color='primary'>
								<p>Description</p>
							</Typography>
							<MultilineField
								name='description'
								className='description-field'
								form={form}
							/>
						</div>
						<div>
							<Typography color='primary'>
								<p>Requirement</p>
							</Typography>
							<MultilineField
								name='requirement'
								className='description-field'
								form={form}
							/>
						</div>
						<div>
							<Typography color='primary'>
								<p>Salary</p>
							</Typography>
							<div className='salary'>
								<SalaryField
									name='min_Salary'
									className='salaryfrom'
									placeholder={recruitment.min_Salary}
									form={form}
								/>
								<p
									style={{
										fontSize: '25px',
										marginTop: '16px',
									}}>
									~
								</p>
								<SalaryField
									name='max_Salary'
									className='salaryto'
									placeholder={recruitment.max_Salary}
									form={form}
								/>
							</div>
						</div>
						<div>
							<Typography color='primary'>
								<p>Benefit</p>
							</Typography>
							<MultilineField
								name='benefits'
								className='description-field'
								form={form}
							/>
						</div>
						<div className='date_picker'>
							<Typography color='primary'>
								<p>Expiry date</p>
							</Typography>
							<DatePicker
								className='date_picker_child'
								name='end_Date'
								control={form.control}
							/>
						</div>
						<div className='job_tags'>
							<Typography color='primary'>
								<p>Job Tags</p>
							</Typography>
							<TagInput
								onSetTags={handleSetTags}
								control={form.control}
								name='hashTags'
								names={tags}
							/>
						</div>
						<div className='paper__form__container'>
							<button
								size='large'
								type='submit'
								className='paper__form__container__btn'>
								Save
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default UpdateRecruitment;
