import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCY40V8bo5-T33_GpYiPzdGgck7eyGcfLU",
    authDomain: "sea-basket-63151.firebaseapp.com",
    projectId: "sea-basket-63151",
    storageBucket: "sea-basket-63151.appspot.com",
    messagingSenderId: "929608251472",
    appId: "1:929608251472:web:951a56727857a9c7cd7955"
};

firebase.initializeApp(firebaseConfig);

export default firebase;