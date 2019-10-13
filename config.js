// Config file
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAaYID-PZiax0clUKcUBCmzZzzVLrI6Ry4",
  authDomain: "expo-react-native-2eb67.firebaseapp.com",
  databaseURL: "https://expo-react-native-2eb67.firebaseio.com",
  projectId: "expo-react-native-2eb67",
  storageBucket: "expo-react-native-2eb67.appspot.com",
  messagingSenderId: "749134780611",
  appId: "1:749134780611:web:d0436b90a5ffe9ae81aa76",
  measurementId: "G-XKZ0H5PPX3"
};

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
