import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import OverviewDetail from './OverviewDetail';
import { useSelector } from 'react-redux';

OverviewDetailFeature.propTypes = {
	recruitment: PropTypes.object,

	onClick: PropTypes.func,
	onOpenSaveJob: PropTypes.func,
	onOpenDialogCancelApply: PropTypes.func,
};

OverviewDetailFeature.defaultProps = {
	recruitment: {},
	onClick: null,
	onOpenSaveJob: null,
	onOpenDialogCancelApply: null,
};

function OverviewDetailFeature({
	recruitment,
	onClick,
	onOpenSaveJob,
	applyChange,
	onOpenDialogCancelApply,
	handleOpenDialogUnsavedJob,
	saveJob,
	state
}) {
	return (
		<>
			<OverviewDetail
				recruitment={recruitment}
				onClick={onClick}
				onOpenSaveJob={onOpenSaveJob}
				apply={applyChange}
				onOpenDialogCancelApply={onOpenDialogCancelApply}
				handleOpenDialogUnsavedJob={handleOpenDialogUnsavedJob}
				saveJob={saveJob}
				state={state} />
		</>
	);
}

export default OverviewDetailFeature;
