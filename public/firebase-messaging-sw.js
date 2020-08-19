importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js')

firebase.initializeApp({
	messagingSenderId: "624040829754",
});

const initMessaging = firebase.messaging();
