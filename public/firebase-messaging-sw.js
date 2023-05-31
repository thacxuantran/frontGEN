importScripts('https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.6.8/firebase-messaging.js');

const firebaseConfig = {
    apiKey: "AIzaSyC1ox43dCJDY0ZejY4ObZZb9U8_ROrazL0",
    authDomain: "natural-engine-311516.firebaseapp.com",
    projectId: "natural-engine-311516",
    storageBucket: "natural-engine-311516.appspot.com",
    messagingSenderId: "805761381257",
    appId: "1:805761381257:web:b9d495b91f7e0c05016758",
    measurementId: "G-F5MCE20TCW"
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
// messaging.setBackgroundMessageHandler(function (payload) {
//     console.log("message", payload)

//     return ;
// });

messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    var data = payload.data;
    // Customize notification here
    const notificationTitle = data.title;
    const notificationOptions = {
        body: payload.body,
        icon: './logo.png',
        subtitle: data.content,
        data: {
            url: data.link
        }
    };
    const promiseChain = clients
        .matchAll({
            type: "window",
            includeUncontrolled: true,
        })
        .then((windowClients) => {
            console.log(windowClients)
            for (let i = 0; i < windowClients.length; i++) {
                const windowClient = windowClients[i];
                windowClient.postMessage(payload);
            }
        })
    // .then(() => {
    //     return registration.showNotification("my notification title");
    // });
    self.registration.showNotification(notificationTitle,
        notificationOptions);
});
// self.addEventListener('push', function (event) {
//     console.log('Push message received', event);
//     var data = {};
//     if (event.data) {
//         data = event.data.json();
//     }
//     event.stopImmediatePropagation();
//     showNotification(data.notification);
// });

// function showNotification(notification) {
//     var click_action = notification.click_action; //<-- This is correct!
//     var options = {
//         body: notification.body,
//         icon: notification.icon,
//         subtitle: notification.subtitle,
//         data: {
//             url: click_action
//         }
//     };
//     if (self.registration.showNotification) {
//         return self.registration.showNotification(notification.title, options);
//     }
// }

self.addEventListener('notificationclick', function (event) {
    console.log("event", event)
    let url = '' + event.notification.data.url !== undefined ? event.notification.data.url : '';
    event.notification.close(); // Android needs explicit close.
    event.waitUntil(
        clients.matchAll({ type: 'window' }).then(windowClients => {
            // Check if there is already a window/tab open with the target URL
            for (var i = 0; i < windowClients.length; i++) {
                var client = windowClients[i];
                // If so, just focus it.
                if (client.url === url && 'focus' in client) {
                    return client.focus();
                }
            }
            // If not, then open the target URL in a new window/tab.
            if (clients.openWindow) {
                return clients.openWindow(url);
            }
        })
    );
});
