import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: 'AIzaSyD2KOBoObnmrR6ky4-ZhdocvqSyQNMKbUk',
	authDomain: 'simas-firegram.firebaseapp.com',
	projectId: 'simas-firegram',
	storageBucket: 'simas-firegram.appspot.com',
	messagingSenderId: '365521676578',
	appId: '1:365521676578:web:725a716750fba3e982dd7b',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const firestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { storage, firestore, timestamp };
