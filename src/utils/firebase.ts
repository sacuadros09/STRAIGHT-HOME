import { initializeApp } from "firebase/app";
import firebaseconfig from "./firebaseconfig";
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,setPersistence,browserSessionPersistence} from "firebase/auth";


const app = initializeApp(firebaseconfig);
export const auth = getAuth(app);

const Authregister = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<boolean> => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential.user);
      return true;
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      return false;
    };

    
    
  };
  const Authlogin = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  })  => {
    setPersistence(auth,browserSessionPersistence)
    .then(() => {
      return signInWithEmailAndPassword(auth,email,password);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage);
    })
  };

  export default {Authregister,Authlogin};