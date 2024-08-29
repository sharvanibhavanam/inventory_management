// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDOoUwIChSuHgjJlqI8NXblT7Y1gXAcpQ4",
	authDomain: "inventory-management-dbc67.firebaseapp.com",
	projectId: "inventory-management-dbc67",
	storageBucket: "inventory-management-dbc67.appspot.com",
	messagingSenderId: "919358585064",
	appId: "1:919358585064:web:7f8fa2945594578cc4315d",
	measurementId: "G-YGNZJ8L238"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore };