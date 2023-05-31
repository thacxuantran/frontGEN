import Typography from '@material-ui/core/Typography';
import MoodIcon from '@material-ui/icons/Mood';
import React from 'react';
import './styles.scss';
function NotificationItem({ mess, onClickNotify, i }) {
	const handleClickNotify = (event) => {
		event.preventDefault();
		onClickNotify(event, i);
	};

	function formatDate(date) {
		var d = new Date(date),
			month = '' + (d.getMonth() + 1),
			day = '' + d.getDate(),
			year = '' + d.getFullYear(),
			hour = '' + d.getHours(),
			minute = '' + d.getMinutes(),
			second = '' + d.getSeconds();

		if (month.length < 2) month = '0' + month;
		if (day.length < 2) day = '0' + day;
		if (hour.length < 2) hour = '0' + hour;
		if (minute.length < 2) minute = '0' + minute;
		if (second.length < 2) second = '0' + second;

		return (
			[day, month, year].join('/') + ' ' + [hour, minute, second].join(':')
		);
	}

	return (
		<a
			href={mess.link}
			className='notifcation-link'
			onClick={handleClickNotify}>
			<div
				className={
					!mess.isRead || mess.isRead === 'false'
						? 'notification-root not-read'
						: 'notification-root'
				}>
				<MoodIcon style={{ color: '#0DAB42' }}></MoodIcon>
				<div className='notification-wrapper'>
					<Typography variant='body2'>{mess.content}</Typography>
					<p
						style={{
							fontSize: '12px',
							fontFamily: 'Samsung Sharp Sans Regular',
						}}
						className='notification-wrapper__date'>
						{formatDate(mess.create_date)}
					</p>
				</div>
			</div>
		</a>
	);
}

export default NotificationItem;
