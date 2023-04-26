// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC2XgDYOvxYEFhNC_livkzcfGTk8mvzBOA",
//   authDomain: "portuapp-33e8c.firebaseapp.com",
//   projectId: "portuapp-33e8c",
//   storageBucket: "portuapp-33e8c.appspot.com",
//   messagingSenderId: "17646438725",
//   appId: "1:17646438725:web:242ab53c2125180598162c"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// //Initialize Firebase Auth
import { getAuth } from "firebase/auth";
import { app } from "./firebase-config";

export const auth = getAuth(app);