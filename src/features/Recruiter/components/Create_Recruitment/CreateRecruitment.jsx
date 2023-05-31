import { yupResolver } from '@hookform/resolvers/yup';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import City from './City';
import './create_recruitment.scss';
import DatePicker from './DatePicker';
import InputFieldNormal from './InputFieldNormal';
import MultilineField from './MultilineField';
import ReactSelectExample from './ReactSelectExample';
import SalaryField from './SalaryField';
import TagInput from './TagInput';
import TypeOfCategory from './TypeOfCategory';

CreateRecruitment.propTypes = {
	onSubmit: PropTypes.func,
	onSubmitSkills: PropTypes.func,
};

function CreateRecruitment({ onSubmit }) {
	const [tags, setTags] = React.useState([]);
	const schema = Yup.object().shape({
		title: Yup.string().required('Please enter your title.'),
		min_Salary: Yup.number().required('Please enter min salary'),
		max_Salary: Yup.number().moreThan(
			Yup.ref('min_Salary'),
			'Max Salary must higher min salary'
		),
	});

	const form = useForm({
		defaultValues: {
			title: '',
			isFullTime: '',
			job_Category: '',
			position: '',
			city_ID: '',
			location: '',
			description: '',
			requirement: '',
			min_Salary: '',
			max_Salary: '',
			benefits: '',
			end_Date: '',
			recruitmentTags: '',
			hashTags: [],
		},
		reValidateMode: 'onSubmit',
		resolver: yupResolver(schema),
	});

	const handleSubmitted = (val) => {
		val = {
			...val,
			Tags: tags,
		};
		if (onSubmit) {
			onSubmit(val);
			console.log(val);
		}
	};

	const handleSetTags = (tags) => {
		setTags(tags);
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
						Create Recruitment
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
								className='input-field'
								form={form}
							/>
						</div>
						<div>
							<Typography color='primary'>Type of Job</Typography>

							<ReactSelectExample
								name='isFullTime'
								required='true'
								className='reactselect'
								control={form.control}

								// className="reactselect"
							/>
						</div>
						<div>
							<Typography color='primary'>
								<p>Job Category</p>
							</Typography>
							<TypeOfCategory
								name='job_Category'
								control={form.control}
								required='true'
								className='jobofcategory'
							/>
						</div>
						<div>
							<Typography color='primary'>Location</Typography>
							<div className='location'>
								<InputFieldNormal
									name='location'
									label='Detail Location'
									className='input-field2'
									form={form}
								/>
								<City
									name='city_ID'
									className='cityselect'
									control={form.control}
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
								Publish
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default CreateRecruitment;
