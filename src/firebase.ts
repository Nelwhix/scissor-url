import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { User } from "./entity";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app);
​​const db = getFirestore(app);

export const registerWithEmailAndPassword = async (formFields: User) => {
    try {
      const res = await createUserWithEmailAndPassword(auth, formFields.email, formFields.password);
      const user = res.user;

      await addDoc(collection(db, "users"), {
        uid: user.uid,
        user_name: formFields.username,
        authProvider: "local",
        email: formFields.email,
      });

      return user
    } catch (err) {
        if (err instanceof Error) {
            console.error(err);
            alert(err.message);
        }
    }
  };