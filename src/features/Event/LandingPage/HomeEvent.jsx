import { Box, Button, Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import { Pagination } from '@material-ui/lab';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import DatePicker from './DatePicker';
import EventCard from './EventCard/EventCard';
import './style.scss';
HomeEvent.propTypes = {};

function HomeEvent(props) {
	const images = ['/event1.jpg', '/event2.png', '/event3.png'];
	const history = useHistory();
	const handleManageEvent = () => {
		history.push('event/manageEvent');
	};
	const handleCreateEvent = () => {
		history.push('event/createEvent');
	};
	const zoomInProperties = {
		indicators: true,
		scale: 0.5,
		autoplay: false,
		transitionDuration: 1000,
	};
	const [selectedDate, setSelectedDate] = useState(
		new Date('2014-08-18T21:11:54')
	);

	const handleDateChange = (date) => {
		setSelectedDate(date);
	};
	return (
		<div className='event-root'>
			<div className='event-banner'>
				<Zoom {...zoomInProperties}>
					{images.map((each, index) => (
						<div key={index} className='each-slide'>
							<img
								style={{
									objectFit: 'cover',
									width: '70%',
								}}
								src={each}
								alt='img'
							/>
						</div>
					))}
				</Zoom>
			</div>
			<div className='search'>
				<div className='search__searchEvent'>
					<div
						style={{ marginLeft: '20px' }}
						className='search__searchEvent__event'>
						<p>Event</p>
						<TextField id='standard-basic' />
					</div>
					<div className='search__searchEvent__event'>
						<p>In</p>
						<TextField id='standard-basic' />
					</div>
					<div className='search__searchEvent__event'>
						<p>When</p>
						<DatePicker className='search__searchEvent__date' />
					</div>
					<div>
						<Button
							style={{
								background: '#0DAB42',
								minHeight: '45px',
								minWidth: '45px',
								borderRadius: '12px',
								marginRight: '20px',
							}}>
							<SearchIcon color='secondary' />
						</Button>
					</div>
				</div>
			</div>
			<div className='buttonEvent'>
				<div className='buttonEvent__buttonGroup'>
					<Button onClick={handleManageEvent}>Manage Event</Button>
					<Button onClick={handleCreateEvent}> Create Event</Button>
				</div>
			</div>
			<div className='upcoming'>
				<div className='upcoming__upcomingEvent'>
					<div className='upcoming__upcomingEvent__title'>
						Upcoming Event
						<span
							style={{
								fontFamily: 'Samsung Sharp Sans',
								color: '#0dab42',
								fontSize: '45px',
							}}>
							.
						</span>
					</div>
					<div className='upcoming__upcomingEvent__main'>
						<Grid container>
							<Grid item xs={12} sm={6} md={3} lg={4}>
								<EventCard
									img='/event1.jpg'
									title='Student Achievement Awards'
								/>
							</Grid>
							<Grid item xs={12} sm={6} md={3} lg={4}>
								<EventCard
									img='/eventcard2.jpeg'
									title='AXIE INFINITY - Hanh Trinh Ty Do'
								/>
							</Grid>
							<Grid item xs={12} sm={6} md={3} lg={4}>
								<EventCard img='/eventcard3.jpeg' title='POWER OF VOICE' />
							</Grid>
						</Grid>
					</div>
					<div className='upcoming__upcomingEvent__main'>
						<Grid container>
							<Grid item xs={12} sm={6} md={3} lg={4}>
								<EventCard img='/eventcard1.png' title='Olympic from home' />
							</Grid>
							<Grid item xs={12} sm={6} md={3} lg={4}>
								<EventCard img='/eventcard5.jpeg' title='Oh I Know!' />
							</Grid>
							<Grid item xs={12} sm={6} md={3} lg={4}>
								<EventCard img='/eventcard6.jpeg' title='Convince Us' />
							</Grid>
						</Grid>
					</div>
					<div className='upcoming__upcomingEvent__main'>
						<Grid container>
							<Grid item xs={12} sm={6} md={3} lg={4}>
								<EventCard img='/eventcard7.jpeg' title='Open Mic 4' />
							</Grid>
							<Grid item xs={12} sm={6} md={3} lg={4}>
								<EventCard img='/eventcard4.jpeg' title='Game Designer' />
							</Grid>
							<Grid item xs={12} sm={6} md={3} lg={4}>
								<EventCard img='/eventcard9.jpeg' title='F-Shark' />
							</Grid>
						</Grid>
					</div>

					<Box className='upcoming__upcomingEvent__page'>
						<Box
							style={{
								display: 'flex',
								justifyContent: 'center',
								flexFlow: 'row nowrap',
								marginTop: '10px',
							}}>
							<Pagination
								color='primary'
								shape='rounded'
								count='3'></Pagination>
						</Box>
					</Box>
				</div>
			</div>
		</div>
	);
}

export default HomeEvent;
