import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBVAr939FJPFjebCSjAgFsUZqkJm0KzCas",
  authDomain: "cv-construcor.firebaseapp.com",
  databaseURL: "https://cv-construcor.firebaseio.com",
  projectId: "cv-construcor",
  storageBucket: "cv-construcor.appspot.com",
  messagingSenderId: "155403200098",
  appId: "1:155403200098:web:7a810f1467e6e7cb36d33b",
  measurementId: "G-ZQKVD87406"
};

const Firebase = firebase.initializeApp(firebaseConfig);
export default Firebase;
