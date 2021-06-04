
// Scripts for firebase and firebase messaging
// Scripts for firebase and firebase messaging
<script src='https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js'></script>
<script src='https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js'></script>
// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyBISMis4gZ81MO1M6f1a27aLSZcmT_0eXg",
  authDomain: "myfirebase-push-notifitcation.firebaseapp.com",
  projectId: "myfirebase-push-notifitcation",
  storageBucket: "myfirebase-push-notifitcation.appspot.com",
  messagingSenderId: "952281832074",
  appId: "1:952281832074:web:5e04bc2418050a0664ab73",
  measurementId: "G-LK8H7LT827"
};

firebase.initializeApp(firebaseConfig);
// Retrieve firebase messaging
const messaging = firebase.messaging();
messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };
  self.registration.showNotification(notificationTitle,
    notificationOptions);
});





{/* <script src='https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js'></script>
<script src='https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js'></script>

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
    apiKey: "AIzaSyDvsaUZIjjoOml2gzkNgMIqkHrntThDxm4",
    authDomain: "exmjav.firebaseapp.com",
    projectId: "exmjav",
    storageBucket: "exmjav.appspot.com",
    messagingSenderId: "961451956150",
    appId: "1:961451956150:web:fb4753dddd31a155131317",
    measurementId: "G-GNYJ2EDEGK"
  }


firebase.initializeApp(firebaseConfig);


// Retrieve firebase messaging
const messaging = firebase.messaging();
messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
}); */}