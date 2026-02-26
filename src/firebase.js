import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAzZWOi3WXapIbkmoQ2Xhn5dUiUZtaP4QA",
  authDomain: "sunte-80a1e.firebaseapp.com",
  projectId: "sunte-80a1e",
  storageBucket: "sunte-80a1e.firebasestorage.app",
  messagingSenderId: "808550963276",
  appId: "1:808550963276:web:a4fec59d639fecace8fce9"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();