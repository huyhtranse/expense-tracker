import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAqjCnzMGoHjgCD-FY74B6q5cA23uLcBdM",
  authDomain: "budgety-0120.firebaseapp.com",
  databaseURL: "https://budgety-0120.firebaseio.com",
  projectId: "budgety-0120",
  storageBucket: "budgety-0120.appspot.com",
  messagingSenderId: "511448473282",
  appId: "1:511448473282:web:dc4099f32a3b078ab1e55b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;