import firebase from 'firebase/app';
import 'firebase/messaging';
<script src="https://www.gstatic.com/firebasejs/8.6.3/firebase-analytics.js"></script>
const firebaseConfig = {
  apiKey: "AIzaSyDr0F9O5EEdJkPJc-_nH412NQul8hwNUoA",
  authDomain: "myoutdoors-34341.firebaseapp.com",
  projectId: "myoutdoors-34341",
  storageBucket: "myoutdoors-34341.appspot.com",
  messagingSenderId: "1040583266185",
  appId: "1:1040583266185:web:e710b09bab684f0118db58",
  measurementId: "G-V1F4EE1BVT"
  };
  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();
  export const getToken = async (setTokenFound) => {
    console.log("token", setTokenFound);
    try {
      const currentToken = await messaging.getToken({ vapidKey: 'BHaPO-L8As7HU71c3F4xI4Z3S1K_1TiSmmvDYN88q3pqf_EtjBFTUrRuY8KTIh8Npe2gHoieFqKMd33H-qsKDxQ' });
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