import { Container, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import React from 'react';
import CardAside from '../CardAside';
import './styles.scss';

const SuggestAside = (props) => {
	const { onSubmitSaveRercruitment, onSubmitUnSaveRercruitment, onApply } =
		props;

	return (
		<Container className='root-suggest-aside'>
			<Container className='root-suggest-aside__wrapper'>
				<Container className='root-suggest-aside__wrapper__inner'>
					<ThumbUpAltIcon
						style={{ color: '#0DAB42', marginRight: '10px', fontSize: 35 }}
					/>
					<Typography className='root__name root-suggest-aside__wrapper__inner__suggest'>
						Suggested Jobs
					</Typography>
				</Container>
			</Container>
			<Container className='root-suggest-aside__wrapper-card'>
				{props.list.map((item, index) => {
					return (
						<CardAside
							onApply={onApply}
							onSubmitUnSaveRercruitment={onSubmitUnSaveRercruitment}
							onSubmitSaveRercruitment={onSubmitSaveRercruitment}
							id={item.recruitments_ID}
							key={item.recruitments_ID}
							item={item}
						/>
					);
				})}
			</Container>
		</Container>
	);
};

export default SuggestAside;
