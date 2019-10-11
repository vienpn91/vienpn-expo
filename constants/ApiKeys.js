import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyB7hrDfZ07uiqhyhnIgonmAh7ktwOWuqiw",
  authDomain: "vienpn-expo.firebaseapp.com",
  databaseURL: "https://vienpn-expo.firebaseio.com",
  storageBucket: "vienpn-expo.appspot.com",
};

firebase.initializeApp(firebaseConfig);

export default firebase;