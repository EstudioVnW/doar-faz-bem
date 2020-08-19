importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js');

firebase.initializeApp({
	messagingSenderId: '624040829754',
});

const initMessaging = firebase.messaging();

if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('../public/firebase-messaging-sw.js')
		.then((registration) => {
			console.log('registration successful, scope is:', registration.scope);
		}).catch((err) => {
			console.log('service worker registration failed, error:', err);
		});
}
