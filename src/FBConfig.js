import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBdyxxHv_y6OV-fU6GFC6MGWLptxAdcVZ0",
  authDomain: "cv2constructor.firebaseapp.com",
  databaseURL: "https://cv2constructor.firebaseio.com",
  projectId: "cv2constructor",
  storageBucket: "cv2constructor.appspot.com",
  messagingSenderId: "170442859856",
  appId: "1:170442859856:web:d5a85103ca5e807a40f855",
  measurementId: "G-2MFMX4R0QL"
};

const Firebase = firebase.initializeApp(firebaseConfig);
export default Firebase;
