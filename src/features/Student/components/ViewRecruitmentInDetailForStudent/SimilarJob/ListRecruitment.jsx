import React from 'react';
import RecruitmentCard from './RecuitmentCard';

function ListRecruitment({ recruitment, onHandleViewDetail }) {
	
	return (
		<div>
			<RecruitmentCard onHandleViewDetail={onHandleViewDetail} recruitment={recruitment}/>
		</div>
	);
}

ListRecruitment.propTypes = {};

export default ListRecruitment;
