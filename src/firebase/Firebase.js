import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA5SacGOtwFGD16IahBBbN-BQtlLVuLEq8",
  authDomain: "faermanlimpieza.firebaseapp.com",
  projectId: "faermanlimpieza",
  storageBucket: "faermanlimpieza.appspot.com",
  messagingSenderId: "643186524886",
  appId: "1:643186524886:web:df3c4d7d19bfeba6cfbf77",
  measurementId: "G-2V0BEDYS4D"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(); // Obtén la instancia de Firestore

const storage = firebase.storage();

export { app, db, storage };


// 🎉🎉🎉 Your Firebase WEB App is ready! 🎉🎉🎉

// App information:
//   - App ID: 1:643186524886:web:b9ca7c14d929bcb5cfbf77
//   - Display name: limpioContentoFaerman

// You can run this command to print out your new app's Google Services config:
//   firebase apps:sdkconfig WEB 1:643186524886:web:b9ca7c14d929bcb5cfbf77
