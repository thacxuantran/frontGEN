import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router';

export function PrivateRouteStudent({ component: Component, ...rest }) {
	const loggedInUser = useSelector((state) => state.user.current);
	const isLoggedIn = !!loggedInUser.userId;

	return (
		<div>
			<Route
				{...rest}
				render={(props) => {
					return loggedInUser.role === 'STUDENT' ? (
						<Component {...props} />
					) : loggedInUser.role === 'RECRUITER' || !isLoggedIn ? (
						<Redirect to='/recruiter' />
					) : (
						<Redirect to='/' />
					);
				}}
			/>
		</div>
	);
}

export function PrivateRouteRecruiter({ component: Component, ...rest }) {
	const loggedInUser = useSelector((state) => state.user.current);
	const isLoggedIn = !!loggedInUser.profileId;

	return (
		<div>
			<Route
				{...rest}
				render={(props) => {
					return loggedInUser.role ? (
						<Component {...props} />
					)  : (
						<Redirect to='/recruiter' />
					);
				}}
			/>
		</div>
	);
}

export function PrivateRouteAuth({ component: Component, ...rest }) {
	const loggedInUser = useSelector((state) => state.user.current);
	const isLoggedIn = !!loggedInUser.profileId;

	return (
		<div>
			<Route
				{...rest}
				render={(props) => {
					return isLoggedIn ? (
						<Redirect
							to={loggedInUser.role === 'STUDENT' ? '/' : '/recruiter'}
						/>
					) : (
						<Component {...props} />
					);
				}}
			/>
		</div>
	);
}
