// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
    'messagingSenderId': '936726281196'
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

self.addEventListener('push', function(event) {
    console.log('Received a push message', event);

    var title = JSON.parse(event.data.text()).data.title;
    var body = JSON.parse(event.data.text()).data.body;
    // var icon = '/images/icon-192x192.png';
    // var tag = 'simple-push-demo-notification-tag';
    // var data = {
    //     doge: {
    //         wow: 'such amaze notification data'
    //     }
    // };

    event.waitUntil(
        self.registration.showNotification(title, {
            body: body,
            // icon: icon,
            // tag: tag,
            // data: data
        })
    );
});



// messaging.setBackgroundMessageHandler(function(payload) {
//     console.log('[firebase-messaging-sw.js] Received background message ', payload);
//     // Customize notification here
//     var notificationTitle = `back:${payload.data.title}`;
//     var notificationOptions = {
//         body: payload.data.body,
//         // icon: '/firebase-logo.png'
//     };
//
//     return self.registration.showNotification(
//         notificationTitle,
//         notificationOptions);
// });

