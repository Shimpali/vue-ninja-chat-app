import firebase from 'firebase';
import firestore from 'firebase/firestore';

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyDQ8dQXGVpOWBFlq6Lau9u7ps-gY4wu8rQ',
  authDomain: 'ninja-chat-e14e6.firebaseapp.com',
  databaseURL: 'https://ninja-chat-e14e6.firebaseio.com',
  projectId: 'ninja-chat-e14e6',
  storageBucket: 'ninja-chat-e14e6.appspot.com',
  messagingSenderId: '835783914532'
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });
export default firebaseApp.firestore();
