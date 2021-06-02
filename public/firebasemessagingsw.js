
// Scripts for firebase and firebase messaging
// Scripts for firebase and firebase messaging
<script src='https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js'></script>
<script src='https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js'></script>
// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
    apiKey: "AIzaSyDr0F9O5EEdJkPJc-_nH412NQul8hwNUoA",
    authDomain: "myoutdoors-34341.firebaseapp.com",
    projectId: "myoutdoors-34341",
    storageBucket: "myoutdoors-34341.appspot.com",
    messagingSenderId: "1040583266185",
    appId: "1:1040583266185:web:e710b09bab684f0118db58",
    measurementId: "G-V1F4EE1BVT"
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