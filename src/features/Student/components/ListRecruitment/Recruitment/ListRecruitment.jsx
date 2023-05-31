import { Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import studentApi from '../../../../../api/studentApi';
import RecruitmentCard from './RecuitmentCard';

function ListRecruitment({ data }) {
	return (
		<>
			<Grid container>
				{data.map((recruitment) => (
					<Grid
						item
						key={recruitment.recruitments_ID}
						xs={12}
						sm={6}
						md={4}
						lg={3}>
						<RecruitmentCard recruitment={recruitment} />
					</Grid>
				))}
			</Grid>
		</>
	);
}

ListRecruitment.propTypes = {};

export default ListRecruitment;
