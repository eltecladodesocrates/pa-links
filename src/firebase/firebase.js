import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCgT4F0zevO_bvK5a2DpJlIgK4qd7rKVuU",
    authDomain: "links-app-31926.firebaseapp.com",
    databaseURL: "https://links-app-31926-default-rtdb.firebaseio.com",
    projectId: "links-app-31926",
    storageBucket: "links-app-31926.appspot.com",
    messagingSenderId: "118255174164",
    appId: "1:118255174164:web:e1c914f4e9e1ff29fcdd01",
    measurementId: "G-70PT6X23S7"
  };

firebase.initializeApp(firebaseConfig) 

export const database = firebase.database()

export const auth = firebase.auth()

export default firebase

// export { firebase, database, auth as default }

// apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
// authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
// projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
// storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
// messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
// appId: process.env.REACT_APP_FIREBASE_APP_ID