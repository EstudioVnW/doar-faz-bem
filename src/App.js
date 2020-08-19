// Libs
import React, { useEffect } from 'react';

// Routes
import Routes from './routes/routes';

import firebase from './firebase';

const App = () => {
	useEffect(() => {
		const messaging = firebase.messaging();
		messaging.requestPermission().then(() => {
			return messaging.getToken();
		}).then((token) => {
			console.log('Token: ', token);
		}).catch((error) => {
			console.log('error', error);
		});
	}, []);

	return <Routes />;

};

export default App;
