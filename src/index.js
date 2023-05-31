import { SnackbarProvider } from 'notistack';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import store from './app/store';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<SnackbarProvider
				transitionDuration={{ enter: 300, exit: 150 }}
				anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
				<App />
			</SnackbarProvider>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);

serviceWorker.registerServiceWorker();

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
