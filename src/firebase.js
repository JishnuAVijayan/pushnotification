import firebase from 'firebase/app';
import 'firebase/messaging';
<script src="https://www.gstatic.com/firebasejs/8.6.3/firebase-analytics.js"></script>
const firebaseConfig = {
  apiKey: "AIzaSyBISMis4gZ81MO1M6f1a27aLSZcmT_0eXg",
  authDomain: "myfirebase-push-notifitcation.firebaseapp.com",
  projectId: "myfirebase-push-notifitcation",
  storageBucket: "myfirebase-push-notifitcation.appspot.com",
  messagingSenderId: "952281832074",
  appId: "1:952281832074:web:5e04bc2418050a0664ab73",
  measurementId: "G-LK8H7LT827"
}
  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();
  // messaging.requestPermission()
  export const getToken = async (setTokenFound) => {
    console.log("gettoken inside..!!")
    console.log("token", setTokenFound);
    try {
      const currentToken = await messaging.getToken({ vapidKey: 'BM8XmYEt21BmfYvTSp2YjemUlSFSYITvFXqKQS5H22jo2lyoWP-KDYqANhymmH9sZkH1iKn1o5EdQAjFix7mNvU' });
      console.log("token", currentToken);
      if (currentToken) {
        console.log('current token for client: ', currentToken);
        setTokenFound(true);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log('No registration token available. Request permission to generate one.');
        setTokenFound(false);
        // shows on the UI that permission is required
      }
    } catch (err) {
      console.log('An error occurred while retrieving token. ', err);
    }
  }
  export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
});




// // import firebase from "firebase";
// import firebase from 'firebase/app';
// import 'firebase/messaging';
// <script src="https://www.gstatic.com/firebasejs/8.6.3/firebase-analytics.js"></script>

// const firebaseConfig = {
//     apiKey: "AIzaSyDvsaUZIjjoOml2gzkNgMIqkHrntThDxm4",
//     authDomain: "exmjav.firebaseapp.com",
//     projectId: "exmjav",
//     storageBucket: "exmjav.appspot.com",
//     messagingSenderId: "961451956150",
//     appId: "1:961451956150:web:fb4753dddd31a155131317",
//     measurementId: "G-GNYJ2EDEGK"
//   }

  
//   firebase.initializeApp(firebaseConfig);
//   const messaging = firebase.messaging();
  
//   export const getToken = (setTokenFound) => {
//      messaging.getToken({vapidKey: 'BHzklaFjtWn2xcZFvkBmTujRrEeXYSG9NzhSLHBLo4Um3M9igaois4FosSgcijyf2g2yBH-fDAbYpDV5aWV9Fak'}).then((currentToken) => {
//       console.log('token :', currentToken);
//       if (currentToken) {
//         console.log('current token for client: ', currentToken);
//         setTokenFound(true);
//         // Track the token -> client mapping, by sending to backend server
//         // show on the UI that permission is secured
//       } else {
//         console.log('No registration token available. Request permission to generate one.');
//         setTokenFound(false);
//         // shows on the UI that permission is required 
//       }
//     }).catch((err) => {
//       console.log('An error occurred while retrieving token. ', err);
//       // catch error while creating client token
//     });
//   }

//   export const onMessageListener = () =>
//   new Promise((resolve) => {
//     messaging.onMessage((payload) => {
//       resolve(payload);
//     });
// });