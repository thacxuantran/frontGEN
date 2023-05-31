import IconButton from '@material-ui/core/IconButton';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import React from 'react';
import loadinggif from '../../../../../assets/gif/Eclipse-1.4s-257px.gif';
import Loading from '../../../../../components/Loading';
import CardMain from '../CardMain';
import GroupButton from '../GroupButton';
import './styles.scss';
const Container = (props) => {
	const {
		loading,
		loadingPageChange,
		onPageChange,
		pagination,
		mainPage,
		onMainPageChange,
		stopLoading,
		onSubmitUnSaveRercruitment,
		onSubmitSaveRercruitment,
		onSubmitHandleUnsubCompany,
		changePage,
		loadingMainPage,
	} = props;
	const { pageIndex, pageSize, totalCount } = pagination;
	const totalPage = Math.ceil(totalCount / pageSize);
	const pages = [];
	const handlePageChange = (newPage) => {
		if (onPageChange) {
			onPageChange(newPage);
		}
	};
	for (let i = 1; i < totalPage + 1; i++) {
		if (pageIndex === i) {
			pages.push(
				<span
					key={i}
					onClick={() => handlePageChange(i)}
					className='paginate-main__item__active'>
					{i}
				</span>
			);
		} else {
			pages.push(
				<span
					key={i}
					onClick={() => handlePageChange(i)}
					className='paginate-main__item'>
					{i}
				</span>
			);
		}
	}
	var listApplied = props.listApplied;

	return (
		<div className='root-main'>
			<div className='root-main__wrapper'>
				<GroupButton
					changePage={changePage}
					handlePageChange={onMainPageChange}
					mainPage={mainPage}
					loading={loadingMainPage}
				/>
				<div style={{ position: 'relative' }}>
					<div
						style={
							loadingPageChange
								? { opacity: 0.5 }
								: loadingMainPage
								? { position: 'relative', minHeight: 700 }
								: null
						}>
						{loading || loadingMainPage ? (
							<Loading />
						) : (
							listApplied.map((item, index) => {
								return (
									<CardMain
										onSubmitHandleUnsubCompany={onSubmitHandleUnsubCompany}
										onSubmitUnSaveRercruitment={onSubmitUnSaveRercruitment}
										onSubmitSaveRercruitment={onSubmitSaveRercruitment}
										mainPage={mainPage}
										key={index}
										parent={item}
										item={mainPage !== 1 ? item.recruitment : item}
									/>
								);
							})
						)}
					</div>
					{loadingPageChange ? (
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								position: 'absolute',
								top: '50%',
								right: '50%',
							}}>
							<img
								style={{ width: '70px', height: '70px' }}
								src={loadinggif}
								alt='gif'></img>
						</div>
					) : null}
				</div>

				{loading || loadingMainPage ? null : totalCount === 0 ? null : (
					<div className='paginate-main'>
						<IconButton
							onClick={() => handlePageChange(pageIndex - 1)}
							disabled={pageIndex <= 1}
							size='medium'>
							<NavigateBeforeIcon
								fontSize='inherit'
								style={pageIndex > 1 ? { color: '#0DAB42', fontSize: 25 } : {}}
							/>
						</IconButton>
						{pages}
						<IconButton
							onClick={() => handlePageChange(pageIndex + 1)}
							disabled={pageIndex === totalPage}
							size='medium'>
							<NavigateNextIcon
								style={
									pageIndex !== totalPage
										? { color: '#0DAB42', fontSize: 25 }
										: {}
								}
								fontSize='inherit'
							/>
						</IconButton>
					</div>
				)}
			</div>
		</div>
	);
};

export default Container;
