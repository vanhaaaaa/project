import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // Import Auth module

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhJsIqDEx_7kASDzVEjJa8KLxJ0Z1fJLo",
  authDomain: "aw-watch-aea48.firebaseapp.com",
  projectId: "aw-watch-aea48",
  storageBucket: "aw-watch-aea48.appspot.com",
  messagingSenderId: "437988976900",
  appId: "1:437988976900:web:9fbfdafd2d227f3b5f0851",
  measurementId: "G-9WCX6B1Y61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth and export
export const auth = getAuth(app);
export default app;