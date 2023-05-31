import { createTheme, ThemeProvider } from '@material-ui/core';
import { createBrowserHistory } from 'history';
import { SnackbarProvider } from 'notistack';
import React, { createRef } from 'react';
import { Route, Switch } from 'react-router';
import { Redirect, Router } from 'react-router-dom';
import './App.scss';
import {
	PrivateRouteAuth,
	PrivateRouteRecruiter,
	PrivateRouteStudent,
} from './components/PrivateRoute';
import AccountFeature from './features/Account';
import AdminFeature from './features/Admin';
import AuthFeature from './features/Auth';
import EventFeature from './features/Event/index';
import LandingPage from './features/LandingPage/index';
import RecruiterFeature from './features/Recruiter';
import LandingPageRecruiter from './features/Recruiter/pages/LandingPageRecruiter';
import StudentFeature from './features/Student';
import MainErrorPage from './features/Error/MainErrorPage';
import NotFoundPage from './features/Error/NotFoundPage';

function App() {
	const history = createBrowserHistory();
	const theme = createTheme({
		palette: {
			primary: {
				main: '#0DAB42',
			},
			textSecondary: {
				main: '#b9c9d6',
			},
			secondary: {
				main: '#ffff',
			},
		},

		typography: {
			fontFamily: ['Samsung Sharp Sans'],
			fontWeight: 'bolder',
		},
		label: {
			fontFamily: ['Samsung Sharp Sans Regular'],
			fontWeight: 'bolder',
		},
		button: {
			color: {
				secondary: {
					main: 'white',
				},
			},
		},
	});
	const notistackRef = createRef();

	return (
		<SnackbarProvider
			persist={true}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			ref={notistackRef}
			autoHideDuration={2500}
			anchorOriginTopRight={{ marginTop: '50px' }}>
			<ThemeProvider theme={theme}>
				<Router history={history}>
					<Switch>
						<Route path='/' exact component={LandingPage} />
						<Route path='/recruiter' exact component={LandingPageRecruiter} />
						<Redirect from='/homepage' to='/' />
						<PrivateRouteAuth path='/auth' component={AuthFeature} />
						{/* Student */}
						<PrivateRouteStudent path='/student' component={StudentFeature} />

						<PrivateRouteRecruiter
							path='/recruiter'
							component={RecruiterFeature}
						/>
						<Route path='/account' component={AccountFeature} />
						<Route path='/admin' component={AdminFeature} />
						<Route path='/event' component={EventFeature} />
						<Route path='/error' component={MainErrorPage} />
						<Route component={NotFoundPage} />
					</Switch>
				</Router>
			</ThemeProvider>
		</SnackbarProvider>
	);
}

export default App;
