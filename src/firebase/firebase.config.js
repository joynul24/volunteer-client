// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgwcvqWJDSnM4tXJ5GFYaXMDBGx0gG9-M",
  authDomain: "volunteer-hub-76b8d.firebaseapp.com",
  projectId: "volunteer-hub-76b8d",
  storageBucket: "volunteer-hub-76b8d.firebasestorage.app",
  messagingSenderId: "933578495002",
  appId: "1:933578495002:web:32c05fc884ba83fff02da3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;