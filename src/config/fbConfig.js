import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
    apiKey: "AIzaSyCigJz6aGGfHO4oUKm2uHnp4tBirbi52WA",
    authDomain: "fitz-portofolio-1539403924834.firebaseapp.com",
    databaseURL: "https://fitz-portofolio-1539403924834.firebaseio.com",
    projectId: "fitz-portofolio-1539403924834",
    storageBucket: "fitz-portofolio-1539403924834.appspot.com",
    messagingSenderId: "39080215401"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 